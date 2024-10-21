import Image from "next/image";

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
    </main>
  );
}
