"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button, type buttonVariants } from "@/components/ui/button"
import type { VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"

type MotionButtonProps = ComponentProps<typeof Button> & VariantProps<typeof buttonVariants>

export function MotionButton({ children, ...props }: MotionButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] as const }}
    >
      <Button {...props}>{children}</Button>
    </motion.div>
  )
}

export function MagneticButton({ children, className, ...props }: MotionButtonProps & { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (e.clientX - (left + width / 2)) * 0.15
    const y = (e.clientY - (top + height / 2)) * 0.15
    setPosition({ x, y })
  }

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", damping: 15, stiffness: 150, mass: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
      >
        <Button {...props} className="relative overflow-hidden">
          {children}
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
            whileHover={{ translateX: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </Button>
      </motion.div>
    </motion.div>
  )
}
