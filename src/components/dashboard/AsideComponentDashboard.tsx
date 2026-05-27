


"use client";

import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { usePathname } from "next/navigation";
import { HiArrowSmRight, HiChartPie, HiShoppingBag, HiUser} from "react-icons/hi";

export function AsideComponentDashboard() {

const pathName = usePathname();

  return (
    <Sidebar aria-label="Sidebar with logo branding example">
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem href="#" icon={HiChartPie}>
            Dashboard
          </SidebarItem>

            {/* blogs */}
          <SidebarItem href="/dashboard/blogs" icon={HiUser} 
          className={pathName == "/dashboard/blogs"?  `bg-blue-500 rounded`:""}>
            Blogs
          </SidebarItem>
          <SidebarItem href="/dashboard/products" icon={HiShoppingBag}
          className={pathName == "/dashboard/products"? `bg-blue-500 rounded`: ""}>
            Products
          </SidebarItem>
          <SidebarItem href="/dashboard/setting" icon={HiArrowSmRight}
          className={pathName == "/dashboard/setting"? `bg-blue-500 rounded`: ""}>
            Setting
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
