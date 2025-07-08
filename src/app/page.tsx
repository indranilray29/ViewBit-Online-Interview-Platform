import { Button } from "@/components/ui/button";
import Image from "next/image";
// Import authentication components (example: Clerk)
import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-10">
      HomePage 
    </div >
  );
}
