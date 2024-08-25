import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";
interface DashboardLayoutProps {
    children: ReactNode;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <section>
            <Navbar />
            {children}
        </section>
    );
};

export default DashboardLayout;
