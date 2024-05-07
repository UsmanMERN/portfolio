import React from 'react';

export default function Techstack() {
    return (
        <div className="my-8">
            <div className="mb-8">
                <h3 className="text-3xl font-medium">Editor</h3>
                <ul className="ms-4 flex flex-col gap-2" style={{ listStyleType: 'disc' }}>
                    <li className="text-xl my-2">
                        My editor of choice is{' '}
                        <a href="" className="bg-primary text-white px-1" target="_blank" rel="noopener noreferrer">
                            Visual Studio Code
                        </a>{' '}
                        with a variety of extensions.
                    </li>
                    <li className="text-xl my-2">I am currently using the <span className="bg-primary text-white px-1">dark</span> theme.</li>
                </ul>
            </div>

            <div className="mb-8">
                <h3 className="text-3xl font-medium">Terminal</h3>
                <ul className="ms-4 flex flex-col gap-2" style={{ listStyleType: 'disc' }}>
                    <li className="text-xl my-2">I use the <span className="bg-primary text-white px-1">PowerShell</span> Terminal.</li>
                    <li className="text-xl my-2">
                        All terminals use{' '}
                        <a href="https://github.com/tonsky/FiraCode" className="bg-primary text-white px-1" target="_blank" rel="noopener noreferrer">
                            Fira Code
                        </a>{' '}
                        as the font because ligatures are awesome!
                    </li>
                </ul>
            </div>

            <div className="mb-8">
                <h3 className="text-3xl font-medium">Desktop Apps</h3>
                <ul className="ms-4 flex flex-col gap-2" style={{ listStyleType: 'disc' }}>
                    <li className="text-xl my-2">
                        <a href="https://www.google.com" className="bg-primary text-white px-1" target="_blank" rel="noopener noreferrer">
                            Google Chrome
                        </a>{' '}
                        is my main browser for both browsing and development.
                    </li>
                    <li className="text-xl my-2">
                        <a href="https://www.postman.com/" className="bg-primary text-white px-1" target="_blank" rel="noopener noreferrer">
                            Postman
                        </a>{' '}
                        for API development and testing.
                    </li>
                    <li className="text-xl my-2">
                        <a href="https://www.discord.com/" className="bg-primary text-white px-1" target="_blank" rel="noopener noreferrer">
                            Discord
                        </a>{' '}
                        and{' '}
                        <a href="https://www.skype.com/" className="bg-primary text-white px-1" target="_blank" rel="noopener noreferrer">
                            Skype
                        </a>{' '}
                        for messaging and calls.
                    </li>
                    <li className="text-xl my-2">
                        <a href="https://git-scm.com/" className="bg-primary text-white px-1" target="_blank" rel="noopener noreferrer">
                            git
                        </a>{' '}
                        and{' '}
                        <a href="https://github.com/" className="bg-primary text-white px-1" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>{' '}
                        for version control.
                    </li>
                </ul>
            </div>
        </div>
    );
}