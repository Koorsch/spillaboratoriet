import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/sign-in");
  }
  return (
<section>
    <div className="p-8 w-full text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Velkommen til dit Dashboard</h1>
        <p className="mb-6">
            Her kan du fremover administrere dine aktiviteter, oprette nye begivenheder, ændre eksisterende og få et komplet overblik over din kalender. Vi arbejder på at gøre funktionerne klar – indtil da kan du udforske platformen og lære, hvordan det hele fungerer.
        </p>
    </div>
</section>
  );
}
