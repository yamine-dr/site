"use client"

/**
 * Navigation link component for the header
 */
const NavLink = ({ children }) => {
  return (
    <a
      href="#"
      className="gap-2.5 self-stretch my-auto text-2xl text-black hover:text-gray-600 hover:underline transition-colors"
    >
      {children}
    </a>
  )
}

/**
 * CTA Button component for the header
 */
const CTAButton = ({ children }) => {
  return (
    <a
      href="#contact"
      className="overflow-hidden gap-2.5 self-stretch px-9 py-2.5 my-auto text-2xl text-white rounded-xl bg-neutral-900 w-[202px] max-md:px-5 hover:bg-neutral-800 transition-colors text-center"
    >
      {children}
    </a>
  )
}

/**
 * Header component with navigation and CTA button
 */
export default function Header() {
  return (
    <header
      className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-8 py-9 whitespace-nowrap border-b max-md:px-5"
    >
      <h1
        className="self-stretch my-auto text-3xl font-bold text-center text-neutral-900"
      >
        Yamine Daroueche
      </h1>
      <nav className="flex flex-wrap gap-10 justify-between items-center self-stretch my-auto text-2xl text-black min-w-60 w-[620px] max-md:max-w-full">
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Projects</NavLink>
        <CTAButton>Contact</CTAButton>
      </nav>
    </header>
  )
}