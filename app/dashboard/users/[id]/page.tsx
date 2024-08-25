import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

const UserDetailsPage = ({ params: { id } }: Params) => {
    return <div>User Details Page </div>;
};

export default UserDetailsPage;
