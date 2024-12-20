"use server";

import { createClient } from "@/utils/supabase/server";

export const createEventAction = async (formData: FormData) => {
  const supabase = await createClient();
}