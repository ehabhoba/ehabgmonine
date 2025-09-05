'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TooltipProps {
  content: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
  alignOffset?: number
  delayDuration?: number
  skipDelayDuration?: number
  disableHoverableContent?: boolean
  className?: string
  children: React.ReactNode
}

export function Tooltip({
  content,
  side = 'top',
  align = 'center',
  sideOffset = 4,
  alignOffset = 0,
  delayDuration = 200,
  skipDelayDuration = 300,
  disableHoverableContent = false,
  className,
  children
}: TooltipProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [position, setPosition] = React.useState({ top: 0, left: 0 })
  const triggerRef = React.useRef<HTMLDivElement>(null)
  const tooltipRef = React.useRef<HTMLDivElement>(null)
  const timeoutRef = React.useRef<NodeJS.Timeout>()

  const updatePosition = React.useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const tooltipRect = tooltipRef.current.getBoundingClientRect()
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    let top = 0
    let left = 0

    switch (side) {
      case 'top':
        top = triggerRect.top - tooltipRect.height - sideOffset
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2
        break
      case 'right':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2
        left = triggerRect.right + sideOffset
        break
      case 'bottom':
        top = triggerRect.bottom + sideOffset
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2
        break
      case 'left':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2
        left = triggerRect.left - tooltipRect.width - sideOffset
        break
    }

    // Adjust alignment
    switch (align) {
      case 'start':
        if (side === 'top' || side === 'bottom') {
          left = triggerRect.left + alignOffset
        } else {
          top = triggerRect.top + alignOffset
        }
        break
      case 'end':
        if (side === 'top' || side === 'bottom') {
          left = triggerRect.right - tooltipRect.width - alignOffset
        } else {
          top = triggerRect.bottom - tooltipRect.height - alignOffset
        }
        break
    }

    // Keep tooltip within viewport
    if (left < 0) left = 8
    if (left + tooltipRect.width > viewport.width) {
      left = viewport.width - tooltipRect.width - 8
    }
    if (top < 0) top = 8
    if (top + tooltipRect.height > viewport.height) {
      top = viewport.height - tooltipRect.height - 8
    }

    setPosition({ top, left })
  }, [side, align, sideOffset, alignOffset])

  const showTooltip = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setIsOpen(true)
      updatePosition()
    }, delayDuration)
  }, [delayDuration, updatePosition])

  const hideTooltip = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, skipDelayDuration)
  }, [skipDelayDuration])

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
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleMouseEnter = () => {
    showTooltip()
  }

  const handleMouseLeave = () => {
    hideTooltip()
  }

  const handleFocus = () => {
    showTooltip()
  }

  const handleBlur = () => {
    hideTooltip()
  }

  return (
    <div
      ref={triggerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className="inline-block"
    >
      {children}
      
      {isOpen && (
        <div
          ref={tooltipRef}
          className={cn(
            "absolute z-50 max-w-xs rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
            className
          )}
          style={{
            top: position.top,
            left: position.left
          }}
          onMouseEnter={disableHoverableContent ? undefined : showTooltip}
          onMouseLeave={disableHoverableContent ? undefined : hideTooltip}
        >
          {content}
        </div>
      )}
    </div>
  )
}

export interface TooltipProviderProps {
  delayDuration?: number
  skipDelayDuration?: number
  disableHoverableContent?: boolean
  className?: string
  children: React.ReactNode
}

export function TooltipProvider({
  delayDuration = 200,
  skipDelayDuration = 300,
  disableHoverableContent = false,
  className,
  children
}: TooltipProviderProps) {
  return (
    <TooltipContext.Provider
      value={{
        delayDuration,
        skipDelayDuration,
        disableHoverableContent
      }}
    >
      <div className={cn("relative", className)}>
        {children}
      </div>
    </TooltipContext.Provider>
  )
}

const TooltipContext = React.createContext<{
  delayDuration: number
  skipDelayDuration: number
  disableHoverableContent: boolean
}>({
  delayDuration: 200,
  skipDelayDuration: 300,
  disableHoverableContent: false
})

export interface TooltipTriggerProps {
  asChild?: boolean
  className?: string
  children: React.ReactNode
}

export function TooltipTrigger({
  asChild = false,
  className,
  children
}: TooltipTriggerProps) {
  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      className: cn(className, (children as React.ReactElement).props.className)
    })
  }

  return (
    <div className={cn("inline-block", className)}>
      {children}
    </div>
  )
}

export interface TooltipContentProps {
  className?: string
  children: React.ReactNode
}

export function TooltipContent({
  className,
  children
}: TooltipContentProps) {
  return (
    <div
      className={cn(
        "z-50 max-w-xs rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
        className
      )}
    >
      {children}
    </div>
  )
}

export interface TooltipArrowProps {
  className?: string
}

export function TooltipArrow({ className }: TooltipArrowProps) {
  return (
    <div
      className={cn(
        "absolute w-2 h-2 bg-popover border border-border rotate-45",
        className
      )}
    />
  )
}

export interface TooltipWithIconProps {
  content: React.ReactNode
  icon?: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  className?: string
  children: React.ReactNode
}

export function TooltipWithIcon({
  content,
  icon,
  side = 'top',
  align = 'center',
  className,
  children
}: TooltipWithIconProps) {
  const defaultIcon = (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )

  return (
    <Tooltip
      content={
        <div className="flex items-center space-x-2">
          {icon || defaultIcon}
          <span>{content}</span>
        </div>
      }
      side={side}
      align={align}
      className={className}
    >
      {children}
    </Tooltip>
  )
}

export interface TooltipWithActionProps {
  content: React.ReactNode
  action?: {
    label: string
    onClick: () => void
  }
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  className?: string
  children: React.ReactNode
}

export function TooltipWithAction({
  content,
  action,
  side = 'top',
  align = 'center',
  className,
  children
}: TooltipWithActionProps) {
  return (
    <Tooltip
      content={
        <div className="space-y-2">
          <div>{content}</div>
          {action && (
            <button
              onClick={action.onClick}
              className="text-xs text-primary hover:text-primary/80 underline"
            >
              {action.label}
            </button>
          )}
        </div>
      }
      side={side}
      align={align}
      className={className}
    >
      {children}
    </Tooltip>
  )
}