import React from 'react'

interface RepoProps {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
  }

const BlogCard1 = ({repo}:{repo:RepoProps}) => {
    return (
        <div className='w-[280px] h-[280px] xsm:w-[340px] xsm:h-[340px] sm:w-[260px] sm:h-[260px] md:w-[330px] md:h-[330px] lg:w-[210px] lg:h-[210px] xl:w-[295px] xl:h-[295px] 2xl:w-[325px]
        2xl:h-[325px]  '>
            <div className="card  dark:shadow-[#000] ">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className=''>
                <div className="bg p-4 dark:bg-black/90 dark:outline-[#000] ">
                    <h6 className='text-lg'>{repo.name}</h6>
                    <p className='text-sm '>{repo.description}</p>
                </div>
                </a>
                <div className="blob"></div>
            </div>

        </div>
    )
}

export default BlogCard1