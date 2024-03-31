import { Skeleton } from "@/components/ui/skeleton"

export function Preload() {
    return (<>
        <div className="container">
            <div className="grid grid-cols-3 gap-4 my-12">
                <Skeleton className="bg-gray-300 h-auto rounded-full" />
                <div className="space-y-2 col-span-2">
                    <Skeleton className="bg-gray-300 h-4 w-11/12" />
                    <Skeleton className="bg-gray-300 h-4 w-10/12" />
                    <Skeleton className="bg-gray-300 h-4 w-9/12" />
                    <Skeleton className="bg-gray-300 h-4 w-8/12" />
                    <Skeleton className="bg-gray-300 h-4 w-7/12" />
                </div>
            </div>
            <div className="flex justify-center items-center flex-col space-y-3">
                <Skeleton className="bg-gray-300 h-[125px] w-full rounded-xl" />
                <div className="space-y-2 w-11/12">
                    <Skeleton className="bg-gray-300 h-4 w-full" />
                    <Skeleton className="bg-gray-300 h-4 w-11/12" />
                    <Skeleton className="bg-gray-300 h-4 w-10/12" />
                    <Skeleton className="bg-gray-300 h-4 w-9/12" />
                    <Skeleton className="bg-gray-300 h-4 w-8/12" />
                </div>
            </div>
        </div>
    </>)
}