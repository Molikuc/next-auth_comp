"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/Button";

const SignOut = () => {
  return (
    <div>
      <Button onClick={() => signOut()}>SignOut</Button>
    </div>
  );
};

export default SignOut;
