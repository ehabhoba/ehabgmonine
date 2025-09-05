'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface BreadcrumbProps {
  separator?: React.ReactNode
  className?: string
  children: React.ReactNode
}

export function Breadcrumb({
  separator = <BreadcrumbSeparator />,
  className,
  children
}: BreadcrumbProps) {
  return (
    <nav
      className={cn("flex items-center space-x-1 text-sm text-muted-foreground", className)}
      aria-label="Breadcrumb"
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return (
            <React.Fragment key={index}>
              {child}
              {index < React.Children.count(children) - 1 && separator}
            </React.Fragment>
          )
        }
        return child
      })}
    </nav>
  )
}

export interface BreadcrumbItemProps {
  href?: string
  className?: string
  children: React.ReactNode
}

export function BreadcrumbItem({
  href,
  className,
  children
}: BreadcrumbItemProps) {
  const isLast = React.useContext(BreadcrumbContext)?.isLast || false

  if (href && !isLast) {
    return (
      <a
        href={href}
        className={cn(
          "transition-colors hover:text-foreground",
          className
        )}
      >
        {children}
      </a>
    )
  }

  return (
    <span
      className={cn(
        "font-medium text-foreground",
        isLast && "text-foreground",
        className
      )}
    >
      {children}
    </span>
  )
}

export interface BreadcrumbLinkProps {
  href: string
  className?: string
  children: React.ReactNode
}

export function BreadcrumbLink({
  href,
  className,
  children
}: BreadcrumbLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "transition-colors hover:text-foreground",
        className
      )}
    >
      {children}
    </a>
  )
}

export interface BreadcrumbPageProps {
  className?: string
  children: React.ReactNode
}

export function BreadcrumbPage({
  className,
  children
}: BreadcrumbPageProps) {
  return (
    <span
      className={cn(
        "font-medium text-foreground",
        className
      )}
    >
      {children}
    </span>
  )
}

export interface BreadcrumbSeparatorProps {
  className?: string
  children?: React.ReactNode
}

export function BreadcrumbSeparator({
  className,
  children
}: BreadcrumbSeparatorProps) {
  return (
    <span className={cn("text-muted-foreground", className)}>
      {children || (
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </span>
  )
}

export interface BreadcrumbEllipsisProps {
  className?: string
}

export function BreadcrumbEllipsis({ className }: BreadcrumbEllipsisProps) {
  return (
    <span className={cn("text-muted-foreground", className)}>
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h.01M12 12h.01M19 12h.01"
        />
      </svg>
      <span className="sr-only">More</span>
    </span>
  )
}

export interface BreadcrumbListProps {
  className?: string
  children: React.ReactNode
}

export function BreadcrumbList({
  className,
  children
}: BreadcrumbListProps) {
  const childrenArray = React.Children.toArray(children)
  
  return (
    <BreadcrumbContext.Provider value={{ isLast: false }}>
      <ol className={cn("flex items-center space-x-1", className)}>
        {childrenArray.map((child, index) => (
          <BreadcrumbContext.Provider
            key={index}
            value={{ isLast: index === childrenArray.length - 1 }}
          >
            <li className="flex items-center">
              {child}
            </li>
          </BreadcrumbContext.Provider>
        ))}
      </ol>
    </BreadcrumbContext.Provider>
  )
}

const BreadcrumbContext = React.createContext<{ isLast: boolean }>({
  isLast: false
})

export interface BreadcrumbItemWithIconProps {
  href?: string
  icon?: React.ReactNode
  className?: string
  children: React.ReactNode
}

export function BreadcrumbItemWithIcon({
  href,
  icon,
  className,
  children
}: BreadcrumbItemWithIconProps) {
  const isLast = React.useContext(BreadcrumbContext)?.isLast || false

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      {icon && (
        <span className="text-muted-foreground">
          {icon}
        </span>
      )}
      {href && !isLast ? (
        <a
          href={href}
          className="transition-colors hover:text-foreground"
        >
          {children}
        </a>
      ) : (
        <span className={cn(
          "font-medium",
          isLast ? "text-foreground" : "text-muted-foreground"
        )}>
          {children}
        </span>
      )}
    </div>
  )
}

export interface BreadcrumbDropdownProps {
  items: Array<{
    label: string
    href: string
    icon?: React.ReactNode
  }>
  className?: string
  children: React.ReactNode
}

export function BreadcrumbDropdown({
  items,
  className,
  children
}: BreadcrumbDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className={cn("relative", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        {children}
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-md shadow-lg z-50">
          <div className="py-1">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.icon && (
                  <span className="text-muted-foreground">
                    {item.icon}
                  </span>
                )}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export interface BreadcrumbCollapsedProps {
  items: Array<{
    label: string
    href: string
    icon?: React.ReactNode
  }>
  className?: string
}

export function BreadcrumbCollapsed({
  items,
  className
}: BreadcrumbCollapsedProps) {
  return (
    <BreadcrumbDropdown
      items={items}
      className={className}
    >
      <BreadcrumbEllipsis />
    </BreadcrumbDropdown>
  )
}

export interface BreadcrumbWithHomeProps {
  items: Array<{
    label: string
    href?: string
    icon?: React.ReactNode
  }>
  homeIcon?: React.ReactNode
  homeHref?: string
  className?: string
}

export function BreadcrumbWithHome({
  items,
  homeIcon,
  homeHref = "/",
  className
}: BreadcrumbWithHomeProps) {
  const defaultHomeIcon = (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  )

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        <BreadcrumbItem href={homeHref}>
          <BreadcrumbItemWithIcon icon={homeIcon || defaultHomeIcon}>
            Home
          </BreadcrumbItemWithIcon>
        </BreadcrumbItem>
        
        {items.map((item, index) => (
          <BreadcrumbItem key={index} href={item.href}>
            <BreadcrumbItemWithIcon icon={item.icon}>
              {item.label}
            </BreadcrumbItemWithIcon>
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}