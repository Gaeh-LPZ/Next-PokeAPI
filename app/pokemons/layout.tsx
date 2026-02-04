import { Navbar } from "../ui/navbar";

export default function Layout({children}: {children: React.ReactNode;}) {
  return (
    <div className="flex min-h-screen">
      <Navbar/>
      <div className="flex flex-col items-center gap-4 m-4 w-full md:grid md:grid-cols-3 md:gap-3 md:justify-items-center">
        {children}
      </div>
    </div>
  );
}