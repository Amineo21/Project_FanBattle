import { Head, Link, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import React from 'react';
import Logo from '../../../img/logo.png'

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

// At the top of the file, after the imports
type FormData = {
    email: string;
    password: string;
    remember: boolean;
};

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<FormData>({
        email: '',
        password: '',
        remember: false,
    });

    const getCsrfToken = (): string => {
        const token = document.head.querySelector('meta[name="csrf-token"]');
        return token ? token.getAttribute('content') || '' : '';
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        // On ajoute le token CSRF dans les en-têtes
        post(route('login'), {
            headers: {
                'X-CSRF-TOKEN': getCsrfToken(),
            },
        });
    };

    return (
        <>
            <Head title="Login" />
            <div className="min-h-screen flex items-center justify-center bg-[#111927] p-4">
                <div className="w-full max-w-md bg-white rounded-2xl p-8">
                    <div className="text-center">
                        <img
                            src={Logo}
                            alt="Article11 Logo"
                            className="w-32 h-32 mx-auto mb-6"
                        />
                        <h2 className="text-2xl font-bold text-[#111927] mb-8">Connect to your account</h2>
                    </div>

                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-0 placeholder-gray-600 text-black caret-black"
                                placeholder="Value"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={e => setData('password', e.target.value)}
                                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-0 placeholder-gray-600 text-black caret-black"
                                placeholder="Value"
                            />
                        </div>

                        <Link
                            href="/udash"
                            className="w-full bg-[#2F2F2F] text-white py-3 rounded-md hover:bg-[#1a1a1a] transition-colors text-center block"
                        >
                            Sign In
                        </Link>

                        <div className="flex items-center justify-between text-sm">
                            <Link href={route('password.request')} className="text-blue-600 hover:text-blue-800 underline">
                                Forgot password?
                            </Link>
                            <Link href={route('register')} className="text-gray-600 hover:text-gray-800 underline">
                                Don't have an account yet?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}