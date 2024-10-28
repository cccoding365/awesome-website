"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  const [websites, setWebsites] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/websites.json")
      .then((response) => response.json())
      .then((data) => {
        setWebsites(data);
        const allCategories = Array.from(
          new Set(data.flatMap((site) => site.category))
        );
        setCategories(allCategories);
      });
  }, []);

  const filteredWebsites = websites.filter(
    (website) =>
      (selectedCategory ? website.category.includes(selectedCategory) : true) &&
      (searchTerm
        ? website.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true)
  );

  return (
    <div className="container mx-auto flex-1 p-8">
      <div className="mb-6">
        <Input
          type="search"
          placeholder="Search websites..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredWebsites.map((website, index) => (
          <Link
            className="flex flex-col flex-grow"
            key={index}
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="overflow-hidden flex flex-col flex-1">
              <CardHeader className="pb-0">
                <CardTitle className="text-lg line-clamp-1">
                  {website.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="text-sm text-muted-foreground line-clamp-2"
                  title={website.description}
                >
                  {website.description || "No description"}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
