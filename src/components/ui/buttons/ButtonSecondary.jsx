export default function ButtonSecondary({ children }) {
  return (
    <a
      href="#"
      className="overflow-hidden gap-2.5 self-stretch my-auto px-9 max-md:px-5 py-2 w-[202px] border text-xl md:text-2xl text-center text-base-100 bg-base-content hover:text-base-content hover:bg-base-100 hover:animate-wiggle transition-colors rounded-xl"
    >
      {children}
    </a>
  )
}