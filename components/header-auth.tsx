import { signOutAction } from "@/lib/actions/forms/user-login";
import Link from "next/link";
import { Button } from "./shadcn/button";
import { createClient } from "@/supabase/server";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <section className="sl-container__outer w-fit mb-2">
      <div className="sl-container__inner text-sm grid gap-y-1">
      <span className="flex flex-row flex-wrap text-pretty gap-1 items-center">Hej, <i className="capitalize">{user.email?.split('@', 1)}!</i>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
          <path d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
        </svg>
      </span>
      <div className="flex flex-row items-center gap-2 flex-grow">
        <Button asChild type="submit" variant={"outline"}>
          <Link href="/protected">
              Indstillinger
          </Link>
        </Button>
      <form action={signOutAction}>
        <Button type="submit" variant={"destructive"} className="">
          Log ud
        </Button>
      </form>
      </div>
    </div>
    </section>
  ) : (
    <section className="w-fit mt-2">
      <Button disabled={true} asChild size="sm" variant={"outline"}>
        <Link href="/sign-in" className="flex gap-2">Log ind
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
          <path d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
        </svg>
        </Link>
      </Button>
      {/*
      // TODO: add SMTP server & request for an invite.
      <Button asChild size="sm" variant={"default"}>
      <Link href="/sign-up">Sign up</Link>
      </Button> */}
    </section>
  )
}
