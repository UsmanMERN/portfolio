import './globals.css'
import '../css/imports.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeConfig from '@/lib/ThemeConfig';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import NavigationMenu from '@/components/NavigationMenu';
import Background from '@/components/Background';
import RightArrow from '@/components/RightArrow';
import Canvas from '@/components/canvas';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL("https://usmandev.vercel.app"),
  title: {
    default: "Muhammad Usman | Software Engineer | MERN Stack Developer",
    template: `%s | Muhammad Usman | Software Engineer | MERN Stack Developer`
  },
  description: 'I am Software Engineer and MERN Stack Developer with a passion for building innovative and user-friendly web applications. I have extensive experience in all aspects of the MERN stack, including Next.js,React, Node.js, Express.js, MongoDB and Postgrasql.I am also proficient in a variety of other front-end and back-end technologies, such as HTML, CSS, JavaScript, Python, java and SQL.',
  keywords:
    "Software Engineer, MERN Stack Developer, Next.js Developer, Full Stack JavaScript Developer, React Developer, Node.js Developer, MongoDB Developer, Web Developer, JavaScript Developer, Python Developer, SQL Developer, MERN Stack Developer, MERN Stack Development, MERN Stack Projects, MERN Stack Tutorial, MERN Stack Portfolio, React Development, Node.js Development, Express.js Development, MongoDB Development, Next.js Developer, Next.js Development, Next.js Projects,   Next.js Tutorial, Next.js Portfolio, Server-Side Rendering, Static Site Generation ",
  verification: {
    google: "gbkf_s8PmKqJTnD6BwRo2q4lwtWelCbVgqBfanbv3oc"
  }
}
// < meta name = "google-site-verification" content = "gbkf_s8PmKqJTnD6BwRo2q4lwtWelCbVgqBfanbv3oc" />

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en" >
      <body className={`bg-white dark:bg-black dark:text-white max-w-[1920px] ms-auto me-auto`}>
        <ThemeConfig>
          <Background />
          <Header />
          <main >
            <div className="px-6 md:px-4 lg:px-36  mt-8 sm:mt-0">
              {children}
              <Analytics />
            </div>
          </main>
          <span className='hidden lg:block'>
          <NavigationMenu />
          </span>
          <Footer />
        </ThemeConfig>
        <Canvas />
      </body>
    </html>
  )
}
