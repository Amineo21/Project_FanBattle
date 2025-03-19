import { Link } from '@inertiajs/react';
import Logo from '../../img/logo.png';
import '../../css/app.css';



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
    return (
        <nav className="w-full flex items-center justify-between px-4 py-auto bg-white shadow-md ">

            <div className="flex items-center">
                <img src={Logo} alt="Article 11" className="w-20" />
            </div>

            <div className="flex space-x-8">
                <Link href="/community" className="text-lg font-medium text-gray-700  hover:text-black transition-colors relative group">
                    Community
                    <EuStars />
                </Link>
                <Link href="/contact" className="text-lg font-medium text-gray-700  hover:text-black transition-colors relative group">Contact
                    <EuStars />
                </Link>
                <Link href="/link" className="text-lg font-medium text-gray-700  hover:text-black transition-colors relative group">Link
                    <EuStars />
                </Link>
            </div>

            <div>
                <button className="bg-[#D4AF37] text-white px-3 py-1.5 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Sign out
                </button>
            </div>
        </nav>
    );
}