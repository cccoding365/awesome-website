"use client"
import { useEffect, useState } from "react"
import { useStore } from "@/app/store"

export default function AwSidebar() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        setCategories([
            "Official Website",
            "Design",
            "Tool Collection",
            "Inspiration",
            "Blogs",
            "Other"
        ])
    }, [])

    const { updateCategory } = useStore()

    return (
        <div className="sticky top-0 hidden md:flex w-full h-screen max-w-[18rem] flex-col bg-white bg-clip-border p-4 text-gray-700">
            <div className="p-4 mb-2" onClick={() => updateCategory("")}>
                <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-900">
                    Awesome Website
                </h5>
            </div>

            <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-gray-700">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        role="button"
                        className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100  hover:text-gray-900 focus:bg-gray-100 focus:bg-opacity-80 focus:text-gray-900 active:bg-gray-50 active:bg-opacity-80 active:text-gray-900"
                        onClick={() => updateCategory(category)}
                    >
                        <div className="grid mr-4 place-items-center"></div>
                        {category}
                        <div className="grid ml-auto place-items-center justify-self-end">
                            <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-full select-none whitespace-nowrap bg-gray-500/20 text-gray-900">
                                <span>{index}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </nav>
        </div>
    )
}
