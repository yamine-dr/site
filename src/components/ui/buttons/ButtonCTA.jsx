export default function ButtonCTA({ children }) {
  return (
    <a
      href="#contact"
      className="overflow-hidden gap-2.5 self-stretch max-lg:mx-auto lg:my-auto px-9 max-md:px-5 py-2 w-[202px] border text-xl md:text-2xl text-center text-brown-100 bg-brown-500 hover:text-brown-500 hover:bg-brown-100 hover:animate-wiggle transition-colors rounded-xl"
    >
      {children}
    </a>
  )
}