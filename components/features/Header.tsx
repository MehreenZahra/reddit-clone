"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Button } from "../ui/button";
import Image from "next/image";
import ReddishLogo from "@/images/Reddish Full.png";
import ReddishLogoOnly from "@/images/Reddish Logo Only.png";
import { ChevronLastIcon, ChevronLeftIcon, MenuIcon } from "lucide-react";
import { useSidebar } from "../ui/sidebar";

function Header() {
  const { user } = useUser();
  const { toggleSidebar, open, isMobile } = useSidebar();
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      {/* left Side */}
      <div className="flex items-center gap-2">
        {open && !isMobile ? (
          <ChevronLeftIcon className="w-6 h-6" onClick={toggleSidebar} />
        ) : (
          <div className="flex items-center gap-2">
            <MenuIcon className="w-6 h-6" onClick={toggleSidebar} />
            <Image
              src={ReddishLogo}
              alt="logo"
              width={150}
              height={150}
              className="hidden md:block"
            />
            <Image
              src={ReddishLogoOnly}
              alt="logo"
              width={40}
              height={40}
              className="block md:hidden"
            />
          </div>
        )}
      </div>
      {/* right side */}
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Button asChild variant={"outline"}>
            <SignInButton mode="modal" />
          </Button>
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
