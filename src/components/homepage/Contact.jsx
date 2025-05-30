"use client"
import { motion } from "motion/react"

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        scale: { type: "spring", visualDuration: 0.6, bounce: 0.5 },
      }}
      id="contact"
      className="mt-6 px-[10%] py-20 w-full flex flex-col justify-center max-md:px-5 max-md:max-w-full"
    >
      <div className="w-full max-md:max-w-full">
        <h2 className="flex-1 shrink gap-2.5 self-stretch p-2.5 w-full text-4xl text-center whitespace-nowrap basis-0 max-md:max-w-full">
          Contact me!
        </h2>
        <div className="flex flex-col justify-center items-center p-2.5 w-full max-md:max-w-full">
          <div className="max-w-full border border-solid bg-base-content border-base-cbg-base-content min-h-px w-[263px]" />
        </div>
      </div>

      <form action="" method="POST" className="mt-6 flex max-md:flex-col gap-15 max-md:gap-5 justify-center">
        {/* Form's left part (name, email) */}
        <div className="flex flex-col gap-5 flex-1">
          <div>
              <label htmlFor="name">Name</label><br />
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 px-2 border border-base-300 rounded-md w-full min-h-8"
                autoComplete="on"
                required
              />
          </div>
          <div>
              <label htmlFor="email">Email</label><br />
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 px-2 border border-base-300 rounded-md w-full min-h-8"
                placeholder="mail@example.com"
                autoComplete="on"
                required
              />
          </div>
        </div>
        {/* Form's right part (message, submit) */}
        <div className="flex flex-col gap-5 flex-1">
          <div>
              <label htmlFor="message">Your message</label><br />
              <textarea
                id="message"
                name="message"
                className="mt-1 p-2 border border-base-300 rounded-md w-full"
                rows="4"
                placeholder="Enter your messsage here"
                autoComplete="off"
              ></textarea>
          </div>
          <div className="self-end w-1/2">
              <button type="submit" className="btn text-base-100 bg-base-content w-full">Submit</button>
          </div>
        </div>
      </form>
    </motion.section>
  )
}