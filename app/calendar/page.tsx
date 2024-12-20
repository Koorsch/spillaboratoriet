import dayjs from "dayjs";
import CalendarApp from "@/components/calendar/calendar";
import { createClient } from "@/utils/supabase/server";
import EventCard from "@/components/calendar/eventCard";
import CalendarEventsAdd from "@/components/calendar/addEvent";

export default async function Calendar() {
  const supabase = await createClient();
  const {data: user, error} = await supabase.auth.getUser();
  const {data: events} = await supabase.from("events").select("*")

  return (
    <div>
      <h1>Events</h1> <CalendarEventsAdd></CalendarEventsAdd>
      {events?.map(event => (
        <EventCard key={event.e_id} event={event} />
      ))}
    </div>   
  );
}
