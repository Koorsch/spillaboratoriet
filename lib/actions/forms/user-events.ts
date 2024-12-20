"use server";

import { createClient } from "@/supabase/server";

export const createEventAction = async (formData: FormData) => {
  const supabase = await createClient();
}