import { getUserEvents } from "@/actions/event";
import EventCards from "@/components/EventCards";
import { Suspense } from "react";

export default function EventsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-col gap-4">
          <Event />
        </div>
    </Suspense>
  );
}


const Event = async () => {

  const { events, username } = await getUserEvents();

  if (events.length === 0) {
    return (
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">No events found</h2>
        <p className="text-gray-500">Create your first event!</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((event) => (
      <EventCards key={event.id} event={event} username={username} />
    ))}
    </div>
  )
}
