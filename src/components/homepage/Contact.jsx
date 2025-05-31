"use client"
import { useActionState } from "react"
import Section from "../layout/Section"
import { submitContactForm } from "@/src/app/actions"

export default function Contact() {
  const [formState, formAction, isLoading] = useActionState(submitContactForm, {
    name: "",
    email: "",
    message: "",
    response: ""
  })

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

      {isLoading ? 
        <div className="mt-4 py-1 w-full flex justify-center text-center text-base-100 bg-info rounded-md">
          <svg className="mr-2 size-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25 text-base-100" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75 text-base-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </div>
        :
        formState.response
      }
      {/* FORM */}
      <form
        action={formAction}
        className="mt-6 flex max-md:flex-col gap-15 max-md:gap-5 justify-center"
      >
        {/* Name and Email inputs */}
        <div className="flex flex-col gap-5 flex-1">
          {/* Name input group */}
          <div>
              <label htmlFor="name">Name</label><br />
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={formState.name}
                className="mt-1 input w-full"
                autoComplete="on"
                required
              />
          </div>
          {/* Email input group */}
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
                  defaultValue={formState.email}
                  placeholder="mail@site.com"
                  autoComplete="on"
                  required
                />
              </div>
              <div className="validator-hint hidden">Enter valid email address</div>
          </div>
        </div>
        {/* Message input and Submit button */}
        <div className="flex flex-col gap-5 flex-1">
          {/* Message input group */}
          <div>
              <label htmlFor="message">Your message</label><br />
              <textarea
                id="message"
                name="message"
                defaultValue={formState.message}
                className="mt-1 textarea w-full"
                rows="5"
                placeholder="Enter your messsage here"
                autoComplete="off"
              ></textarea>
          </div>
          {/* Submit button */}
          <div className="self-end max-md:w-full w-1/2">
              <button
                type="submit"
                className={`btn ${isLoading ? "btn-disabled" : ""} text-base-100 bg-base-content hover:scale-105 focus:scale-110 transition-transform w-full`}
                disabled={isLoading}
              >
                Submit
              </button>
          </div>
        </div>
      </form>
    </Section>
  )
}