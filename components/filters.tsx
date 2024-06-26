import { cn } from "@/lib/utils";

const FilterButton = ({ children, active }: any) => {
  return (
    <button
      className={cn(
        "p-2 px-3 rounded-xl text-muted-foreground",
        active && "bg-sky-500/40 text-neutral-800"
      )}
    >
      {children}
    </button>
  );
};

export const Filters = () => {
  return (
    <div className="bg-[#f3f6f9] rounded-xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <FilterButton active>Hotel</FilterButton>
          <FilterButton>House</FilterButton>
          <FilterButton>Village</FilterButton>
        </div>
        <div>Today: Oct 10, Tue</div>
      </div>
    </div>
  );
};
