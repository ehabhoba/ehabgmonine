'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ProgressProps {
  value?: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  showValue?: boolean
  animated?: boolean
  striped?: boolean
  className?: string
}

export function Progress({
  value = 0,
  max = 100,
  size = 'md',
  variant = 'default',
  showValue = false,
  animated = false,
  striped = false,
  className
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  const sizeClasses = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4"
  }

  const variantClasses = {
    default: "bg-primary",
    success: "bg-green-600",
    warning: "bg-yellow-600",
    error: "bg-red-600",
    info: "bg-blue-600"
  }

  const animationClasses = animated ? "animate-pulse" : ""
  const stripedClasses = striped ? "bg-stripes" : ""

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-foreground">
          Progress
        </span>
        {showValue && (
          <span className="text-sm text-muted-foreground">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
      
      <div
        className={cn(
          "w-full bg-muted rounded-full overflow-hidden",
          sizeClasses[size]
        )}
      >
        <div
          className={cn(
            "h-full transition-all duration-300 ease-in-out rounded-full",
            variantClasses[variant],
            animationClasses,
            stripedClasses
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export interface CircularProgressProps {
  value?: number
  max?: number
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  showValue?: boolean
  animated?: boolean
  strokeWidth?: number
  className?: string
}

export function CircularProgress({
  value = 0,
  max = 100,
  size = 'md',
  variant = 'default',
  showValue = false,
  animated = false,
  strokeWidth = 4,
  className
}: CircularProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
  const radius = 50 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
    xl: "w-24 h-24"
  }

  const variantClasses = {
    default: "text-primary",
    success: "text-green-600",
    warning: "text-yellow-600",
    error: "text-red-600",
    info: "text-blue-600"
  }

  const animationClasses = animated ? "animate-spin" : ""

  return (
    <div className={cn("relative inline-flex items-center justify-center", sizeClasses[size], className)}>
      <svg
        className={cn("transform -rotate-90", sizeClasses[size], animationClasses)}
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-muted"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={cn("transition-all duration-300 ease-in-out", variantClasses[variant])}
        />
      </svg>
      
      {showValue && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-medium text-foreground">
            {Math.round(percentage)}%
          </span>
        </div>
      )}
    </div>
  )
}

export interface StepProgressProps {
  steps: Array<{
    id: string
    title: string
    description?: string
    status: 'pending' | 'current' | 'completed' | 'error'
  }>
  currentStep?: number
  orientation?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function StepProgress({
  steps,
  currentStep = 0,
  orientation = 'horizontal',
  size = 'md',
  className
}: StepProgressProps) {
  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  }

  const stepSizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10"
  }

  const getStepClasses = (status: string) => {
    switch (status) {
      case 'completed':
        return "bg-primary text-primary-foreground"
      case 'current':
        return "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
      case 'error':
        return "bg-red-600 text-white"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getConnectorClasses = (status: string) => {
    switch (status) {
      case 'completed':
        return "bg-primary"
      case 'current':
        return "bg-primary"
      default:
        return "bg-muted"
    }
  }

  if (orientation === 'vertical') {
    return (
      <div className={cn("space-y-4", className)}>
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-start space-x-4">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "rounded-full flex items-center justify-center font-medium",
                  stepSizeClasses[size],
                  getStepClasses(step.status)
                )}
              >
                {step.status === 'completed' ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : step.status === 'error' ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "w-0.5 h-8 mt-2",
                    getConnectorClasses(step.status)
                  )}
                />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className={cn("font-medium text-foreground", sizeClasses[size])}>
                {step.title}
              </h3>
              {step.description && (
                <p className="text-muted-foreground mt-1">
                  {step.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "rounded-full flex items-center justify-center font-medium",
                  stepSizeClasses[size],
                  getStepClasses(step.status)
                )}
              >
                {step.status === 'completed' ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : step.status === 'error' ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              
              <div className="mt-2 text-center">
                <h3 className={cn("font-medium text-foreground", sizeClasses[size])}>
                  {step.title}
                </h3>
                {step.description && (
                  <p className="text-muted-foreground mt-1">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
            
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-0.5 mx-4",
                  getConnectorClasses(step.status)
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export interface ProgressBarProps {
  value?: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  showValue?: boolean
  animated?: boolean
  striped?: boolean
  label?: string
  className?: string
}

export function ProgressBar({
  value = 0,
  max = 100,
  size = 'md',
  variant = 'default',
  showValue = false,
  animated = false,
  striped = false,
  label,
  className
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  const sizeClasses = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4"
  }

  const variantClasses = {
    default: "bg-primary",
    success: "bg-green-600",
    warning: "bg-yellow-600",
    error: "bg-red-600",
    info: "bg-blue-600"
  }

  const animationClasses = animated ? "animate-pulse" : ""
  const stripedClasses = striped ? "bg-stripes" : ""

  return (
    <div className={cn("w-full", className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between mb-2">
          {label && (
            <span className="text-sm font-medium text-foreground">
              {label}
            </span>
          )}
          {showValue && (
            <span className="text-sm text-muted-foreground">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      
      <div
        className={cn(
          "w-full bg-muted rounded-full overflow-hidden",
          sizeClasses[size]
        )}
      >
        <div
          className={cn(
            "h-full transition-all duration-300 ease-in-out rounded-full",
            variantClasses[variant],
            animationClasses,
            stripedClasses
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}