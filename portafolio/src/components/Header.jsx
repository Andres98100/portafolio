import { Typewriter } from 'react-simple-typewriter';
import perfil from '../assets/img/perfil.jpeg'
import CV_EN from '../assets/documents/Dev_Jaime_Rodriguez_CV_SoftwareDeveloper_EN.pdf'
import CV_SP from '../assets/documents/Dev_Jaime_Rodriguez_CV_SoftwareDeveloper.pdf'

const SimpleHeader = () => {
    return (
        <main>
            <div id='aboutMe' className=" relative px-6 lg:px-8">
                <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
                    <div>
                        <div className=''>
                            <img
                                src={perfil}
                                className='mx-auto rounded-full w-40 h-40 mb-10'
                                style={{
                                    marginTop: '-5rem', zIndex: '1'
                                }}
                            />
                            <h1 className="text-4xl my-4 font-bold tracking-tight pb-24 sm:text-center sm:text-7xl text-white">
                                Hi
                                <div></div>
                                <span style={{ color: 'white', fontWeight: 'bold' }}>
                                    <Typewriter
                                        words={['I\'m Jaime Andres', 'welcome to my website!']}
                                        loop={0}
                                        cursor
                                        cursorStyle='.'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </h1>
                            <div className="text-lg leading-8 text-gray-400 sm:text-center">
                                <div className='mb-32 text-lg text-center leading-8'>
                                    I am a software developer with a strong technical background and a passion for creating technical skills and a passion for creating efficient and robust solutions. My focus is
                                    my focus is on the development of both backend and frontend applications, acquiring experience in the implementation and
                                    implementation and maintenance of software infrastructures. I prioritize clean and readable code
                                    code, applying the best development practices. I have collaborative
                                    collaborative skills and ability to work in multidisciplinary teams.<br />
                                </div>
                                <section id='skills' className='text-center mb-28 scroll-mt-28 sm:mb-20 max-w-[53rem] m-auto'>
                                    <h2 className='text-4xl font-medium mb-8'>My skills</h2>
                                    <p className='mb-8'>I acquired my technical skills by working on both individual and team projects. During my studies in Systems Engineering at university, I built a strong foundation of knowledge which I further honed at Holberton School, where I successfully completed my studies. This combination of academic background and hands-on experience has comprehensively prepared me to tackle challenges in the field of technology and software development</p>
                                    <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
                                        <li>
                                            <img
                                                className=' rounded-lg'
                                                src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white"
                                                alt="python"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className='rounded-lg'
                                                src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
                                                alt="nodejs"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className='rounded*lg'
                                                src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                                                alt="javascript"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className='rounded*lg'
                                                src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                                                alt="typescript"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className='rounded-lg'
                                                src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"
                                                alt="java"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className='rounded-lg'
                                                src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white"
                                                alt="c"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className='rounded-lg'
                                                src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
                                                alt="mysql"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className='rounded-lg'
                                                src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
                                                alt="postgresql"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className='rounded-lg'
                                                src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"
                                                alt="django"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className='rounded-lg'
                                                src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"
                                                alt="flask"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className='rounded-lg'
                                                src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"
                                                alt="expressjs"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className='rounded-lg'
                                                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                                                alt="react"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className='rounded-lg'
                                                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                                                alt="html5"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className='rounded-lg'
                                                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                                                alt="css3"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className='rounded-lg'
                                                src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                                                alt="tailwindcss"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className='rounded-lg'
                                                src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
                                                alt="linux"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className='rounded-lg'
                                                src="https://img.shields.io/badge/Powershell-2CA5E0?style=for-the-badge&logo=powershell&logoColor=white"
                                                alt="powershell"
                                            />
                                        </li>

                                    </ul>
                                </section>
                            </div>
                            <div className="mt-20 gap-y-2 flex flex-col sm:flex-row gap-x-4 sm:justify-center justify-center">
                                <a
                                    href="https://www.linkedin.com/in/andresjrs/"
                                    className="flex rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                                    target='_blank'
                                    rel="noopener noreferrer"

                                >
                                    Linkln
                                    <span className="text-indigo-200" aria-hidden="true">
                                        &rarr;
                                    </span>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="https://github.com/Andres98100"
                                    download
                                    className="flex rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                    <span className="text-gray-400" aria-hidden="true">
                                        &rarr;
                                    </span>
                                    <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" className="octicon octicon-mark-github">
                                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                                    </svg>
                                </a>
                                <a
                                    href={CV_EN}
                                    download="CV_Jaime_Rodriguez_CV_SoftwareDeveloper_EN.pdf"
                                    className="flex rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    CV_EN
                                    <span className="text-gray-400" aria-hidden="true">
                                        &rarr;
                                    </span>
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" /></svg>
                                </a>
                                <a
                                    href={CV_SP}
                                    download="CV_Jaime_Rodriguez_CV_SoftwareDeveloper.pdf"
                                    className="flex rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    CV_SP   
                                    <span className="text-gray-400" aria-hidden="true">
                                        &rarr;
                                    </span>
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" /></svg>
                                </a>
                            </div>
                        </div>
                        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SimpleHeader;