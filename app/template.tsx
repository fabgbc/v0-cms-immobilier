"use client"

import { motion } from "framer-motion"
import { pageTransition } from "@/lib/motion-variants"

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="enter"
      className="min-h-screen"
    >
      {children}
    </motion.div>
  )
}
