import React, { Suspense } from "react";
import { AsideComponentDashboard } from "@/components/dashboard/AsideComponentDashboard";
import LoadingDashboard from "./loading";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'My Blog',
  description: 'this is dashboard handle all internal process background.',
  openGraph: {
    images:['https://i.pinimg.com/736x/98/fd/cb/98fdcbd4f862487b0492329385faaef6.jpg']
  }
}
 

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
            <Suspense fallback={<LoadingDashboard/>}>
            <section className="grid col-span-3">
                <div className="bg-red-500 p-8">{children}</div>
                <div className="bg-blue-500 p-8">{products}</div>
                <div className="bg-green-200 p-8">{blogs}</div>
                <div className="bg-yellow-200 p-8">{setting}</div>
            </section>
            </Suspense>

        </section>

    )
}