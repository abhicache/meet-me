import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const Footer=() => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-gray-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Branding Section */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white">MeetMe</h2>
            <p className="text-sm mt-3 text-gray-400">
              Scheduling made smarter, faster, and stress-free.
            </p>
            <p className="mt-4 text-xs text-gray-500">Brewed with 💜 by Abhishek</p>
          </div>

          {/* Social Media Icons & Contact */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com/in/theAbhishekBaranwal"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                <LinkedInLogoIcon className="w-7 h-7" />
              </a>
              <a
                href="https://twitter.com/abhicache"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                <TwitterLogoIcon className="w-7 h-7" />
              </a>
              <a
                href="https://instagram.com/abhicache"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                <InstagramLogoIcon className="w-7 h-7" />
              </a>
              <a
                href="https://gitHub.com/theabhishekbaranwal"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                <GitHubLogoIcon className="w-7 h-7" />
              </a>
            </div>
            <div className="text-center text-sm">
              <a
                href="mailto:baranwalabhishek21@gmail.com"
                className="text-gray-400 hover:text-purple-300 transition-colors duration-200"
              >
                support@meetme.com
              </a>
              <p className="mt-1 text-gray-500">Phone: +91 00000 00000</p>
            </div>
          </div>
          
          {/* Quick Links or other info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/#how-it-works" className="hover:text-purple-300 transition-colors duration-200">How It Works</a></li>
              <li><a href="/dashboard" className="hover:text-purple-300 transition-colors duration-200">Dashboard</a></li>
              <li><a href="/pricing" className="hover:text-purple-300 transition-colors duration-200">Pricing (Soon)</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Border and Small Legal Links */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-sm text-gray-500 text-center">
          <p>
            &copy; {new Date().getFullYear()} MeetMe. All Rights Reserved.
          </p>
          <div className="mt-3 space-x-4">
            <a href="/privacy-policy" className="hover:text-purple-300 transition-colors duration-200">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/terms" className="hover:text-purple-300 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;