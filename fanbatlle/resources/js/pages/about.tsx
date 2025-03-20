import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import Logo from '../../img/logo.png';
import '../../css/app.css';
import TextLink from '@/components/text-link';
import { useState } from 'react';

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

export default function Navbar() {
    const { auth } = usePage<SharedData>().props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="w-full flex items-center justify-between px-4 py-4 bg-white shadow-md relative">
                <div className="flex items-center">
                    <img src={Logo} alt="Article 11" className="w-16 md:w-20" />
                </div>

                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
                    <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
                    <div className="w-6 h-0.5 bg-gray-800"></div>
                </button>

                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/community" className="text-lg font-medium text-gray-700 hover:text-black transition-colors relative group">
                        Community
                        <EuStars />
                    </Link>
                    <Link href="/" className="text-lg font-medium text-gray-700 hover:text-black transition-colors relative group">
                        Dashboard
                        <EuStars />
                    </Link>
                    <Link href="/link" className="text-lg font-medium text-gray-700 hover:text-black transition-colors relative group">
                        Link
                        <EuStars />
                    </Link>
                    <div className="flex gap-2">
                        {auth.user ? (
                            <Link href={route('logout')} method="post" as="button" className="bg-[#D4AF37] hover:bg-yellow-400 text-[#111927] px-4 py-1.5 rounded-md text-sm">
                                Signout
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
                    </div>
                </div>

                <div
                    className={`
                        absolute top-full left-0 right-0 flex-col py-8 shadow-lg
                        transform transition-all duration-300 ease-in-out
                        bg-gradient-to-b from-white to-gray-50 min-h-[calc(100vh-4rem)]
                        ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
                        md:hidden
                    `}
                >
                    <div className="flex-1">
                        <Link
                            href="/community"
                            className="block w-full text-lg font-medium text-gray-800 hover:text-[#D4AF37] transition-colors duration-200 px-8 py-4 hover:bg-gray-100/50"
                        >
                            Community
                        </Link>
                        <Link
                            href="/contact"
                            className="block w-full text-lg font-medium text-gray-800 hover:text-[#D4AF37] transition-colors duration-200 px-8 py-4 hover:bg-gray-100/50"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/link"
                            className="block w-full text-lg font-medium text-gray-800 hover:text-[#D4AF37] transition-colors duration-200 px-8 py-4 hover:bg-gray-100/50"
                        >
                            Link
                        </Link>
                    </div>

                    <div className="flex gap-2">
                        {auth.user ? (
                            <Link href='/udash' className="bg-[#D4AF37] hover:bg-yellow-400 text-[#111927] px-4 py-1.5 rounded-md text-sm">
                                Try out
                            </Link>
                        ) : (
                            <Link href={route('logout')} method="post" as="button" className="bg-white/90 hover:bg-white text-[#111927] px-4 py-1.5 rounded-md text-sm">
                                Signout
                            </Link>
                        )}
                    </div>
                </div>

                <div
                    className={`
                        fixed top-0 left-0 right-0 bottom-0 flex-col py-8
                        transform transition-all duration-300 ease-in-out
                        bg-white min-h-screen z-50
                        ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
                        md:hidden
                    `}
                >
                    <div className="flex justify-end px-8 mb-8">
                        <button onClick={() => setIsMenuOpen(false)} className="p-2">
                            <div className="w-6 h-0.5 bg-gray-800 transform rotate-45 translate-y-0.5"></div>
                            <div className="w-6 h-0.5 bg-gray-800 transform -rotate-45 -translate-y-0"></div>
                        </button>
                    </div>

                    <div className="flex justify-center mb-8">
                        <img src={Logo} alt="Article 11" className="w-24" />
                    </div>

                    <div className="flex-1">
                        <Link
                            href="/community"
                            className="block w-full text-xl font-medium text-gray-800 hover:text-[#D4AF37] transition-colors duration-200 px-8 py-6 text-center"
                        >
                            Community
                        </Link>
                        <Link
                            href="/contact"
                            className="block w-full text-xl font-medium text-gray-800 hover:text-[#D4AF37] transition-colors duration-200 px-8 py-6 text-center"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/link"
                            className="block w-full text-xl font-medium text-gray-800 hover:text-[#D4AF37] transition-colors duration-200 px-8 py-6 text-center"
                        >
                            Link
                        </Link>
                    </div>

                    <div className="flex gap-2">
                        <Link href="/login" className="bg-white/90 hover:bg-white text-[#111927] px-4 py-1.5 rounded-md text-sm">
                            Sign in
                        </Link>
                        <Link href="/register" className="bg-[#D4AF37] hover:bg-yellow-400 text-[#111927] px-4 py-1.5 rounded-md text-sm">
                            Register
                        </Link>
                    </div>
                </div>
            </nav>




            <header className="bg-[#111927] py-8 md:py-32 text-center px-4">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">Welcome to Article11</h1>
                <p className="mb-5 text-lg md:text-xl text-[#D4AF37]">"Your opinion is our matter"</p>
                {auth.user ? (
                    <Link href='/udash' className="bg-[#D4AF37] hover:bg-yellow-400 text-[#111927] px-4 py-1.5 rounded-md text-sm">
                        Try out
                    </Link>
                ) : (
                    <TextLink href={route('logout')} method="post" className="bg-[#D4AF37] hover:bg-yellow-400 text-[#111927] px-4 py-1.5 rounded-md text-sm">
                        Try out
                    </TextLink>
                )}

            </header>

            <main className="p-8 pt-16 bg-white">
                <h2 className="text-4xl font-bold mb-12 text-[#111927] relative pl-4 after:content-[''] after:absolute after:bottom-0 after:left-4 after:w-24 after:h-1 after:bg-[#D4AF37]">
                    Law/Subject to debate !
                </h2>
                <div className="griddy grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {[...Array(6)].map((_, index) => (
                        <div key={index}
                            className=" cursor-pointer scale-transition hover-scale bg-white rounded-lg p-6 relative border border-gray-100
                                hover:border-[#D4AF37]/30 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                        >
                            <div className="relative">
                                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 rounded-md mb-4"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <i className="fas fa-gavel text-4xl text-[#D4AF37]/50"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[#111927] border-b border-transparent hover:border-[#D4AF37] transition-all duration-300 inline-block">
                                    Debate Topic {index + 1}
                                </h3>
                                <div className="flex flex-col mt-4">
                                    <h4 className="text-lg font-medium text-left mb-2 text-[#111927]">Majority</h4>
                                    <div className="flex items-center space-x-4 bg-gray-50 p-3 rounded-md">
                                        <span className="text-green-600 font-medium flex items-center">
                                            <i className="fas fa-check-circle mr-2"></i>For
                                        </span>
                                        <span className="text-[#111927] opacity-50">•</span>
                                        <span className="text-[#111927] font-medium flex items-center">
                                            <i className="fas fa-balance-scale mr-2"></i>Neutral
                                        </span>
                                        <span className="text-[#111927] opacity-50">•</span>
                                        <span className="text-red-600 font-medium flex items-center">
                                            <i className="fas fa-times-circle mr-2"></i>Against
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>


            <footer className="bg-white py-16 px-8 border-t">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-[#111927]">Use cases</h3>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><i className="fas fa-palette mr-2"></i>UI design</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><i className="fas fa-user-friends mr-2"></i>UX design</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><i className="fas fa-sitemap mr-2"></i>Wireframing</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><i className="fas fa-project-diagram mr-2"></i>Diagramming</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><i className="fas fa-lightbulb mr-2"></i>Brainstorming</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><i className="fas fa-users mr-2"></i>Team collaboration</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-[#111927]">Explore</h3>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><i className="fas fa-pencil-ruler mr-2"></i>Design</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><i className="fas fa-layer-group mr-2"></i>Prototyping</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><i className="fas fa-code mr-2"></i>Development features</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><i className="fas fa-th mr-2"></i>Design systems</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><i className="fas fa-handshake mr-2"></i>Collaboration features</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><i className="fas fa-tasks mr-2"></i>Design process</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-[#111927]">Resources</h3>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><i className="fas fa-blog mr-2"></i>Blog</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><i className="fas fa-star mr-2"></i>Best practices</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><i className="fas fa-question-circle mr-2"></i>Support</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><i className="fas fa-code-branch mr-2"></i>Developers</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><i className="fas fa-book mr-2"></i>Resource library</Link></li>
                        </ul>
                        <div className="flex space-x-6 mt-8">
                            <Link href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors text-xl">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors text-xl">
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors text-xl">
                                <i className="fab fa-youtube"></i>
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors text-xl">
                                <i className="fab fa-linkedin"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}