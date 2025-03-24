import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import {AppSidebar} from "./components/AppSidebar";
import { Toaster } from "./components/ui/sonner";

export default function Layout() {

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="container">
        <SidebarTrigger />
        <Outlet />
      </main>
      <Toaster />
    </SidebarProvider>
  );
}
