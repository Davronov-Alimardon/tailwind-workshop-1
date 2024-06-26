import { Header } from "@/components/header";

type Props = {
  children: React.ReactNode;
};

export default function SearchPageLayout({ children }: Props) {
  return (
    <div className="h-full ">
      <Header />
      {children}
    </div>
  );
}
