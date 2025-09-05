'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface SelectProps {
  value?: string
  onValueChange?: (value: string) => void
  defaultValue?: string
  disabled?: boolean
  placeholder?: string
  className?: string
  children: React.ReactNode
}

export function Select({
  value,
  onValueChange,
  defaultValue,
  disabled = false,
  placeholder = "Select an option...",
  className,
  children
}: SelectProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(value || defaultValue || '')
  const [selectedLabel, setSelectedLabel] = React.useState('')
  const [position, setPosition] = React.useState({ top: 0, left: 0 })
  const triggerRef = React.useRef<HTMLDivElement>(null)
  const selectRef = React.useRef<HTMLDivElement>(null)

  const updatePosition = React.useCallback(() => {
    if (!triggerRef.current || !selectRef.current) return

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const selectRect = selectRef.current.getBoundingClientRect()
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    let top = triggerRect.bottom + 4
    let left = triggerRect.left

    // Keep select within viewport
    if (left + selectRect.width > viewport.width) {
      left = viewport.width - selectRect.width - 8
    }
    if (top + selectRect.height > viewport.height) {
      top = triggerRect.top - selectRect.height - 4
    }

    setPosition({ top, left })
  }, [])

  const handleValueChange = (newValue: string, newLabel: string) => {
    setSelectedValue(newValue)
    setSelectedLabel(newLabel)
    onValueChange?.(newValue)
    setIsOpen(false)
  }

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

  React.useEffect(() => {
    if (isOpen) {
      updatePosition()
      window.addEventListener('resize', updatePosition)
      window.addEventListener('scroll', updatePosition)
      return () => {
        window.removeEventListener('resize', updatePosition)
        window.removeEventListener('scroll', updatePosition)
      }
    }
  }, [isOpen, updatePosition])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <SelectContext.Provider value={{ 
      selectedValue, 
      onValueChange: handleValueChange,
      isOpen,
      onOpenChange: setIsOpen
    }}>
      <div className={cn("relative", className)}>
        <div
          ref={triggerRef}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          className={cn(
            "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            isOpen && "ring-2 ring-ring ring-offset-2"
          )}
        >
          <span className={cn(
            selectedValue ? "text-foreground" : "text-muted-foreground"
          )}>
            {selectedLabel || placeholder}
          </span>
          <svg
            className={cn(
              "h-4 w-4 opacity-50 transition-transform",
              isOpen && "rotate-180"
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        {isOpen && (
          <div
            ref={selectRef}
            className={cn(
              "absolute z-50 max-h-60 min-w-full overflow-auto rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
              className
            )}
            style={{
              top: position.top,
              left: position.left
            }}
          >
            {children}
          </div>
        )}
      </div>
    </SelectContext.Provider>
  )
}

const SelectContext = React.createContext<{
  selectedValue: string
  onValueChange: (value: string, label: string) => void
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}>({
  selectedValue: '',
  onValueChange: () => {},
  isOpen: false,
  onOpenChange: () => {}
})

export interface SelectContentProps {
  className?: string
  children: React.ReactNode
}

export function SelectContent({
  className,
  children
}: SelectContentProps) {
  return (
    <div
      className={cn(
        "z-50 max-h-60 min-w-full overflow-auto rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
        className
      )}
    >
      {children}
    </div>
  )
}

export interface SelectItemProps {
  value: string
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

export function SelectItem({
  value,
  disabled = false,
  className,
  children
}: SelectItemProps) {
  const { selectedValue, onValueChange } = React.useContext(SelectContext)
  const isSelected = selectedValue === value

  const handleClick = () => {
    if (disabled) return
    onValueChange(value, children as string)
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        isSelected && "bg-accent text-accent-foreground",
        className
      )}
    >
      {isSelected && (
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      )}
      {children}
    </button>
  )
}

export interface SelectItemWithIconProps {
  value: string
  icon?: React.ReactNode
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

export function SelectItemWithIcon({
  value,
  icon,
  disabled = false,
  className,
  children
}: SelectItemWithIconProps) {
  const { selectedValue, onValueChange } = React.useContext(SelectContext)
  const isSelected = selectedValue === value

  const handleClick = () => {
    if (disabled) return
    onValueChange(value, children as string)
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        isSelected && "bg-accent text-accent-foreground",
        className
      )}
    >
      {isSelected && (
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      )}
      
      <div className="flex items-center space-x-2">
        {icon && (
          <span className="text-muted-foreground">
            {icon}
          </span>
        )}
        <span>{children}</span>
      </div>
    </button>
  )
}

export interface SelectGroupProps {
  label: string
  className?: string
  children: React.ReactNode
}

export function SelectGroup({
  label,
  className,
  children
}: SelectGroupProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
        {label}
      </div>
      {children}
    </div>
  )
}

export interface SelectLabelProps {
  className?: string
  children: React.ReactNode
}

export function SelectLabel({
  className,
  children
}: SelectLabelProps) {
  return (
    <div className={cn("px-2 py-1.5 text-sm font-semibold", className)}>
      {children}
    </div>
  )
}

export interface SelectSeparatorProps {
  className?: string
}

export function SelectSeparator({ className }: SelectSeparatorProps) {
  return (
    <div className={cn("my-1 h-px bg-muted", className)} />
  )
}

export interface SelectTriggerProps {
  className?: string
  children: React.ReactNode
}

export function SelectTrigger({
  className,
  children
}: SelectTriggerProps) {
  const { isOpen, onOpenChange } = React.useContext(SelectContext)

  return (
    <div
      onClick={() => onOpenChange(!isOpen)}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        isOpen && "ring-2 ring-ring ring-offset-2",
        className
      )}
    >
      {children}
    </div>
  )
}

export interface SelectValueProps {
  placeholder?: string
  className?: string
}

export function SelectValue({
  placeholder = "Select an option...",
  className
}: SelectValueProps) {
  const { selectedValue, selectedLabel } = React.useContext(SelectContext)

  return (
    <span className={cn(
      selectedValue ? "text-foreground" : "text-muted-foreground",
      className
    )}>
      {selectedLabel || placeholder}
    </span>
  )
}

export interface SelectWithSearchProps {
  placeholder?: string
  onSearchChange?: (value: string) => void
  className?: string
  children: React.ReactNode
}

export function SelectWithSearch({
  placeholder = "Search...",
  onSearchChange,
  className,
  children
}: SelectWithSearchProps) {
  const [searchValue, setSearchValue] = React.useState("")

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
    onSearchChange?.(value)
  }

  return (
    <div className={cn("space-y-2", className)}>
      <div className="px-2 py-1">
        <input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleSearchChange}
          className="w-full px-2 py-1 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        />
      </div>
      {children}
    </div>
  )
}

export interface SelectWithActionsProps {
  title: string
  description?: string
  actions: Array<{
    label: string
    icon?: React.ReactNode
    onClick: () => void
    disabled?: boolean
  }>
  className?: string
}

export function SelectWithActions({
  title,
  description,
  actions,
  className
}: SelectWithActionsProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="px-2 py-1.5">
        <h4 className="text-sm font-semibold">{title}</h4>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      
      <div className="space-y-1">
        {actions.map((action, index) => (
          <SelectItemWithIcon
            key={index}
            value={action.label}
            icon={action.icon}
            disabled={action.disabled}
            onClick={action.onClick}
          >
            {action.label}
          </SelectItemWithIcon>
        ))}
      </div>
    </div>
  )
}