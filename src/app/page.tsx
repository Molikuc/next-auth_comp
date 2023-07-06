import CreateUser from "@/components/CreateUser";
import { getAuthSession } from "@/lib/auth";

export default async function Home() {
  const session = await getAuthSession();
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen text-4xl gap-5">
      {session ? `Welcome ${session.user.name}` : "Welcome"}
      <div className="flex justify-center items-center">
        <CreateUser />
      </div>
    </div>
  );
}
