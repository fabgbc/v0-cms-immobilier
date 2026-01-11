"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  threshold?: number
}

export function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 700,
  threshold = 0.1,
}: FadeInProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold })

  const directionClasses = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
    none: "",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${directionClasses[direction]}`,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

interface StaggerChildrenProps {
  children: ReactNode[]
  className?: string
  childClassName?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  staggerDelay?: number
  duration?: number
}

export function StaggerChildren({
  children,
  className,
  childClassName,
  direction = "up",
  staggerDelay = 100,
  duration = 700,
}: StaggerChildrenProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 })

  const directionClasses = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
    none: "",
  }

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={cn(
            "transition-all ease-out",
            isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${directionClasses[direction]}`,
            childClassName
          )}
          style={{
            transitionDuration: `${duration}ms`,
            transitionDelay: `${index * staggerDelay}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
