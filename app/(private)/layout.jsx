"use client";

import { useUser } from "@clerk/nextjs";
import { BarChart, Calendar, Clock, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarLoader } from "react-spinners";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: BarChart },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/meetings", label: "Meetings", icon: Users },
  { href: "/availability", label: "Availability", icon: Clock },
];
const PvtLayout = ({ children }) => {
  const { isLoaded } = useUser();
  const pathname = usePathname();

  return (
    <>
      {!isLoaded && <BarLoader width={"100%"} color="#ff4d4d" />}
      <div className="flex flex-col h-screen md:flex-row">
        <aside className="bg-orange-400 text-white w-64 hidden md:block ">
          <nav className="mt-9">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <div
                      className={`flex items-center px-4 py-4   hover:bg-orange-500 ${
                        pathname === item.href ? "bg-orange-500" : ""
                      }`}
                    >
                      <item.icon size={24} className="mr-4" />
                      <span>{item.label}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md">
          <ul className="flex justify-around">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex flex-col items-center py-2 px-4 hover:text-orange-600 ${
                    pathname === item.href ? "text-orange-600" : "text-gray-700"
                  }`}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <header className="flex justify-between items-center mb-4">
            <h2 className="text-5xl md:text-6xl gradient-title pt-2 md:pt-0 text-center md:text-left w-full">
              {navItems.find((item) => item.href === pathname)?.label ||
                "Dashboard"}
            </h2>
          </header>
          {children}
        </main>
      </div>
    </>
  );
};

export default PvtLayout;
