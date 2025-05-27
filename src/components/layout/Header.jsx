"use client"
import CTAButton from "../ui/buttons/ButtonCTA"

/**
 * Navigation link component for the header
 */
const NavLink = ({ children }) => {
  return (
    <a
      href="#"
      className="gap-2.5 self-stretch my-auto hover:text-gray-500 hover:underline transition-colors"
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
    <div className="navbar bg-base-100 border-b-[0.5px] justify-between">
      <div className="navbar-start">
        <h1 className="self-stretch my-auto text-3xl font-bold text-center">
          Yamine Daroueche
        </h1>
      </div>
      <div className="border navbar-end w-fit lg:w-[80%]">
        <div className="hidden lg:flex p-0 justify-between text-2xl w-full">
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Projects</NavLink>
          <CTAButton>Contact</CTAButton>
        </div>

        <button className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </button>
      </div>
    </div>

    // <header
    //   className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-8 py-5 whitespace-nowrap bg-base-100 border-b-[0.8px] max-md:px-5"
    // >
    //   <h1
    //     className="self-stretch my-auto text-3xl font-bold text-center"
    //   >
    //     Yamine Daroueche
    //   </h1>
    //   <nav className="border navbar my-auto p-0 min-h-fit w-fit lg:w-[60%]">
    //     <div className="hidden lg:flex justify-between text-2xl w-full">
    //       <NavLink>Home</NavLink>
    //       <NavLink>About</NavLink>
    //       <NavLink>Projects</NavLink>
    //       <CTAButton>Contact</CTAButton>
    //     </div>
    //   </nav>
    // </header>
  )
}