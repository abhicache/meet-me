"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";

const features = [
  {
    icon: Calendar,
    title: "Effortless Event Creation",
    description:
      "Set up your meetings in seconds with customizable event types—streamlined just for you.",
  },
  {
    icon: Clock,
    title: "Seamless Availability Control",
    description:
      "Define when you\\'re free, and let MeetMe handle the rest—no more back-and-forth scheduling.",
  },
  {
    icon: LinkIcon,
    title: "Your Personal Scheduling Link",
    description:
      "Share your unique link with clients and colleagues—booking made simple and personal.",
  },
];

const howItWorks = [
  {
    step: "Sign Up",
    description:
      "Create your free MeetMe account—you\\'re just a few clicks away from simplified scheduling.",
  },
  {
    step: "Set Your Availability",
    description:
      "Tell us when you\\'re free, and we\\'ll do the heavy lifting for scheduling.",
  },
  {
    step: "Share Your Booking Link",
    description: "Send out your personalized link—meetings will come to you!",
  },
  {
    step: "Stay Organized",
    description:
      "Watch your calendar fill up without lifting a finger—every booking confirmed automatically.",
  },
];

// AnimatedCounter component for statistics
function AnimatedCounter({ value, label, prefix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = parseInt(value);
          const duration = 2000;
          const increment = Math.ceil(end / (duration / 16));

          const timer = setInterval(() => {
            start += increment;
            if (start > end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);

          observer.disconnect(); // disconnect after animation starts
        }
      },
      { threshold: 0.5 } // trigger when 50% of the element is visible
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Clean up observer
      }
    };
  }, [value]);

  return (
    <div className="text-center" ref={ref}>
      <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500">
        {prefix}{count.toLocaleString()}
      </h3>
      <p className="text-gray-600 mt-2 font-medium">{label}</p>
    </div>
  );
}

// Particle animation for the hero background
function ParticleBackground() {
  const particleCount = 20;
  // Memoize particles to prevent re-creation on every render unless particleCount changes
  const particles = React.useMemo(() => Array.from({ length: particleCount }).map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 4, // Particle size between 4px and 12px
    delay: Math.random() * 5, // Animation delay up to 5s
    duration: Math.random() * 10 + 10, // Animation duration between 10s and 20s
    opacity: Math.random() * 0.5 + 0.1 // Opacity between 0.1 and 0.6
  })), [particleCount]);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-indigo-300 to-purple-300 animate-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: particle.opacity,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}
    </div>
  );
}

export default function LandingPageClient() {
  return (
    <main> {/* Removed container and padding, sections will manage their own spacing */}
      {/* Hero section with animated elements and glassmorphism */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <ParticleBackground />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 z-10">
              <div className="mb-6">
                <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-800 font-medium text-sm">
                  Scheduling Simplified
                </span>
              </div>
              <h1 className="text-6xl sm:text-7xl font-extrabold pb-4 gradient-title">
                Simplify scheduling your meetings
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl">
                With MeetMe, organize your meetings effortlessly, set your
                availability, and let others book time with you in a few clicks.
              </p>
              <p className="text-xl text-gray-700 mb-8">
                <span className="font-semibold">TLDR:</span> MeetMe makes scheduling smarter, faster, and stress-free :)
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Link href="/dashboard" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-cool hover:opacity-90 text-white font-semibold px-8 py-6 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(124,58,237,0.3)] hover:shadow-[0_8px_30px_rgb(124,58,237,0.5)] transition-all duration-300"
                  >
                    Get Started for Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#how-it-works" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-white/80 backdrop-blur-sm border-purple-200 hover:bg-purple-50 text-purple-700 font-semibold px-8 py-6 rounded-full flex items-center justify-center"
                  >
                    See How It Works
                  </Button>
                </Link>
              </div>
              <p className="text-xs mt-4 text-gray-500">
                No credit card required. Cancel anytime.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center relative">
              {/* Decorative blur elements */}
              <div className="absolute w-72 h-72 bg-purple-300 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute top-20 -left-10 w-40 h-40 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

              {/* Floating elements and main image card */}
              <div className="relative w-full max-w-md aspect-square animate-float">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg rotate-12 animate-float-delay-3"></div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full animate-float-delay-2"></div>
                <div className="relative glass-card rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                  <Image
                    src="/poster.png"
                    alt="Meeting Scheduling Interface"
                    width={500}
                    height={500}
                    className="object-cover" // Ensure image covers the card area
                    priority // Prioritize loading for LCP
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section with animated counters */}
          <div className="mt-20 py-10 px-8 glass-card rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-10">
            <AnimatedCounter value="10000" label="Meetings Scheduled Daily" prefix="+" />
            <AnimatedCounter value="98" label="Customer Satisfaction" prefix="%" /> {/* Added % prefix */}
            <AnimatedCounter value="45" label="Minutes Saved Per Booking" />
          </div>
        </div>
      </section>

      {/* Interactive demo section */}
      <section className="py-24 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">
              See MeetMe in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch how easy it is to schedule meetings with our intuitive interface.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              {/* Placeholder for an embedded video or interactive demo component */}
              <div className="aspect-video bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-white/30 transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Product Demo</h3>
                  <p className="text-white/80">Click to watch how MeetMe streamlines your scheduling experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section with modern card designs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm">
              FEATURES
            </span>
            <h2 className="text-4xl font-bold mt-6 mb-4">
              Why you&apos;ll love <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">MeetMe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Designed to make scheduling effortless so you can focus on what matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 border border-white/20"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${
                  index % 3 === 0 ? 'from-purple-500 to-indigo-500' : 
                  index % 3 === 1 ? 'from-blue-500 to-indigo-500' : 
                  'from-indigo-500 to-violet-500'
                } flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works section with scrolling animation */}
      <section id="how-it-works" className="py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-800 font-medium text-sm">
              SIMPLE STEPS
            </span>
            <h2 className="text-4xl font-bold mt-6 mb-4">
              Getting Started is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Breeze</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four simple steps to transform how you schedule meetings forever.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line for desktop view */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-purple-200 to-indigo-300 transform -translate-y-1/2 rounded-full hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <div
                  key={index}
                  className="relative z-10 group" // Added group for hover effects if needed later
                >
                  <div className="bg-white rounded-2xl shadow-xl p-6 transform transition-all duration-500 hover:-translate-y-3 border border-gray-100 hover:shadow-2xl">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center mx-auto">
                        <span className="text-white font-bold text-lg">
                          {index + 1}
                        </span>
                      </div>
                      {/* Subtle animated element on step card */}
                      <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-br from-purple-300 to-indigo-400 rounded-full animate-pulse opacity-70 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 text-center mb-3">
                      {step.step}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section className="py-24 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl font-bold mt-6 mb-4">
              What People Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Saying</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thousands of professionals trust MeetMe for their scheduling needs.
            </p>
          </div>

          <Testimonials />
        </div>
      </section>

      {/* CTA section with glassmorphism effect */}
      <section className="py-16 mb-16">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background gradient and blur elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 opacity-95"></div>
            <div className="absolute w-96 h-96 rounded-full bg-purple-500 filter blur-3xl opacity-30 -top-20 -right-20 animate-pulse"></div>
            <div className="absolute w-96 h-96 rounded-full bg-blue-500 filter blur-3xl opacity-20 -bottom-20 -left-20 animate-pulse"></div>

            <div className="relative z-10 py-16 px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Take Control of Your Schedule Today
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Join thousands of busy professionals who trust MeetMe to simplify
                their meetings and save time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="bg-white hover:bg-gray-100 text-indigo-600 font-semibold px-8 py-6 rounded-full flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started for Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#how-it-works"> {/* Changed to learn more about how it works */}
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white/60 hover:bg-white/10 text-white font-semibold px-8 py-6 rounded-full flex items-center"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
              <p className="text-sm mt-6 text-white/70">
                No credit card required. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
