"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUser = () => {
    const router = useRouter();

    const handleClick = () => {
        setTimeout(() => {
            router.push("/dashboard/users");
        }, 5000);
    };

    return (
        <div>
            <h1>New User</h1>
            <button onClick={handleClick}>Add New User</button>
        </div>
    );
};

export default NewUser;
