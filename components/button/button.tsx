"use client"

interface ButtonProperties {
  variant: "dark" | "light"
  text: string
}

const Button:React.FC<ButtonProperties> = ({ variant, text }) => {
  return (
    <div className={`flex items-center justify-center px-4 py-8 button border bg-transparent button cursor-pointer ${variant === "light" ? "border-neutral-1 text-neutral-1 hover:bg-neutral-1 hover:text-neutral-2" : "border-neutral-3 text-neutral-3 hover:bg-neutral-3 hover:text-neutral-1"}`}>
      { text }
    </div>
  )
}

export default Button