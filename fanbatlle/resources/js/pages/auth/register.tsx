import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import React from 'react';
import Logo from '../../../img/logo.png';
import countries from '../../components/JSON/country.json';

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    birthday: string;
    country: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        birthday: '',
        country: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        // console.log(data);

        post(route('register'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Register" />
            <div className="min-h-screen flex items-center justify-center bg-[#111927] p-4">
                <div className="w-full max-w-md bg-white rounded-2xl p-8">
                    <div className="text-center">
                        <img
                            src={Logo}
                            alt="Article11 Logo"
                            className="w-32 h-32 mx-auto mb-6"
                        />
                        <h2 className="text-2xl font-bold text-[#111927] mb-8">Create your account</h2>
                    </div>

                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-0 placeholder-gray-600 text-black caret-black"
                                placeholder="Value"
                            />
                        </div>

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

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Date de naissance</label>
                            <input
                                type="date"
                                value={data.birthday}
                                onChange={e => {
                                    const selectedDate = e.target.value; // Le format sera déjà YYYY-MM-DD
                                    const today = new Date();
                                    const minDate = new Date(today.getFullYear() - 25, today.getMonth(), today.getDate()); // 25 ans max
                                    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate()); // 18 ans min

                                    // Vérification si la date sélectionnée est dans l'intervalle
                                    if (selectedDate >= minDate.toISOString().split('T')[0] && selectedDate <= maxDate.toISOString().split('T')[0]) {
                                        setData('birthday', selectedDate);
                                    }
                                }}
                                min={new Date(new Date().getFullYear() - 25, new Date().getMonth(), new Date().getDate()).toISOString().split('T')[0]}
                                max={new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate()).toISOString().split('T')[0]}
                                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-0 placeholder-gray-600 text-black caret-black"
                            />

                            {errors.birthday && <p className="text-red-500 text-sm mt-1">{errors.birthday}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Pays</label>
                            <input
                                type="text"
                                list="country-list"
                                value={data.country}
                                onChange={e => setData('country', e.target.value)}
                                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-0 text-black"
                                placeholder="Where are you from ?"
                            />
                            <datalist id="country-list">
                                {countries.map((country) => (
                                    <option key={country.code} value={country.name} />
                                ))}
                            </datalist>
                            {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-[#2F2F2F] text-white py-3 rounded-md hover:bg-[#1a1a1a] transition-colors"
                        >
                            Register
                        </button>

                        <div className="flex items-center justify-center text-sm">
                            <Link href={route('login')} className="text-gray-600 hover:text-gray-800 underline">
                                Already have an account?
                            </Link>
                        </div>

                        {Object.keys(errors).map((field) => (
                            <div key={field} className="text-red-500 text-sm mt-1">
                                {errors[field as keyof RegisterForm]}
                            </div>
                        ))}
                    </form>
                </div>
            </div>
        </>
    );
}
