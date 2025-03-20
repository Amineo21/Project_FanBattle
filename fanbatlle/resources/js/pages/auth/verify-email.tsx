import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import AuthLayout from '@/layouts/auth-layout';
import { useLanguage } from '@/components/LanguageContext';

// ✅ Traductions
const translations = {
    en: {
        title: "Verify email",
        description: "Please verify your email address by clicking on the link we just emailed to you.",
        link_sent: "A new verification link has been sent to the email address you provided during registration.",
        resend: "Resend verification email",
        logout: "Log out",
        head_title: "Email verification",
    },
    fr: {
        title: "Vérifiez votre email",
        description: "Veuillez vérifier votre adresse e-mail en cliquant sur le lien que nous venons de vous envoyer.",
        link_sent: "Un nouveau lien de vérification a été envoyé à l'adresse e-mail que vous avez fournie lors de l'inscription.",
        resend: "Renvoyer l'email de vérification",
        logout: "Se déconnecter",
        head_title: "Vérification de l'email",
    },
    de: {
        title: "E-Mail bestätigen",
        description: "Bitte bestätigen Sie Ihre E-Mail-Adresse, indem Sie auf den Link klicken, den wir Ihnen gerade geschickt haben.",
        link_sent: "Ein neuer Bestätigungslink wurde an die E-Mail-Adresse gesendet, die Sie bei der Registrierung angegeben haben.",
        resend: "Bestätigungs-E-Mail erneut senden",
        logout: "Abmelden",
        head_title: "E-Mail-Bestätigung",
    },
};

export default function VerifyEmail({ status }: { status?: string }) {
    const { language } = useLanguage();

    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('verification.send'));
    };

    return (
        <AuthLayout
            title={translations[language].title}
            description={translations[language].description}
        >
            <Head title={translations[language].head_title} /> {}

            {status === 'verification-link-sent' && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    {translations[language].link_sent} {}
                </div>
            )}

            <form onSubmit={submit} className="space-y-6 text-center">
                <Button disabled={processing} variant="secondary">
                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                    {translations[language].resend} {}
                </Button>

                <TextLink href={route('logout')} method="post" className="mx-auto block text-sm">
                    {translations[language].logout} {}
                </TextLink>
            </form>
        </AuthLayout>
    );
}
