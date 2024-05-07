import Image from 'next/image'
import React from 'react'
import { color } from '@/components/Projects/constants'
import Link from 'next/link'
import { Project } from './types'
interface Props {
    title: string,
    src: string,
    about: string,
    tech: string[],
    id: string,
    url: string

}

export default function ProjectCard({data} : {data:Project}) {

    const {title,src,about,tech,id,url} = data
    return (
        <section className='bg-transparent  rounded-2xl border dark:border-slate-700 glass w-full  p-4  hover:-translate-y-2 transition-all duration-150' >
            <a href={url} target='_blank' >
                <div className="w-full h-36 xsm:h-60  sm:h-48 my-4 ">
                    <Image src={`/${src}`} alt={title} width={1920} height={1080} className='object-cover max-h-52' />
                </div>
                <div className="p-4">
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <p className='text-gray-400 truncate'>{about}</p>
                    <div className="flex gap-2 mt-2 flex-wrap">
                        {tech.map((t, i) => (<span key={i} className={`p-1 sm:p-2 rounded-md text-white font-medium`} style={{ backgroundColor: color[i] }} >{t}</span>))}
                    </div>

                </div>
            </a>
        </section>
    )
}
