'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ColorPickerProps {
  value?: string
  onValueChange?: (value: string) => void
  defaultValue?: string
  disabled?: boolean
  className?: string
  children?: React.ReactNode
}

export function ColorPicker({
  value,
  onValueChange,
  defaultValue = '#000000',
  disabled = false,
  className,
  children
}: ColorPickerProps) {
  const [selectedColor, setSelectedColor] = React.useState<string>(value || defaultValue)
  const [isOpen, setIsOpen] = React.useState(false)
  const [position, setPosition] = React.useState({ top: 0, left: 0 })
  const triggerRef = React.useRef<HTMLDivElement>(null)
  const pickerRef = React.useRef<HTMLDivElement>(null)

  const updatePosition = React.useCallback(() => {
    if (!triggerRef.current || !pickerRef.current) return

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const pickerRect = pickerRef.current.getBoundingClientRect()
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    let top = triggerRect.bottom + 4
    let left = triggerRect.left

    // Keep picker within viewport
    if (left + pickerRect.width > viewport.width) {
      left = viewport.width - pickerRect.width - 8
    }
    if (top + pickerRect.height > viewport.height) {
      top = triggerRect.top - pickerRect.height - 4
    }

    setPosition({ top, left })
  }, [])

  const handleColorChange = (newColor: string) => {
    if (disabled) return
    setSelectedColor(newColor)
    onValueChange?.(newColor)
  }

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedColor(value)
    }
  }, [value])

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
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node) &&
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
    selectedColor,
    onColorChange: handleColorChange,
    isOpen,
    onOpenChange: setIsOpen,
    disabled
  }

  return (
    <ColorPickerContext.Provider value={contextValue}>
      <div className={cn("relative", className)}>
        <div
          ref={triggerRef}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          className={cn(
            "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            isOpen && "ring-2 ring-ring ring-offset-2"
          )}
        >
          <div className="flex items-center space-x-2">
            <div
              className="h-4 w-4 rounded border border-border"
              style={{ backgroundColor: selectedColor }}
            />
            <span className="text-sm font-mono">
              {selectedColor.toUpperCase()}
            </span>
          </div>
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
        </div>
        
        {isOpen && (
          <div
            ref={pickerRef}
            className={cn(
              "absolute z-50 w-64 rounded-md border bg-popover p-3 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
              className
            )}
            style={{
              top: position.top,
              left: position.left
            }}
          >
            {children || <ColorPickerContent />}
          </div>
        )}
      </div>
    </ColorPickerContext.Provider>
  )
}

const ColorPickerContext = React.createContext<{
  selectedColor: string
  onColorChange: (color: string) => void
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  disabled: boolean
}>({
  selectedColor: '#000000',
  onColorChange: () => {},
  isOpen: false,
  onOpenChange: () => {},
  disabled: false
})

export interface ColorPickerContentProps {
  className?: string
}

export function ColorPickerContent({ className }: ColorPickerContentProps) {
  const { selectedColor, onColorChange, disabled } = React.useContext(ColorPickerContext)

  const [hue, setHue] = React.useState(0)
  const [saturation, setSaturation] = React.useState(0)
  const [lightness, setLightness] = React.useState(0)
  const [alpha, setAlpha] = React.useState(1)

  React.useEffect(() => {
    const hsl = hexToHsl(selectedColor)
    setHue(hsl.h)
    setSaturation(hsl.s)
    setLightness(hsl.l)
    setAlpha(hsl.a)
  }, [selectedColor])

  const handleHueChange = (newHue: number) => {
    if (disabled) return
    setHue(newHue)
    const newColor = hslToHex(newHue, saturation, lightness, alpha)
    onColorChange(newColor)
  }

  const handleSaturationChange = (newSaturation: number) => {
    if (disabled) return
    setSaturation(newSaturation)
    const newColor = hslToHex(hue, newSaturation, lightness, alpha)
    onColorChange(newColor)
  }

  const handleLightnessChange = (newLightness: number) => {
    if (disabled) return
    setLightness(newLightness)
    const newColor = hslToHex(hue, saturation, newLightness, alpha)
    onColorChange(newColor)
  }

  const handleAlphaChange = (newAlpha: number) => {
    if (disabled) return
    setAlpha(newAlpha)
    const newColor = hslToHex(hue, saturation, lightness, newAlpha)
    onColorChange(newColor)
  }

  const handlePresetColor = (color: string) => {
    if (disabled) return
    onColorChange(color)
  }

  const presetColors = [
    '#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF',
    '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080',
    '#FFC0CB', '#A52A2A', '#808080', '#000080', '#008000'
  ]

  return (
    <div className={cn("space-y-4", className)}>
      <div className="space-y-2">
        <label className="text-sm font-medium">Color</label>
        <div className="h-32 w-full rounded border border-border relative overflow-hidden">
          <div
            className="absolute inset-0 cursor-pointer"
            style={{
              background: `linear-gradient(to right, hsl(${hue}, 100%, 50%), transparent), linear-gradient(to top, black, transparent)`
            }}
            onClick={(e) => {
              if (disabled) return
              const rect = e.currentTarget.getBoundingClientRect()
              const x = e.clientX - rect.left
              const y = e.clientY - rect.top
              const newSaturation = Math.round((x / rect.width) * 100)
              const newLightness = Math.round(100 - (y / rect.height) * 100)
              handleSaturationChange(newSaturation)
              handleLightnessChange(newLightness)
            }}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Hue</label>
        <div className="h-4 w-full rounded border border-border relative">
          <div
            className="absolute inset-0 cursor-pointer"
            style={{
              background: 'linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)'
            }}
            onClick={(e) => {
              if (disabled) return
              const rect = e.currentTarget.getBoundingClientRect()
              const x = e.clientX - rect.left
              const newHue = Math.round((x / rect.width) * 360)
              handleHueChange(newHue)
            }}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Alpha</label>
        <div className="h-4 w-full rounded border border-border relative">
          <div
            className="absolute inset-0 cursor-pointer"
            style={{
              background: `linear-gradient(to right, transparent, ${hslToHex(hue, saturation, lightness, 1)})`
            }}
            onClick={(e) => {
              if (disabled) return
              const rect = e.currentTarget.getBoundingClientRect()
              const x = e.clientX - rect.left
              const newAlpha = x / rect.width
              handleAlphaChange(newAlpha)
            }}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Preset Colors</label>
        <div className="grid grid-cols-5 gap-1">
          {presetColors.map((color) => (
            <button
              key={color}
              onClick={() => handlePresetColor(color)}
              disabled={disabled}
              className={cn(
                "h-8 w-8 rounded border border-border hover:ring-2 hover:ring-ring focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                selectedColor === color && "ring-2 ring-ring"
              )}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          onClick={() => onColorChange('#000000')}
          disabled={disabled}
          className="px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
        >
          Reset
        </button>
        <button
          onClick={() => onColorChange(selectedColor)}
          disabled={disabled}
          className="px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Apply
        </button>
      </div>
    </div>
  )
}

export interface ColorPickerTriggerProps {
  className?: string
  children: React.ReactNode
}

export function ColorPickerTrigger({ className, children }: ColorPickerTriggerProps) {
  const { isOpen, onOpenChange } = React.useContext(ColorPickerContext)

  return (
    <button
      onClick={() => onOpenChange(!isOpen)}
      className={cn("inline-block", className)}
    >
      {children}
    </button>
  )
}

export interface ColorPickerValueProps {
  className?: string
}

export function ColorPickerValue({ className }: ColorPickerValueProps) {
  const { selectedColor } = React.useContext(ColorPickerContext)

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div
        className="h-4 w-4 rounded border border-border"
        style={{ backgroundColor: selectedColor }}
      />
      <span className="text-sm font-mono">
        {selectedColor.toUpperCase()}
      </span>
    </div>
  )
}

export interface ColorPickerWithInputProps {
  value?: string
  onValueChange?: (value: string) => void
  defaultValue?: string
  disabled?: boolean
  className?: string
}

export function ColorPickerWithInput({
  value,
  onValueChange,
  defaultValue = '#000000',
  disabled = false,
  className
}: ColorPickerWithInputProps) {
  const [selectedColor, setSelectedColor] = React.useState<string>(value || defaultValue)
  const [inputValue, setInputValue] = React.useState(selectedColor)

  const handleColorChange = (newColor: string) => {
    if (disabled) return
    setSelectedColor(newColor)
    setInputValue(newColor)
    onValueChange?.(newColor)
  }

  const handleInputChange = (value: string) => {
    setInputValue(value)
    
    // Try to parse the input
    if (isValidHex(value)) {
      setSelectedColor(value)
      onValueChange?.(value)
    }
  }

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedColor(value)
      setInputValue(value)
    }
  }, [value])

  return (
    <div className={cn("space-y-2", className)}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder="#000000"
        disabled={disabled}
        className="w-full px-3 py-2 text-sm border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
      
      <ColorPicker
        value={selectedColor}
        onValueChange={handleColorChange}
        disabled={disabled}
      />
    </div>
  )
}

function hexToHsl(hex: string): { h: number; s: number; l: number; a: number } {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h /= 6
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
    a: 1
  }
}

function hslToHex(h: number, s: number, l: number, a: number = 1): string {
  h = h / 360
  s = s / 100
  l = l / 100

  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1/6) return p + (q - p) * 6 * t
    if (t < 1/2) return q
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6
    return p
  }

  let r, g, b

  if (s === 0) {
    r = g = b = l
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 1/3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1/3)
  }

  const toHex = (c: number) => {
    const hex = Math.round(c * 255).toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

function isValidHex(hex: string): boolean {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex)
}