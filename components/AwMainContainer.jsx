"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function AwMainContainer() {
    const [websites, setWebsites] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch("/websites.json")
            .then((response) => response.json())
            .then((data) => {
                setWebsites(data)
                const allCategories = Array.from(
                    new Set(data.flatMap((site) => site.category))
                )
                setCategories(allCategories)
            })
    }, [])

    const filteredWebsites = websites.filter(
        (website) =>
            (selectedCategory
                ? website.category.includes(selectedCategory)
                : true) &&
            (searchTerm
                ? website.title.toLowerCase().includes(searchTerm.toLowerCase())
                : true)
    )

    return (
        <div>
            <div className="px-10 mt-6">
                <h3 className="text-2xl font-semibold">All</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mb-6 p-6">
                {filteredWebsites.map((website, index) => (
                    <Link
                        className="flex flex-1 transition-all hover:-translate-y-1"
                        key={index}
                        href={website.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="flex flex-1 items-center transition hover:shadow border rounded-lg bg-white p-4">
                            <div className="text-3xl font-extrabold p-3 border-2 text-center mr-4 rounded-lg size-16 flex-shrink-0">
                                {website.title.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold line-clamp-1">
                                    {website.title}
                                </h3>
                                <p className="text-sm line-clamp-1 text-blue-gray-300" title={website.description}>
                                    {website.description || "No description"}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
