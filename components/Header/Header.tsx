import ThemeSwitch from '@/lib/ThemeSwitcher'
import Link from 'next/link'
import React from 'react'

import SideBar from "@/components/Header/SideBar"

export default function Header() {
  return (
    <>
      <header className="py-4 px-20 md:px-4">
        {/* Desktop Navigation */}
        <div className="hidden sm:block">
          <div className="container p-4 md:px-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="horizontal-underline">
                <Link href={'/'}>
                  <h1 className="text-2xl font-bold">U.</h1>
                </Link>
              </div>

              {/* Navigation Links */}
              <div className="">
                <ul className="flex gap-4 lg:gap-6 items-center font-medium">
                  <li className="horizontal-underline">
                    <Link href={'/about'}>About</Link>
                  </li>
                  <li className="horizontal-underline">
                    <Link href={'/projects'}>Projects</Link>
                  </li>
                  <li className="horizontal-underline">
                    <Link href={'/tech'}>Tech</Link>
                  </li>
                  <li className="horizontal-underline">
                    <Link href={'/github'}>Github</Link>
                  </li>
                  <li className="horizontal-underline">
                    <Link href={'/contact'}>Contact</Link>
                  </li>
                  {/* Theme Switcher */}
                  <li className="text-2xl">
                    <ThemeSwitch />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="block sm:hidden z-10">
          <SideBar />
        </div>
      </header>
    </>
  )
}
