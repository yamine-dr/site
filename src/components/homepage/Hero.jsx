"use client"
import ButtonCTA from "../ui/buttons/ButtonCTA"
import ButtonSecondary from "../ui/buttons/ButtonSecondary"
import { motion } from "motion/react"

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className="flex overflow-hidden flex-col justify-center px-[10%] py-12 w-full max-md:px-5 max-md:max-w-full"
    >
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <div className="flex flex-col justify-center w-full max-md:max-w-full">
          <h1 className="flex-1 shrink gap-2.5 self-stretch py-2.5 w-full text-5xl text-center basis-0 max-md:max-w-full max-md:text-4xl">
            Transforming Concepts into Seamless <span className="text-brown-200 font-bold">User Experiences</span>
          </h1>
          <div className="flex flex-col justify-center items-center py-2.5 mt-6 w-full max-md:max-w-full">
            <hr className="max-w-full border border-solid bg-base-content border-base-content min-h-px w-[263px]" />
          </div>
          <p className="flex-1 shrink gap-2.5 self-stretch px-12 py-2.5 mt-6 w-full text-lg text-center basis-0 max-md:px-5 max-md:max-w-full">
            Hello World!
            <span className="inline-block animate-wave">👋</span> <br />
            I&apos;m Yamine Daroueche, a French front-end Web developer.
          </p>
        </div>
        <div className="flex gap-10 justify-center items-center self-center mt-6 max-w-full text-2xl whitespace-nowrap w-[465px]">
          <ButtonSecondary>Projects</ButtonSecondary>
          <ButtonCTA>Contact</ButtonCTA>
        </div>
      </div>
    </motion.section>
  )
}

/* Previous version
export default function Hero() {
    return (
        <div className="hero">
            <div className="text-center hero-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">
                        Hello World!👋
                    </h1>
                    <p className="mb-5">
                        Welcome to my personal website. I&aposm Yamine Daroueche, a front-end developer.
                    </p>
                    <div role="alert" className="mb-5 alert alert-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span>This site is in maintenance, come back later.</span>
                    </div>
                    <button className="btn btn-primary" disabled>Get Started</button>
                </div>
            </div>
        </div>
    )
}
*/