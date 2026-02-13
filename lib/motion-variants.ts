import type { Variants, Transition } from "framer-motion"

// Luxury easing as a typed tuple
const luxuryEase = [0.4, 0, 0.2, 1] as const

// Luxury transition preset — 700ms smooth cubic-bezier
export const luxuryTransition: Transition = {
  duration: 0.7,
  ease: luxuryEase,
}

// Fade in variants with directional support
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: luxuryTransition },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -32 },
  visible: { opacity: 1, y: 0, transition: luxuryTransition },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: luxuryTransition },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: luxuryTransition },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: luxuryTransition },
}

// Scale + blur reveal (premium feel)
export const scaleBlurIn: Variants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: luxuryEase },
  },
}

// Text reveal — for word-by-word animation
export const textRevealWord: Variants = {
  hidden: { opacity: 0, y: 20, rotateX: 40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: luxuryEase },
  },
}

// Text reveal container
export const textRevealContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
}

// Image mask reveal
export const imageMaskReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1, ease: luxuryEase },
  },
}

// Stagger container — orchestrates children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
}

// Card hover effect
export const cardHover = {
  scale: 1.02,
  y: -4,
  transition: { duration: 0.3, ease: luxuryEase },
}

// Page transition
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 8 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: luxuryEase },
  },
}

// Slide variants for carousels
export const slideVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    scale: 0.98,
    x: direction > 0 ? 40 : -40,
  }),
  center: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.6, ease: luxuryEase },
  },
  exit: (direction: number) => ({
    opacity: 0,
    scale: 0.98,
    x: direction > 0 ? -40 : 40,
    transition: { duration: 0.4, ease: luxuryEase },
  }),
}

// Button micro-interactions
export const buttonTap = { scale: 0.97 }
export const buttonHover = { scale: 1.02 }

// Pricing card variants with stagger
export const pricingCardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: luxuryEase,
    },
  }),
}

// Helper to get directional variants
export function getDirectionVariants(direction: "up" | "down" | "left" | "right" | "none"): Variants {
  switch (direction) {
    case "up": return fadeInUp
    case "down": return fadeInDown
    case "left": return fadeInLeft
    case "right": return fadeInRight
    case "none": return fadeIn
  }
}
