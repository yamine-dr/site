"use client"
import { clipboardIcon } from "@/src/components/ui/Icons"
import { useTheme } from "next-themes"

export const MdxPre = ({ className, children, ...props }) => {
  const { theme } = useTheme()
  return (
    <div className="relative not-prose mb-4">
      {props["data-language"] ? 
        <span className="absolute top-2 right-2.5 text-xs opacity-50">
          {props["data-language"]}
        </span> 
        : ""
      }
      {/* button to "copy code" */}
      {/* <button
        className="opacity-40 absolute top-3 right-3 p-2 border border-current/30 rounded-md hover:opacity-100 hover:cursor-pointer transition-opacity"
      >
        {clipboardIcon}
      </button> */}
      <pre
        className={`not-prose p-4 text-sm ${theme === "light" ? "border border-base-300" : ""} rounded-lg ${className}`}
        {...props}
      >
        {children}
      </pre>
    </div>
  )
}