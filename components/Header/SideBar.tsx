"use client"

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion';
import { AiOutlineHome, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { TbBrandBlogger } from 'react-icons/tb'
import { TiInfoLargeOutline } from 'react-icons/ti'
import { GiTechnoHeart, GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineContactPhone } from 'react-icons/md'
import ThemeSwitch from '@/lib/ThemeSwitcher'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'

export default function Bottombar() {
    const pathname = usePathname()
    const isActive = (link: string) => {
        return (pathname.includes(link) && link.length > 1) || pathname === link
    }

    const buttonVariants = {
        hover: {
            scale: 1.1,
            transition: { duration: 0.01 },
        },
        tap: {
            scale: 0.9,
        },

    };

    return (
        <>
            <div className="w-screen my-6 z-50">
                <div className="fixed top-6 left-5">
                    <Link href={'/'}> <h1 className='text-2xl font-bold'>U.</h1></Link>
                </div>
                <div className="fixed top-8 right-14 me-5 font-bold text-2xl">
                    <ThemeSwitch />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <Sheet key={'left'}>
                        <SheetTrigger asChild className='bg-none'>
                            <motion.button
                                key="hamburger-menu"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="fixed top-8 right-4  text-black dark:text-white bg-none"
                            >
                                <GiHamburgerMenu className="text-3xl" />
                            </motion.button>
                        </SheetTrigger>
                        <SheetContent side={'left'}>
                            <SheetHeader>
                                <SheetTitle>WebTribe</SheetTitle>
                                <SheetDescription>
                                    I am a developer who turns ideas into reality, one line of code at a time.
                                </SheetDescription>
                            </SheetHeader>
                            <motion.div className="flex align-center flex-col gap-4 items-center py-4 ">
                                <motion.div
                                    whileHover="hover"
                                    whileTap="tap"
                                    variants={buttonVariants}
                                    className={`grid items-center gap-4 ${isActive('/') && 'active'}`}>
                                    <SheetClose asChild>
                                        <Link href={'/'} >
                                            <button className="p-2 xsm:p-4 font-bold rounded-xl text-xs xsm:text-sm flex gap-4 items-center  ">
                                                <AiOutlineHome size={'24px'} />Home
                                            </button>
                                        </Link>
                                    </SheetClose>
                                </motion.div>
                                <motion.div
                                    whileHover="hover"
                                    whileTap="tap"
                                    variants={buttonVariants}
                                    className={`grid items-center gap-4 ${isActive('/about') && 'active'}`}>
                                    <SheetClose asChild>
                                        <Link href={'/about'}>
                                            <button className={`p-2 xsm:p-4 font-bold rounded-xl flex gap-4 items-center justify-items-center  text-xs xsm:text-sm `}><TbBrandBlogger size={'24px'} />About</button></Link>
                                    </SheetClose>
                                </motion.div>
                                <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants} className={`grid items-center gap-4 ${isActive('/projects') && 'active'}`}>
                                    <SheetClose asChild>
                                        <Link href={'/projects'}>
                                            <button className={`p-2 xsm:p-4 font-bold rounded-xl flex gap-4 items-center justify-items-center text-xs xsm:text-sm `}><AiOutlineFundProjectionScreen size={'24px'} />Projects</button>
                                        </Link>
                                    </SheetClose>
                                </motion.div>
                                <motion.div
                                    whileHover="hover"
                                    whileTap="tap"
                                    variants={buttonVariants}
                                    className={`grid items-center gap-4 ${isActive('/tech') && 'active'}`}>
                                    <SheetClose asChild>
                                        <Link href={'/tech'}>
                                            <button
                                                className={`p-2 xsm:p-4 font-bold rounded-xl flex gap-4 items-center justify-center text-xs xsm:text-sm `}
                                            >
                                                <TiInfoLargeOutline size={'24px'} />Tech
                                            </button>
                                        </Link>
                                    </SheetClose>
                                </motion.div>
                                <motion.div
                                    whileHover="hover"
                                    whileTap="tap"
                                    variants={buttonVariants}
                                    className={`grid items-center gap-4 ${isActive('/github') && 'active'}`}>
                                    <SheetClose asChild>
                                        <Link href={'/github'}>
                                            <button
                                                className={`p-2 xsm:p-4 font-bold rounded-xl flex gap-4 items-center justify-center  text-xs xsm:text-sm `}>
                                                <GiTechnoHeart size={'24px'} />Github
                                            </button>
                                        </Link>
                                    </SheetClose>
                                </motion.div>
                                <motion.div
                                    whileHover="hover"
                                    whileTap="tap"
                                    variants={buttonVariants}
                                    className={`grid items-center gap-4 ${isActive('/contact') && 'active'}`}>
                                    <SheetClose asChild>
                                        <Link href={'/contact'}>
                                            <button
                                                className={`p-2 xsm:p-4 font-bold rounded-xl flex gap-4 items-center justify-center  text-xs xsm:text-sm `}>
                                                <MdOutlineContactPhone size={'24px'} />Contact
                                            </button>
                                        </Link>
                                    </SheetClose>
                                </motion.div>
                            </motion.div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </>
    )
}