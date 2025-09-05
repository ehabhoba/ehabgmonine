'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  showFirstLast?: boolean
  showPrevNext?: boolean
  maxVisiblePages?: number
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'outline' | 'ghost' | 'minimal'
  className?: string
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5,
  size = 'md',
  variant = 'default',
  className
}: PaginationProps) {
  const [pageNumbers, setPageNumbers] = React.useState<number[]>([])

  React.useEffect(() => {
    const generatePageNumbers = () => {
      const pages: number[] = []
      const halfVisible = Math.floor(maxVisiblePages / 2)
      
      let startPage = Math.max(1, currentPage - halfVisible)
      let endPage = Math.min(totalPages, currentPage + halfVisible)
      
      if (endPage - startPage + 1 < maxVisiblePages) {
        if (startPage === 1) {
          endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
        } else {
          startPage = Math.max(1, endPage - maxVisiblePages + 1)
        }
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
      }
      
      return pages
    }

    setPageNumbers(generatePageNumbers())
  }, [currentPage, totalPages, maxVisiblePages])

  const sizeClasses = {
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10 text-base",
    lg: "h-12 w-12 text-lg"
  }

  const variantClasses = {
    default: "bg-background hover:bg-accent hover:text-accent-foreground",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    minimal: "hover:bg-accent hover:text-accent-foreground"
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page)
    }
  }

  const handleFirstPage = () => handlePageChange(1)
  const handleLastPage = () => handlePageChange(totalPages)
  const handlePrevPage = () => handlePageChange(currentPage - 1)
  const handleNextPage = () => handlePageChange(currentPage + 1)

  if (totalPages <= 1) return null

  return (
    <nav className={cn("flex items-center justify-center space-x-1", className)}>
      {showFirstLast && (
        <PaginationButton
          onClick={handleFirstPage}
          disabled={currentPage === 1}
          size={size}
          variant={variant}
          aria-label="First page"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </PaginationButton>
      )}
      
      {showPrevNext && (
        <PaginationButton
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          size={size}
          variant={variant}
          aria-label="Previous page"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </PaginationButton>
      )}

      {pageNumbers.map((page) => (
        <PaginationButton
          key={page}
          onClick={() => handlePageChange(page)}
          active={page === currentPage}
          size={size}
          variant={variant}
          aria-label={`Page ${page}`}
        >
          {page}
        </PaginationButton>
      ))}

      {showPrevNext && (
        <PaginationButton
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          size={size}
          variant={variant}
          aria-label="Next page"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </PaginationButton>
      )}
      
      {showFirstLast && (
        <PaginationButton
          onClick={handleLastPage}
          disabled={currentPage === totalPages}
          size={size}
          variant={variant}
          aria-label="Last page"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </PaginationButton>
      )}
    </nav>
  )
}

export interface PaginationButtonProps {
  onClick: () => void
  disabled?: boolean
  active?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'outline' | 'ghost' | 'minimal'
  className?: string
  children: React.ReactNode
  'aria-label'?: string
}

export function PaginationButton({
  onClick,
  disabled = false,
  active = false,
  size = 'md',
  variant = 'default',
  className,
  children,
  'aria-label': ariaLabel
}: PaginationButtonProps) {
  const sizeClasses = {
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10 text-base",
    lg: "h-12 w-12 text-lg"
  }

  const variantClasses = {
    default: "bg-background hover:bg-accent hover:text-accent-foreground",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    minimal: "hover:bg-accent hover:text-accent-foreground"
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        sizeClasses[size],
        variantClasses[variant],
        active && "bg-primary text-primary-foreground hover:bg-primary/90",
        className
      )}
    >
      {children}
    </button>
  )
}

export interface PaginationInfoProps {
  currentPage: number
  totalPages: number
  totalItems?: number
  itemsPerPage?: number
  className?: string
}

export function PaginationInfo({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  className
}: PaginationInfoProps) {
  const startItem = totalItems && itemsPerPage ? (currentPage - 1) * itemsPerPage + 1 : undefined
  const endItem = totalItems && itemsPerPage ? Math.min(currentPage * itemsPerPage, totalItems) : undefined

  return (
    <div className={cn("text-sm text-muted-foreground", className)}>
      {totalItems && itemsPerPage ? (
        <span>
          Showing {startItem} to {endItem} of {totalItems} results
        </span>
      ) : (
        <span>
          Page {currentPage} of {totalPages}
        </span>
      )}
    </div>
  )
}

export interface PaginationSizeSelectorProps {
  pageSize: number
  onPageSizeChange: (size: number) => void
  pageSizeOptions?: number[]
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function PaginationSizeSelector({
  pageSize,
  onPageSizeChange,
  pageSizeOptions = [10, 20, 50, 100],
  size = 'md',
  className
}: PaginationSizeSelectorProps) {
  const sizeClasses = {
    sm: "h-8 px-2 text-sm",
    md: "h-10 px-3 text-base",
    lg: "h-12 px-4 text-lg"
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <span className="text-sm text-muted-foreground">Show:</span>
      <select
        value={pageSize}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
        className={cn(
          "rounded-md border border-input bg-background px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          sizeClasses[size]
        )}
      >
        {pageSizeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className="text-sm text-muted-foreground">per page</span>
    </div>
  )
}

export interface PaginationJumpProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function PaginationJump({
  currentPage,
  totalPages,
  onPageChange,
  size = 'md',
  className
}: PaginationJumpProps) {
  const [jumpPage, setJumpPage] = React.useState('')

  const sizeClasses = {
    sm: "h-8 px-2 text-sm",
    md: "h-10 px-3 text-base",
    lg: "h-12 px-4 text-lg"
  }

  const handleJump = () => {
    const page = parseInt(jumpPage)
    if (page >= 1 && page <= totalPages) {
      onPageChange(page)
      setJumpPage('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleJump()
    }
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <span className="text-sm text-muted-foreground">Go to:</span>
      <input
        type="number"
        value={jumpPage}
        onChange={(e) => setJumpPage(e.target.value)}
        onKeyPress={handleKeyPress}
        min={1}
        max={totalPages}
        placeholder="Page"
        className={cn(
          "w-20 rounded-md border border-input bg-background px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          sizeClasses[size]
        )}
      />
      <button
        onClick={handleJump}
        className={cn(
          "rounded-md bg-primary px-3 py-1 text-sm text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          sizeClasses[size]
        )}
      >
        Go
      </button>
    </div>
  )
}

export interface PaginationContainerProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  showInfo?: boolean
  showSizeSelector?: boolean
  showJump?: boolean
  pageSize?: number
  onPageSizeChange?: (size: number) => void
  totalItems?: number
  itemsPerPage?: number
  className?: string
  children?: React.ReactNode
}

export function PaginationContainer({
  currentPage,
  totalPages,
  onPageChange,
  showInfo = true,
  showSizeSelector = false,
  showJump = false,
  pageSize,
  onPageSizeChange,
  totalItems,
  itemsPerPage,
  className,
  children
}: PaginationContainerProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {children}
      
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-4">
          {showInfo && (
            <PaginationInfo
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
            />
          )}
          
          {showSizeSelector && pageSize && onPageSizeChange && (
            <PaginationSizeSelector
              pageSize={pageSize}
              onPageSizeChange={onPageSizeChange}
            />
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          {showJump && (
            <PaginationJump
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          )}
          
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  )
}