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
} from "@/components/ui/card"

const features = [
  {
    icon: Calendar,
    title: "Effortless Event Creation",
    description: "Set up your meetings in seconds with customizable event types—streamlined just for you.",
  },
  {
    icon: Clock,
    title: "Seamless Availability Control",
    description: "Define when you're free, and let MeetMe handle the rest—no more back-and-forth scheduling.",
  },
  {
    icon: LinkIcon,
    title: "Your Personal Scheduling Link",
    description: "Share your unique link with clients and colleagues—booking made simple and personal.",
  },
];

const howItWorks = [
  { 
    step: "Get Started", 
    description: "Create your free MeetMe account—you're just a few clicks away from simplified scheduling." 
  },
  {
    step: "Set Your Availability",
    description: "Tell us when you're free, and we'll do the heavy lifting for scheduling.",
  },
  {
    step: "Share Your Booking Link",
    description: "Send out your personalized link—meetings will come to you!",
  },
  {
    step: "Stay Organized",
    description: "Watch your calendar fill up without lifting a finger—every booking confirmed automatically.",
  },
];


export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
        <div className="lg:w-1/2">
          <h1 className="text-7xl font-extrabold pb-4 gradient-title">
            Simplify scheduling your meetings
          </h1>
          <p className="text-xl text-gray-700">
            With MeetMe, organize your meetings effortlessly, set your
            availability, and let others book time with you in a few
            clicks. 
          </p>
          <p className="text-xl text-gray-700 mb-11">TLDR: MeetMe makes scheduling smarter, faster, and stress-free :)</p>
          <Link href='/dashboard'>
          <Button size="lg" className="text-md">
            Get Started <ArrowRight className="ml-2 w-5" />
            
          </Button></Link>
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

      <div className="mb-24">
        <h2>Key Features</h2>
        <div>{features.map((feature, index)=>{
          return (
          <Card key={index}>
          <CardHeader>
            <feature.icon className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
            <CardTitle>{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
          );
        })}</div>
      </div>
      
    </main>
  );
}
