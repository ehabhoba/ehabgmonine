'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface CommandProps {
  className?: string
  children: React.ReactNode
}

export function Command({
  className,
  children
}: CommandProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState("")
  const [selectedValue, setSelectedValue] = React.useState("")

  const contextValue = {
    isOpen,
    onOpenChange: setIsOpen,
    searchValue,
    onSearchChange: setSearchValue,
    selectedValue,
    onValueChange: setSelectedValue
  }

  return (
    <CommandContext.Provider value={contextValue}>
      <div className={cn("relative", className)}>
        {children}
      </div>
    </CommandContext.Provider>
  )
}

const CommandContext = React.createContext<{
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  searchValue: string
  onSearchChange: (value: string) => void
  selectedValue: string
  onValueChange: (value: string) => void
}>({
  isOpen: false,
  onOpenChange: () => {},
  searchValue: '',
  onSearchChange: () => {},
  selectedValue: '',
  onValueChange: () => {}
})

export interface CommandInputProps {
  placeholder?: string
  className?: string
}

export function CommandInput({
  placeholder = "Type a command or search...",
  className
}: CommandInputProps) {
  const { searchValue, onSearchChange } = React.useContext(CommandContext)

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

export interface CommandListProps {
  className?: string
  children: React.ReactNode
}

export function CommandList({
  className,
  children
}: CommandListProps) {
  return (
    <div className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}>
      {children}
    </div>
  )
}

export interface CommandEmptyProps {
  className?: string
  children?: React.ReactNode
}

export function CommandEmpty({
  className,
  children = "No results found."
}: CommandEmptyProps) {
  const { searchValue } = React.useContext(CommandContext)

  if (!searchValue) return null

  return (
    <div className={cn("py-6 text-center text-sm", className)}>
      {children}
    </div>
  )
}

export interface CommandGroupProps {
  heading?: string
  className?: string
  children: React.ReactNode
}

export function CommandGroup({
  heading,
  className,
  children
}: CommandGroupProps) {
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

export interface CommandItemProps {
  value: string
  onSelect?: (value: string) => void
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

export function CommandItem({
  value,
  onSelect,
  disabled = false,
  className,
  children
}: CommandItemProps) {
  const { selectedValue, onValueChange, onOpenChange } = React.useContext(CommandContext)
  const isSelected = selectedValue === value

  const handleSelect = () => {
    if (disabled) return
    onValueChange(value)
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

export interface CommandItemWithIconProps {
  value: string
  icon?: React.ReactNode
  onSelect?: (value: string) => void
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

export function CommandItemWithIcon({
  value,
  icon,
  onSelect,
  disabled = false,
  className,
  children
}: CommandItemWithIconProps) {
  const { selectedValue, onValueChange, onOpenChange } = React.useContext(CommandContext)
  const isSelected = selectedValue === value

  const handleSelect = () => {
    if (disabled) return
    onValueChange(value)
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

export interface CommandSeparatorProps {
  className?: string
}

export function CommandSeparator({ className }: CommandSeparatorProps) {
  return (
    <div className={cn("my-1 h-px bg-muted", className)} />
  )
}

export interface CommandShortcutProps {
  className?: string
  children: React.ReactNode
}

export function CommandShortcut({
  className,
  children
}: CommandShortcutProps) {
  return (
    <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}>
      {children}
    </span>
  )
}

export interface CommandDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  className?: string
  children: React.ReactNode
}

export function CommandDialog({
  open,
  onOpenChange,
  className,
  children
}: CommandDialogProps) {
  const [isOpen, setIsOpen] = React.useState(open || false)

  const handleOpenChange = (newOpen: boolean) => {
    setIsOpen(newOpen)
    onOpenChange?.(newOpen)
  }

  React.useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open)
    }
  }, [open])

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        handleOpenChange(!isOpen)
      }
      if (event.key === 'Escape') {
        handleOpenChange(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
      <div className={cn("relative z-50 w-full max-w-lg", className)}>
        <Command>
          {children}
        </Command>
      </div>
    </div>
  )
}

export interface CommandTriggerProps {
  className?: string
  children: React.ReactNode
}

export function CommandTrigger({
  className,
  children
}: CommandTriggerProps) {
  const { onOpenChange } = React.useContext(CommandContext)

  return (
    <button
      onClick={() => onOpenChange(true)}
      className={cn("inline-block", className)}
    >
      {children}
    </button>
  )
}

export interface CommandWithSearchProps {
  placeholder?: string
  onSearchChange?: (value: string) => void
  className?: string
  children: React.ReactNode
}

export function CommandWithSearch({
  placeholder = "Type a command or search...",
  onSearchChange,
  className,
  children
}: CommandWithSearchProps) {
  const [searchValue, setSearchValue] = React.useState("")

  const handleSearchChange = (value: string) => {
    setSearchValue(value)
    onSearchChange?.(value)
  }

  return (
    <div className={cn("space-y-2", className)}>
      <CommandInput
        placeholder={placeholder}
        value={searchValue}
        onChange={handleSearchChange}
      />
      {children}
    </div>
  )
}

export interface CommandWithActionsProps {
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

export function CommandWithActions({
  title,
  description,
  actions,
  className
}: CommandWithActionsProps) {
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
          <CommandItemWithIcon
            key={index}
            value={action.label}
            icon={action.icon}
            disabled={action.disabled}
            onSelect={action.onClick}
          >
            {action.label}
          </CommandItemWithIcon>
        ))}
      </div>
    </div>
  )
}