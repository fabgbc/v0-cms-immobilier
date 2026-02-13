"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  speed?: number
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100])

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", containerClassName)}>
      <motion.img
        src={src}
        alt={alt}
        className={cn("w-full h-full object-cover scale-110", className)}
        style={{ y, scale: 1.1 }}
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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const multiplier = direction === "up" ? -1 : 1
  const y = useTransform(scrollYProgress, [0, 1], [speed * multiplier * -100, speed * multiplier * 100])

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div className={className} style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}
