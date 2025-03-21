import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import React from 'react';
import Logo from '../../../img/logo.png';

type ForgotPasswordForm = {
    email: string;
};

export default function ForgotPassword() {
    const { data, setData, post, processing, errors } = useForm<ForgotPasswordForm>({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <>
            <Head title="Forgot Password" />
            <div className="min-h-screen flex items-center justify-center bg-[#111927] p-4">
                <div className="w-full max-w-md bg-white rounded-2xl p-8">
                    <div className="text-center">
                        <img 
                            src={Logo}
                            alt="Article11 Logo" 
                            className="w-32 h-32 mx-auto mb-6"
                        />
                        <h2 className="text-2xl font-bold text-[#111927] mb-8">Reset your password</h2>
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

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-[#2F2F2F] text-white py-3 rounded-md hover:bg-[#1a1a1a] transition-colors"
                        >
                            Send Reset Link
                        </button>

                        <div className="flex items-center justify-center text-sm">
                            <Link href={route('login')} className="text-gray-600 hover:text-gray-800 underline">
                                Back to login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
