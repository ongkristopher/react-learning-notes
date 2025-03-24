import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { routesConfig } from "@/config/routesConfig";
import { NavLink } from "react-router-dom";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <span className="text-base font-bold">
                  React Learning by Kris
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupContent>
          <SidebarMenu>
            {routesConfig.map(({ path, label, end }) => (
              <NavLink
                key={path}
                to={path}
                end={end}
                className={({ isActive }) =>
                  `w-full ${
                    isActive ? "bg-black text-white" : "text-black"
                  }`
                }
              >
                <SidebarMenuItem
                  key={path}
                  className="px-5 hover:bg-accent hover:text-black font-medium"
                >
                  <SidebarMenuButton className="cursor-pointer">{label}</SidebarMenuButton>
                </SidebarMenuItem>
              </NavLink>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
