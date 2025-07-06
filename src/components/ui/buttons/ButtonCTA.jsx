export default function ButtonCTA({ onClick = () => {}, children }) {
  return (
    <button className="hover:scale-105 transition-all" onClick={onClick}>
      <a
        href="#contact"
        className="inline-flex max-lg:mx-auto lg:my-auto p-2 text-lg text-center text-newgreen-100 bg-newgreen-500 hover:text-newgreen-500 hover:bg-newgreen-100 hover:scale-105 transition-transform border rounded-xl"
      >
        {children}
      </a>
    </button>
  )
}