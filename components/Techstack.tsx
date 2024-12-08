// import React from 'react';

// export default function Techstack() {
//     return (
//         <div className="my-8">
//             <div className="mb-8">
//                 <h3 className="text-3xl font-medium">Editor</h3>
//                 <ul className="ms-4 flex flex-col gap-2" style={{ listStyleType: 'disc' }}>
//                     <li className="text-xl my-2">
//                         My editor of choice is{' '}
//                         <a href="" className="bg-primary text-white px-1" target="_blank" rel="noopener noreferrer">
//                             Visual Studio Code
//                         </a>{' '}
//                         with a variety of extensions.
//                     </li>
//                     <li className="text-xl my-2">I am currently using the <span className="bg-primary text-white px-1">dark</span> theme.</li>
//                 </ul>
//             </div>

//             <div className="mb-8">
//                 <h3 className="text-3xl font-medium">Terminal</h3>
//                 <ul className="ms-4 flex flex-col gap-2" style={{ listStyleType: 'disc' }}>
//                     <li className="text-xl my-2">I use the <span className="bg-primary text-white px-1">PowerShell</span> Terminal.</li>
//                     <li className="text-xl my-2">
//                         All terminals use{' '}
//                         <a href="https://github.com/tonsky/FiraCode" className="bg-primary text-white px-1" target="_blank" rel="noopener noreferrer">
//                             Fira Code
//                         </a>{' '}
//                         as the font because ligatures are awesome!
//                     </li>
//                 </ul>
//             </div>

//             <div className="mb-8">
//                 <h3 className="text-3xl font-medium">Desktop Apps</h3>
//                 <ul className="ms-4 flex flex-col gap-2" style={{ listStyleType: 'disc' }}>
//                     <li className="text-xl my-2">
//                         <a href="https://www.google.com" className="bg-primary text-white px-1" target="_blank" rel="noopener noreferrer">
//                             Google Chrome
//                         </a>{' '}
//                         is my main browser for both browsing and development.
//                     </li>
//                     <li className="text-xl my-2">
//                         <a href="https://www.postman.com/" className="bg-primary text-white px-1" target="_blank" rel="noopener noreferrer">
//                             Postman
//                         </a>{' '}
//                         for API development and testing.
//                     </li>
//                     <li className="text-xl my-2">
//                         <a href="https://www.discord.com/" className="bg-primary text-white px-1" target="_blank" rel="noopener noreferrer">
//                             Discord
//                         </a>{' '}
//                         and{' '}
//                         <a href="https://www.skype.com/" className="bg-primary text-white px-1" target="_blank" rel="noopener noreferrer">
//                             Skype
//                         </a>{' '}
//                         for messaging and calls.
//                     </li>
//                     <li className="text-xl my-2">
//                         <a href="https://git-scm.com/" className="bg-primary text-white px-1" target="_blank" rel="noopener noreferrer">
//                             git
//                         </a>{' '}
//                         and{' '}
//                         <a href="https://github.com/" className="bg-primary text-white px-1" target="_blank" rel="noopener noreferrer">
//                             GitHub
//                         </a>{' '}
//                         for version control.
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// }

import React from 'react';

export default function Techstack() {
    return (
        <div className="my-12">
            {/* Editor Section */}
            <div className="mb-12">
                <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Editor</h3>
                <ul className="ms-4 flex flex-col gap-3 list-disc">
                    <li className="text-lg">
                        My preferred editor is{' '}
                        <a
                            href="https://code.visualstudio.com/"
                            className="bg-blue-600 text-white px-2 py-1 rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visual Studio Code
                        </a>{' '}
                        with extensions like Prettier, ESLint, and GitLens for an optimized development workflow.
                    </li>
                    <li className="text-lg">
                        I love working in the <span className="bg-blue-600 text-white px-2 py-1 rounded">dark</span> theme to reduce eye strain.
                    </li>
                </ul>
            </div>

            {/* Terminal Section */}
            <div className="mb-12">
                <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Terminal</h3>
                <ul className="ms-4 flex flex-col gap-3 list-disc">
                    <li className="text-lg">
                        My primary terminal is{' '}
                        <span className="bg-blue-600 text-white px-2 py-1 rounded">PowerShell</span>, but I also use{' '}
                        <span className="bg-blue-600 text-white px-2 py-1 rounded">Windows Terminal</span> for a more versatile experience.
                    </li>
                    <li className="text-lg">
                        All terminals are styled with{' '}
                        <a
                            href="https://github.com/tonsky/FiraCode"
                            className="bg-blue-600 text-white px-2 py-1 rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Fira Code
                        </a>{' '}
                        font for clean and visually pleasing ligatures.
                    </li>
                    <li className="text-lg">
                        I manage my shell environment with{' '}
                        <a
                            href="https://ohmyposh.dev/"
                            className="bg-blue-600 text-white px-2 py-1 rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Oh My Posh
                        </a>{' '}
                        to customize themes and prompts.
                    </li>
                </ul>
            </div>

            {/* Desktop Apps Section */}
            <div className="mb-12">
                <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Desktop Apps</h3>
                <ul className="ms-4 flex flex-col gap-3 list-disc">
                    <li className="text-lg">
                        <a
                            href="https://www.google.com/chrome/"
                            className="bg-blue-600 text-white px-2 py-1 rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Google Chrome
                        </a>{' '}
                        for browsing and debugging using DevTools.
                    </li>
                    <li className="text-lg">
                        <a
                            href="https://www.postman.com/"
                            className="bg-blue-600 text-white px-2 py-1 rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Postman
                        </a>{' '}
                        for API development and testing.
                    </li>
                    <li className="text-lg">
                        <a
                            href="https://discord.com/"
                            className="bg-blue-600 text-white px-2 py-1 rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Discord
                        </a>{' '}
                        and{' '}
                        <a
                            href="https://slack.com/"
                            className="bg-blue-600 text-white px-2 py-1 rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Slack
                        </a>{' '}
                        for team collaboration and messaging.
                    </li>
                    <li className="text-lg">
                        <a
                            href="https://desktop.github.com/"
                            className="bg-blue-600 text-white px-2 py-1 rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Desktop
                        </a>{' '}
                        for version control, alongside CLI tools like{' '}
                        <a
                            href="https://git-scm.com/"
                            className="bg-blue-600 text-white px-2 py-1 rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            git
                        </a>
                        .
                    </li>
                </ul>
            </div>

            {/* Development Tools Section */}
            <div className="mb-12">
                <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Development Tools</h3>
                <ul className="ms-4 flex flex-col gap-3 list-disc">
                    <li className="text-lg">
                        <a
                            href="https://reactjs.org/"
                            className="bg-blue-600 text-white px-2 py-1 rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            React
                        </a>{' '}
                        and{' '}
                        <a
                            href="https://nextjs.org/"
                            className="bg-blue-600 text-white px-2 py-1 rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Next.js
                        </a>{' '}
                        for frontend development.
                    </li>
                    <li className="text-lg">
                        <a
                            href="https://nodejs.org/"
                            className="bg-blue-600 text-white px-2 py-1 rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Node.js
                        </a>{' '}
                        and{' '}
                        <a
                            href="https://expressjs.com/"
                            className="bg-blue-600 text-white px-2 py-1 rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Express.js
                        </a>{' '}
                        for backend APIs.
                    </li>
                    <li className="text-lg">
                        <a
                            href="https://www.mongodb.com/"
                            className="bg-blue-600 text-white px-2 py-1 rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            MongoDB
                        </a>{' '}
                        and{' '}
                        <a
                            href="https://www.postgresql.org/"
                            className="bg-blue-600 text-white px-2 py-1 rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            PostgreSQL
                        </a>{' '}
                        for database management.
                    </li>
                    <li className="text-lg">
                        <a
                            href="https://vercel.com/"
                            className="bg-blue-600 text-white px-2 py-1 rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Vercel
                        </a>{' '}
                        and{' '}
                        <a
                            href="https://aws.amazon.com/"
                            className="bg-blue-600 text-white px-2 py-1 rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            AWS
                        </a>{' '}
                        for deployment and cloud hosting.
                    </li>
                    <li className="text-lg">
                        I use{' '}
                        <a
                            href="https://www.figma.com/"
                            className="bg-blue-600 text-white px-2 py-1 rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Figma
                        </a>{' '}
                        for UI/UX design and wireframing.
                    </li>
                </ul>
            </div>
        </div>
    );
}
