"use client";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    name: "Ava Thompson",
    role: "Project Manager",
    content:
      "MeetMe has made scheduling a breeze for our team. No more back-and-forth emails—just set my availability, share the link, and done! I’m loving it.",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Liam Roberts",
    role: "Freelance Developer",
    content:
      "With MeetMe, managing my client meetings is seamless. The feedback from my clients has been great—they love the ease of booking directly with me.",
    image: "https://i.pravatar.cc/150?img=6",
  },
  {
    name: "Isabella White",
    role: "Startup Co-Founder",
    content:
      "Using MeetMe to coordinate investor meetings has saved us so much time. The interface is clean, and it’s a huge productivity booster for our team.",
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Ethan Davis",
    role: "Sales Consultant",
    content:
      "MeetMe has been a game-changer! I’ve seen my booking rate soar, and scheduling calls is now smoother than ever. Can't imagine going back to the old way.",
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Mike Taylor",
    role: "Event Planner",
    content:
      "This tool has completely changed how I organize client calls. MeetMe’s simplicity and user-friendly interface make scheduling a breeze—I can’t imagine planning without it now.",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Sophia Martinez",
    role: "HR Coordinator",
    content:
      "MeetMe has simplified our recruitment process immensely. Scheduling interviews with candidates is now stress-free, and it gives a professional touch to our brand!",
    image: "https://i.pravatar.cc/150?img=9",
  },
  {
    name: "James Anderson",
    role: "Consultant",
    content:
      "MeetMe is a lifesaver! I can set my availability, send the link, and let clients book at their convenience. It’s simple, professional, and keeps my schedule organized.",
    image: "https://i.pravatar.cc/150?img=10",
  },
];

const Testimonials = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2500,
        }),
      ]}
      className="w-full mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-2/5 p-4">
            <Card className="h-full shadow-lg border rounded-lg transition-transform transform hover:scale-105 duration-200 ease-out">
              <CardContent className="flex flex-col items-center text-center p-6">
                <Avatar className="h-16 w-16 mb-4">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <p className="text-gray-700 text-center italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-purple-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Testimonials;
