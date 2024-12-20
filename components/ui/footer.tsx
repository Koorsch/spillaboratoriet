import Link from "next/link";
import { Linkedin, GitBranch } from "lucide-react";
import HeaderAuth from "@/components/header-auth";
export async function FooterSL () {
  return (
    <footer className="mt-2 w-full max-h-fit flex flex-wrap items-end justify-center mx-auto text-center text-xs text-foreground">
      <section className="flex flex-col items-center mb-2">
        <div className="flex flex-row gap-x-2">
          <Link href="https://www.linkedin.com/in/andreas-ekvall-hofvander-216130151/" target='_blank'>
            <Linkedin/>
          </Link>
          <Link href="https://github.com/Koorsch/spillaboratoriet" target='_blank'>
            <GitBranch />
          </Link>
        </div>
        <div className="flex flex-row flex-wrap gap-x-2">
          <span className='flex flex-wrap text-pretty'>copyright</span>
          <span className='flex flex-wrap text-pretty'>SwedishChef LTD</span>
          <span className='flex flex-wrap text-pretty'>2024 MMD</span>
        </div>
      </section>
      <HeaderAuth />
  </footer>
  )
}