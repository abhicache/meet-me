import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-blue-600 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold animate-bounce">404</h1>
        <p className="mt-4 text-xl">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
        
        <Link href="/">
          <span className="mt-6 inline-block bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Back to Home
          </span>
        </Link>

        
      </div>
    </div>
  );
};

export default NotFoundPage;
