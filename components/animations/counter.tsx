"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
  decimals?: number
}

export function AnimatedCounter({
  value,
  duration = 2000,
  prefix = "",
  suffix = "",
  className,
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = easeOutQuart * value

      setDisplayValue(currentValue)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, value, duration])

  const formattedValue = decimals > 0
    ? displayValue.toFixed(decimals)
    : Math.round(displayValue).toLocaleString()

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  )
}

interface StatCardProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
  className?: string
  valueClassName?: string
  labelClassName?: string
}

export function StatCard({
  value,
  label,
  prefix,
  suffix,
  className,
  valueClassName,
  labelClassName,
}: StatCardProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className={cn("font-serif text-4xl lg:text-5xl font-medium mb-2", valueClassName)}>
        <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
      </div>
      <div className={cn("text-sm text-muted-foreground", labelClassName)}>
        {label}
      </div>
    </div>
  )
}
