import { Logo, NavMenu } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 bg-black text-white">
      <Logo />

      <NavMenu />
    </main>
  );
}
