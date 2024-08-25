import React from "react";

const page = async () => {
    // fetch user data
    // const req = await fetch("https://jsonplaceholder.typicode.com/users");
    // const users = await req.json();
    // console.log(users);

    interface User {
        id: number;
        name: string;
        email: string;
    }

    return (
        <div>
            <div className="container mx-auto mt-5 font-semibold">
                <h1 className="text-4xl">User Page </h1>
                <a href="/dashboard/users/new">New User</a>

                <hr />
                <div className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {users.map((user) => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))} */}
                    </tbody>
                </div>
            </div>
        </div>
    );
};

export default page;
