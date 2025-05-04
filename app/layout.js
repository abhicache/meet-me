import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import CreateEventDrawer from "@/components/CreateEvent";

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
          <main className="min-h-screen bg-gradient-to-b from-orange-100 via-purple-100 to-blue-50">
            {children}
          </main>
          {/* Footer */}
          {/* reorganize the footer component */}
          <footer className="bg-orange-50 py-12">
            <div className="container mx-auto px-6 text-gray-600 flex flex-col md:flex-row justify-between items-center">
              {/* Branding Section */}
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-2xl font-semibold text-gray-700">MeetMe</h2>
                <p className="text-sm mt-2">
                  Scheduling made smarter, faster, and stress-free.
                </p>
                <p className="mt-4">Brewed with 💜 by Abhishek</p>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a
                  href="https://linkedin.com/in/theAbhishekBaranwal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInLogoIcon className="w-6 h-6 text-blue-700 hover:text-blue-500 transition duration-150" />
                </a>
                <a
                  href="https://twitter.com/abhicache"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterLogoIcon className="w-6 h-6 text-blue-400 hover:text-blue-300 transition duration-150" />
                </a>

                <a
                  href="https://instagram.com/abhicache"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramLogoIcon className="w-6 h-6 text-pink-500 hover:text-pink-400 transition duration-150" />
                </a>
                <a
                  href="https://gitHub.com/theabhishekbaranwal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubLogoIcon className="w-6 h-6 text-blue-600 hover:text-blue-500 transition duration-150" />
                </a>
              </div>

              {/* Contact Section */}
              <div className="mt-6 md:mt-0 text-center md:text-right">
                <p>
                  Contact us:{" "}
                  <a
                    href="mailto:baranwalabhishek21@gmail.com"
                    className="text-blue-500 hover:underline"
                  >
                    support@meetme.com
                  </a>
                </p>
                <p className="mt-2">Phone: +91 00000 00000</p>
              </div>
            </div>

            {/* Bottom Border and Small Legal Links */}
            <div className="mt-12 border-t pt-4 text-sm text-gray-500 text-center">
              <p>
                &copy; {new Date().getFullYear()} MeetMe. All Rights Reserved.
              </p>
              <p className="mt-2">
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>{" "}
                |
                <a href="/terms" className="ml-2 hover:underline">
                  Terms of Service
                </a>
              </p>
            </div>
          </footer>
          <CreateEventDrawer />
        </body>
      </html>
    </ClerkProvider>
  );
}
