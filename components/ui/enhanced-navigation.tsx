'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface NavigationProps {
  orientation?: 'horizontal' | 'vertical'
  variant?: 'default' | 'pills' | 'tabs' | 'underline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

export function Navigation({
  orientation = 'horizontal',
  variant = 'default',
  size = 'md',
  className,
  children
}: NavigationProps) {
  const [activeItem, setActiveItem] = React.useState<string>('')

  const contextValue = {
    activeItem,
    onActiveChange: setActiveItem,
    orientation,
    variant,
    size
  }

  const orientationClasses = {
    horizontal: "flex-row",
    vertical: "flex-col"
  }

  const variantClasses = {
    default: "space-y-1",
    pills: "space-y-1",
    tabs: "border-b border-border",
    underline: "border-b border-border"
  }

  return (
    <NavigationContext.Provider value={contextValue}>
      <nav
        className={cn(
          "flex",
          orientationClasses[orientation],
          variantClasses[variant],
          className
        )}
      >
        {children}
      </nav>
    </NavigationContext.Provider>
  )
}

const NavigationContext = React.createContext<{
  activeItem: string
  onActiveChange: (item: string) => void
  orientation: 'horizontal' | 'vertical'
  variant: 'default' | 'pills' | 'tabs' | 'underline'
  size: 'sm' | 'md' | 'lg'
}>({
  activeItem: '',
  onActiveChange: () => {},
  orientation: 'horizontal',
  variant: 'default',
  size: 'md'
})

export interface NavigationItemProps {
  value: string
  href?: string
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

export function NavigationItem({
  value,
  href,
  disabled = false,
  className,
  children
}: NavigationItemProps) {
  const { activeItem, onActiveChange, orientation, variant, size } = React.useContext(NavigationContext)
  const isActive = activeItem === value

  const sizeClasses = {
    sm: "h-8 px-2 text-sm",
    md: "h-10 px-3 text-base",
    lg: "h-12 px-4 text-lg"
  }

  const variantClasses = {
    default: "hover:bg-accent hover:text-accent-foreground",
    pills: "hover:bg-accent hover:text-accent-foreground rounded-md",
    tabs: "hover:bg-accent hover:text-accent-foreground border-b-2 border-transparent",
    underline: "hover:bg-accent hover:text-accent-foreground border-b-2 border-transparent"
  }

  const activeClasses = {
    default: "bg-accent text-accent-foreground",
    pills: "bg-accent text-accent-foreground rounded-md",
    tabs: "border-b-2 border-primary text-primary",
    underline: "border-b-2 border-primary text-primary"
  }

  const orientationClasses = {
    horizontal: "flex-row",
    vertical: "flex-col"
  }

  const handleClick = () => {
    if (disabled) return
    onActiveChange(value)
  }

  if (href) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={cn(
          "flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          sizeClasses[size],
          variantClasses[variant],
          isActive && activeClasses[variant],
          orientationClasses[orientation],
          className
        )}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        "flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        sizeClasses[size],
        variantClasses[variant],
        isActive && activeClasses[variant],
        orientationClasses[orientation],
        className
      )}
    >
      {children}
    </button>
  )
}

export interface NavigationItemWithIconProps {
  value: string
  icon?: React.ReactNode
  href?: string
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

export function NavigationItemWithIcon({
  value,
  icon,
  href,
  disabled = false,
  className,
  children
}: NavigationItemWithIconProps) {
  const { activeItem, onActiveChange, orientation, variant, size } = React.useContext(NavigationContext)
  const isActive = activeItem === value

  const sizeClasses = {
    sm: "h-8 px-2 text-sm",
    md: "h-10 px-3 text-base",
    lg: "h-12 px-4 text-lg"
  }

  const variantClasses = {
    default: "hover:bg-accent hover:text-accent-foreground",
    pills: "hover:bg-accent hover:text-accent-foreground rounded-md",
    tabs: "hover:bg-accent hover:text-accent-foreground border-b-2 border-transparent",
    underline: "hover:bg-accent hover:text-accent-foreground border-b-2 border-transparent"
  }

  const activeClasses = {
    default: "bg-accent text-accent-foreground",
    pills: "bg-accent text-accent-foreground rounded-md",
    tabs: "border-b-2 border-primary text-primary",
    underline: "border-b-2 border-primary text-primary"
  }

  const orientationClasses = {
    horizontal: "flex-row",
    vertical: "flex-col"
  }

  const handleClick = () => {
    if (disabled) return
    onActiveChange(value)
  }

  if (href) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={cn(
          "flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          sizeClasses[size],
          variantClasses[variant],
          isActive && activeClasses[variant],
          orientationClasses[orientation],
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
      </a>
    )
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        "flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        sizeClasses[size],
        variantClasses[variant],
        isActive && activeClasses[variant],
        orientationClasses[orientation],
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

export interface NavigationGroupProps {
  label: string
  className?: string
  children: React.ReactNode
}

export function NavigationGroup({
  label,
  className,
  children
}: NavigationGroupProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
        {label}
      </div>
      {children}
    </div>
  )
}

export interface NavigationSeparatorProps {
  className?: string
}

export function NavigationSeparator({ className }: NavigationSeparatorProps) {
  return (
    <div className={cn("my-1 h-px bg-muted", className)} />
  )
}

export interface NavigationBrandProps {
  href?: string
  className?: string
  children: React.ReactNode
}

export function NavigationBrand({
  href,
  className,
  children
}: NavigationBrandProps) {
  if (href) {
    return (
      <a
        href={href}
        className={cn("flex items-center space-x-2 font-bold text-lg", className)}
      >
        {children}
      </a>
    )
  }

  return (
    <div className={cn("flex items-center space-x-2 font-bold text-lg", className)}>
      {children}
    </div>
  )
}

export interface NavigationMenuProps {
  className?: string
  children: React.ReactNode
}

export function NavigationMenu({
  className,
  children
}: NavigationMenuProps) {
  return (
    <div className={cn("flex items-center space-x-1", className)}>
      {children}
    </div>
  )
}

export interface NavigationToggleProps {
  className?: string
  children: React.ReactNode
}

export function NavigationToggle({
  className,
  children
}: NavigationToggleProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={cn("inline-block", className)}
    >
      {children}
    </button>
  )
}

export interface NavigationCollapseProps {
  isOpen?: boolean
  className?: string
  children: React.ReactNode
}

export function NavigationCollapse({
  isOpen = false,
  className,
  children
}: NavigationCollapseProps) {
  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-200",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        className
      )}
    >
      {children}
    </div>
  )
}

export interface NavigationWithSearchProps {
  placeholder?: string
  onSearchChange?: (value: string) => void
  className?: string
  children: React.ReactNode
}

export function NavigationWithSearch({
  placeholder = "Search...",
  onSearchChange,
  className,
  children
}: NavigationWithSearchProps) {
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

export interface NavigationWithActionsProps {
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

export function NavigationWithActions({
  title,
  description,
  actions,
  className
}: NavigationWithActionsProps) {
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
          <NavigationItemWithIcon
            key={index}
            value={action.label}
            icon={action.icon}
            disabled={action.disabled}
            onClick={action.onClick}
          >
            {action.label}
          </NavigationItemWithIcon>
        ))}
      </div>
    </div>
  )
}