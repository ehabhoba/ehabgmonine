'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface PopoverProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
  children: React.ReactNode
  className?: string
}

export function Popover({
  open,
  onOpenChange,
  defaultOpen = false,
  children,
  className
}: PopoverProps) {
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
    <PopoverContext.Provider value={contextValue}>
      <div className={cn("relative", className)}>
        {children}
      </div>
    </PopoverContext.Provider>
  )
}

const PopoverContext = React.createContext<{
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

export interface PopoverTriggerProps {
  asChild?: boolean
  className?: string
  children: React.ReactNode
}

export function PopoverTrigger({ asChild = false, className, children }: PopoverTriggerProps) {
  const { open, onOpenChange, triggerRef } = React.useContext(PopoverContext)

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

export interface PopoverContentProps {
  className?: string
  children: React.ReactNode
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
  sideOffset?: number
  alignOffset?: number
}

export function PopoverContent({
  className,
  children,
  side = "bottom",
  align = "center",
  sideOffset = 4,
  alignOffset = 0
}: PopoverContentProps) {
  const { open, contentRef, position } = React.useContext(PopoverContext)

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
        "absolute z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md",
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

export interface PopoverHeaderProps {
  className?: string
  children: React.ReactNode
}

export function PopoverHeader({ className, children }: PopoverHeaderProps) {
  return (
    <div className={cn("flex flex-col space-y-1.5 pb-2", className)}>
      {children}
    </div>
  )
}

export interface PopoverTitleProps {
  className?: string
  children: React.ReactNode
}

export function PopoverTitle({ className, children }: PopoverTitleProps) {
  return (
    <h4 className={cn("font-semibold leading-none tracking-tight", className)}>
      {children}
    </h4>
  )
}

export interface PopoverDescriptionProps {
  className?: string
  children: React.ReactNode
}

export function PopoverDescription({ className, children }: PopoverDescriptionProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  )
}

export interface PopoverBodyProps {
  className?: string
  children: React.ReactNode
}

export function PopoverBody({ className, children }: PopoverBodyProps) {
  return (
    <div className={cn("py-2", className)}>
      {children}
    </div>
  )
}

export interface PopoverFooterProps {
  className?: string
  children: React.ReactNode
}

export function PopoverFooter({ className, children }: PopoverFooterProps) {
  return (
    <div className={cn("flex items-center justify-end space-x-2 pt-2", className)}>
      {children}
    </div>
  )
}

export interface PopoverCloseProps {
  className?: string
  children: React.ReactNode
}

export function PopoverClose({ className, children }: PopoverCloseProps) {
  const { onOpenChange } = React.useContext(PopoverContext)

  return (
    <button
      onClick={() => onOpenChange(false)}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
    >
      {children}
    </button>
  )
}

export interface PopoverWithFormProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
  title: string
  description?: string
  onSubmit?: (data: FormData) => void
  onCancel?: () => void
  submitLabel?: string
  cancelLabel?: string
  className?: string
  children: React.ReactNode
}

export function PopoverWithForm({
  open,
  onOpenChange,
  defaultOpen = false,
  title,
  description,
  onSubmit,
  onCancel,
  submitLabel = "Submit",
  cancelLabel = "Cancel",
  className,
  children
}: PopoverWithFormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    onSubmit?.(formData)
    onOpenChange?.(false)
  }

  const handleCancel = () => {
    onCancel?.()
    onOpenChange?.(false)
  }

  return (
    <Popover open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen}>
      <PopoverContent className={cn("w-80", className)}>
        <PopoverHeader>
          <PopoverTitle>{title}</PopoverTitle>
          {description && (
            <PopoverDescription>{description}</PopoverDescription>
          )}
        </PopoverHeader>
        
        <form onSubmit={handleSubmit}>
          <PopoverBody>
            {children}
          </PopoverBody>
          
          <PopoverFooter>
            <PopoverClose onClick={handleCancel}>
              {cancelLabel}
            </PopoverClose>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              {submitLabel}
            </button>
          </PopoverFooter>
        </form>
      </PopoverContent>
    </Popover>
  )
}

export interface PopoverWithListProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
  title: string
  description?: string
  items: Array<{
    id: string
    label: string
    description?: string
    icon?: React.ReactNode
    onClick?: () => void
  }>
  className?: string
}

export function PopoverWithList({
  open,
  onOpenChange,
  defaultOpen = false,
  title,
  description,
  items,
  className
}: PopoverWithListProps) {
  const handleItemClick = (item: typeof items[0]) => {
    item.onClick?.()
    onOpenChange?.(false)
  }

  return (
    <Popover open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen}>
      <PopoverContent className={cn("w-64", className)}>
        <PopoverHeader>
          <PopoverTitle>{title}</PopoverTitle>
          {description && (
            <PopoverDescription>{description}</PopoverDescription>
          )}
        </PopoverHeader>
        
        <PopoverBody>
          <div className="space-y-1">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className="flex w-full items-center space-x-3 rounded-md px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                {item.icon && (
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                )}
                <div className="flex-1">
                  <div className="font-medium">{item.label}</div>
                  {item.description && (
                    <div className="text-xs text-muted-foreground">
                      {item.description}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}