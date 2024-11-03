import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      "Define when you're free, and let MeetMe handle the rest—no more back-and-forth scheduling.",
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
      "Create your free MeetMe account—you're just a few clicks away from simplified scheduling.",
  },
  {
    step: "Set Your Availability",
    description:
      "Tell us when you're free, and we'll do the heavy lifting for scheduling.",
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

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* hero section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
        <div className="lg:w-1/2">
          <h1 className="text-7xl font-extrabold pb-4 gradient-title">
            Simplify scheduling your meetings
          </h1>
          <p className="text-xl text-gray-700">
            With MeetMe, organize your meetings effortlessly, set your
            availability, and let others book time with you in a few clicks.
          </p>
          <p className="text-xl text-gray-700 mb-11">
            TLDR: MeetMe makes scheduling smarter, faster, and stress-free :)
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              variant="primary"
              className="bg-black hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-full flex items-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get Started for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-xs mt-3 opacity-75">
            No credit card required. Cancel anytime.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src="/poster.png"
              alt="Meeting Poster"
              layout="fill"
              objectFit="contain"
            ></Image>
          </div>
        </div>
      </div>

      {/* features section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-10 text-purple-500">
          Why you’ll love MeetMe?
        </h2>
        <div className="grid grid-col-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            return (
              <Card key={index} className="shadow-lg transform transition-all hover:scale-105 hover:shadow-xl duration-200 ease-out">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-purple-500 mb-4 mx-auto" />
                  <CardTitle className="text-center text-purple-600">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-700">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* working steps section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-10 text-purple-500">
          Getting Started is a Breeze
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 max-w-5xl mx-auto">
          {howItWorks.map((step, index) => (
            <div
              key={index}
              className="relative p-6 rounded-lg shadow-lg bg-white transform transition-all hover:scale-105 hover:shadow-xl duration-200 ease-out"
            >
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-r from-blue-400 to-purple-400 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-purple-600 text-center mb-2">
                  {step.step}
                </h3>

                <p className="text-center text-gray-600">{step.description}</p>
              </div>

              {index < howItWorks.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-6 -translate-y-1/2 h-10 w-10 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full border-4 border-white">
                  <span className="absolute top-0 left-0 w-full h-full rounded-full animate-ping bg-purple-300 opacity-30"></span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* testimonial section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-10 text-purple-500">
          What People Are Saying
        </h2>
        <Testimonials />
      </div>

      {/* cta div */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-8 text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-3">
          Take Control of Your Schedule Today
        </h2>
        <p className="text-base mb-5 max-w-md mx-auto">
          Join thousands of busy professionals who trust MeetMe to simplify
          their meetings and save time.
        </p>
        <div className="flex justify-center">
          <Link href="/dashboard">
            <Button
              size="lg"
              variant="primary"
              className="bg-white text-purple-600 hover:text-indigo-600 font-semibold px-5 py-2 rounded-full flex items-center shadow-md hover:shadow-lg transition"
            >
              Get Started for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <p className="text-xs mt-3 opacity-75">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </main>
  );
}
