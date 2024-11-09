"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useStore } from "@/app/store"

function WebsiteIcon({ baseUrl, title }) {
    return (
        <div className="rounded-lg size-16 flex-shrink-0 mr-3 overflow-hidden">
            <div className="size-16 flex justify-center items-center bg-accent-100">
                <span className="text-3xl font-extrabold font-serif text-text-200">
                    {title.charAt(0).toUpperCase()}
                </span>
            </div>
        </div>
    )
}

export default function AwMainContainer() {
    const [websites, setWebsites] = useState([])
    const [categories, setCategories] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const { category } = useStore()

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
            (category ? website.category.includes(category) : true) &&
            (searchTerm
                ? website.title.toLowerCase().includes(searchTerm.toLowerCase())
                : true)
    )

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mb-6 p-6">
                {filteredWebsites.map((website, index) => (
                    <Link
                        className="duration-150 hover:-translate-y-1"
                        key={index}
                        href={website.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="bg-bg-200 flex overflow-hidden items-center duration-300 hover:shadow-primary-200 shadow rounded-lg p-4">
                            <WebsiteIcon
                                baseUrl={website.url}
                                title={website.title}
                            ></WebsiteIcon>
                            <div>
                                <h3 className="mb-2 text-xl font-bold line-clamp-1 text-text-100">
                                    {website.title}
                                </h3>
                                <p
                                    className="text-sm line-clamp-1 text-blue-gray-300 text-text-200"
                                    title={website.description}
                                >
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
