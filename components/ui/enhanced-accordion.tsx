'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface AccordionProps {
  type?: 'single' | 'multiple'
  collapsible?: boolean
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  variant?: 'default' | 'bordered' | 'filled' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

export function Accordion({
  type = 'single',
  collapsible = true,
  value,
  onValueChange,
  variant = 'default',
  size = 'md',
  className,
  children
}: AccordionProps) {
  const [localValue, setLocalValue] = React.useState<string | string[]>(
    value || (type === 'single' ? '' : [])
  )

  const handleValueChange = (newValue: string | string[]) => {
    setLocalValue(newValue)
    onValueChange?.(newValue)
  }

  React.useEffect(() => {
    setLocalValue(value || (type === 'single' ? '' : []))
  }, [value, type])

  const contextValue = {
    type,
    collapsible,
    value: localValue,
    onValueChange: handleValueChange,
    variant,
    size
  }

  const variantClasses = {
    default: "space-y-2",
    bordered: "space-y-2 border border-border rounded-lg divide-y divide-border",
    filled: "space-y-2 bg-muted/50 rounded-lg p-2",
    outlined: "space-y-2 border border-border rounded-lg p-2"
  }

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={cn(variantClasses[variant], className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

const AccordionContext = React.createContext<{
  type: 'single' | 'multiple'
  collapsible: boolean
  value: string | string[]
  onValueChange: (value: string | string[]) => void
  variant: 'default' | 'bordered' | 'filled' | 'outlined'
  size: 'sm' | 'md' | 'lg'
}>({
  type: 'single',
  collapsible: true,
  value: '',
  onValueChange: () => {},
  variant: 'default',
  size: 'md'
})

export interface AccordionItemProps {
  value: string
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

export function AccordionItem({
  value,
  disabled = false,
  className,
  children
}: AccordionItemProps) {
  const { type, value: contextValue, onValueChange, variant } = React.useContext(AccordionContext)
  const isOpen = type === 'single' 
    ? contextValue === value
    : Array.isArray(contextValue) && contextValue.includes(value)

  const handleToggle = () => {
    if (disabled) return

    if (type === 'single') {
      onValueChange(isOpen ? '' : value)
    } else {
      const currentValues = Array.isArray(contextValue) ? contextValue : []
      const newValues = isOpen
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value]
      onValueChange(newValues)
    }
  }

  const variantClasses = {
    default: "border border-border rounded-lg",
    bordered: "border-0",
    filled: "border border-border/50 rounded-lg bg-background",
    outlined: "border border-border rounded-lg bg-background"
  }

  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-200",
        variantClasses[variant],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...child.props,
            value,
            isOpen,
            onToggle: handleToggle,
            disabled
          })
        }
        return child
      })}
    </div>
  )
}

export interface AccordionTriggerProps {
  className?: string
  children: React.ReactNode
}

export function AccordionTrigger({
  className,
  children
}: AccordionTriggerProps) {
  const { size, variant } = React.useContext(AccordionContext)
  const [isOpen, setIsOpen] = React.useState(false)
  const [disabled, setDisabled] = React.useState(false)

  const sizeClasses = {
    sm: "h-10 px-3 text-sm",
    md: "h-12 px-4 text-base",
    lg: "h-14 px-6 text-lg"
  }

  const variantClasses = {
    default: "hover:bg-muted/50",
    bordered: "hover:bg-muted/50",
    filled: "hover:bg-muted/50",
    outlined: "hover:bg-muted/50"
  }

  return (
    <button
      type="button"
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:no-underline [&[data-state=open]>svg]:rotate-180",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      onClick={() => setIsOpen(!isOpen)}
      disabled={disabled}
      data-state={isOpen ? "open" : "closed"}
    >
      {children}
      <svg
        className="h-4 w-4 shrink-0 transition-transform duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
}

export interface AccordionContentProps {
  className?: string
  children: React.ReactNode
}

export function AccordionContent({
  className,
  children
}: AccordionContentProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div
      className={cn(
        "overflow-hidden text-sm transition-all",
        isOpen ? "animate-accordion-down" : "animate-accordion-up"
      )}
      data-state={isOpen ? "open" : "closed"}
    >
      <div className={cn("pb-4 pt-0", className)}>
        {children}
      </div>
    </div>
  )
}

export interface AccordionHeaderProps {
  className?: string
  children: React.ReactNode
}

export function AccordionHeader({
  className,
  children
}: AccordionHeaderProps) {
  return (
    <div className={cn("flex", className)}>
      {children}
    </div>
  )
}

export interface AccordionGroupProps {
  title: string
  description?: string
  className?: string
  children: React.ReactNode
}

export function AccordionGroup({
  title,
  description,
  className,
  children
}: AccordionGroupProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div>
        <h3 className="text-lg font-semibold text-foreground">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  )
}

export interface AccordionSeparatorProps {
  className?: string
}

export function AccordionSeparator({ className }: AccordionSeparatorProps) {
  return (
    <div className={cn("h-px bg-border", className)} />
  )
}

export interface AccordionIconProps {
  icon?: React.ReactNode
  openIcon?: React.ReactNode
  className?: string
}

export function AccordionIcon({
  icon,
  openIcon,
  className
}: AccordionIconProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  const defaultIcon = (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )

  const defaultOpenIcon = (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
  )

  return (
    <div className={cn("transition-transform duration-200", className)}>
      {isOpen ? (openIcon || defaultOpenIcon) : (icon || defaultIcon)}
    </div>
  )
}

export interface AccordionBadgeProps {
  count?: number
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function AccordionBadge({
  count = 0,
  variant = 'default',
  size = 'sm',
  className
}: AccordionBadgeProps) {
  const sizeClasses = {
    sm: "h-5 w-5 text-xs",
    md: "h-6 w-6 text-sm",
    lg: "h-7 w-7 text-base"
  }

  const variantClasses = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    destructive: "bg-destructive text-destructive-foreground",
    outline: "border border-border text-foreground"
  }

  if (count === 0) return null

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {count > 99 ? '99+' : count}
    </span>
  )
}