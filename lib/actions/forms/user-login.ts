"use server";

import { encodedRedirect } from "@/utils/next/encodedRedirect";
import { createClient } from "@/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  if (!email || !password) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "Email og adgangskode mangler.",
    );
  }
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });
  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/sign-up", error.message);
  } else {
    return encodedRedirect(
      "success",
      "/sign-up",
      "Tak for tilmeldning! Tjek din email for verifikation",
    );
  }
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }
  return redirect("/protected");
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();
  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Emailadresse mangler");
  }
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  });
  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Kunne ikke nulstille adgangskode.",
    );
  }
  if (callbackUrl) {
    return redirect(callbackUrl);
  }
  return encodedRedirect(
    "success",
    "/forgot-password",
    "Tjek din email for et link til at nulstille dit adgangskodeord.",
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Adgangskode og tilføjelse af adgangskode mangler.",
    );
  }
  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Adgandskode stemmer ikke overens.",
    );
  }
  const { error } = await supabase.auth.updateUser({
    password: password,
  });
  if (error) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Opdatering af adgangskode fejlede.",
    );
  }
  encodedRedirect("success", "/protected/reset-password", "Adgangskode opdateret");
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};
