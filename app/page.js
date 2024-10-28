"use client";
import { useState, useEffect } from "react";
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
    <div className="container mx-auto flex-1 p-6 bg-blue-gray-100">
      <h1 className="text-3xl text-center font-semibold mb-6"> Awesome Website </h1>
      <div className="mb-6">
        <input
          className="w-full border p-3 rounded-lg focus:outline-none focus:shadow bg-white"
          placeholder="Search website..."
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
        {filteredWebsites.map((website, index) => (
          <Link
            className="flex flex-1 transition-all hover:-translate-y-1"
            key={index}
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-1 transition hover:shadow border rounded-lg bg-white">
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold line-clamp-1">
                  {website.title}
                </h3>
                <p className="text-sm line-clamp-2 text-blue-gray-300">
                  {website.description || 'No description'}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
