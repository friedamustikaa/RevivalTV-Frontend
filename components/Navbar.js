import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-transparent">
            <div className="container 2xl:px-24 2xl:pt-14 xl:pt-14 lg:pt-14 md:pt-14 sm:pt-14">
                <div className="flex">
                    <div className="flex items-center justify-between ">
                        <div className="block md:hidden">
                        <div>
                            <Link href="">
                                <a >
                                <img
                                    src="/assets/logo.svg"
                                    alt=""
                                    className="2xl:w-20 xl:w-20 lg:w-14 md:w-11 sm:w-11"
                                />
                                </a>
                            </Link>
                        </div>
                        <div>
                            <button className="focus:outline-none text-white">
                                <svg
                                className="w-7 h-7"
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                </svg>
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <div className="2xl:py-0 xl:py-0 lg:py-0 md:py-3 sm:py-3">
                            <Link href="">
                                <a>
                                <img
                                    src="/assets/logo.svg"
                                    alt=""
                                    className="2xl:w-14 xl:w-20 lg:w-14 md:w-11 sm:w-11"
                                />
                                </a>
                            </Link>
                        </div>
                        <div className="2xl:py-0 xl:py-0 lg:py-0 md:py-3 sm:py-3">
                            <Link href="">
                                <a className="text-center text-white text-sm font-medium uppercase hover:text-yellow-400 block">
                                Home
                                </a>
                            </Link>
                        </div>
                        <div className="2xl:py-0 xl:py-0 lg:py-0 md:py-3 sm:py-3">
                            <Link href="">
                                <a className="text-center text-white text-sm font-medium uppercase hover:text-yellow-400 block">
                                Gallery
                                </a>
                            </Link>
                        </div>
                        <div className="2xl:py-0 xl:py-0 lg:py-0 md:py-3 sm:py-3">
                            <Link href="">
                                <a className="text-center text-white text-sm font-medium uppercase hover:text-yellow-400 block">
                                Products
                                </a>
                            </Link>
                        </div>
                        <div className="2xl:py-0 xl:py-0 lg:py-0 md:py-3 sm:py-3">
                            <Link href="">
                                <a className="text-center text-white text-sm font-medium uppercase hover:text-yellow-400 block">
                                Review
                                </a>
                            </Link>
                        </div>
                        <div className="2xl:py-0 xl:py-0 lg:py-0 md:py-3 sm:py-3">
                            <Link href="">
                                <a className="text-center text-white text-sm font-medium uppercase hover:text-yellow-400 block">
                                Support
                                </a>
                            </Link>
                        </div>
                        <div className="2xl:py-0 xl:py-0 lg:py-0 md:py-3 sm:py-3">
                            <Link href="">
                                <a className="block">
                                <img src="/assets/search.svg" alt="" width="20" />
                                </a>
                            </Link>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    );
}
