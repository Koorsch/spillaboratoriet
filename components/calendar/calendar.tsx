import { createClient } from "@/utils/supabase/server";
import { Button } from "../shadcn/button";

export default async function CalendarApp() {
  const supabase = createClient();
  const {
    data: { user },
  } = await (await supabase).auth.getUser();
  

 return (
  <section id="calendar__main">
    <nav id="calendar__header" className="flex justify-between items-center w-full truncate">
      <Button size={"sm"} variant={"outline"}>
          {"<"}
      </Button>
      <h2 className="truncate text-ellipsis">
        Month
      </h2>
      <Button size={"sm"} variant={"outline"}>
          {">"}
      </Button>
    </nav>
    <section id="calendar__container" className="grid grid-rows-4 justify-center">
        <div className="grid grid-cols-8 first-of-type:border">
        <span className=" p-2 m-2">Week1</span>
        <span className=" p-2 m-2">Day</span>
        <span className=" p-2 m-2">Day</span>
        <span className=" p-2 m-2">Day</span>
        <span className=" p-2 m-2">Day</span>
        <span className=" p-2 m-2">Day</span>
        <span className=" p-2 m-2">Day</span>
     </div>
      </section>
  </section>
)
}