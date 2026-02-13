"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { getDirectionVariants, luxuryTransition } from "@/lib/motion-variants"
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
  const variants = getDirectionVariants(direction)

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      transition={{
        ...luxuryTransition,
        duration: duration / 1000,
        delay: delay / 1000,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
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
  const childVariants = getDirectionVariants(direction)

  return (
    <motion.div
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay / 1000,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={childVariants}
          transition={{
            ...luxuryTransition,
            duration: duration / 1000,
          }}
          className={cn(childClassName)}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
