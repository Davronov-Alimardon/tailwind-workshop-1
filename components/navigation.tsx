import { Map, ShoppingBag, Info, Settings } from "lucide-react";
import { NavButton } from "@/components/nav-button";

export function Navigation() {
  return (
    <div className="flex gap-x-4">
      <NavButton icon={Map} active />
      <NavButton icon={ShoppingBag} />
      <NavButton icon={Info} />
      <NavButton icon={Settings} />
    </div>
  );
}
