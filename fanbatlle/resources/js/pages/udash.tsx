import { Link } from '@inertiajs/react';
import '../../css/app.css';
import Logo from '../../img/logo.png';
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



const statsCards = [
    {
        title: 'Laws/Ideas consulted',
        value: '0000',
        unit: '',
        icon: 'fas fa-book-open'
    },
    {
        title: 'Percentage of approved',
        value: '0000',
        unit: '%',
        icon: 'fas fa-check-circle'
    },
    {
        title: 'Percentage of neutral',
        value: '0000',
        unit: '%',
        icon: 'fas fa-balance-scale'
    },
    {
        title: 'Percentage of against',
        value: '0000',
        unit: '%',
        icon: 'fas fa-times-circle'
    }
];

export default function UserDashboard() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="w-full flex items-center justify-between px-4 py-4 bg-[#111927] shadow-md relative">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                            <i className="fas fa-user text-gray-600 text-xl"></i>
                        </div>
                        <div className="ml-3">
                            <p className="text-white font-medium">Username</p>
                            <p className="text-sm text-gray-400">RealName</p>
                        </div>
                    </div>
                </div>

                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="w-6 h-0.5 bg-white mb-1.5"></div>
                    <div className="w-6 h-0.5 bg-white mb-1.5"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                </button>

                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/community" className="text-lg font-medium text-white hover:text-[#D4AF37] transition-colors relative group">
                        Community
                        <EuStars />
                    </Link>
                    <Link href="/" className="text-lg font-medium text-white hover:text-[#D4AF37] transition-colors relative group">
                        Dashboard
                        <EuStars />
                    </Link>
                    <Link href="/link" className="text-lg font-medium text-white hover:text-[#D4AF37] transition-colors relative group">
                        Link
                        <EuStars />
                    </Link>
                    <Link
                        href="/welcome"
                        className="bg-[#D4AF37] hover:bg-yellow-400 text-[#111927] px-4 py-1.5 rounded-md text-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                        Sign out
                    </Link>
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

                    <div className="px-8 pb-8">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"></div>
                        <Link
                            href="/welcome"
                            className="block w-full bg-[#D4AF37] hover:bg-yellow-400 text-[#111927] py-4 rounded-lg text-lg font-medium text-center transition-all duration-300 hover:shadow-lg hover:scale-105"
                        >
                            Sign out
                        </Link>
                    </div>
                </div>
            </nav>


            <div className="min-h-screen bg-gray-50">
                <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">

                        <div className="lg:w-1/2 flex flex-col items-center justify-center min-h-[80vh]">
                            <div className="w-full max-w-lg">
                                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Welcome {'{Username}'}</h1>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {statsCards.map((card, index) => (
                                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-300">
                                            <div className="flex items-center gap-3 mb-2">
                                                <i className={`${card.icon} text-[#D4AF37]`}></i>
                                                <h3 className="text-sm font-medium text-gray-600">{card.title}</h3>
                                            </div>
                                            <p className="text-2xl font-bold text-gray-800">{card.value}{card.unit}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="flex gap-4 mb-6">
                                <button className="px-4 py-2 bg-green-100 text-green-700 rounded-md">
                                    Approved
                                </button>
                                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md">
                                    Neutral
                                </button>
                                <button className="px-4 py-2 bg-red-100 text-red-700 rounded-md">
                                    Against
                                </button>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">European Approval Map</h2>
                                <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg h-[calc(100%-4rem)]">
                                    <div className="flex items-center justify-center h-full text-gray-500">
                                        Interactive Map Coming Soon
                                    </div>
                                </div>
                                <p className="mt-4 text-sm text-gray-600">
                                    (law/idea) approved by (percentage) of the young european
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}