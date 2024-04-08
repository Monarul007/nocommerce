import GuestLayout from "@/app/components/Layouts/GuestLayout"
import LoginForm from "@/app/components/PageComponents/LoginForm"
export default function LoginPage(){
    return (
        <GuestLayout>
            <LoginForm />
        </GuestLayout>
    )
}

export const metadata = {
    title: "Login",
    description: "Login Page"
}