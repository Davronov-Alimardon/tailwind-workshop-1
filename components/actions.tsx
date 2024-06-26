import { Bell, Heart } from "lucide-react";
import { NavButton } from "@/components/nav-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Actions = () => {
  return (
    <div className="flex gap-x-4">
      <NavButton icon={Bell} />
      <NavButton icon={Heart} />
      <Avatar>
        <AvatarImage />
        <AvatarFallback className="bg-sky-500/40">CN</AvatarFallback>
      </Avatar>
    </div>
  );
};
