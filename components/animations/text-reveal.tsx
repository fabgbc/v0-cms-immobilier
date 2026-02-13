"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { textRevealWord, textRevealContainer } from "@/lib/motion-variants"

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  as?: "h1" | "h2" | "h3" | "p" | "span"
}

export function TextReveal({
  children,
  className,
  delay = 0,
  as: Tag = "h1",
}: TextRevealProps) {
  const words = children.split(" ")

  return (
    <Tag className={cn("overflow-hidden", className)}>
      <motion.span
        variants={textRevealContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="inline"
        style={{ perspective: 400 }}
        transition={{ delayChildren: delay / 1000 }}
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              variants={textRevealWord}
              className="inline-block"
            >
              {word}
            </motion.span>
            {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
