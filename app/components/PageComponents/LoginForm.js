"use client";

import { Input } from "@/components/ui/input"
import Link from 'next/link'
import {Button} from "@/components/ui/button"
import { LockIcon, MailIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast"

const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { toast } = useToast();
    
    const onSubmit = (data) => {
        console.log(data);
        fireToast();
    }

    const fireToast = () => {
        toast({
            title: "Success!",
            description: "You have successfully logged in.",
            // action: <ToastAction altText="Try again">Login</ToastAction>,
        });
    }

    return (
        <div>
            <h1 className="block text-xl font-semibold py-4 text-center">Login to your account</h1>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6 block">
                    <div className="relative">
                        <MailIcon className="text-gray-500 pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3"/>
                        <Input
                            type="email"
                            placeholder="Email"
                            className="w-full py-6 pl-10"
                            {...register("email", { required: true })}
                        />
                    </div>
                    {errors.email && <span className="validator-text">This field is required</span>}
                </div>
                <div className="mb-4 block">
                    <div className="relative">
                        <LockIcon className="text-gray-500 pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3"/>
                        <Input
                            type="password"
                            placeholder="Password"
                            className="w-full py-6 pl-10"
                            {...register("password", { required: true })}
                        />
                    </div>
                    {errors.password && <span className="validator-text block">This field is required</span>}
                </div>
                <Button type="submit" className="bg-base hover:bg-[#f58848] py-6 max-w-md w-full">
                    Login
                </Button>
            </form>
            <p className="text-center">Don't have an account? <Link href={'/register'} className="font-semibold">Sign up</Link></p>
        </div>
    )
}

export default LoginForm;