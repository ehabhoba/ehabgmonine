'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface CalendarProps {
  value?: Date
  onValueChange?: (value: Date) => void
  defaultValue?: Date
  minDate?: Date
  maxDate?: Date
  disabled?: boolean
  className?: string
  children?: React.ReactNode
}

export function Calendar({
  value,
  onValueChange,
  defaultValue = new Date(),
  minDate,
  maxDate,
  disabled = false,
  className,
  children
}: CalendarProps) {
  const [internalValue, setInternalValue] = React.useState<Date>(value || defaultValue)
  const [currentMonth, setCurrentMonth] = React.useState<Date>(value || defaultValue)

  const currentValue = value !== undefined ? value : internalValue

  const handleValueChange = (newValue: Date) => {
    if (disabled) return
    setInternalValue(newValue)
    onValueChange?.(newValue)
  }

  const handleMonthChange = (newMonth: Date) => {
    setCurrentMonth(newMonth)
  }

  const contextValue = {
    value: currentValue,
    onValueChange: handleValueChange,
    currentMonth,
    onMonthChange: handleMonthChange,
    minDate,
    maxDate,
    disabled
  }

  return (
    <CalendarContext.Provider value={contextValue}>
      <div className={cn("w-full", className)}>
        {children || <CalendarContent />}
      </div>
    </CalendarContext.Provider>
  )
}

const CalendarContext = React.createContext<{
  value: Date
  onValueChange: (value: Date) => void
  currentMonth: Date
  onMonthChange: (month: Date) => void
  minDate?: Date
  maxDate?: Date
  disabled: boolean
}>({
  value: new Date(),
  onValueChange: () => {},
  currentMonth: new Date(),
  onMonthChange: () => {},
  disabled: false
})

export interface CalendarHeaderProps {
  className?: string
  children?: React.ReactNode
}

export function CalendarHeader({ className, children }: CalendarHeaderProps) {
  const { currentMonth, onMonthChange, disabled } = React.useContext(CalendarContext)

  const handlePreviousMonth = () => {
    if (disabled) return
    const newMonth = new Date(currentMonth)
    newMonth.setMonth(newMonth.getMonth() - 1)
    onMonthChange(newMonth)
  }

  const handleNextMonth = () => {
    if (disabled) return
    const newMonth = new Date(currentMonth)
    newMonth.setMonth(newMonth.getMonth() + 1)
    onMonthChange(newMonth)
  }

  const handleToday = () => {
    if (disabled) return
    onMonthChange(new Date())
  }

  return (
    <div className={cn("flex items-center justify-between py-2", className)}>
      {children || (
        <>
          <button
            onClick={handlePreviousMonth}
            disabled={disabled}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-semibold">
              {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h3>
            <button
              onClick={handleToday}
              disabled={disabled}
              className="text-sm text-muted-foreground hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
            >
              Today
            </button>
          </div>
          
          <button
            onClick={handleNextMonth}
            disabled={disabled}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  )
}

export interface CalendarContentProps {
  className?: string
}

export function CalendarContent({ className }: CalendarContentProps) {
  const { currentMonth, value, onValueChange, minDate, maxDate, disabled } = React.useContext(CalendarContext)

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }
    
    return days
  }

  const isDateDisabled = (date: Date) => {
    if (disabled) return true
    if (minDate && date < minDate) return true
    if (maxDate && date > maxDate) return true
    return false
  }

  const isDateSelected = (date: Date) => {
    return value.getDate() === date.getDate() &&
           value.getMonth() === date.getMonth() &&
           value.getFullYear() === date.getFullYear()
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear()
  }

  const handleDateClick = (date: Date) => {
    if (isDateDisabled(date)) return
    onValueChange(date)
  }

  const days = getDaysInMonth(currentMonth)
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className={cn("space-y-2", className)}>
      <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium text-muted-foreground">
        {dayNames.map((day) => (
          <div key={day} className="p-2">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div key={index} className="p-1">
            {day ? (
              <button
                onClick={() => handleDateClick(day)}
                disabled={isDateDisabled(day)}
                className={cn(
                  "w-full h-8 rounded-md text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                  isDateSelected(day) && "bg-primary text-primary-foreground hover:bg-primary/90",
                  !isDateSelected(day) && "hover:bg-accent hover:text-accent-foreground",
                  isToday(day) && !isDateSelected(day) && "bg-accent text-accent-foreground",
                  isDateDisabled(day) && "opacity-50 cursor-not-allowed"
                )}
              >
                {day.getDate()}
              </button>
            ) : (
              <div className="w-full h-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export interface CalendarWithTimeProps {
  value?: Date
  onValueChange?: (value: Date) => void
  defaultValue?: Date
  minDate?: Date
  maxDate?: Date
  disabled?: boolean
  className?: string
  showTime?: boolean
  timeFormat?: "12" | "24"
}

export function CalendarWithTime({
  value,
  onValueChange,
  defaultValue = new Date(),
  minDate,
  maxDate,
  disabled = false,
  className,
  showTime = true,
  timeFormat = "12"
}: CalendarWithTimeProps) {
  const [internalValue, setInternalValue] = React.useState<Date>(value || defaultValue)
  const [timeValue, setTimeValue] = React.useState<string>("")

  const currentValue = value !== undefined ? value : internalValue

  React.useEffect(() => {
    const hours = currentValue.getHours()
    const minutes = currentValue.getMinutes()
    
    if (timeFormat === "12") {
      const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours
      const ampm = hours >= 12 ? "PM" : "AM"
      setTimeValue(`${displayHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`)
    } else {
      setTimeValue(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`)
    }
  }, [currentValue, timeFormat])

  const handleValueChange = (newValue: Date) => {
    if (disabled) return
    setInternalValue(newValue)
    onValueChange?.(newValue)
  }

  const handleTimeChange = (time: string) => {
    if (disabled) return
    setTimeValue(time)
    
    const [timePart, ampm] = time.split(' ')
    const [hours, minutes] = timePart.split(':').map(Number)
    
    let newHours = hours
    if (timeFormat === "12" && ampm) {
      if (ampm === "PM" && hours !== 12) {
        newHours = hours + 12
      } else if (ampm === "AM" && hours === 12) {
        newHours = 0
      }
    }
    
    const newDate = new Date(currentValue)
    newDate.setHours(newHours, minutes, 0, 0)
    
    handleValueChange(newDate)
  }

  return (
    <div className={cn("space-y-4", className)}>
      <Calendar
        value={currentValue}
        onValueChange={handleValueChange}
        minDate={minDate}
        maxDate={maxDate}
        disabled={disabled}
      />
      
      {showTime && (
        <div className="space-y-2">
          <label className="text-sm font-medium">Time</label>
          <input
            type="text"
            value={timeValue}
            onChange={(e) => handleTimeChange(e.target.value)}
            placeholder={timeFormat === "12" ? "12:00 PM" : "12:00"}
            disabled={disabled}
            className="w-full px-3 py-2 text-sm border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      )}
    </div>
  )
}

export interface CalendarWithRangeProps {
  value?: { from: Date; to: Date }
  onValueChange?: (value: { from: Date; to: Date }) => void
  defaultValue?: { from: Date; to: Date }
  minDate?: Date
  maxDate?: Date
  disabled?: boolean
  className?: string
}

export function CalendarWithRange({
  value,
  onValueChange,
  defaultValue = { from: new Date(), to: new Date() },
  minDate,
  maxDate,
  disabled = false,
  className
}: CalendarWithRangeProps) {
  const [internalValue, setInternalValue] = React.useState<{ from: Date; to: Date }>(value || defaultValue)
  const [currentMonth, setCurrentMonth] = React.useState<Date>(value?.from || new Date())
  const [isSelecting, setIsSelecting] = React.useState(false)

  const currentValue = value !== undefined ? value : internalValue

  const handleValueChange = (newValue: { from: Date; to: Date }) => {
    if (disabled) return
    setInternalValue(newValue)
    onValueChange?.(newValue)
  }

  const handleDateClick = (date: Date) => {
    if (disabled) return
    
    if (!isSelecting) {
      // Start selecting
      setIsSelecting(true)
      handleValueChange({ from: date, to: date })
    } else {
      // Finish selecting
      setIsSelecting(false)
      if (date < currentValue.from) {
        handleValueChange({ from: date, to: currentValue.from })
      } else {
        handleValueChange({ from: currentValue.from, to: date })
      }
    }
  }

  const isDateInRange = (date: Date) => {
    return date >= currentValue.from && date <= currentValue.to
  }

  const isDateStart = (date: Date) => {
    return date.getTime() === currentValue.from.getTime()
  }

  const isDateEnd = (date: Date) => {
    return date.getTime() === currentValue.to.getTime()
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div className="text-sm text-muted-foreground">
        {isSelecting ? "Select end date" : "Select start date"}
      </div>
      
      <Calendar
        value={currentValue.from}
        onValueChange={(date) => handleValueChange({ ...currentValue, from: date })}
        minDate={minDate}
        maxDate={maxDate}
        disabled={disabled}
      />
      
      <div className="text-sm text-muted-foreground">
        Selected: {currentValue.from.toLocaleDateString()} - {currentValue.to.toLocaleDateString()}
      </div>
    </div>
  )
}