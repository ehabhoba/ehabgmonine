'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  className?: string
  children: React.ReactNode
}

export function Modal({
  open,
  onOpenChange,
  size = 'md',
  className,
  children
}: ModalProps) {
  const [isOpen, setIsOpen] = React.useState(open || false)

  const handleOpenChange = (newOpen: boolean) => {
    setIsOpen(newOpen)
    onOpenChange?.(newOpen)
  }

  React.useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open)
    }
  }, [open])

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen])

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleOpenChange(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <ModalContext.Provider value={{ isOpen, onOpenChange: handleOpenChange }}>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => handleOpenChange(false)}
        />
        
        <div
          className={cn(
            "relative z-50 w-full max-w-lg rounded-lg border bg-background p-6 shadow-lg",
            size === 'sm' && "max-w-sm",
            size === 'md' && "max-w-md",
            size === 'lg' && "max-w-lg",
            size === 'xl' && "max-w-xl",
            size === 'full' && "max-w-full mx-4",
            className
          )}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  )
}

const ModalContext = React.createContext<{
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}>({
  isOpen: false,
  onOpenChange: () => {}
})

export interface ModalTriggerProps {
  asChild?: boolean
  className?: string
  children: React.ReactNode
}

export function ModalTrigger({
  asChild = false,
  className,
  children
}: ModalTriggerProps) {
  const { onOpenChange } = React.useContext(ModalContext)

  const handleClick = () => {
    onOpenChange(true)
  }

  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      onClick: handleClick,
      className: cn(className, (children as React.ReactElement).props.className)
    })
  }

  return (
    <button
      onClick={handleClick}
      className={cn("inline-block", className)}
    >
      {children}
    </button>
  )
}

export interface ModalContentProps {
  className?: string
  children: React.ReactNode
}

export function ModalContent({
  className,
  children
}: ModalContentProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {children}
    </div>
  )
}

export interface ModalHeaderProps {
  className?: string
  children: React.ReactNode
}

export function ModalHeader({
  className,
  children
}: ModalHeaderProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      {children}
    </div>
  )
}

export interface ModalTitleProps {
  className?: string
  children: React.ReactNode
}

export function ModalTitle({
  className,
  children
}: ModalTitleProps) {
  return (
    <h2 className={cn("text-lg font-semibold leading-none tracking-tight", className)}>
      {children}
    </h2>
  )
}

export interface ModalDescriptionProps {
  className?: string
  children: React.ReactNode
}

export function ModalDescription({
  className,
  children
}: ModalDescriptionProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  )
}

export interface ModalBodyProps {
  className?: string
  children: React.ReactNode
}

export function ModalBody({
  className,
  children
}: ModalBodyProps) {
  return (
    <div className={cn("py-4", className)}>
      {children}
    </div>
  )
}

export interface ModalFooterProps {
  className?: string
  children: React.ReactNode
}

export function ModalFooter({
  className,
  children
}: ModalFooterProps) {
  return (
    <div className={cn("flex items-center justify-end space-x-2", className)}>
      {children}
    </div>
  )
}

export interface ModalCloseProps {
  asChild?: boolean
  className?: string
  children: React.ReactNode
}

export function ModalClose({
  asChild = false,
  className,
  children
}: ModalCloseProps) {
  const { onOpenChange } = React.useContext(ModalContext)

  const handleClick = () => {
    onOpenChange(false)
  }

  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      onClick: handleClick,
      className: cn(className, (children as React.ReactElement).props.className)
    })
  }

  return (
    <button
      onClick={handleClick}
      className={cn("inline-block", className)}
    >
      {children}
    </button>
  )
}

export interface ModalWithFormProps {
  title: string
  description?: string
  onSubmit: (data: any) => void
  onCancel?: () => void
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  className?: string
  children: React.ReactNode
}

export function ModalWithForm({
  title,
  description,
  onSubmit,
  onCancel,
  size = 'md',
  className
}: ModalWithFormProps) {
  const { onOpenChange } = React.useContext(ModalContext)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData.entries())
    onSubmit(data)
    onOpenChange(false)
  }

  const handleCancel = () => {
    onCancel?.()
    onOpenChange(false)
  }

  return (
    <Modal size={size} className={className}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          {description && <ModalDescription>{description}</ModalDescription>}
        </ModalHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <ModalBody>
            {children}
          </ModalBody>
          
          <ModalFooter>
            <ModalClose asChild>
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Cancel
              </button>
            </ModalClose>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Submit
            </button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

export interface ModalWithConfirmationProps {
  title: string
  description?: string
  onConfirm: () => void
  onCancel?: () => void
  confirmText?: string
  cancelText?: string
  variant?: 'default' | 'destructive'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  className?: string
}

export function ModalWithConfirmation({
  title,
  description,
  onConfirm,
  onCancel,
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = 'default',
  size = 'md',
  className
}: ModalWithConfirmationProps) {
  const { onOpenChange } = React.useContext(ModalContext)

  const handleConfirm = () => {
    onConfirm()
    onOpenChange(false)
  }

  const handleCancel = () => {
    onCancel?.()
    onOpenChange(false)
  }

  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90"
  }

  return (
    <Modal size={size} className={className}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          {description && <ModalDescription>{description}</ModalDescription>}
        </ModalHeader>
        
        <ModalFooter>
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {cancelText}
          </button>
          <button
            onClick={handleConfirm}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md transition-colors",
              variantClasses[variant]
            )}
          >
            {confirmText}
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export interface ModalWithStepsProps {
  steps: Array<{
    title: string
    description?: string
    content: React.ReactNode
  }>
  onComplete?: (data: any) => void
  onCancel?: () => void
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  className?: string
}

export function ModalWithSteps({
  steps,
  onComplete,
  onCancel,
  size = 'md',
  className
}: ModalWithStepsProps) {
  const { onOpenChange } = React.useContext(ModalContext)
  const [currentStep, setCurrentStep] = React.useState(0)
  const [formData, setFormData] = React.useState<Record<string, any>>({})

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete?.(formData)
      onOpenChange(false)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleCancel = () => {
    onCancel?.()
    onOpenChange(false)
  }

  const currentStepData = steps[currentStep]

  return (
    <Modal size={size} className={className}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{currentStepData.title}</ModalTitle>
          {currentStepData.description && (
            <ModalDescription>{currentStepData.description}</ModalDescription>
          )}
        </ModalHeader>
        
        <ModalBody>
          {currentStepData.content}
        </ModalBody>
        
        <ModalFooter>
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Cancel
          </button>
          
          <div className="flex items-center space-x-2">
            {currentStep > 0 && (
              <button
                onClick={handlePrevious}
                className="px-4 py-2 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
              >
                Previous
              </button>
            )}
            
            <button
              onClick={handleNext}
              className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
            </button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}