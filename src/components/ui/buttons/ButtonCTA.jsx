export default function ButtonCTA({ onClick = () => {}, children }) {
  return (
    <button onClick={onClick}>
      <a
        href="#contact"
        className="inline-block max-lg:mx-auto lg:my-auto px-9 max-md:px-5 py-2 max-w-[202px] sm:w-[202px] text-xl md:text-2xl text-center text-brown-100 bg-brown-500 hover:text-brown-500 hover:bg-brown-100 hover:animate-wiggle transition-colors border rounded-xl"
      >
        {children}
      </a>
    </button>
  )
}