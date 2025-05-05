import { Link, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const EventCards = ({ event, username, isPublic=false }) => {
  return (
    <Card className="flex flex-col justify-between cursor-pointer">
      <CardHeader>
        <CardTitle className="text-2xl">{event.title}</CardTitle>
        <CardDescription className="flex justify-between">
          <span>
            {event.duration} mins | {event.isPrivate ? "Private" : "Public"}
          </span>
          <span>{event._count.bookings} Bookings</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{event.description}</p>
      </CardContent>
      {!isPublic && (
      <CardFooter className="flex gap-2">
        <Button variant="outline" className="flex-items" >
            <Link className="mr-2 h-4 w-4"/> Copy Link
        </Button>
        <Button variant="destructive" >
            <Trash2 className="mr-2 h-4 w-4" /> Delete
        </Button>
      </CardFooter>
      )}
    </Card>
  );
};

export default EventCards;
