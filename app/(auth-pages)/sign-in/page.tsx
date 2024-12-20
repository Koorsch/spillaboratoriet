import { signInAction } from "@/lib/actions/forms/user-login";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <form className="flex-1 flex flex-col min-w-64">
      <h1 className="text-2xl font-medium">Log ind</h1>
            <p className="text-sm text-foreground">
        Ikke noget konti?{" "}
        <Link className="text-foreground font-medium underline" href="/sign-up">
        Tilføj konti
        </Link>
        </p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="dig@dinemail.dk" required />
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Adgangskode</Label>
          <Link
            className="text-sm text-foreground underline"
            href="/forgot-password"
            >
            Glemt adgangskode?
          </Link>
        </div>
        <Input
          type="password"
          name="password"
          placeholder="Your password"
          required
          />
        <SubmitButton pendingText="Logger ind..." formAction={signInAction}>
          Log ind
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
