"use client"
import React from 'react';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import PagesMainLayout from './PageMainLayout';
import PageTitle from './PageTitle';

export default function ContactPage() {
    const revealVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <PagesMainLayout>
            <div className="container mx-auto px-4 max-w-6xl py-12">
                <PageTitle 
                    title="Let's Build"
                    subtitle="Turning complex high-level vision into scalable, high-performance digital products."
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pt-8">
                    {/* Left: Consultative Sidebar */}
                    <motion.div 
                        variants={revealVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-5 space-y-12"
                    >
                        <div className="space-y-8">
                            <h2 className="text-3xl font-black text-gray-900 dark:text-white leading-tight">
                                Consulting for high-growth <br />
                                <span className="text-blue-600 dark:text-blue-400">software solutions.</span>
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                                Whether you&apos;re an established enterprise or a scaling startup, I provide the engineering depth and architectural oversight needed to ship world-class products.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: Mail, label: 'Email', value: 'usman853136@gmail.com', href: 'mailto:usman853136@gmail.com' },
                                { icon: Phone, label: 'Phone', value: '+92 301 8531368', href: 'tel:+923018531368' },
                                { icon: MapPin, label: 'Location', value: 'Islamabad, Pakistan', href: '#' }
                            ].map((item, i) => (
                                <a 
                                    key={i} 
                                    href={item.href}
                                    className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300"
                                >
                                    <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 group-hover:border-blue-500/30 transition-all">
                                        <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400">{item.label}</p>
                                        <p className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Premium Intake Form */}
                    <motion.div 
                        variants={revealVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <div className="p-8 md:p-12 rounded-[40px] bg-gray-900 dark:bg-white border border-gray-900 dark:border-white shadow-2xl relative overflow-hidden group">
                           {/* Subtle background glow for dark mode */}
                           <div className="absolute -inset-10 bg-blue-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                           
                           <div className="relative z-10 space-y-8">
                                <div className="flex items-center gap-4 text-white dark:text-gray-900">
                                    <div className="p-3 bg-white/10 dark:bg-gray-900/10 rounded-xl">
                                        <MessageSquare className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-2xl font-black tracking-tight uppercase tracking-widest text-xs">Project Intake</h3>
                                </div>
                                
                                <ContactForm />
                           </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </PagesMainLayout>
    );
}
