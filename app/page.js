import Link from "next/link";
import signIn from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import Admin from "./admin/page";

export default async function Home({}) {
  const session = await getServerSession(options);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? (
        <Admin />
      ) : (
        <div>
          <h1 className="text-2xl font-medium mb-9">Welcome to the App</h1>
          <div className="text-center rounded-md border-2 border-slate-300 bg-slate-400 p-5">
            <Link href="/admin">Enter as admin</Link>
          </div>
        </div>
      )}
    </main>
  );
}
