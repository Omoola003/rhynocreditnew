'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#010B07] text-white pt-16 pb-8 px-6 md:px-20">
      {/* OUTER FLEX — pushes left + right content apart */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        {/* LEFT COLUMN — Logo + Newsletter */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          {/* Logo */}
          <div>
            <Image
              src="/images/RhynoCreditLogo.svg"
              alt="RhynoCredit Logo"
              width={200}
              height={80}
              priority
            />
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-gray-300 text-sm mb-3">
              Subscribe to our newsletter
            </p>
            <form className="flex items-center bg-white rounded-full p-1 pr-1 w-[260px] border border-white/10 focus-within:border-[#39B44A] transition">
              <input
                type="email"
                placeholder="Enter your Email"
                className="bg-transparent flex-1 text-sm text-[#010B07] placeholder-gray-400 px-3 py-2 focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center bg-[#39B44A] text-white p-2 rounded-full hover:bg-[#2e8f3a] transition"
              >
                <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT COLUMN — Two link groups */}
        <div className="w-full md:w-1/2 flex justify-end">
          <div className="grid grid-cols-2 gap-16 text-left">
            {/* Group 1 */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg mb-2">Loans</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition">
                    For Startups
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    For Small Businesses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    For Individuals
                  </a>
                </li>
              </ul>
            </div>

            {/* Group 2 */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg mb-2">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Invest With Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="mt-6 border-t border-white/10 pt-4 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} RhynoCredit. All rights reserved.
      </div>
    </footer>
  )
}
