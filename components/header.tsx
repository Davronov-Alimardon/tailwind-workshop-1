import { Logo } from "@/components/logo";
import { Navigation } from "@/components/navigation";
import { Actions } from "./actions";

export function Header() {
  return (
    <header className="h-16 border-b">
      <nav className="flex justify-between max-w-screen-xl mx-auto h-full items-center px-6">
        <Logo />
        <Navigation />
        <Actions />
      </nav>
    </header>
  );
}
