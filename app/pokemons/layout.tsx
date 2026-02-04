import { Navbar } from "../ui/navbar";

export default function Layout({children}: {children: React.ReactNode;}) {
  return (
    <div className="flex w-full">
      <Navbar/>
      <div className="grid grid-cols-3 gap-3 m-4 w-full items-center justify-between">
        {children}
      </div>
    </div>
  );
}