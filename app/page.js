'use client'

import { useState, useEffect } from 'react'
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

export default function Home() {
    const [websites, setWebsites] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        // In a real Next.js app, you'd typically fetch this data server-side
        // For this example, we're loading it client-side
        fetch('/websites.json')
            .then(response => response.json())
            .then(data => {
                setWebsites(data)
                const allCategories = Array.from(new Set(data.flatMap(site => site.category)))
                setCategories(allCategories)
            })
    }, [])

    const filteredWebsites = websites.filter(website =>
        (selectedCategory ? website.category.includes(selectedCategory) : true) &&
        (searchTerm ? website.title.toLowerCase().includes(searchTerm.toLowerCase()) : true)
    )

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Left sidebar */}
            {/*<div className="w-64 bg-white p-4 shadow-md">*/}
            {/*    <h2 className="text-xl font-bold mb-4">Categories</h2>*/}
            {/*    <ScrollArea className="h-[calc(100vh-8rem)]">*/}
            {/*        <div className="space-y-2">*/}
            {/*            <Button*/}
            {/*                variant={selectedCategory === null ? "secondary" : "ghost"}*/}
            {/*                className="w-full justify-start"*/}
            {/*                onClick={() => setSelectedCategory(null)}*/}
            {/*            >*/}
            {/*                All*/}
            {/*            </Button>*/}
            {/*            {categories.map(category => (*/}
            {/*                <Button*/}
            {/*                    key={category}*/}
            {/*                    variant={selectedCategory === category ? "secondary" : "ghost"}*/}
            {/*                    className="w-full justify-start"*/}
            {/*                    onClick={() => setSelectedCategory(category)}*/}
            {/*                >*/}
            {/*                    {category}*/}
            {/*                </Button>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </ScrollArea>*/}
            {/*</div>*/}

            {/* Main content */}
            <div className="flex-1 p-8 overflow-auto">
                <div className="mb-6 flex gap-6">
                    <Input
                        type="search"
                        placeholder="Search websites..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white"
                    />
                    <Select onValueChange={setSelectedCategory}>
                        <SelectTrigger className="w-[200px] bg-white">
                            <SelectValue placeholder="Filter by top-level domain" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Domain</SelectLabel>
                                <SelectItem value={null}>All</SelectItem>
                                {categories.map(category => (
                                    <SelectItem key={category} value={category}>
                                        {category}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredWebsites.map((website, index) => (
                        <Card key={index} className="overflow-hidden flex flex-col">
                            <CardHeader className="pb-0">
                                <CardTitle className="text-lg line-clamp-1">{website.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-sm text-muted-foreground line-clamp-3">
                                    {website.description || 'No description'}
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-end items-center mt-auto">
                                <Button asChild>
                                    <Link href={website.url} target="_blank" rel="noopener noreferrer">
                                        <ArrowTopRightIcon className="w-4 h-4"></ArrowTopRightIcon>
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}