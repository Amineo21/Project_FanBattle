import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import logo from '../../img/logo.png';
import '../../css/app.css'

const EuStars = () => (
    <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex">
            {[...Array(5)].map((_, i) => (
                <span 
                    key={i} 
                    className="text-yellow-400 text-xs transform origin-center animate-star"
                    style={{
                        animation: `starRotate 2s infinite ${i * 0.2}s`,
                        opacity: 0.8,
                        marginLeft: '2px'
                    }}
                >
                    ★
                </span>
            ))}
        </div>
        <div className="absolute inset-0 bg-blue-500/5 blur-sm rounded-lg"></div>
    </div>
);

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome" />
            
            <div className="min-h-screen flex flex-col md:flex-row">
                <div className="hidden md:flex w-full md:w-1/2 bg-white items-center justify-center py-8 md:py-0">
                    <img 
                        src={logo} 
                        alt="Article11 Logo" 
                        className="w-64 md:w-96 h-64 md:h-96 object-contain"
                    />
                </div>

                {/* Mobile version */}
                <div className="flex md:hidden min-h-screen w-full bg-[#111927] flex-col">
                    <nav className="w-full flex justify-end p-4">
                        {auth.user ? (
                            <Link href="/dashboard" className="bg-white/90 hover:bg-white text-[#111927] px-4 py-1.5 rounded-md text-sm">
                                Dashboard
                            </Link>
                        ) : (
                            <div className="flex gap-2">
                                <Link href="/login" className="bg-white/90 hover:bg-white text-[#111927] px-4 py-1.5 rounded-md text-sm">
                                    Sign in
                                </Link>
                                <Link href="/register" className="bg-[#D4AF37] hover:bg-yellow-400 text-[#111927] px-4 py-1.5 rounded-md text-sm">
                                    Register
                                </Link>
                            </div>
                        )}
                    </nav>
                </div>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row">
                        <div className="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                            <h1 className="mb-1 font-medium">Let's get started</h1>
                            <p className="mb-2 text-[#706f6c] dark:text-[#A1A09A]">
                                Laravel has an incredibly rich ecosystem.
                                <br />
                                We suggest starting with the following.
                            </p>
                            <ul className="mb-4 flex flex-col lg:mb-6">
                                <li className="relative flex items-center gap-4 py-2 before:absolute before:top-1/2 before:bottom-0 before:left-[0.4rem] before:border-l before:border-[#e3e3e0] dark:before:border-[#3E3E3A]">
                                    <span className="relative bg-white py-1 dark:bg-[#161615]">
                                        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#e3e3e0] bg-[#FDFDFC] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] dark:border-[#3E3E3A] dark:bg-[#161615]">
                                            <span className="h-1.5 w-1.5 rounded-full bg-[#dbdbd7] dark:bg-[#3E3E3A]" />
                                        </span>
                                    </span>
                                    <span>
                                        Read the
                                        <a
                                            href="https://laravel.com/docs"
                                            target="_blank"
                                            className="ml-1 inline-flex items-center space-x-1 font-medium text-[#f53003] underline underline-offset-4 dark:text-[#FF4433]"
                                        >
                                            <span>Documentation</span>
                                            <svg
                                                width={10}
                                                height={11}
                                                viewBox="0 0 10 11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-2.5 w-2.5"
                                            >
                                                <path
                                                    d="M7.70833 6.95834V2.79167H3.54167M2.5 8L7.5 3.00001"
                                                    stroke="currentColor"
                                                    strokeLinecap="square"
                                                />
                                            </svg>
                                        </a>
                                    </span>
                                </li>
                                <li className="relative flex items-center gap-4 py-2 before:absolute before:top-0 before:bottom-1/2 before:left-[0.4rem] before:border-l before:border-[#e3e3e0] dark:before:border-[#3E3E3A]">
                                    <span className="relative bg-white py-1 dark:bg-[#161615]">
                                        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#e3e3e0] bg-[#FDFDFC] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] dark:border-[#3E3E3A] dark:bg-[#161615]">
                                            <span className="h-1.5 w-1.5 rounded-full bg-[#dbdbd7] dark:bg-[#3E3E3A]" />
                                        </span>
                                    </span>
                                    <span>
                                        Watch video tutorials at
                                        <a
                                            href="https://laracasts.com"
                                            target="_blank"
                                            className="ml-1 inline-flex items-center space-x-1 font-medium text-[#f53003] underline underline-offset-4 dark:text-[#FF4433]"
                                        >
                                            <span>Laracasts</span>
                                            <svg
                                                width={10}
                                                height={11}
                                                viewBox="0 0 10 11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-2.5 w-2.5"
                                            >
                                                <path
                                                    d="M7.70833 6.95834V2.79167H3.54167M2.5 8L7.5 3.00001"
                                                    stroke="currentColor"
                                                    strokeLinecap="square"
                                                />
                                            </svg>
                                        </a>
                                    </span>
                                </li>
                            </ul>
                            <ul className="flex gap-3 text-sm leading-normal">
                                <li>
                                    <a
                                        href="https://cloud.laravel.com"
                                        target="_blank"
                                        className="inline-block rounded-sm border border-black bg-[#1b1b18] px-5 py-1.5 text-sm leading-normal text-white hover:border-black hover:bg-black dark:border-[#eeeeec] dark:bg-[#eeeeec] dark:text-[#1C1C1A] dark:hover:border-white dark:hover:bg-white"
                                    >
                                        Deploy now
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-4 text-center">Welcome to Article11</h1>
                        <p className="text-yellow-400 text-sm mb-8 text-center">
                            "We want to know what young europeans think"
                        </p>
                        <Link 
                            href="/login" 
                            className="bg-white text-[#111927] px-12 py-2 rounded-md text-base font-medium"
                        >
                            See more
                        </Link>
                    </main>
                </div>

                
                <div className="hidden md:block w-full md:w-1/2 bg-[#111927] text-white relative min-h-screen md:min-h-full">
                    <nav className="absolute w-full flex items-center justify-between px-4 md:px-12 pt-4 md:pt-6">
                        <div className="w-32"></div>
                      
                        <div className="flex items-center">
                            {auth.user ? (
                                <Link href="/dashboard" className="bg-white/90 hover:bg-white text-[#111927] px-3 md:px-4 py-1.5 rounded-md text-sm transition-colors">
                                    Dashboard
                                </Link>
                            ) : (
                                <div className="flex items-center gap-2 md:gap-3 mr-4">
                                    <Link href="/login" className="bg-white/90 hover:bg-white text-[#111927] px-3 md:px-4 py-1.5 rounded-md text-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                                        Sign in
                                    </Link>
                                    <Link href="/register" className="bg-[#D4AF37] hover:bg-yellow-400 text-[#111927] px-3 md:px-4 py-1.5 rounded-md text-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>
                    </nav>


                    <div className="flex flex-col items-center justify-center h-full space-y-4 md:space-y-6 px-4 md:px-8 pt-20 md:pt-0">
                        <h1 className="text-3xl md:text-5xl font-bold text-center">Welcome to Article11</h1>
                        <p className="text-lg md:text-xl text-yellow-400 text-center">
                            "We want to know what young europeans think"
                        </p>
                        <Link 
                            href="/login" 
                            className="bg-white hover:bg-white/90 text-[#111927] px-6 md:px-8 py-2 rounded-full mt-4 md:mt-8 text-sm md:text-base transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-opacity-100"
                        >
                            See more
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}