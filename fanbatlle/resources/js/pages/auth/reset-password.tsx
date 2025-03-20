import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

import { useLanguage } from '@/components/LanguageContext';

interface ResetPasswordProps {
    token: string;
    email: string;
}

type ResetPasswordForm = {
    token: string;
    email: string;
    password: string;
    password_confirmation: string;
};


const translations = {
    en: {
        title: "Reset password",
        description: "Please enter your new password below",
        email: "Email",
        password: "Password",
        confirm_password: "Confirm password",
        reset: "Reset password",
    },
    fr: {
        title: "Réinitialiser le mot de passe",
        description: "Veuillez entrer votre nouveau mot de passe ci-dessous",
        email: "Email",
        password: "Mot de passe",
        confirm_password: "Confirmez le mot de passe",
        reset: "Réinitialiser le mot de passe",
    },
    de: {
        title: "Passwort zurücksetzen",
        description: "Bitte geben Sie unten Ihr neues Passwort ein",
        email: "E-Mail",
        password: "Passwort",
        confirm_password: "Passwort bestätigen",
        reset: "Passwort zurücksetzen",
    },
};

export default function ResetPassword({ token, email }: ResetPasswordProps) {
    const { language } = useLanguage();

    const { data, setData, post, processing, errors, reset } = useForm<Required<ResetPasswordForm>>({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout
            title={translations[language].title}
            description={translations[language].description}
        >
            <Head title={translations[language].title} /> {}

            <form onSubmit={submit}>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="email">{translations[language].email}</Label> {}
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            readOnly
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password">{translations[language].password}</Label> {}
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            autoComplete="new-password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoFocus
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder={translations[language].password}
                        />
                        <InputError message={errors.password} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password_confirmation">{translations[language].confirm_password}</Label> {}
                        <Input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            autoComplete="new-password"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            placeholder={translations[language].confirm_password}
                        />
                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <Button type="submit" className="mt-4 w-full" disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        {translations[language].reset} {}
                    </Button>
                </div>
            </form>
        </AuthLayout>
    );
}
