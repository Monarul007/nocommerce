"use client";

import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import TourAction from "./TourAction"

export function Tour() {

    const [open, setOpen] = useState(false);
    const [isContinue, setIsContinue] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (!localStorage.getItem('previouslyVisited')) {
                setOpen(true);
                setTimeout(() => {
                    // setOpen(false);
                    localStorage.setItem('previouslyVisited', 'true');
                    setIsContinue(true);
                }, 5000)
                // localStorage.setItem('previouslyVisited', 'true');
            }
        }
    }, [open])

    return (<>
        <Drawer open={open} onOpenChange={setOpen}>
            {/* <DrawerTrigger>Open</DrawerTrigger> */}
            <DrawerContent className={`top-0 mt-0 rounded-none ${isContinue ? "bg-[url('/images/mall.jpg')]" : "bg-base-gradient"} border-none bg-auto bg-no-repeat bg-center bg-local`}>
                {isContinue && <div className="w-full h-full fixed top-0 bottom-0 backdrop-brightness-50"></div>}
                <div className="logo text-center py-12">
                    <Image
                        src={'/images/cart-64-white.png'}
                        alt="NextShop Logo"
                        width={64}
                        height={64}
                        className="m-auto text-center"
                        priority
                    />
                    <h3 className="text-lg text-white font-semibold">NextShop</h3>
                </div>
                {isContinue &&
                    <TourAction setOpen={setOpen} />
                }
            </DrawerContent>
        </Drawer>
    </>)
}