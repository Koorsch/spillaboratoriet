import { resetPasswordAction } from "@/lib/actions/forms/user-login";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";

export default async function ResetPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  return (
    <form className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4">
      <h1 className="text-2xl font-medium">Reset password</h1>
      <p className="text-sm text-foreground/60">
        Venligst tilføj en ny adgangskode nedenfor.
      </p>
      <Label htmlFor="password">Ny adgangskode</Label>
      <Input
        type="password"
        name="password"
        placeholder="New password"
        required
      />
      <Label htmlFor="confirmPassword">Bekræft ny adgangskode</Label>
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Bekræft adgangskode"
        required
      />
      <SubmitButton formAction={resetPasswordAction}>
        Reset password
      </SubmitButton>
      <FormMessage message={searchParams} />
    </form>
  );
}
