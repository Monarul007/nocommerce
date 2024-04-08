import GuestLayout from "@/app/components/Layouts/GuestLayout"
import RegisterForm from "@/app/components/PageComponents/RegisterForm"
export default function RegisterPage(){
    return (
        <GuestLayout>
            <RegisterForm />
        </GuestLayout>
    )
}

export const metadata = {
    title: "Register",
    description: "Register Page"
}