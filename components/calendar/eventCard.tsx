import { Event } from "@/utils/types/db";

export default async function EventCard ({event}: {event: Event}) {
  return (
    <div id="event-card" className="border border-dotted p-2 ">
      <h2>{event.e_name}</h2>
      <p><strong>Event ID:</strong> {event.e_id}</p>
      <p><strong>Created At:</strong> {new Date(event.e_created_at).toLocaleString()}</p>
      <p><strong>Starts At:</strong> {new Date(event.e_starts_at).toLocaleString()}</p>
      <p><strong>Ends At:</strong> {new Date(event.e_ends_at).toLocaleString()}</p>
      <p><strong>Organized By:</strong> {event.e_organized_by || 'N/A'}</p>
      <p><strong>Location:</strong> {event.e_location || 'N/A'}</p>
      <p><strong>Information:</strong> {event.e_information || 'N/A'}</p>
      <p><strong>Description:</strong> {event.e_description || 'N/A'}</p>
    </div>
  );
};