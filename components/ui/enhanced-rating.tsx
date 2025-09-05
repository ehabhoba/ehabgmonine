'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface RatingProps {
  value?: number
  onValueChange?: (value: number) => void
  defaultValue?: number
  max?: number
  size?: "sm" | "md" | "lg"
  disabled?: boolean
  readonly?: boolean
  allowHalf?: boolean
  showValue?: boolean
  showLabel?: boolean
  label?: string
  className?: string
  children?: React.ReactNode
}

export function Rating({
  value,
  onValueChange,
  defaultValue = 0,
  max = 5,
  size = "md",
  disabled = false,
  readonly = false,
  allowHalf = false,
  showValue = false,
  showLabel = false,
  label = "Rating",
  className,
  children
}: RatingProps) {
  const [internalValue, setInternalValue] = React.useState<number>(value || defaultValue)
  const [hoverValue, setHoverValue] = React.useState<number | null>(null)
  const [isHovering, setIsHovering] = React.useState(false)

  const currentValue = value !== undefined ? value : internalValue
  const displayValue = isHovering && hoverValue !== null ? hoverValue : currentValue

  const handleValueChange = (newValue: number) => {
    if (disabled || readonly) return
    setInternalValue(newValue)
    onValueChange?.(newValue)
  }

  const handleMouseEnter = (starValue: number) => {
    if (disabled || readonly) return
    setIsHovering(true)
    setHoverValue(starValue)
  }

  const handleMouseLeave = () => {
    if (disabled || readonly) return
    setIsHovering(false)
    setHoverValue(null)
  }

  const handleClick = (starValue: number) => {
    if (disabled || readonly) return
    handleValueChange(starValue)
  }

  const getStarSize = () => {
    switch (size) {
      case "sm": return "h-4 w-4"
      case "lg": return "h-8 w-8"
      default: return "h-6 w-6"
    }
  }

  const getTextSize = () => {
    switch (size) {
      case "sm": return "text-sm"
      case "lg": return "text-lg"
      default: return "text-base"
    }
  }

  const contextValue = {
    value: displayValue,
    onValueChange: handleValueChange,
    max,
    size,
    disabled,
    readonly,
    allowHalf,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick
  }

  return (
    <RatingContext.Provider value={contextValue}>
      <div className={cn("flex items-center space-x-1", className)}>
        {showLabel && (
          <label className={cn("text-sm font-medium text-foreground", getTextSize())}>
            {label}:
          </label>
        )}
        
        <div
          className="flex items-center space-x-0.5"
          onMouseLeave={handleMouseLeave}
        >
          {children || <RatingContent />}
        </div>
        
        {showValue && (
          <span className={cn("text-muted-foreground", getTextSize())}>
            {displayValue.toFixed(allowHalf ? 1 : 0)}/{max}
          </span>
        )}
      </div>
    </RatingContext.Provider>
  )
}

const RatingContext = React.createContext<{
  value: number
  onValueChange: (value: number) => void
  max: number
  size: "sm" | "md" | "lg"
  disabled: boolean
  readonly: boolean
  allowHalf: boolean
  onMouseEnter: (value: number) => void
  onMouseLeave: () => void
  onClick: (value: number) => void
}>({
  value: 0,
  onValueChange: () => {},
  max: 5,
  size: "md",
  disabled: false,
  readonly: false,
  allowHalf: false,
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onClick: () => {}
})

export interface RatingStarProps {
  value: number
  className?: string
  children?: React.ReactNode
}

export function RatingStar({ value, className, children }: RatingStarProps) {
  const { 
    value: currentValue, 
    onValueChange, 
    size, 
    disabled, 
    readonly, 
    allowHalf,
    onMouseEnter,
    onMouseLeave,
    onClick
  } = React.useContext(RatingContext)

  const getStarSize = () => {
    switch (size) {
      case "sm": return "h-4 w-4"
      case "lg": return "h-8 w-8"
      default: return "h-6 w-6"
    }
  }

  const getFillPercentage = () => {
    if (currentValue >= value) return 100
    if (allowHalf && currentValue >= value - 0.5) return 50
    return 0
  }

  const isFilled = currentValue >= value
  const isHalfFilled = allowHalf && currentValue >= value - 0.5 && currentValue < value

  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      onMouseEnter={() => onMouseEnter(value)}
      onMouseLeave={onMouseLeave}
      disabled={disabled || readonly}
      className={cn(
        "relative inline-flex items-center justify-center text-yellow-400 transition-colors hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        getStarSize(),
        className
      )}
    >
      {children || (
        <svg
          className={cn(
            "transition-colors",
            isFilled && "text-yellow-400",
            isHalfFilled && "text-yellow-400",
            !isFilled && !isHalfFilled && "text-muted-foreground"
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
      
      {isHalfFilled && (
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      )}
    </button>
  )
}

export interface RatingContentProps {
  className?: string
}

export function RatingContent({ className }: RatingContentProps) {
  const { max } = React.useContext(RatingContext)

  return (
    <div className={cn("flex items-center space-x-0.5", className)}>
      {Array.from({ length: max }, (_, index) => (
        <RatingStar key={index} value={index + 1} />
      ))}
    </div>
  )
}

export interface RatingWithTextProps {
  value?: number
  onValueChange?: (value: number) => void
  defaultValue?: number
  max?: number
  size?: "sm" | "md" | "lg"
  disabled?: boolean
  readonly?: boolean
  allowHalf?: boolean
  showValue?: boolean
  showLabel?: boolean
  label?: string
  className?: string
  textLabels?: string[]
}

export function RatingWithText({
  value,
  onValueChange,
  defaultValue = 0,
  max = 5,
  size = "md",
  disabled = false,
  readonly = false,
  allowHalf = false,
  showValue = false,
  showLabel = false,
  label = "Rating",
  className,
  textLabels = ["Poor", "Fair", "Good", "Very Good", "Excellent"]
}: RatingWithTextProps) {
  const [internalValue, setInternalValue] = React.useState<number>(value || defaultValue)
  const [hoverValue, setHoverValue] = React.useState<number | null>(null)
  const [isHovering, setIsHovering] = React.useState(false)

  const currentValue = value !== undefined ? value : internalValue
  const displayValue = isHovering && hoverValue !== null ? hoverValue : currentValue

  const handleValueChange = (newValue: number) => {
    if (disabled || readonly) return
    setInternalValue(newValue)
    onValueChange?.(newValue)
  }

  const handleMouseEnter = (starValue: number) => {
    if (disabled || readonly) return
    setIsHovering(true)
    setHoverValue(starValue)
  }

  const handleMouseLeave = () => {
    if (disabled || readonly) return
    setIsHovering(false)
    setHoverValue(null)
  }

  const handleClick = (starValue: number) => {
    if (disabled || readonly) return
    handleValueChange(starValue)
  }

  const getStarSize = () => {
    switch (size) {
      case "sm": return "h-4 w-4"
      case "lg": return "h-8 w-8"
      default: return "h-6 w-6"
    }
  }

  const getTextSize = () => {
    switch (size) {
      case "sm": return "text-sm"
      case "lg": return "text-lg"
      default: return "text-base"
    }
  }

  const getTextLabel = () => {
    if (displayValue === 0) return "No rating"
    const index = Math.ceil(displayValue) - 1
    return textLabels[index] || `Rating ${displayValue}`
  }

  return (
    <div className={cn("space-y-2", className)}>
      {showLabel && (
        <label className={cn("text-sm font-medium text-foreground", getTextSize())}>
          {label}:
        </label>
      )}
      
      <div className="flex items-center space-x-2">
        <div
          className="flex items-center space-x-0.5"
          onMouseLeave={handleMouseLeave}
        >
          {Array.from({ length: max }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleClick(index + 1)}
              onMouseEnter={() => handleMouseEnter(index + 1)}
              disabled={disabled || readonly}
              className={cn(
                "relative inline-flex items-center justify-center text-yellow-400 transition-colors hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                getStarSize()
              )}
            >
              <svg
                className={cn(
                  "transition-colors",
                  displayValue >= index + 1 && "text-yellow-400",
                  displayValue < index + 1 && "text-muted-foreground"
                )}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </button>
          ))}
        </div>
        
        {showValue && (
          <span className={cn("text-muted-foreground", getTextSize())}>
            {displayValue.toFixed(allowHalf ? 1 : 0)}/{max}
          </span>
        )}
      </div>
      
      <div className="text-sm text-muted-foreground">
        {getTextLabel()}
      </div>
    </div>
  )
}

export interface RatingDisplayProps {
  value: number
  max?: number
  size?: "sm" | "md" | "lg"
  showValue?: boolean
  showLabel?: boolean
  label?: string
  className?: string
}

export function RatingDisplay({
  value,
  max = 5,
  size = "md",
  showValue = false,
  showLabel = false,
  label = "Rating",
  className
}: RatingDisplayProps) {
  const getStarSize = () => {
    switch (size) {
      case "sm": return "h-4 w-4"
      case "lg": return "h-8 w-8"
      default: return "h-6 w-6"
    }
  }

  const getTextSize = () => {
    switch (size) {
      case "sm": return "text-sm"
      case "lg": return "text-lg"
      default: return "text-base"
    }
  }

  return (
    <div className={cn("flex items-center space-x-1", className)}>
      {showLabel && (
        <label className={cn("text-sm font-medium text-foreground", getTextSize())}>
          {label}:
        </label>
      )}
      
      <div className="flex items-center space-x-0.5">
        {Array.from({ length: max }, (_, index) => (
          <div
            key={index}
            className={cn(
              "text-yellow-400",
              getStarSize()
            )}
          >
            <svg
              className={cn(
                "transition-colors",
                value >= index + 1 && "text-yellow-400",
                value < index + 1 && "text-muted-foreground"
              )}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        ))}
      </div>
      
      {showValue && (
        <span className={cn("text-muted-foreground", getTextSize())}>
          {value.toFixed(1)}/{max}
        </span>
      )}
    </div>
  )
}