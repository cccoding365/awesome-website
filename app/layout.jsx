import "./globals.css"

export const metadata = {
    title: "Awesome Website - Collect excellent websites",
    description: "Some of my favorite sites",
    icons: {
        icon: "/favicon.svg"
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
