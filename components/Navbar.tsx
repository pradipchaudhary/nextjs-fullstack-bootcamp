import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className="d-flex bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold">
                            Nextjs fullstack bootcamp
                        </h1>
                        {/* <Link href="/">
                            <a className="text-2xl font-bold">
                                <img src="/logo.png" alt="Logo" className="h-10" />
                            </a>
                        </Link> */}
                    </div>
                    <ul>
                        <li>
                            <Link href="/dashboard/about">About </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/products">Products </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/users">Users</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
