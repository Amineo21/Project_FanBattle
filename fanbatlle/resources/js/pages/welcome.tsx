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
                    <div className="flex-1 flex flex-col items-center justify-center px-4">
                        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-8">
                            <img 
                                src={logo} 
                                alt="Article11 Logo" 
                                className="w-24 h-24 object-contain"
                            />
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
                    </div>
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