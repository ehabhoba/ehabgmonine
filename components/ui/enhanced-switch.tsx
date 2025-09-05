'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface SwitchProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  defaultChecked?: boolean
  disabled?: boolean
  size?: "sm" | "md" | "lg"
  variant?: "default" | "success" | "warning" | "danger"
  showLabel?: boolean
  label?: string
  description?: string
  className?: string
  children?: React.ReactNode
}

export function Switch({
  checked,
  onCheckedChange,
  defaultChecked = false,
  disabled = false,
  size = "md",
  variant = "default",
  showLabel = false,
  label = "Switch",
  description,
  className,
  children
}: SwitchProps) {
  const [internalChecked, setInternalChecked] = React.useState<boolean>(checked || defaultChecked)
  const [isPressed, setIsPressed] = React.useState(false)

  const currentChecked = checked !== undefined ? checked : internalChecked

  const handleCheckedChange = (newChecked: boolean) => {
    if (disabled) return
    setInternalChecked(newChecked)
    onCheckedChange?.(newChecked)
  }

  const handleClick = () => {
    if (disabled) return
    handleCheckedChange(!currentChecked)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault()
      handleCheckedChange(!currentChecked)
    }
  }

  const handleMouseDown = () => {
    if (disabled) return
    setIsPressed(true)
  }

  const handleMouseUp = () => {
    setIsPressed(false)
  }

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return {
          track: "h-4 w-7",
          thumb: "h-3 w-3",
          translate: "translate-x-3"
        }
      case "lg":
        return {
          track: "h-8 w-14",
          thumb: "h-7 w-7",
          translate: "translate-x-6"
        }
      default:
        return {
          track: "h-6 w-11",
          thumb: "h-5 w-5",
          translate: "translate-x-5"
        }
    }
  }

  const getVariantClasses = () => {
    switch (variant) {
      case "success":
        return {
          track: currentChecked ? "bg-green-500" : "bg-muted",
          thumb: "bg-white"
        }
      case "warning":
        return {
          track: currentChecked ? "bg-yellow-500" : "bg-muted",
          thumb: "bg-white"
        }
      case "danger":
        return {
          track: currentChecked ? "bg-red-500" : "bg-muted",
          thumb: "bg-white"
        }
      default:
        return {
          track: currentChecked ? "bg-primary" : "bg-muted",
          thumb: "bg-white"
        }
    }
  }

  const sizeClasses = getSizeClasses()
  const variantClasses = getVariantClasses()

  const contextValue = {
    checked: currentChecked,
    onCheckedChange: handleCheckedChange,
    disabled,
    size,
    variant
  }

  return (
    <SwitchContext.Provider value={contextValue}>
      <div className={cn("flex items-center space-x-2", className)}>
        <button
          type="button"
          role="switch"
          aria-checked={currentChecked}
          aria-disabled={disabled}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          disabled={disabled}
          className={cn(
            "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
            sizeClasses.track,
            variantClasses.track,
            isPressed && "scale-95"
          )}
        >
          <span
            className={cn(
              "pointer-events-none block rounded-full shadow-lg ring-0 transition-transform",
              sizeClasses.thumb,
              variantClasses.thumb,
              currentChecked ? sizeClasses.translate : "translate-x-0"
            )}
          />
        </button>
        
        {showLabel && (
          <div className="flex flex-col">
            <label className="text-sm font-medium text-foreground">
              {label}
            </label>
            {description && (
              <span className="text-xs text-muted-foreground">
                {description}
              </span>
            )}
          </div>
        )}
        
        {children}
      </div>
    </SwitchContext.Provider>
  )
}

const SwitchContext = React.createContext<{
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  disabled: boolean
  size: "sm" | "md" | "lg"
  variant: "default" | "success" | "warning" | "danger"
}>({
  checked: false,
  onCheckedChange: () => {},
  disabled: false,
  size: "md",
  variant: "default"
})

export interface SwitchLabelProps {
  className?: string
  children: React.ReactNode
}

export function SwitchLabel({ className, children }: SwitchLabelProps) {
  const { disabled } = React.useContext(SwitchContext)

  return (
    <label
      className={cn(
        "text-sm font-medium text-foreground cursor-pointer",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
    >
      {children}
    </label>
  )
}

export interface SwitchDescriptionProps {
  className?: string
  children: React.ReactNode
}

export function SwitchDescription({ className, children }: SwitchDescriptionProps) {
  const { disabled } = React.useContext(SwitchContext)

  return (
    <span
      className={cn(
        "text-xs text-muted-foreground",
        disabled && "opacity-50",
        className
      )}
    >
      {children}
    </span>
  )
}

export interface SwitchGroupProps {
  className?: string
  children: React.ReactNode
}

export function SwitchGroup({ className, children }: SwitchGroupProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {children}
    </div>
  )
}

export interface SwitchItemProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  defaultChecked?: boolean
  disabled?: boolean
  size?: "sm" | "md" | "lg"
  variant?: "default" | "success" | "warning" | "danger"
  label: string
  description?: string
  className?: string
}

export function SwitchItem({
  checked,
  onCheckedChange,
  defaultChecked = false,
  disabled = false,
  size = "md",
  variant = "default",
  label,
  description,
  className
}: SwitchItemProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <div className="flex flex-col space-y-1">
        <SwitchLabel>{label}</SwitchLabel>
        {description && (
          <SwitchDescription>{description}</SwitchDescription>
        )}
      </div>
      
      <Switch
        checked={checked}
        onCheckedChange={onCheckedChange}
        defaultChecked={defaultChecked}
        disabled={disabled}
        size={size}
        variant={variant}
      />
    </div>
  )
}

export interface SwitchWithIconProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  defaultChecked?: boolean
  disabled?: boolean
  size?: "sm" | "md" | "lg"
  variant?: "default" | "success" | "warning" | "danger"
  showLabel?: boolean
  label?: string
  description?: string
  className?: string
  checkedIcon?: React.ReactNode
  uncheckedIcon?: React.ReactNode
}

export function SwitchWithIcon({
  checked,
  onCheckedChange,
  defaultChecked = false,
  disabled = false,
  size = "md",
  variant = "default",
  showLabel = false,
  label = "Switch",
  description,
  className,
  checkedIcon,
  uncheckedIcon
}: SwitchWithIconProps) {
  const [internalChecked, setInternalChecked] = React.useState<boolean>(checked || defaultChecked)
  const [isPressed, setIsPressed] = React.useState(false)

  const currentChecked = checked !== undefined ? checked : internalChecked

  const handleCheckedChange = (newChecked: boolean) => {
    if (disabled) return
    setInternalChecked(newChecked)
    onCheckedChange?.(newChecked)
  }

  const handleClick = () => {
    if (disabled) return
    handleCheckedChange(!currentChecked)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault()
      handleCheckedChange(!currentChecked)
    }
  }

  const handleMouseDown = () => {
    if (disabled) return
    setIsPressed(true)
  }

  const handleMouseUp = () => {
    setIsPressed(false)
  }

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return {
          track: "h-4 w-7",
          thumb: "h-3 w-3",
          translate: "translate-x-3",
          icon: "h-2 w-2"
        }
      case "lg":
        return {
          track: "h-8 w-14",
          thumb: "h-7 w-7",
          translate: "translate-x-6",
          icon: "h-4 w-4"
        }
      default:
        return {
          track: "h-6 w-11",
          thumb: "h-5 w-5",
          translate: "translate-x-5",
          icon: "h-3 w-3"
        }
    }
  }

  const getVariantClasses = () => {
    switch (variant) {
      case "success":
        return {
          track: currentChecked ? "bg-green-500" : "bg-muted",
          thumb: "bg-white"
        }
      case "warning":
        return {
          track: currentChecked ? "bg-yellow-500" : "bg-muted",
          thumb: "bg-white"
        }
      case "danger":
        return {
          track: currentChecked ? "bg-red-500" : "bg-muted",
          thumb: "bg-white"
        }
      default:
        return {
          track: currentChecked ? "bg-primary" : "bg-muted",
          thumb: "bg-white"
        }
    }
  }

  const sizeClasses = getSizeClasses()
  const variantClasses = getVariantClasses()

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <button
        type="button"
        role="switch"
        aria-checked={currentChecked}
        aria-disabled={disabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        disabled={disabled}
        className={cn(
          "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
          sizeClasses.track,
          variantClasses.track,
          isPressed && "scale-95"
        )}
      >
        <span
          className={cn(
            "pointer-events-none block rounded-full shadow-lg ring-0 transition-transform flex items-center justify-center",
            sizeClasses.thumb,
            variantClasses.thumb,
            currentChecked ? sizeClasses.translate : "translate-x-0"
          )}
        >
          {currentChecked ? (
            checkedIcon || (
              <svg className={sizeClasses.icon} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )
          ) : (
            uncheckedIcon || (
              <svg className={sizeClasses.icon} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )
          )}
        </span>
      </button>
      
      {showLabel && (
        <div className="flex flex-col">
          <label className="text-sm font-medium text-foreground">
            {label}
          </label>
          {description && (
            <span className="text-xs text-muted-foreground">
              {description}
            </span>
          )}
        </div>
      )}
    </div>
  )
}