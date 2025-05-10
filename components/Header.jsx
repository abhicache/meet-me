import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import UserMenu from "./UserMenu";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  await checkUser();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto py-3 px-6 flex justify-between items-center 
                      bg-white/90 backdrop-blur-lg shadow-xl rounded-xl border border-white/30">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            width={130}
            height={52}
            alt="MeetMe Logo"
            className="h-10 w-auto"
          />
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/events?create=true">
            <Button className="flex items-center gap-2 bg-gradient-cool text-white hover:opacity-95 font-semibold rounded-full px-5 py-2.5 text-sm shadow-md hover:shadow-lg transition-all duration-300">
              <PenBox size={16} />
              Create Event
            </Button>
          </Link>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button 
                variant="outline" 
                className="rounded-full border-purple-400 hover:bg-purple-50 text-purple-700 font-semibold px-5 py-2.5 text-sm hover:border-purple-500 transition-all duration-300"
              >
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;
