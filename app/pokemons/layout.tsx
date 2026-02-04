import { Navbar } from "../ui/navbar";

export default function Layout({children}: {children: React.ReactNode;}) {
  return (
    <div className="flex min-h-screen ">
      <Navbar/>
      <div className="grid grid-cols-3 gap-3 m-4 w-full items-center justify-items-center">
        {children}
      </div>
    </div>
  );
}