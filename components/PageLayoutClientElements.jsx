"use client";

import { usePathname } from "next/navigation";
import CreateEventDrawer from "@/components/CreateEvent";

export default function PageLayoutClientElements({ children }) {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  return (
    <>
      {isLandingPage && children} {/* Render children if it's the landing page */}
      <CreateEventDrawer />
    </>
  );
}
