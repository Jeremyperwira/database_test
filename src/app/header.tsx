import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useSession,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <div className="relative z-10 border-b py-5 px-auto bg-gray-50">
      <div className="items-center container px-20 mx-auto justify-between flex">
        {/* <Link href="/" className="flex gap-2 items-center text-xl text-black">
          <Image src="/logo.png" width="50" height="50" alt="file drive logo" /> */}
          
          <a href="/" className="text-lg"><span className="font-bold text-slate-800">Pasar</span><span
            className="text-slate-500">Ku</span>
        </a>
        {/* </Link> */}

        <SignedIn>
          <Button variant={"outline"}>
            <Link href="/dashboard/files">Your Files</Link>
          </Button>
        </SignedIn>

        <div className="flex gap-2">
          <OrganizationSwitcher />
          <UserButton />
          <SignedOut>
            <SignInButton mode="modal">
              {/* <Link href="/dashboard/files"> */}
              <Button>Sign In</Button>
              {/* </Link> */}
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
