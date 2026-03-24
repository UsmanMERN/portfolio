"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
    Menu, 
    X, 
    Home, 
    Briefcase, 
    Cpu, 
    Github, 
    Mail, 
    Info 
} from 'lucide-react'
import ThemeSwitch from '@/lib/ThemeSwitcher'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'

export default function MobileHeader() {
    const pathname = usePathname()

    const NAV_ITEMS = [
        { href: '/', icon: Home, label: 'Home' },
        { href: '/about', icon: Info, label: 'About' },
        { href: '/projects', icon: Briefcase, label: 'Projects' },
        { href: '/tech', icon: Cpu, label: 'Tech' },
        { href: '/github', icon: Github, label: 'Github' },
        { href: '/contact', icon: Mail, label: 'Contact' }
    ]

    const isActive = (link: string) => {
        return (pathname.includes(link) && link.length > 1) || pathname === link
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-100 dark:border-white/5">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Elite Logo - Left Side */}
                    <Link href={'/'} className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 overflow-hidden transition-transform duration-500 group-hover:scale-110">
                            <Image src="/logo.png" alt="MU Logo Mark" fill className="object-contain" />
                        </div>
                        <span className="text-lg font-black tracking-tighter text-gray-900 dark:text-white uppercase tracking-[0.2em]">USMAN.</span>
                    </Link>

                    {/* Navigation Actions - Right Side */}
                    <div className="flex items-center gap-4">
                        <ThemeSwitch />

                        <Sheet>
                            <SheetTrigger asChild>
                                <button className="p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors">
                                    <Menu className="w-6 h-6" />
                                </button>
                            </SheetTrigger>

                            <SheetContent
                                side={'top'}
                                className="h-full w-full bg-white dark:bg-black p-8 border-none flex flex-col items-center justify-center space-y-12"
                            >
                                <SheetHeader className="absolute top-8 left-8">
                                    <SheetTitle className="text-[10px] font-black tracking-[0.4em] uppercase text-blue-600 dark:text-blue-400">
                                        Navigation Menu
                                    </SheetTitle>
                                </SheetHeader>

                                <div className="space-y-6 w-full max-w-sm">
                                    {NAV_ITEMS.map((item, i) => (
                                        <motion.div
                                            key={item.href}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                        >
                                            <SheetClose asChild>
                                                <Link
                                                    href={item.href}
                                                    className={`
                                                        flex items-center gap-6 p-6 rounded-[24px] 
                                                        transition-all duration-300 group
                                                        ${isActive(item.href)
                                                            ? 'bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900'
                                                            : 'hover:bg-gray-50 dark:hover:bg-white/5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}
                                                    `}
                                                >
                                                    <item.icon className="w-7 h-7" />
                                                    <span className="text-2xl font-black tracking-tight">{item.label}</span>
                                                </Link>
                                            </SheetClose>
                                        </motion.div>
                                    ))}
                                </div>
                                
                                <div className="absolute bottom-12 flex items-center gap-4 text-[10px] font-bold tracking-[0.4em] uppercase text-gray-300 dark:text-white/10">
                                    <span>Engineering Excellence</span>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}