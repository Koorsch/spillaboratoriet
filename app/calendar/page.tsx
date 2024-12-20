import { createClient } from "@/supabase/server";
import EventCard from "@/components/calendar/eventCard";
import CalendarEventsAdd from "@/components/calendar/addEvent";
import CalendarApp from "@/components/calendar/calendar";

export default async function Calendar() {
  const supabase = await createClient();
  const {data: user, error} = await supabase.auth.getUser();
  const {data: events} = await supabase.from("events").select("*")

  return (
    <div>
      <h1>Events/Aktiviteter</h1> 
      <CalendarEventsAdd></CalendarEventsAdd>
      <CalendarApp></CalendarApp>
      <section>
        <h3 className="underline">Testers</h3>
        <div className="flex flex-row gap-2 flex-wrap">
        {events?.map(event => (
          <EventCard key={event.e_id} event={event} />
        ))}
        </div>
      </section>
    </div>   
  );
}
