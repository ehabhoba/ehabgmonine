'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TableProps {
  className?: string
  children: React.ReactNode
}

export function Table({ className, children }: TableProps) {
  return (
    <div className="relative w-full overflow-auto">
      <table className={cn("w-full caption-bottom text-sm", className)}>
        {children}
      </table>
    </div>
  )
}

export interface TableHeaderProps {
  className?: string
  children: React.ReactNode
}

export function TableHeader({ className, children }: TableHeaderProps) {
  return (
    <thead className={cn("[&_tr]:border-b", className)}>
      {children}
    </thead>
  )
}

export interface TableBodyProps {
  className?: string
  children: React.ReactNode
}

export function TableBody({ className, children }: TableBodyProps) {
  return (
    <tbody className={cn("[&_tr:last-child]:border-0", className)}>
      {children}
    </tbody>
  )
}

export interface TableFooterProps {
  className?: string
  children: React.ReactNode
}

export function TableFooter({ className, children }: TableFooterProps) {
  return (
    <tfoot className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)}>
      {children}
    </tfoot>
  )
}

export interface TableRowProps {
  className?: string
  children: React.ReactNode
}

export function TableRow({ className, children }: TableRowProps) {
  return (
    <tr className={cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)}>
      {children}
    </tr>
  )
}

export interface TableHeadProps {
  className?: string
  children: React.ReactNode
}

export function TableHead({ className, children }: TableHeadProps) {
  return (
    <th className={cn("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className)}>
      {children}
    </th>
  )
}

export interface TableCellProps {
  className?: string
  children: React.ReactNode
}

export function TableCell({ className, children }: TableCellProps) {
  return (
    <td className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}>
      {children}
    </td>
  )
}

export interface TableCaptionProps {
  className?: string
  children: React.ReactNode
}

export function TableCaption({ className, children }: TableCaptionProps) {
  return (
    <caption className={cn("mt-4 text-sm text-muted-foreground", className)}>
      {children}
    </caption>
  )
}

export interface TableWithSortingProps {
  data: Array<Record<string, any>>
  columns: Array<{
    key: string
    label: string
    sortable?: boolean
    render?: (value: any, row: any) => React.ReactNode
  }>
  onSort?: (key: string, direction: 'asc' | 'desc') => void
  className?: string
}

export function TableWithSorting({
  data,
  columns,
  onSort,
  className
}: TableWithSortingProps) {
  const [sortKey, setSortKey] = React.useState<string>('')
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc')

  const handleSort = (key: string) => {
    if (!columns.find(col => col.key === key)?.sortable) return

    const newDirection = sortKey === key && sortDirection === 'asc' ? 'desc' : 'asc'
    setSortKey(key)
    setSortDirection(newDirection)
    onSort?.(key, newDirection)
  }

  const sortedData = React.useMemo(() => {
    if (!sortKey) return data

    return [...data].sort((a, b) => {
      const aValue = a[sortKey]
      const bValue = b[sortKey]

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
      return 0
    })
  }, [data, sortKey, sortDirection])

  return (
    <Table className={className}>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead
              key={column.key}
              className={column.sortable ? "cursor-pointer hover:bg-muted/50" : ""}
              onClick={() => column.sortable && handleSort(column.key)}
            >
              <div className="flex items-center space-x-2">
                <span>{column.label}</span>
                {column.sortable && sortKey === column.key && (
                  <svg
                    className={cn(
                      "h-4 w-4 transition-transform",
                      sortDirection === 'desc' && "rotate-180"
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </div>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      
      <TableBody>
        {sortedData.map((row, index) => (
          <TableRow key={index}>
            {columns.map((column) => (
              <TableCell key={column.key}>
                {column.render ? column.render(row[column.key], row) : row[column.key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export interface TableWithPaginationProps {
  data: Array<Record<string, any>>
  columns: Array<{
    key: string
    label: string
    sortable?: boolean
    render?: (value: any, row: any) => React.ReactNode
  }>
  pageSize?: number
  onPageChange?: (page: number) => void
  onSort?: (key: string, direction: 'asc' | 'desc') => void
  className?: string
}

export function TableWithPagination({
  data,
  columns,
  pageSize = 10,
  onPageChange,
  onSort,
  className
}: TableWithPaginationProps) {
  const [currentPage, setCurrentPage] = React.useState(1)
  const [sortKey, setSortKey] = React.useState<string>('')
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc')

  const totalPages = Math.ceil(data.length / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const currentData = data.slice(startIndex, endIndex)

  const handleSort = (key: string) => {
    if (!columns.find(col => col.key === key)?.sortable) return

    const newDirection = sortKey === key && sortDirection === 'asc' ? 'desc' : 'asc'
    setSortKey(key)
    setSortDirection(newDirection)
    onSort?.(key, newDirection)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    onPageChange?.(page)
  }

  return (
    <div className={cn("space-y-4", className)}>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead
                key={column.key}
                className={column.sortable ? "cursor-pointer hover:bg-muted/50" : ""}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                <div className="flex items-center space-x-2">
                  <span>{column.label}</span>
                  {column.sortable && sortKey === column.key && (
                    <svg
                      className={cn(
                        "h-4 w-4 transition-transform",
                        sortDirection === 'desc' && "rotate-180"
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        
        <TableBody>
          {currentData.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column.key}>
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing {startIndex + 1} to {Math.min(endIndex, data.length)} of {data.length} results
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm border border-input rounded-md hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>
          
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm border border-input rounded-md hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export interface TableWithSearchProps {
  data: Array<Record<string, any>>
  columns: Array<{
    key: string
    label: string
    sortable?: boolean
    render?: (value: any, row: any) => React.ReactNode
  }>
  searchKeys?: string[]
  onSort?: (key: string, direction: 'asc' | 'desc') => void
  className?: string
}

export function TableWithSearch({
  data,
  columns,
  searchKeys,
  onSort,
  className
}: TableWithSearchProps) {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [sortKey, setSortKey] = React.useState<string>('')
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc')

  const filteredData = React.useMemo(() => {
    if (!searchTerm) return data

    const keys = searchKeys || columns.map(col => col.key)
    
    return data.filter(row =>
      keys.some(key =>
        String(row[key]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }, [data, searchTerm, searchKeys, columns])

  const handleSort = (key: string) => {
    if (!columns.find(col => col.key === key)?.sortable) return

    const newDirection = sortKey === key && sortDirection === 'asc' ? 'desc' : 'asc'
    setSortKey(key)
    setSortDirection(newDirection)
    onSort?.(key, newDirection)
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead
                key={column.key}
                className={column.sortable ? "cursor-pointer hover:bg-muted/50" : ""}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                <div className="flex items-center space-x-2">
                  <span>{column.label}</span>
                  {column.sortable && sortKey === column.key && (
                    <svg
                      className={cn(
                        "h-4 w-4 transition-transform",
                        sortDirection === 'desc' && "rotate-180"
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        
        <TableBody>
          {filteredData.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column.key}>
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export interface TableWithActionsProps {
  data: Array<Record<string, any>>
  columns: Array<{
    key: string
    label: string
    sortable?: boolean
    render?: (value: any, row: any) => React.ReactNode
  }>
  actions?: Array<{
    label: string
    onClick: (row: any) => void
    variant?: 'default' | 'outline' | 'ghost' | 'destructive'
  }>
  onSort?: (key: string, direction: 'asc' | 'desc') => void
  className?: string
}

export function TableWithActions({
  data,
  columns,
  actions = [],
  onSort,
  className
}: TableWithActionsProps) {
  const [sortKey, setSortKey] = React.useState<string>('')
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc')

  const handleSort = (key: string) => {
    if (!columns.find(col => col.key === key)?.sortable) return

    const newDirection = sortKey === key && sortDirection === 'asc' ? 'desc' : 'asc'
    setSortKey(key)
    setSortDirection(newDirection)
    onSort?.(key, newDirection)
  }

  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90"
  }

  return (
    <Table className={className}>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead
              key={column.key}
              className={column.sortable ? "cursor-pointer hover:bg-muted/50" : ""}
              onClick={() => column.sortable && handleSort(column.key)}
            >
              <div className="flex items-center space-x-2">
                <span>{column.label}</span>
                {column.sortable && sortKey === column.key && (
                  <svg
                    className={cn(
                      "h-4 w-4 transition-transform",
                      sortDirection === 'desc' && "rotate-180"
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </div>
            </TableHead>
          ))}
          {actions.length > 0 && (
            <TableHead>Actions</TableHead>
          )}
        </TableRow>
      </TableHeader>
      
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            {columns.map((column) => (
              <TableCell key={column.key}>
                {column.render ? column.render(row[column.key], row) : row[column.key]}
              </TableCell>
            ))}
            {actions.length > 0 && (
              <TableCell>
                <div className="flex items-center space-x-2">
                  {actions.map((action, actionIndex) => (
                    <button
                      key={actionIndex}
                      onClick={() => action.onClick(row)}
                      className={cn(
                        "px-2 py-1 text-xs rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                        variantClasses[action.variant || 'default']
                      )}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}