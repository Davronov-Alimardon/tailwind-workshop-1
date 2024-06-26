import { Filters } from "@/components/filters";
import { Button } from "@/components/ui/button";

export default function SearchPage() {
  return (
    <div className="h-[calc(100%-64px)] grid grid-cols-5 p-6 max-w-screen-xl mx-auto gap-4">
      <div className="h-full col-span-3 space-y-4">
        <Filters />
        <Filters />
      </div>
      <div className="h-full bg-sky-500 col-span-2 rounded-xl"></div>
    </div>
  );
}
