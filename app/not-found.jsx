// filepath: app/not-found.jsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center p-8 md:p-12 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 max-w-lg w-full">
        <div className="mb-8">
          <AlertTriangle className="w-24 h-24 text-yellow-400 animate-pulse" />
        </div>
        <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Oops! Page Not Found.
        </h2>
        <p className="text-lg text-gray-200 mb-10 max-w-md">
          It seems like the page you&apos;re looking for has taken a detour or doesn&apos;t exist. Don&apos;t worry, let&apos;s get you back on track!
        </p>
        <Link href="/">
          <Button
            size="lg"
            className="bg-gradient-cool hover:opacity-90 text-white font-semibold px-8 py-6 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(124,58,237,0.3)] hover:shadow-[0_8px_30px_rgb(124,58,237,0.5)] transition-all duration-300 group"
          >
            <Home className="mr-2 h-5 w-5 group-hover:animate-pingOnce" />
            Go to Homepage
          </Button>
        </Link>
        <p className="mt-12 text-xs text-gray-400">
          If you believe this is an error, please <Link href="mailto:cachedabhi@gmail.com" target='_blank' className="underline hover:text-purple-300 transition-colors">contact support</Link>.
        </p>
      </div>
    </div>
  );
}


