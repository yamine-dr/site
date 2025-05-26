"use client"
import techStackIcons from "@/src/components/ui/icons/TechStackIcons"

const TechStackItem = ({ icon }) => {
  return (
    <div className="overflow-hidden flex-1 shrink self-stretch rounded-xl basis-0">
      {techStackIcons[icon]}
    </div>
  )
}

export default function About() {
  return (
    <section className="flex overflow-hidden flex-col justify-center px-64 py-20 mt-6 w-full min-h-[405px] max-md:px-5 max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
      <h2 className="flex-1 shrink gap-2.5 self-stretch p-2.5 w-full text-4xl text-center whitespace-nowrap basis-0 text-neutral-900 max-md:max-w-full">
        About me
      </h2>
      <div className="flex flex-col justify-center items-center p-2.5 w-full max-md:max-w-full">
        <div className="max-w-full border border-solid bg-zinc-600 border-zinc-600 min-h-px w-[263px]" />
      </div>
    </div>

      <p className="flex-1 shrink gap-2.5 self-stretch p-2.5 mt-6 w-full text-lg text-center basis-0 text-neutral-900 max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum
        urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non
        justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada
      </p>

      <div className="flex gap-7 items-start self-center mt-6 text-xs text-center text-black whitespace-nowrap">
        <TechStackItem icon="nextjs"/>
        {/* <TechStackItem />
        <TechStackItem />
        <TechStackItem /> */}
      </div>
    </section>
  )
}