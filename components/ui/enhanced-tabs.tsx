'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TabsProps {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  orientation?: 'horizontal' | 'vertical'
  variant?: 'default' | 'pills' | 'underline' | 'cards'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

export function Tabs({
  defaultValue,
  value,
  onValueChange,
  orientation = 'horizontal',
  variant = 'default',
  size = 'md',
  className,
  children
}: TabsProps) {
  const [activeTab, setActiveTab] = React.useState(defaultValue || '')

  const handleValueChange = (newValue: string) => {
    setActiveTab(newValue)
    onValueChange?.(newValue)
  }

  React.useEffect(() => {
    if (value !== undefined) {
      setActiveTab(value)
    }
  }, [value])

  const contextValue = {
    activeTab,
    onValueChange: handleValueChange,
    orientation,
    variant,
    size
  }

  return (
    <TabsContext.Provider value={contextValue}>
      <div
        className={cn(
          "w-full",
          orientation === 'vertical' ? "flex" : "flex flex-col",
          className
        )}
      >
        {children}
      </div>
    </TabsContext.Provider>
  )
}

const TabsContext = React.createContext<{
  activeTab: string
  onValueChange: (value: string) => void
  orientation: 'horizontal' | 'vertical'
  variant: 'default' | 'pills' | 'underline' | 'cards'
  size: 'sm' | 'md' | 'lg'
}>({
  activeTab: '',
  onValueChange: () => {},
  orientation: 'horizontal',
  variant: 'default',
  size: 'md'
})

export interface TabsListProps {
  className?: string
  children: React.ReactNode
}

export function TabsList({ className, children }: TabsListProps) {
  const { orientation, variant, size } = React.useContext(TabsContext)

  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12"
  }

  const variantClasses = {
    default: "bg-muted p-1 rounded-md",
    pills: "bg-muted p-1 rounded-full",
    underline: "border-b border-border",
    cards: "bg-background border border-border rounded-lg p-1"
  }

  const orientationClasses = {
    horizontal: "flex-row",
    vertical: "flex-col"
  }

  return (
    <div
      className={cn(
        "inline-flex items-center justify-start",
        sizeClasses[size],
        variantClasses[variant],
        orientationClasses[orientation],
        className
      )}
    >
      {children}
    </div>
  )
}

export interface TabsTriggerProps {
  value: string
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

export function TabsTrigger({
  value,
  disabled = false,
  className,
  children
}: TabsTriggerProps) {
  const { activeTab, onValueChange, orientation, variant, size } = React.useContext(TabsContext)
  const isActive = activeTab === value

  const sizeClasses = {
    sm: "h-6 px-2 text-xs",
    md: "h-8 px-3 text-sm",
    lg: "h-10 px-4 text-base"
  }

  const variantClasses = {
    default: "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
    pills: "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm rounded-full",
    underline: "data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none",
    cards: "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm rounded-md"
  }

  const orientationClasses = {
    horizontal: "flex-row",
    vertical: "flex-col"
  }

  return (
    <button
      type="button"
      onClick={() => !disabled && onValueChange(value)}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        sizeClasses[size],
        variantClasses[variant],
        orientationClasses[orientation],
        isActive && "data-[state=active]",
        className
      )}
      data-state={isActive ? "active" : "inactive"}
    >
      {children}
    </button>
  )
}

export interface TabsContentProps {
  value: string
  className?: string
  children: React.ReactNode
}

export function TabsContent({
  value,
  className,
  children
}: TabsContentProps) {
  const { activeTab, orientation } = React.useContext(TabsContext)
  const isActive = activeTab === value

  if (!isActive) return null

  return (
    <div
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        orientation === 'vertical' && "ml-4",
        className
      )}
    >
      {children}
    </div>
  )
}

export interface TabsGroupProps {
  label: string
  className?: string
  children: React.ReactNode
}

export function TabsGroup({ label, className, children }: TabsGroupProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <h3 className="text-sm font-medium text-muted-foreground">
        {label}
      </h3>
      {children}
    </div>
  )
}

export interface TabsSeparatorProps {
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

export function TabsSeparator({
  orientation = 'horizontal',
  className
}: TabsSeparatorProps) {
  return (
    <div
      className={cn(
        "bg-border",
        orientation === 'horizontal' ? "h-px w-full" : "w-px h-full",
        className
      )}
    />
  )
}

export interface TabsIndicatorProps {
  className?: string
}

export function TabsIndicator({ className }: TabsIndicatorProps) {
  const { activeTab, orientation, variant } = React.useContext(TabsContext)
  const [indicatorStyle, setIndicatorStyle] = React.useState<React.CSSProperties>({})

  const indicatorRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!indicatorRef.current) return

    const activeTrigger = document.querySelector(`[data-state="active"]`)
    if (!activeTrigger) return

    const triggerRect = activeTrigger.getBoundingClientRect()
    const containerRect = indicatorRef.current.parentElement?.getBoundingClientRect()
    
    if (!containerRect) return

    const style: React.CSSProperties = {
      position: 'absolute',
      top: triggerRect.top - containerRect.top,
      left: triggerRect.left - containerRect.left,
      width: triggerRect.width,
      height: triggerRect.height,
      transition: 'all 0.2s ease-in-out',
      zIndex: 1
    }

    setIndicatorStyle(style)
  }, [activeTab, orientation, variant])

  if (variant === 'underline') {
    return (
      <div
        ref={indicatorRef}
        className={cn(
          "absolute bottom-0 left-0 bg-primary transition-all duration-200 ease-in-out",
          className
        )}
        style={indicatorStyle}
      />
    )
  }

  return null
}

export interface TabsScrollAreaProps {
  className?: string
  children: React.ReactNode
}

export function TabsScrollArea({ className, children }: TabsScrollAreaProps) {
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(false)
  const scrollAreaRef = React.useRef<HTMLDivElement>(null)

  const checkScrollability = () => {
    if (!scrollAreaRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollAreaRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
  }

  React.useEffect(() => {
    checkScrollability()
    window.addEventListener('resize', checkScrollability)
    return () => window.removeEventListener('resize', checkScrollability)
  }, [])

  const scrollLeft = () => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollBy({ left: -200, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollBy({ left: 200, behavior: 'smooth' })
    }
  }

  return (
    <div className={cn("relative", className)}>
      {canScrollLeft && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-background to-transparent flex items-center justify-center"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      
      <div
        ref={scrollAreaRef}
        className="overflow-x-auto scrollbar-hide"
        onScroll={checkScrollability}
      >
        {children}
      </div>
      
      {canScrollRight && (
        <button
          onClick={scrollRight}
          className="absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-background to-transparent flex items-center justify-center"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}