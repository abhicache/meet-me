import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MeetMe",
  description: "Schedule meetings with ease on MeetMe App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-blue-200 to-white">
          {children}
        </main>
        {/* Footer */}
        <footer className="bg-blue-100 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Brewed with 💛 by Abhishek</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
