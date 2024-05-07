import ThemeSwitch from '@/lib/ThemeSwitcher'
import Link from 'next/link'
import React from 'react'

import SideBar from "@/components/Header/SideBar"

export default function Header() {

  //   const isActive = (link: string) => {

  //     return (pathname.includes(link) && link.length > 1) || pathname === link
  // }
  return (
    <>

      <div className="hidden sm:block">
        <div className="max-w-6xl  ms-auto me-auto p-10">
          <div className="flex justify-between items-center  ">
            <div className="horizontal-underline"><Link href={'/'}> <h1 className='text-2xl font-bold'>U.</h1></Link></div>
            <div className="">
              <ul className='flex gap-1 lg:gap-3 items-center font-3'>
                <li className='font-bold horizontal-underline mx-6'><Link href={'/about'}>About</Link></li>
                <li className='font-bold horizontal-underline mx-6'><Link href={'/projects'}>Projects</Link></li>
                <li className='font-bold horizontal-underline mx-6'><Link href={'/tech'}>Tech</Link></li>
                <li className='font-bold horizontal-underline mx-6'><Link href={'/github'}>Github</Link></li>
                <li className='font-bold horizontal-underline mx-6'><Link href={'/contact'}>Contact</Link></li>
                <li className='font-bold text-2xl hover:scale-110'><ThemeSwitch /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden z-10  ">
        <SideBar />
      </div>
    </>
  )
}
