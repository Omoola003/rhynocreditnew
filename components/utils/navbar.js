'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Invest with us', href: '/invest-with-us' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <header className="sticky top-4 z-50 flex justify-center">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[95%] md:w-[90%] bg-white text-[#010B07] rounded-2xl shadow-[0_6px_12px_rgba(0,0,0,0.08)] backdrop-blur-md px-6 py-3 flex items-center justify-between"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/images/RhynoCreditLogo.svg"
            alt="RhynoCredit Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map(link => {
            const isActive = pathname === link.href
            return (
              <li key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`transition-colors duration-200 ${
                    isActive ? 'text-[#39B44A]' : 'text-[#010B07]'
                  } group-hover:text-[#39B44A]`}
                >
                  {link.name}
                </Link>
                <span
                  className={`absolute bottom-[-4px] left-0 h-[2px] rounded-full bg-[#39B44A] transition-all duration-300 ${
                    isActive
                      ? 'w-full opacity-100'
                      : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                  }`}
                />
              </li>
            )
          })}
        </ul>

        {/* Apply Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/apply"
            className="hidden md:inline-block bg-[#39B44A] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#2E9C3D] transition"
          >
            Apply Now
          </Link>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#010B07] focus:outline-none"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Dropdown */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
        transition={{ duration: 0.3 }}
        className={`absolute top-[70px] w-[90%] md:hidden bg-[#010B07] text-white rounded-2xl shadow-lg px-6 py-4 space-y-4 ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {navLinks.map(link => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`block text-sm transition-colors ${
                isActive ? 'text-[#39B44A]' : 'hover:text-[#39B44A]'
              }`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          )
        })}
        <Link
          href="/apply"
          className="block bg-[#39B44A] text-center text-white px-5 py-2 rounded-full font-semibold hover:bg-[#2E9C3D] transition"
          onClick={() => setOpen(false)}
        >
          Apply Now
        </Link>
      </motion.div>
    </header>
  )
}
