import Link from "next/link";
import { Button } from "../shadcn/button";

export default async function CalendarEventsAdd() {
  return (
    <section id="eventSection" className="gap-2 flex">
      <Button asChild>
        <Link href="/calendar">
        Tilføj event
        </Link>
        </Button>
      <Button disabled>Ændre event</Button>
    </section>
  )
}