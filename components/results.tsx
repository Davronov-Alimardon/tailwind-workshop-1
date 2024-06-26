import Image from "next/image";
import DefaultImg from "@/public/image.jpg";
import { Heart, Star } from "lucide-react";
import { Button } from "./ui/button";

const Item = ({ image, title, price }: any) => {
  return (
    <div className="bg-white p-2 rounded-md drop-shadow-lg flex gap-x-3">
      <Image
        src={image}
        alt="img 001"
        className="rounded-md aspect-square"
        height={100}
        width={100}
      />
      <div className="w-full flex flex-col">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <p className="text-xl">{title}</p>
            <Heart className="h-6 w-6" />
          </div>
          <div className="flex items-center gap-x-3">
            <div className="flex items-center text-sm">
              <Star className="size-4 mr-1 stroke-sky-400 fill-sky-400" />
              4.9&nbsp; <span className="text-muted-foreground">(75)</span>
            </div>
            <p className="text-sm">2.2km</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-end">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xl">{price}</p>
            <Button>Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Results = () => {
  return (
    <div className="bg-[#f3f6f9] rounded-xl p-6 space-y-4">
      <Item image="/image2.jpg" title="Gostone" price="$360" />
      <Item image="/brooklyn.jpg" title="Gostone" price="$360" />
      <Item image="/berlin.jpg" title="Gostone" price="$360" />
      <Item image="/image3.jpg" title="Gostone" price="$360" />
    </div>
  );
};
