'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../shadcn/button";
import { ThemeSwitcher } from "../theme-switcher";

export default function HeaderSL() {
  const pathname = usePathname();
  return (
    <div className="flex-1 w-full h-full flex flex-col gap-2 items-center justify-between">
      <nav className="w-full gap-2 m-2 p-2 flex justify-between flex-wrap sm:gap-y-0 sm:justify-between md:flex-row ">
        <Link href="/">
        <h1 className='flex align-middle justify-center items-center gap-x-2 font-extrabold'>
        <img src="/assets/SL_potion.png" alt="Spillaboratoriets logotype" className='aspect-square w-16 mix-blend-darken' />
          <span className='sr-only md-plus:not-sr-only'>Spillaboratoriet</span>
          <span className='md-plus:sr-only'>SL</span>
        </h1>
        </Link>
        <section id="headerFuncs" className="flex gap-2 sm:gap-2 md:gap-4 items-center">
          <Button asChild variant={"default"}>
            <Link href="/project-brief" className={`link ${pathname === '/project-brief' ? 'active' : ''} lg:text-md font-kobenhavn`}>Projektet</Link>
          </Button>
          <Button asChild variant={"default"}>
            <Link href="/calendar" className={`link ${pathname === '/calendar' ? 'active' : ''} lg:text-md font-kobenhavn`}>Kalender</Link>
          </Button>
          <ThemeSwitcher />
        </section>
      </nav>
  </div>
  );
}
