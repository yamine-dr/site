import { motion } from "motion/react"

/**
 * Section component with optional animation:
 * 1. animation = null (default): no animation 
 * 2. animation = "onMount": section animated once when page loads 
 * 3. animation = "onView": section animated every time the section appears in the viewport 
 */
export default function Section({ id = "", animation = undefined, children }) {
  let Section
  switch (animation) {
    case "onMount":
      Section = (
        <motion.section
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            scale: { type: "spring", visualDuration: 0.6, bounce: 0.5 },
          }}
          id={id}
          className="mt-6 px-[10%] py-20 w-full flex flex-col justify-center max-md:px-5 max-md:max-w-full"
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
          className="mt-6 px-[10%] py-20 w-full flex flex-col justify-center max-md:px-5 max-md:max-w-full"
        >
            {children}
        </motion.section>
      )
      break;
  
    default:
      Section = (
        <section id={id} className="mt-6 px-[10%] py-20 w-full flex flex-col justify-center max-md:px-5 max-md:max-w-full">
          {children}
        </section>
      )
      break;
  }

  return Section
}