export default function Section({ id = "", children }) {
  return (
    <section id={id} className="mt-6 px-[10%] py-20 w-full flex flex-col justify-center max-md:px-5 max-md:max-w-full">
        {children}
    </section>
  )
}