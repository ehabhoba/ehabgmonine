'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface FormProps {
  onSubmit?: (data: any) => void
  onReset?: () => void
  className?: string
  children: React.ReactNode
}

export function Form({
  onSubmit,
  onReset,
  className,
  children
}: FormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [errors, setErrors] = React.useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const formData = new FormData(e.target as HTMLFormElement)
      const data = Object.fromEntries(formData.entries())
      await onSubmit?.(data)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setErrors({})
    onReset?.()
  }

  const contextValue = {
    isSubmitting,
    errors,
    setErrors
  }

  return (
    <FormContext.Provider value={contextValue}>
      <form
        onSubmit={handleSubmit}
        onReset={handleReset}
        className={cn("space-y-4", className)}
      >
        {children}
      </form>
    </FormContext.Provider>
  )
}

const FormContext = React.createContext<{
  isSubmitting: boolean
  errors: Record<string, string>
  setErrors: (errors: Record<string, string>) => void
}>({
  isSubmitting: false,
  errors: {},
  setErrors: () => {}
})

export interface FormFieldProps {
  name: string
  label?: string
  required?: boolean
  className?: string
  children: React.ReactNode
}

export function FormField({
  name,
  label,
  required = false,
  className,
  children
}: FormFieldProps) {
  const { errors } = React.useContext(FormContext)
  const error = errors[name]

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <label className="text-sm font-medium text-foreground">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      {children}
      
      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}

export interface FormInputProps {
  name: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  placeholder?: string
  required?: boolean
  disabled?: boolean
  className?: string
}

export function FormInput({
  name,
  type = 'text',
  placeholder,
  required = false,
  disabled = false,
  className
}: FormInputProps) {
  const { isSubmitting } = React.useContext(FormContext)

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      disabled={disabled || isSubmitting}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    />
  )
}

export interface FormTextareaProps {
  name: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  rows?: number
  className?: string
}

export function FormTextarea({
  name,
  placeholder,
  required = false,
  disabled = false,
  rows = 3,
  className
}: FormTextareaProps) {
  const { isSubmitting } = React.useContext(FormContext)

  return (
    <textarea
      name={name}
      placeholder={placeholder}
      required={required}
      disabled={disabled || isSubmitting}
      rows={rows}
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    />
  )
}

export interface FormSelectProps {
  name: string
  options: Array<{ value: string; label: string }>
  placeholder?: string
  required?: boolean
  disabled?: boolean
  className?: string
}

export function FormSelect({
  name,
  options,
  placeholder,
  required = false,
  disabled = false,
  className
}: FormSelectProps) {
  const { isSubmitting } = React.useContext(FormContext)

  return (
    <select
      name={name}
      required={required}
      disabled={disabled || isSubmitting}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export interface FormCheckboxProps {
  name: string
  label?: string
  required?: boolean
  disabled?: boolean
  className?: string
}

export function FormCheckbox({
  name,
  label,
  required = false,
  disabled = false,
  className
}: FormCheckboxProps) {
  const { isSubmitting } = React.useContext(FormContext)

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <input
        type="checkbox"
        name={name}
        required={required}
        disabled={disabled || isSubmitting}
        className="h-4 w-4 rounded border border-input text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
      {label && (
        <label className="text-sm font-medium text-foreground">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
    </div>
  )
}

export interface FormRadioProps {
  name: string
  value: string
  label?: string
  required?: boolean
  disabled?: boolean
  className?: string
}

export function FormRadio({
  name,
  value,
  label,
  required = false,
  disabled = false,
  className
}: FormRadioProps) {
  const { isSubmitting } = React.useContext(FormContext)

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <input
        type="radio"
        name={name}
        value={value}
        required={required}
        disabled={disabled || isSubmitting}
        className="h-4 w-4 rounded-full border border-input text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
      {label && (
        <label className="text-sm font-medium text-foreground">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
    </div>
  )
}

export interface FormButtonProps {
  type?: 'submit' | 'reset' | 'button'
  variant?: 'default' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

export function FormButton({
  type = 'submit',
  variant = 'default',
  size = 'md',
  disabled = false,
  className,
  children
}: FormButtonProps) {
  const { isSubmitting } = React.useContext(FormContext)

  const sizeClasses = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-base",
    lg: "h-12 px-6 text-lg"
  }

  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90"
  }

  return (
    <button
      type={type}
      disabled={disabled || isSubmitting}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {isSubmitting && type === 'submit' && (
        <svg className="mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </button>
  )
}

export interface FormGroupProps {
  title?: string
  description?: string
  className?: string
  children: React.ReactNode
}

export function FormGroup({
  title,
  description,
  className,
  children
}: FormGroupProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {title && (
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
      )}
      {children}
    </div>
  )
}

export interface FormSeparatorProps {
  className?: string
}

export function FormSeparator({ className }: FormSeparatorProps) {
  return (
    <div className={cn("my-6 h-px bg-muted", className)} />
  )
}

export interface FormWithValidationProps {
  onSubmit?: (data: any) => void
  onReset?: () => void
  validation?: (data: any) => Record<string, string>
  className?: string
  children: React.ReactNode
}

export function FormWithValidation({
  onSubmit,
  onReset,
  validation,
  className,
  children
}: FormWithValidationProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [errors, setErrors] = React.useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const formData = new FormData(e.target as HTMLFormElement)
      const data = Object.fromEntries(formData.entries())
      
      if (validation) {
        const validationErrors = validation(data)
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors)
          return
        }
      }
      
      setErrors({})
      await onSubmit?.(data)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setErrors({})
    onReset?.()
  }

  const contextValue = {
    isSubmitting,
    errors,
    setErrors
  }

  return (
    <FormContext.Provider value={contextValue}>
      <form
        onSubmit={handleSubmit}
        onReset={handleReset}
        className={cn("space-y-4", className)}
      >
        {children}
      </form>
    </FormContext.Provider>
  )
}

export interface FormWithStepsProps {
  steps: Array<{
    title: string
    description?: string
    fields: React.ReactNode
  }>
  onSubmit?: (data: any) => void
  onReset?: () => void
  className?: string
}

export function FormWithSteps({
  steps,
  onSubmit,
  onReset,
  className
}: FormWithStepsProps) {
  const [currentStep, setCurrentStep] = React.useState(0)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [errors, setErrors] = React.useState<Record<string, string>>({})

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const formData = new FormData(e.target as HTMLFormElement)
      const data = Object.fromEntries(formData.entries())
      await onSubmit?.(data)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
    setErrors({})
    onReset?.()
  }

  const contextValue = {
    isSubmitting,
    errors,
    setErrors
  }

  return (
    <FormContext.Provider value={contextValue}>
      <form
        onSubmit={handleSubmit}
        onReset={handleReset}
        className={cn("space-y-6", className)}
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            {steps[currentStep].title}
          </h2>
          {steps[currentStep].description && (
            <p className="text-muted-foreground">
              {steps[currentStep].description}
            </p>
          )}
          
          {steps[currentStep].fields}
        </div>
        
        <div className="flex justify-between">
          <FormButton
            type="button"
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            Previous
          </FormButton>
          
          {currentStep === steps.length - 1 ? (
            <FormButton type="submit">
              Submit
            </FormButton>
          ) : (
            <FormButton type="button" onClick={handleNext}>
              Next
            </FormButton>
          )}
        </div>
      </form>
    </FormContext.Provider>
  )
}