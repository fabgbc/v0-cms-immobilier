"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  speed?: number // 0.1 to 0.5 recommended
  overlay?: boolean
  overlayClassName?: string
  children?: ReactNode
}

export function ParallaxImage({
  src,
  alt,
  className,
  containerClassName,
  speed = 0.3,
  overlay = true,
  overlayClassName,
  children,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how far the element is from center of viewport
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = windowHeight / 2
      const distanceFromCenter = elementCenter - viewportCenter

      // Apply parallax offset based on distance
      const newOffset = distanceFromCenter * speed
      setOffset(newOffset)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", containerClassName)}>
      <img
        src={src}
        alt={alt}
        className={cn("w-full h-full object-cover scale-110", className)}
        style={{
          transform: `translateY(${offset}px) scale(1.1)`,
          transition: "transform 0.1s ease-out",
        }}
      />
      {overlay && (
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent",
            overlayClassName
          )}
        />
      )}
      {children}
    </div>
  )
}

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down"
}

export function ParallaxSection({
  children,
  className,
  speed = 0.2,
  direction = "up",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = windowHeight / 2
      const distanceFromCenter = elementCenter - viewportCenter

      const multiplier = direction === "up" ? -1 : 1
      const newOffset = distanceFromCenter * speed * multiplier
      setOffset(newOffset)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, direction])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  )
}
