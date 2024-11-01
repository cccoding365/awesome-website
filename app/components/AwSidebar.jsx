"use client"
import { useEffect, useState } from "react"
import { useStore } from "@/app/store"
import clsx from "clsx"

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

    const { updateCategory, category: selectedCategory } = useStore()

    return (
        <div className="sticky top-0 hidden md:flex w-full h-screen max-w-[18rem] flex-col bg-white bg-clip-border p-4 text-gray-700">
            <div
                className="p-4 mb-2 cursor-pointer"
                onClick={() => updateCategory("")}
            >
                <h5 className="block font-sans text-2xl font-semibold text-center">
                    Awesome Website
                </h5>
            </div>

            <nav className="flex min-w-[240px] flex-col gap-1 p-2">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        role="button"
                        className={clsx(
                            "flex items-center w-full p-3 rounded-lg duration-300 hover:bg-gray-200",
                            selectedCategory === category && "bg-gray-100"
                        )}
                        onClick={() => updateCategory(category)}
                    >
                        <div className="grid mr-4 place-items-center"></div>
                        {category}
                        <div className="grid ml-auto place-items-center justify-self-end">
                            <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-full select-none whitespace-nowrap bg-gray-300/30">
                                <span>{index}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </nav>
        </div>
    )
}
