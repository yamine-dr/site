"use client";

export default function HeroButton({
  variant = "primary",
  children,
  onClick
}) {
  const baseClasses = "overflow-hidden px-9 py-2.5 my-auto rounded-xl text-2xl w-[202px] max-md:px-5";

  const variantClasses = {
    primary: "text-white bg-neutral-900",
    secondary: "bg-white border border-solid border text-neutral-900"
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}