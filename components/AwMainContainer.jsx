"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

function randomBgColor(str) {
    const bgColors = [
        "bg-slate-600",
        "bg-gray-600",
        "bg-zinc-600",
        "bg-neutral-600",
        "bg-stone-600",
        "bg-red-600",
        "bg-orange-600",
        "bg-amber-600",
        "bg-yellow-600",
        "bg-lime-600",
        "bg-green-600",
        "bg-emerald-600",
        "bg-teal-600",
        "bg-cyan-600",
        "bg-sky-600",
        "bg-blue-600",
        "bg-indigo-600",
        "bg-violet-600",
        "bg-purple-600",
        "bg-fuchsia-600",
        "bg-pink-600",
        "bg-rose-600"
    ]
    let hash = 0
    for (let i = 0; i < str.length; i++) {
        hash = (hash + str.charCodeAt(i) * i) % 65536
    }
    const index = Math.abs(hash) % bgColors.length
    return bgColors[index]
}

function WebsiteIcon({ baseUrl, title }) {
    const [isImageAvailable, setIsImageAvailable] = useState(null)

    useEffect(() => {
        const img = new Image()
        img.onload = () => setIsImageAvailable(true)
        img.onerror = () => setIsImageAvailable(false)
        img.src = baseUrl + "apple-touch-icon.png"
    }, [baseUrl])

    return (
        <div className="rounded-lg size-16 flex-shrink-0 mr-3 overflow-hidden">
            {isImageAvailable ? (
                <div className="size-16">
                    <img src={baseUrl + "apple-touch-icon.png"} />
                </div>
            ) : (
                <div
                    className={`${randomBgColor(
                        title
                    )} size-16 flex justify-center items-center`}
                >
                    <span className="text-3xl font-extrabold font-serif text-white">
                        {title.charAt(0).toUpperCase()}
                    </span>
                </div>
            )}
        </div>
    )
}

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
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mb-6 p-6">
                {filteredWebsites.map((website, index) => (
                    <Link
                        className="transition-all hover:-translate-y-1"
                        key={index}
                        href={website.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="flex overflow-hidden items-center transition hover:shadow border rounded-lg bg-white p-4">
                            <WebsiteIcon
                                baseUrl={website.url}
                                title={website.title}
                            ></WebsiteIcon>
                            <div>
                                <h3 className="mb-2 text-xl font-bold line-clamp-1">
                                    {website.title}
                                </h3>
                                <p
                                    className="text-sm line-clamp-1 text-blue-gray-300"
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
