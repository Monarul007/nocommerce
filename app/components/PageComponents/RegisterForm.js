"use client";

import { Input } from "@/components/ui/input"
import Link from 'next/link'
import {Button} from "@/components/ui/button"
import { LockIcon, MailIcon, User2Icon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

const RegisterForm = () => {

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
            title: "Success! You can now log in.",
            description: "You have successfully created an account.",
            // action: <ToastAction altText="Try again">Login</ToastAction>,
        });
    }

    return (
        <div>
            <h1 className="block text-xl font-semibold py-4 text-center">Create an Account</h1>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6 block">
                    <div className="relative">
                        <User2Icon className="text-gray-500 pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3"/>
                        <Input
                            type="text"
                            placeholder="Name"
                            className="w-full py-6 pl-10"
                            {...register("name", { required: true })}
                        />
                    </div>
                    {errors.name && <span className="validator-text">This field is required</span>}
                </div>
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
                <div className="items-center flex mb-3 space-x-2">
                    <Checkbox id="terms1" />
                    <div className="grid gap-1.5 leading-none">
                        <label htmlFor="terms1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            I agree with the <Link className="text-bold text-base" href={'/terms'}>terms & conditions.</Link>
                        </label>
                    </div>
                </div>
                <Button type="submit" className="bg-base hover:bg-[#f58848] py-6 max-w-md w-full">
                    Sign Up
                </Button>
            </form>
            <p className="text-center">Already have an account? <Link href={'/login'} className="font-semibold">Sign in</Link></p>
        </div>
    )
}

export default RegisterForm;