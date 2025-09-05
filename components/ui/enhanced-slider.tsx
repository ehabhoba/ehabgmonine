'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface SliderProps {
  value?: number[]
  onValueChange?: (value: number[]) => void
  defaultValue?: number[]
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  orientation?: "horizontal" | "vertical"
  className?: string
  children?: React.ReactNode
}

export function Slider({
  value,
  onValueChange,
  defaultValue = [0],
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  orientation = "horizontal",
  className,
  children
}: SliderProps) {
  const [internalValue, setInternalValue] = React.useState<number[]>(value || defaultValue)
  const [isDragging, setIsDragging] = React.useState(false)
  const [activeThumb, setActiveThumb] = React.useState<number | null>(null)
  const sliderRef = React.useRef<HTMLDivElement>(null)
  const thumbRefs = React.useRef<(HTMLDivElement | null)[]>([])

  const currentValue = value !== undefined ? value : internalValue

  const handleValueChange = (newValue: number[]) => {
    if (disabled) return
    setInternalValue(newValue)
    onValueChange?.(newValue)
  }

  const getPercentage = (val: number) => {
    return ((val - min) / (max - min)) * 100
  }

  const getValueFromPercentage = (percentage: number) => {
    return min + (percentage / 100) * (max - min)
  }

  const getValueFromPosition = (clientX: number, clientY: number) => {
    if (!sliderRef.current) return 0

    const rect = sliderRef.current.getBoundingClientRect()
    const percentage = orientation === "horizontal"
      ? ((clientX - rect.left) / rect.width) * 100
      : ((rect.bottom - clientY) / rect.height) * 100

    const rawValue = getValueFromPercentage(Math.max(0, Math.min(100, percentage)))
    return Math.round(rawValue / step) * step
  }

  const handleMouseDown = (event: React.MouseEvent, thumbIndex: number) => {
    if (disabled) return
    event.preventDefault()
    setIsDragging(true)
    setActiveThumb(thumbIndex)
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging || activeThumb === null || disabled) return

    const newValue = getValueFromPosition(event.clientX, event.clientY)
    const clampedValue = Math.max(min, Math.min(max, newValue))
    
    const newValues = [...currentValue]
    newValues[activeThumb] = clampedValue
    
    // Sort values to maintain order
    newValues.sort((a, b) => a - b)
    
    handleValueChange(newValues)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setActiveThumb(null)
  }

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, activeThumb, currentValue, min, max, step])

  const handleTrackClick = (event: React.MouseEvent) => {
    if (disabled) return
    
    const newValue = getValueFromPosition(event.clientX, event.clientY)
    const clampedValue = Math.max(min, Math.min(max, newValue))
    
    // Find the closest thumb to move
    let closestThumb = 0
    let minDistance = Math.abs(currentValue[0] - clampedValue)
    
    for (let i = 1; i < currentValue.length; i++) {
      const distance = Math.abs(currentValue[i] - clampedValue)
      if (distance < minDistance) {
        minDistance = distance
        closestThumb = i
      }
    }
    
    const newValues = [...currentValue]
    newValues[closestThumb] = clampedValue
    newValues.sort((a, b) => a - b)
    
    handleValueChange(newValues)
  }

  const contextValue = {
    value: currentValue,
    onValueChange: handleValueChange,
    min,
    max,
    step,
    disabled,
    orientation,
    isDragging,
    activeThumb
  }

  return (
    <SliderContext.Provider value={contextValue}>
      <div
        ref={sliderRef}
        className={cn(
          "relative flex items-center",
          orientation === "vertical" && "flex-col h-48 w-4",
          orientation === "horizontal" && "w-full h-4",
          className
        )}
        onClick={handleTrackClick}
      >
        {children || <SliderContent />}
      </div>
    </SliderContext.Provider>
  )
}

const SliderContext = React.createContext<{
  value: number[]
  onValueChange: (value: number[]) => void
  min: number
  max: number
  step: number
  disabled: boolean
  orientation: "horizontal" | "vertical"
  isDragging: boolean
  activeThumb: number | null
}>({
  value: [0],
  onValueChange: () => {},
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  orientation: "horizontal",
  isDragging: false,
  activeThumb: null
})

export interface SliderTrackProps {
  className?: string
  children?: React.ReactNode
}

export function SliderTrack({ className, children }: SliderTrackProps) {
  const { orientation, disabled } = React.useContext(SliderContext)

  return (
    <div
      className={cn(
        "relative flex-1 rounded-full bg-secondary",
        orientation === "vertical" && "w-2 h-full",
        orientation === "horizontal" && "h-2 w-full",
        disabled && "opacity-50",
        className
      )}
    >
      {children}
    </div>
  )
}

export interface SliderRangeProps {
  className?: string
}

export function SliderRange({ className }: SliderRangeProps) {
  const { value, min, max, orientation } = React.useContext(SliderContext)

  const getRangeStyle = () => {
    if (value.length === 1) {
      const percentage = ((value[0] - min) / (max - min)) * 100
      return orientation === "horizontal"
        ? { width: `${percentage}%` }
        : { height: `${percentage}%` }
    } else {
      const startPercentage = ((value[0] - min) / (max - min)) * 100
      const endPercentage = ((value[value.length - 1] - min) / (max - min)) * 100
      return orientation === "horizontal"
        ? { 
            left: `${startPercentage}%`,
            width: `${endPercentage - startPercentage}%`
          }
        : {
            bottom: `${startPercentage}%`,
            height: `${endPercentage - startPercentage}%`
          }
    }
  }

  return (
    <div
      className={cn(
        "absolute rounded-full bg-primary",
        orientation === "vertical" && "w-full",
        orientation === "horizontal" && "h-full",
        className
      )}
      style={getRangeStyle()}
    />
  )
}

export interface SliderThumbProps {
  index: number
  className?: string
  children?: React.ReactNode
}

export function SliderThumb({ index, className, children }: SliderThumbProps) {
  const { value, min, max, orientation, disabled, isDragging, activeThumb } = React.useContext(SliderContext)

  const getThumbStyle = () => {
    const percentage = ((value[index] - min) / (max - min)) * 100
    return orientation === "horizontal"
      ? { left: `${percentage}%` }
      : { bottom: `${percentage}%` }
  }

  return (
    <div
      ref={(el) => (thumbRefs.current[index] = el)}
      className={cn(
        "absolute flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        orientation === "vertical" && "translate-x-1/2 translate-y-1/2",
        isDragging && activeThumb === index && "scale-110",
        className
      )}
      style={getThumbStyle()}
      onMouseDown={(e) => handleMouseDown(e, index)}
    >
      {children || <div className="h-2 w-2 rounded-full bg-primary" />}
    </div>
  )
}

export interface SliderContentProps {
  className?: string
}

export function SliderContent({ className }: SliderContentProps) {
  const { value } = React.useContext(SliderContext)

  return (
    <div className={cn("relative w-full", className)}>
      <SliderTrack>
        <SliderRange />
        {value.map((_, index) => (
          <SliderThumb key={index} index={index} />
        ))}
      </SliderTrack>
    </div>
  )
}

export interface SliderWithInputProps {
  value?: number[]
  onValueChange?: (value: number[]) => void
  defaultValue?: number[]
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  orientation?: "horizontal" | "vertical"
  className?: string
  showInput?: boolean
  showLabels?: boolean
  showTicks?: boolean
  tickCount?: number
}

export function SliderWithInput({
  value,
  onValueChange,
  defaultValue = [0],
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  orientation = "horizontal",
  className,
  showInput = true,
  showLabels = true,
  showTicks = false,
  tickCount = 5
}: SliderWithInputProps) {
  const [inputValues, setInputValues] = React.useState<string[]>([])

  React.useEffect(() => {
    const currentValue = value || defaultValue
    setInputValues(currentValue.map(v => v.toString()))
  }, [value, defaultValue])

  const handleInputChange = (index: number, inputValue: string) => {
    const newInputValues = [...inputValues]
    newInputValues[index] = inputValue
    setInputValues(newInputValues)

    const numericValue = parseFloat(inputValue)
    if (!isNaN(numericValue)) {
      const clampedValue = Math.max(min, Math.min(max, numericValue))
      const newValues = [...(value || defaultValue)]
      newValues[index] = clampedValue
      newValues.sort((a, b) => a - b)
      onValueChange?.(newValues)
    }
  }

  const handleSliderChange = (newValues: number[]) => {
    setInputValues(newValues.map(v => v.toString()))
    onValueChange?.(newValues)
  }

  const currentValue = value || defaultValue
  const ticks = showTicks ? Array.from({ length: tickCount }, (_, i) => 
    min + (i / (tickCount - 1)) * (max - min)
  ) : []

  return (
    <div className={cn("space-y-4", className)}>
      {showLabels && (
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
      
      <Slider
        value={currentValue}
        onValueChange={handleSliderChange}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        orientation={orientation}
      >
        <SliderContent />
      </Slider>

      {showTicks && (
        <div className="relative">
          {ticks.map((tick, index) => (
            <div
              key={index}
              className="absolute h-1 w-0.5 bg-muted-foreground/30"
              style={{
                left: `${((tick - min) / (max - min)) * 100}%`,
                transform: 'translateX(-50%)'
              }}
            />
          ))}
        </div>
      )}

      {showInput && (
        <div className="flex space-x-2">
          {currentValue.map((val, index) => (
            <input
              key={index}
              type="number"
              value={inputValues[index] || ''}
              onChange={(e) => handleInputChange(index, e.target.value)}
              min={min}
              max={max}
              step={step}
              disabled={disabled}
              className="w-20 px-2 py-1 text-sm border border-input rounded bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          ))}
        </div>
      )}
    </div>
  )
}

export interface SliderWithLabelsProps {
  value?: number[]
  onValueChange?: (value: number[]) => void
  defaultValue?: number[]
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  orientation?: "horizontal" | "vertical"
  className?: string
  labels?: string[]
  showValue?: boolean
}

export function SliderWithLabels({
  value,
  onValueChange,
  defaultValue = [0],
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  orientation = "horizontal",
  className,
  labels = [],
  showValue = true
}: SliderWithLabelsProps) {
  const currentValue = value || defaultValue

  return (
    <div className={cn("space-y-2", className)}>
      <Slider
        value={currentValue}
        onValueChange={onValueChange}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        orientation={orientation}
      >
        <SliderContent />
      </Slider>
      
      <div className="flex justify-between text-sm">
        {currentValue.map((val, index) => (
          <div key={index} className="flex flex-col items-center space-y-1">
            {showValue && (
              <span className="font-medium">{val}</span>
            )}
            {labels[index] && (
              <span className="text-muted-foreground">{labels[index]}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}