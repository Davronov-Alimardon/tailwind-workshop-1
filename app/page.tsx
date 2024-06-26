import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full min-w-full">
      <div className="flex min-h-full bg-black items-center justify-center">
        <Button size="lg" variant="outline">
          <Link href="/search">Click Me</Link>
        </Button>
      </div>
    </div>
  );
}
