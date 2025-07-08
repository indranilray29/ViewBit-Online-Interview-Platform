import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { SparklesIcon } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import DashboardBtn from "./DashboardBtn";

function Navbar() {
  return (
    <nav className="border-b bg-background/80 backdrop-blur-md shadow-sm transition-all">
      <div className="flex h-16 items-center px-6 container mx-auto">
        {/* LEFT SIDE - LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 group mr-8 select-none"
        >
          <SparklesIcon
            className="size-7 text-orange-500 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-200"
            strokeWidth={2.2}
          />
          <span className="relative font-extrabold text-3xl tracking-tight bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-sm transition-all group-hover:tracking-widest group-hover:scale-105 duration-200">
            View<span className="font-light">Bit</span>
            {/* Orange accent underline */}
            <span className="absolute left-0 -bottom-1 w-full h-1 rounded bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300 opacity-70 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </span>
        </Link>

        {/* RIGHT SIDE - ACTIONS */}
        <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <DashboardBtn />
            <ModeToggle />
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox:
                    "ring-2 ring-orange-400 hover:ring-orange-500 transition-all duration-200",
                },
              }}
            />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
export default Navbar;