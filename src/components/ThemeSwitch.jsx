"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Icons } from '@/src/components/ui/Icons'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return (
    <></>
  )

  const CurrentIcon = (theme === "dark") ? Icons.Sun : Icons.Moon
  return (
    <button 
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className='ml-3 p-1 hover:cursor-pointer'
    >
      <CurrentIcon size={25} fill="currentColor"/>
    </button>
  )
}