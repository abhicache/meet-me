import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import PageLayoutClientElements from "@/components/PageLayoutClientElements";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MeetMe",
  description: "Schedule meetings with ease on MeetMe App",
};


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-gradient-to-b from-orange-100 via-purple-100 to-blue-50`}>
          <Header />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <PageLayoutClientElements>
            <Footer />
          </PageLayoutClientElements>
        </body>
      </html>
    </ClerkProvider>
  );
}
