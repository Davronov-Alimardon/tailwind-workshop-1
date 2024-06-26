import { Filters } from "@/components/filters";
import { Results } from "@/components/results";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Dot = ({ className, price }: any) => {
  return (
    <div className={cn("absolute ", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <div className="space-y-2 cursor-pointer hover:opacity-75 drop-shadow-md">
            <div className="bg-slate-500/50 p-1 rounded-xl text-white text-sm text-center">
              ${price}
            </div>
            <div className="bg-slate-500/50 size-12 rounded-full flex flex-col items-center justify-between p-4">
              <div className="h-full w-full bg-white rounded-full"></div>
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent>Price: ${price}</PopoverContent>
      </Popover>
    </div>
  );
};

export default function SearchPage() {
  return (
    <div className="h-[calc(100%-64px)] grid grid-cols-5 p-6 max-w-screen-xl mx-auto gap-4">
      <div className="h-full col-span-3 space-y-4">
        <Filters />
        <Results />
      </div>
      <div className="h-full bg-sky-500 col-span-2 rounded-xl relative overflow-hidden">
        <Image
          fill
          src="/image.jpg"
          alt="image"
          className="rounded-xl object-cover"
        />
        <Dot className="top-12 left-10" price={450} />
        <Dot className="bottom-36 right-36" price={992} />
      </div>
    </div>
  );
}
