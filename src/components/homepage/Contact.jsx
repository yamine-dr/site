"use client"
import Section from "../layout/Section"
import { motion } from "motion/react"

export default function Contact() {
  return (
    <Section
      id="contact"
      animation="onView"
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
                className="mt-1 input w-full"
                autoComplete="on"
                required
              />
          </div>
          <div>
              <label htmlFor="email">Email</label><br />
              <div className="input validator w-full">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="mail@site.com"
                  autoComplete="on"
                  required
                />
              </div>
              <div className="validator-hint hidden">Enter valid email address</div>
          </div>
        </div>
        {/* Form's right part (message, submit) */}
        <div className="flex flex-col gap-5 flex-1">
          <div>
              <label htmlFor="message">Your message</label><br />
              <textarea
                id="message"
                name="message"
                className="mt-1 textarea w-full"
                rows="5"
                placeholder="Enter your messsage here"
                autoComplete="off"
              ></textarea>
          </div>
          <div className="self-end w-1/2">
              <button type="submit" className="btn text-base-100 bg-base-content w-full">Submit</button>
          </div>
        </div>
      </form>
    </Section>
  )
}