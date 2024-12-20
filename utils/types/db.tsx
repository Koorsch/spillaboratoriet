export type Event = {
  e_id: string,
  e_name: string,
  e_created_at: Date,
  e_organized_by: string | null,
  e_starts_at: Date,
  e_ends_at: Date,
  e_participants: number | string[],
  e_location: string | null,
  e_description: string | string[] | null,
  e_information: string | string[] | null,
}