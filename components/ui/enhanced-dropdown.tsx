'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface DropdownProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
  children: React.ReactNode
  className?: string
}

export function Dropdown({
  open,
  onOpenChange,
  defaultOpen = false,
  children,
  className
}: DropdownProps) {
  const [internalOpen, setInternalOpen] = React.useState<boolean>(open || defaultOpen)
  const [position, setPosition] = React.useState({ top: 0, left: 0 })
  const triggerRef = React.useRef<HTMLDivElement>(null)
  const contentRef = React.useRef<HTMLDivElement>(null)

  const currentOpen = open !== undefined ? open : internalOpen

  const handleOpenChange = (newOpen: boolean) => {
    setInternalOpen(newOpen)
    onOpenChange?.(newOpen)
  }

  const updatePosition = React.useCallback(() => {
    if (!triggerRef.current || !contentRef.current) return

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const contentRect = contentRef.current.getBoundingClientRect()
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    let top = triggerRect.bottom + 4
    let left = triggerRect.left

    // Keep content within viewport
    if (left + contentRect.width > viewport.width) {
      left = viewport.width - contentRect.width - 8
    }
    if (top + contentRect.height > viewport.height) {
      top = triggerRect.top - contentRect.height - 4
    }

    setPosition({ top, left })
  }, [])

  React.useEffect(() => {
    if (currentOpen) {
      updatePosition()
      window.addEventListener('resize', updatePosition)
      window.addEventListener('scroll', updatePosition)
      return () => {
        window.removeEventListener('resize', updatePosition)
        window.removeEventListener('scroll', updatePosition)
      }
    }
  }, [currentOpen, updatePosition])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        handleOpenChange(false)
      }
    }

    if (currentOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [currentOpen])

  const contextValue = {
    open: currentOpen,
    onOpenChange: handleOpenChange,
    triggerRef,
    contentRef,
    position
  }

  return (
    <DropdownContext.Provider value={contextValue}>
      <div className={cn("relative", className)}>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

const DropdownContext = React.createContext<{
  open: boolean
  onOpenChange: (open: boolean) => void
  triggerRef: React.RefObject<HTMLDivElement>
  contentRef: React.RefObject<HTMLDivElement>
  position: { top: number; left: number }
}>({
  open: false,
  onOpenChange: () => {},
  triggerRef: { current: null },
  contentRef: { current: null },
  position: { top: 0, left: 0 }
})

export interface DropdownTriggerProps {
  asChild?: boolean
  className?: string
  children: React.ReactNode
}

export function DropdownTrigger({ asChild = false, className, children }: DropdownTriggerProps) {
  const { open, onOpenChange, triggerRef } = React.useContext(DropdownContext)

  const handleClick = () => {
    onOpenChange(!open)
  }

  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      ref: triggerRef,
      onClick: handleClick,
      className: cn(className, (children as React.ReactElement).props.className)
    })
  }

  return (
    <button
      ref={triggerRef}
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
    >
      {children}
    </button>
  )
}

export interface DropdownContentProps {
  className?: string
  children: React.ReactNode
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
  sideOffset?: number
  alignOffset?: number
}

export function DropdownContent({
  className,
  children,
  side = "bottom",
  align = "center",
  sideOffset = 4,
  alignOffset = 0
}: DropdownContentProps) {
  const { open, contentRef, position } = React.useContext(DropdownContext)

  if (!open) return null

  const getSideClasses = () => {
    switch (side) {
      case "top":
        return "animate-in slide-in-from-bottom-2"
      case "right":
        return "animate-in slide-in-from-left-2"
      case "bottom":
        return "animate-in slide-in-from-top-2"
      case "left":
        return "animate-in slide-in-from-right-2"
      default:
        return "animate-in slide-in-from-top-2"
    }
  }

  const getAlignClasses = () => {
    switch (align) {
      case "start":
        return "justify-start"
      case "end":
        return "justify-end"
      default:
        return "justify-center"
    }
  }

  return (
    <div
      ref={contentRef}
      className={cn(
        "absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        getSideClasses(),
        getAlignClasses(),
        className
      )}
      style={{
        top: position.top + sideOffset,
        left: position.left + alignOffset
      }}
    >
      {children}
    </div>
  )
}

export interface DropdownItemProps {
  className?: string
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  icon?: React.ReactNode
}

export function DropdownItem({
  className,
  children,
  onClick,
  disabled = false,
  icon
}: DropdownItemProps) {
  const { onOpenChange } = React.useContext(DropdownContext)

  const handleClick = () => {
    if (disabled) return
    onClick?.()
    onOpenChange(false)
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        disabled && "pointer-events-none opacity-50",
        className
      )}
    >
      {icon && (
        <div className="mr-2 flex-shrink-0">
          {icon}
        </div>
      )}
      {children}
    </button>
  )
}

export interface DropdownSeparatorProps {
  className?: string
}

export function DropdownSeparator({ className }: DropdownSeparatorProps) {
  return (
    <div className={cn("-mx-1 my-1 h-px bg-muted", className)} />
  )
}

export interface DropdownLabelProps {
  className?: string
  children: React.ReactNode
}

export function DropdownLabel({ className, children }: DropdownLabelProps) {
  return (
    <div className={cn("px-2 py-1.5 text-sm font-semibold", className)}>
      {children}
    </div>
  )
}

export interface DropdownGroupProps {
  className?: string
  children: React.ReactNode
}

export function DropdownGroup({ className, children }: DropdownGroupProps) {
  return (
    <div className={cn("space-y-1", className)}>
      {children}
    </div>
  )
}

export interface DropdownCheckboxItemProps {
  className?: string
  children: React.ReactNode
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
}

export function DropdownCheckboxItem({
  className,
  children,
  checked = false,
  onCheckedChange,
  disabled = false
}: DropdownCheckboxItemProps) {
  const { onOpenChange } = React.useContext(DropdownContext)

  const handleClick = () => {
    if (disabled) return
    onCheckedChange?.(!checked)
    onOpenChange(false)
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        disabled && "pointer-events-none opacity-50",
        className
      )}
    >
      <div className="mr-2 flex-shrink-0">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => {}}
          className="h-4 w-4 rounded border border-input"
        />
      </div>
      {children}
    </button>
  )
}

export interface DropdownRadioItemProps {
  className?: string
  children: React.ReactNode
  value: string
  checked?: boolean
  onValueChange?: (value: string) => void
  disabled?: boolean
}

export function DropdownRadioItem({
  className,
  children,
  value,
  checked = false,
  onValueChange,
  disabled = false
}: DropdownRadioItemProps) {
  const { onOpenChange } = React.useContext(DropdownContext)

  const handleClick = () => {
    if (disabled) return
    onValueChange?.(value)
    onOpenChange(false)
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        disabled && "pointer-events-none opacity-50",
        className
      )}
    >
      <div className="mr-2 flex-shrink-0">
        <input
          type="radio"
          checked={checked}
          onChange={() => {}}
          className="h-4 w-4 rounded-full border border-input"
        />
      </div>
      {children}
    </button>
  )
}

export interface DropdownWithSearchProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
  placeholder?: string
  searchValue?: string
  onSearchChange?: (value: string) => void
  items: Array<{
    id: string
    label: string
    description?: string
    icon?: React.ReactNode
    onClick?: () => void
  }>
  className?: string
}

export function DropdownWithSearch({
  open,
  onOpenChange,
  defaultOpen = false,
  placeholder = "Search...",
  searchValue,
  onSearchChange,
  items,
  className
}: DropdownWithSearchProps) {
  const [internalSearchValue, setInternalSearchValue] = React.useState<string>(searchValue || "")
  const [filteredItems, setFilteredItems] = React.useState(items)

  const currentSearchValue = searchValue !== undefined ? searchValue : internalSearchValue

  const handleSearchChange = (value: string) => {
    setInternalSearchValue(value)
    onSearchChange?.(value)
  }

  React.useEffect(() => {
    const filtered = items.filter(item =>
      item.label.toLowerCase().includes(currentSearchValue.toLowerCase()) ||
      item.description?.toLowerCase().includes(currentSearchValue.toLowerCase())
    )
    setFilteredItems(filtered)
  }, [items, currentSearchValue])

  return (
    <Dropdown open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen}>
      <DropdownContent className={cn("w-64", className)}>
        <div className="p-2">
          <input
            type="text"
            placeholder={placeholder}
            value={currentSearchValue}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
        </div>
        
        <div className="max-h-60 overflow-y-auto">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <DropdownItem
                key={item.id}
                onClick={item.onClick}
                icon={item.icon}
              >
                <div className="flex flex-col">
                  <div className="font-medium">{item.label}</div>
                  {item.description && (
                    <div className="text-xs text-muted-foreground">
                      {item.description}
                    </div>
                  )}
                </div>
              </DropdownItem>
            ))
          ) : (
            <div className="px-2 py-1.5 text-sm text-muted-foreground">
              No items found
            </div>
          )}
        </div>
      </DropdownContent>
    </Dropdown>
  )
}