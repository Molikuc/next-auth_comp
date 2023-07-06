import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import { getAuthSession } from "@/lib/auth";
import { signOut } from "next-auth/react";
import SignOut from "./SignOut";

const createUser = async () => {
  const session = await getAuthSession();
  return (
    <div className="flex justify-center items-center h-full w-full">
      {session ? (
        <SignOut />
      ) : (
        <Link href="/sign-in" className={buttonVariants()}>
          Sign In
        </Link>
      )}
    </div>
  );
};

export default createUser;
