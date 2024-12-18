function IconSearch() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="absolute w-5 h-5 top-2.5 left-2.5 text-text-200"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
        </svg>
    )
}

export default function AwNavbar() {
    return (
        <nav className="sticky top-0 w-full p-6 bg-bg-100 z-10">
            <div className="flex w-full items-center justify-between">
                <div className="hidden sm:flex flex-1 items-center gap-2">
                    <div className="relative flex flex-1">
                        <IconSearch></IconSearch>
                        <input
                            type="text"
                            className="w-full pl-10 pr-3 py-2 bg-bg-200 placeholder:text-text-200 text-text-200 text-sm rounded-md duration-300 ease shadow-sm focus:shadow focus:outline-none"
                            placeholder="Search website..."
                        />
                    </div>
                    <button
                        className="rounded-md bg-bg-200 py-2 px-6 text-center text-sm text-text-200 transition-all shadow-md hover:bg-primary-200  focus:bg-gray-700 focus:shadow-none active:bg-gray-700 hover:bg-gray-700 active:shadow-none"
                        type="button"
                    >
                        Search
                    </button>
                </div>
                {/* <div className="hidden lg:block ml-6 text-text-200">
                    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                        <li className="flex items-center p-1 text-sm gap-x-2">
                            <a href="#" className="flex items-center">
                                Pages
                            </a>
                        </li>
                        <li className="flex items-center p-1 text-sm gap-x-2">
                            <a href="#" className="flex items-center">
                                Account
                            </a>
                        </li>
                        <li className="flex items-center p-1 text-sm gap-x-2">
                            <a href="#" className="flex items-center">
                                Blocks
                            </a>
                        </li>
                        <li className="flex items-center p-1 text-sm gap-x-2">
                            <a href="#" className="flex items-center">
                                Docs
                            </a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav>
    )
}
