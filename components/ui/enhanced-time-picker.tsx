'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TimePickerProps {
  value?: Date
  onValueChange?: (value: Date) => void
  defaultValue?: Date
  disabled?: boolean
  format?: "12" | "24"
  showSeconds?: boolean
  className?: string
  children?: React.ReactNode
}

export function TimePicker({
  value,
  onValueChange,
  defaultValue = new Date(),
  disabled = false,
  format = "12",
  showSeconds = false,
  className,
  children
}: TimePickerProps) {
  const [internalValue, setInternalValue] = React.useState<Date>(value || defaultValue)
  const [isOpen, setIsOpen] = React.useState(false)
  const [position, setPosition] = React.useState({ top: 0, left: 0 })
  const triggerRef = React.useRef<HTMLDivElement>(null)
  const contentRef = React.useRef<HTMLDivElement>(null)

  const currentValue = value !== undefined ? value : internalValue

  const handleValueChange = (newValue: Date) => {
    if (disabled) return
    setInternalValue(newValue)
    onValueChange?.(newValue)
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
        contentRef.current &&
        !contentRef.current.contains(event.target as Node) &&
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

  const contextValue = {
    value: currentValue,
    onValueChange: handleValueChange,
    isOpen,
    onOpenChange: setIsOpen,
    disabled,
    format,
    showSeconds
  }

  return (
    <TimePickerContext.Provider value={contextValue}>
      <div className={cn("relative", className)}>
        {children || <TimePickerContent />}
      </div>
    </TimePickerContext.Provider>
  )
}

const TimePickerContext = React.createContext<{
  value: Date
  onValueChange: (value: Date) => void
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  disabled: boolean
  format: "12" | "24"
  showSeconds: boolean
}>({
  value: new Date(),
  onValueChange: () => {},
  isOpen: false,
  onOpenChange: () => {},
  disabled: false,
  format: "12",
  showSeconds: false
})

export interface TimePickerTriggerProps {
  className?: string
  children?: React.ReactNode
}

export function TimePickerTrigger({ className, children }: TimePickerTriggerProps) {
  const { value, isOpen, onOpenChange, disabled, format } = React.useContext(TimePickerContext)

  const formatTime = (date: Date) => {
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    
    if (format === "12") {
      const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours
      const ampm = hours >= 12 ? "PM" : "AM"
      return `${displayHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}${seconds > 0 ? `:${seconds.toString().padStart(2, '0')}` : ''} ${ampm}`
    } else {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}${seconds > 0 ? `:${seconds.toString().padStart(2, '0')}` : ''}`
    }
  }

  return (
    <button
      ref={triggerRef}
      onClick={() => !disabled && onOpenChange(!isOpen)}
      disabled={disabled}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        isOpen && "ring-2 ring-ring ring-offset-2",
        className
      )}
    >
      {children || (
        <>
          <span>{formatTime(value)}</span>
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
        </>
      )}
    </button>
  )
}

export interface TimePickerContentProps {
  className?: string
}

export function TimePickerContent({ className }: TimePickerContentProps) {
  const { value, onValueChange, isOpen, onOpenChange, disabled, format, showSeconds } = React.useContext(TimePickerContext)

  if (!isOpen) return null

  const [hours, setHours] = React.useState(value.getHours())
  const [minutes, setMinutes] = React.useState(value.getMinutes())
  const [seconds, setSeconds] = React.useState(value.getSeconds())
  const [ampm, setAmpm] = React.useState(value.getHours() >= 12 ? "PM" : "AM")

  const handleHoursChange = (newHours: number) => {
    if (disabled) return
    setHours(newHours)
    updateTime(newHours, minutes, seconds)
  }

  const handleMinutesChange = (newMinutes: number) => {
    if (disabled) return
    setMinutes(newMinutes)
    updateTime(hours, newMinutes, seconds)
  }

  const handleSecondsChange = (newSeconds: number) => {
    if (disabled) return
    setSeconds(newSeconds)
    updateTime(hours, minutes, newSeconds)
  }

  const handleAmpmChange = (newAmpm: "AM" | "PM") => {
    if (disabled) return
    setAmpm(newAmpm)
    let newHours = hours
    if (newAmpm === "PM" && hours !== 12) {
      newHours = hours + 12
    } else if (newAmpm === "AM" && hours === 12) {
      newHours = 0
    }
    setHours(newHours)
    updateTime(newHours, minutes, seconds)
  }

  const updateTime = (h: number, m: number, s: number) => {
    const newTime = new Date(value)
    newTime.setHours(h, m, s, 0)
    onValueChange(newTime)
  }

  const getHoursOptions = () => {
    if (format === "12") {
      return Array.from({ length: 12 }, (_, i) => i + 1)
    } else {
      return Array.from({ length: 24 }, (_, i) => i)
    }
  }

  const getMinutesOptions = () => {
    return Array.from({ length: 60 }, (_, i) => i)
  }

  const getSecondsOptions = () => {
    return Array.from({ length: 60 }, (_, i) => i)
  }

  return (
    <div
      ref={contentRef}
      className={cn(
        "absolute z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
        className
      )}
      style={{
        top: position.top,
        left: position.left
      }}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <div className="flex flex-col items-center space-y-1">
            <label className="text-xs font-medium text-muted-foreground">Hours</label>
            <select
              value={format === "12" ? (hours === 0 ? 12 : hours > 12 ? hours - 12 : hours) : hours}
              onChange={(e) => handleHoursChange(format === "12" ? parseInt(e.target.value) : parseInt(e.target.value))}
              disabled={disabled}
              className="w-16 px-2 py-1 text-sm border border-input rounded bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {getHoursOptions().map((hour) => (
                <option key={hour} value={hour}>
                  {hour.toString().padStart(2, '0')}
                </option>
              ))}
            </select>
          </div>
          
          <div className="text-2xl font-bold">:</div>
          
          <div className="flex flex-col items-center space-y-1">
            <label className="text-xs font-medium text-muted-foreground">Minutes</label>
            <select
              value={minutes}
              onChange={(e) => handleMinutesChange(parseInt(e.target.value))}
              disabled={disabled}
              className="w-16 px-2 py-1 text-sm border border-input rounded bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {getMinutesOptions().map((minute) => (
                <option key={minute} value={minute}>
                  {minute.toString().padStart(2, '0')}
                </option>
              ))}
            </select>
          </div>
          
          {showSeconds && (
            <>
              <div className="text-2xl font-bold">:</div>
              
              <div className="flex flex-col items-center space-y-1">
                <label className="text-xs font-medium text-muted-foreground">Seconds</label>
                <select
                  value={seconds}
                  onChange={(e) => handleSecondsChange(parseInt(e.target.value))}
                  disabled={disabled}
                  className="w-16 px-2 py-1 text-sm border border-input rounded bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {getSecondsOptions().map((second) => (
                    <option key={second} value={second}>
                      {second.toString().padStart(2, '0')}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}
          
          {format === "12" && (
            <div className="flex flex-col items-center space-y-1">
              <label className="text-xs font-medium text-muted-foreground">AM/PM</label>
              <select
                value={ampm}
                onChange={(e) => handleAmpmChange(e.target.value as "AM" | "PM")}
                disabled={disabled}
                className="w-16 px-2 py-1 text-sm border border-input rounded bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          )}
        </div>
        
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => onOpenChange(false)}
            className="px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={() => onOpenChange(false)}
            className="px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

export interface TimePickerWithInputProps {
  value?: Date
  onValueChange?: (value: Date) => void
  defaultValue?: Date
  disabled?: boolean
  format?: "12" | "24"
  showSeconds?: boolean
  className?: string
  placeholder?: string
}

export function TimePickerWithInput({
  value,
  onValueChange,
  defaultValue = new Date(),
  disabled = false,
  format = "12",
  showSeconds = false,
  className,
  placeholder = "Select time"
}: TimePickerWithInputProps) {
  const [inputValue, setInputValue] = React.useState<string>("")
  const [isValid, setIsValid] = React.useState(true)

  React.useEffect(() => {
    if (value) {
      const hours = value.getHours()
      const minutes = value.getMinutes()
      const seconds = value.getSeconds()
      
      if (format === "12") {
        const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours
        const ampm = hours >= 12 ? "PM" : "AM"
        setInputValue(`${displayHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}${showSeconds ? `:${seconds.toString().padStart(2, '0')}` : ''} ${ampm}`)
      } else {
        setInputValue(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}${showSeconds ? `:${seconds.toString().padStart(2, '0')}` : ''}`)
      }
    }
  }, [value, format, showSeconds])

  const handleInputChange = (value: string) => {
    setInputValue(value)
    
    // Try to parse the input
    const timeRegex = format === "12" 
      ? /^(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)$/i
      : /^(\d{1,2}):(\d{2})(?::(\d{2}))?$/
    
    const match = value.match(timeRegex)
    if (match) {
      let hours = parseInt(match[1])
      const minutes = parseInt(match[2])
      const seconds = match[3] ? parseInt(match[3]) : 0
      
      if (format === "12") {
        const ampm = match[4].toUpperCase()
        if (ampm === "PM" && hours !== 12) {
          hours += 12
        } else if (ampm === "AM" && hours === 12) {
          hours = 0
        }
      }
      
      if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60 && seconds >= 0 && seconds < 60) {
        const newTime = new Date()
        newTime.setHours(hours, minutes, seconds, 0)
        onValueChange?.(newTime)
        setIsValid(true)
      } else {
        setIsValid(false)
      }
    } else {
      setIsValid(false)
    }
  }

  return (
    <div className={cn("space-y-2", className)}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          "w-full px-3 py-2 text-sm border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          !isValid && "border-red-500 focus:ring-red-500"
        )}
      />
      
      {!isValid && (
        <p className="text-xs text-red-500">
          Please enter a valid time format
        </p>
      )}
      
      <TimePicker
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        format={format}
        showSeconds={showSeconds}
      >
        <TimePickerTrigger />
        <TimePickerContent />
      </TimePicker>
    </div>
  )
}