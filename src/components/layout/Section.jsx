import { motion } from "motion/react"

/**
 * Section component with optional animation:
 * 1. animation = null (default): no animation 
 * 2. animation = "onMount": section animated once when page loads 
 * 3. animation = "onView": section animated every time the section appears in the viewport 
 */
export default function Section({ id = "", animation, className, children }) {
  let Section
  const finalClassName = `
    px-3 md:px-[10%] pt-5 pb-10 w-full ${id !== "contact" ? "min-h-[85vh]" : ""} flex flex-col justify-center max-md:max-w-full ${className}
  `

  switch (animation) {
    case "onMount":
      Section = (
        <motion.section
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            scale: { type: "spring", visualDuration: 0.6, bounce: 0 },
          }}
          id={id}
          className={finalClassName}
        >
            {children}
        </motion.section>
      )
      break;
    
    case "onView":
      Section = (
        <motion.section
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            scale: { type: "spring", visualDuration: 0.6, bounce: 0 },
          }}
          id={id}
          className={finalClassName}
        >
            {children}
        </motion.section>
      )
      break;
  
    default:
      Section = (
        <section id={id} className={finalClassName}>
          {children}
        </section>
      )
      break;
  }

  return Section
}