import React from "react";
import { AsideComponentDashboard } from "../components/dashboard/AsideComponentDashboard";


export default function DashBoardLayout({
    children,
    products,
    blogs,
    setting
}: {
    children: React.ReactNode,
    products: React.ReactNode,
    blogs: React.ReactNode,
    setting: React.ReactNode
}) {
    return (
        
        <section className="grid grid-cols-4 gap-5">
            <AsideComponentDashboard/>
            <section className="grid col-span-3">
                <div className="bg-red-500 p-8">{children}</div>
                <div className="bg-blue-500 p-8">{products}</div>
                <div className="bg-green-200 p-8">{blogs}</div>
                <div className="bg-yellow-200 p-8">{setting}</div>
            </section>
        </section>

    )
}