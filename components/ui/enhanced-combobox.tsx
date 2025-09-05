'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ComboboxProps {
  value?: string
  onValueChange?: (value: string) => void
  defaultValue?: string
  disabled?: boolean
  placeholder?: string
  className?: string
  children: React.ReactNode
}

export function Combobox({
  value,
  onValueChange,
  defaultValue,
  disabled = false,
  placeholder = "Select an option...",
  className,
  children
}: ComboboxProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(value || defaultValue || '')
  const [selectedLabel, setSelectedLabel] = React.useState('')
  const [searchValue, setSearchValue] = React.useState("")
  const [position, setPosition] = React.useState({ top: 0, left: 0 })
  const triggerRef = React.useRef<HTMLDivElement>(null)
  const comboboxRef = React.useRef<HTMLDivElement>(null)

  const updatePosition = React.useCallback(() => {
    if (!triggerRef.current || !comboboxRef.current) return

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const comboboxRect = comboboxRef.current.getBoundingClientRect()
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    let top = triggerRect.bottom + 4
    let left = triggerRect.left

    // Keep combobox within viewport
    if (left + comboboxRect.width > viewport.width) {
      left = viewport.width - comboboxRect.width - 8
    }
    if (top + comboboxRect.height > viewport.height) {
      top = triggerRect.top - comboboxRect.height - 4
    }

    setPosition({ top, left })
  }, [])

  const handleValueChange = (newValue: string, newLabel: string) => {
    setSelectedValue(newValue)
    setSelectedLabel(newLabel)
    onValueChange?.(newValue)
    setIsOpen(false)
  }

  const handleSearchChange = (value: string) => {
    setSearchValue(value)
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
        comboboxRef.current &&
        !comboboxRef.current.contains(event.target as Node) &&
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
    <ComboboxContext.Provider value={{ 
      selectedValue, 
      onValueChange: handleValueChange,
      isOpen,
      onOpenChange: setIsOpen,
      searchValue,
      onSearchChange: handleSearchChange
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
            ref={comboboxRef}
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
    </ComboboxContext.Provider>
  )
}

const ComboboxContext = React.createContext<{
  selectedValue: string
  onValueChange: (value: string, label: string) => void
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  searchValue: string
  onSearchChange: (value: string) => void
}>({
  selectedValue: '',
  onValueChange: () => {},
  isOpen: false,
  onOpenChange: () => {},
  searchValue: '',
  onSearchChange: () => {}
})

export interface ComboboxInputProps {
  placeholder?: string
  className?: string
}

export function ComboboxInput({
  placeholder = "Search...",
  className
}: ComboboxInputProps) {
  const { searchValue, onSearchChange } = React.useContext(ComboboxContext)

  return (
    <div className="flex items-center border-b px-3">
      <svg
        className="mr-2 h-4 w-4 shrink-0 opacity-50"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        className={cn(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      />
    </div>
  )
}

export interface ComboboxListProps {
  className?: string
  children: React.ReactNode
}

export function ComboboxList({
  className,
  children
}: ComboboxListProps) {
  return (
    <div className={cn("max-h-60 overflow-y-auto overflow-x-hidden", className)}>
      {children}
    </div>
  )
}

export interface ComboboxEmptyProps {
  className?: string
  children?: React.ReactNode
}

export function ComboboxEmpty({
  className,
  children = "No results found."
}: ComboboxEmptyProps) {
  const { searchValue } = React.useContext(ComboboxContext)

  if (!searchValue) return null

  return (
    <div className={cn("py-6 text-center text-sm", className)}>
      {children}
    </div>
  )
}

export interface ComboboxGroupProps {
  heading?: string
  className?: string
  children: React.ReactNode
}

export function ComboboxGroup({
  heading,
  className,
  children
}: ComboboxGroupProps) {
  return (
    <div className={cn("p-1", className)}>
      {heading && (
        <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
          {heading}
        </div>
      )}
      <div className="space-y-1">
        {children}
      </div>
    </div>
  )
}

export interface ComboboxItemProps {
  value: string
  onSelect?: (value: string) => void
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

export function ComboboxItem({
  value,
  onSelect,
  disabled = false,
  className,
  children
}: ComboboxItemProps) {
  const { selectedValue, onValueChange, onOpenChange } = React.useContext(ComboboxContext)
  const isSelected = selectedValue === value

  const handleSelect = () => {
    if (disabled) return
    onValueChange(value, children as string)
    onSelect?.(value)
    onOpenChange(false)
  }

  return (
    <button
      onClick={handleSelect}
      disabled={disabled}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        isSelected && "bg-accent text-accent-foreground",
        className
      )}
    >
      {children}
    </button>
  )
}

export interface ComboboxItemWithIconProps {
  value: string
  icon?: React.ReactNode
  onSelect?: (value: string) => void
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

export function ComboboxItemWithIcon({
  value,
  icon,
  onSelect,
  disabled = false,
  className,
  children
}: ComboboxItemWithIconProps) {
  const { selectedValue, onValueChange, onOpenChange } = React.useContext(ComboboxContext)
  const isSelected = selectedValue === value

  const handleSelect = () => {
    if (disabled) return
    onValueChange(value, children as string)
    onSelect?.(value)
    onOpenChange(false)
  }

  return (
    <button
      onClick={handleSelect}
      disabled={disabled}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        isSelected && "bg-accent text-accent-foreground",
        className
      )}
    >
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

export interface ComboboxSeparatorProps {
  className?: string
}

export function ComboboxSeparator({ className }: ComboboxSeparatorProps) {
  return (
    <div className={cn("my-1 h-px bg-muted", className)} />
  )
}

export interface ComboboxShortcutProps {
  className?: string
  children: React.ReactNode
}

export function ComboboxShortcut({
  className,
  children
}: ComboboxShortcutProps) {
  return (
    <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}>
      {children}
    </span>
  )
}

export interface ComboboxWithSearchProps {
  placeholder?: string
  onSearchChange?: (value: string) => void
  className?: string
  children: React.ReactNode
}

export function ComboboxWithSearch({
  placeholder = "Search...",
  onSearchChange,
  className,
  children
}: ComboboxWithSearchProps) {
  const [searchValue, setSearchValue] = React.useState("")

  const handleSearchChange = (value: string) => {
    setSearchValue(value)
    onSearchChange?.(value)
  }

  return (
    <div className={cn("space-y-2", className)}>
      <ComboboxInput
        placeholder={placeholder}
        value={searchValue}
        onChange={handleSearchChange}
      />
      {children}
    </div>
  )
}

export interface ComboboxWithActionsProps {
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

export function ComboboxWithActions({
  title,
  description,
  actions,
  className
}: ComboboxWithActionsProps) {
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
          <ComboboxItemWithIcon
            key={index}
            value={action.label}
            icon={action.icon}
            disabled={action.disabled}
            onSelect={action.onClick}
          >
            {action.label}
          </ComboboxItemWithIcon>
        ))}
      </div>
    </div>
  )
}