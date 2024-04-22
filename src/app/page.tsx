import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  return (
    <main>
      <div className="flex flex-col space-y-6 justify-center items-center min-h-80">
        {user ? <SignOutButton /> : <SignInButton />}

        <h1 className="text-4xl border rounded-lg p-6">For public</h1>
        {user && (
          <h1 className="text-4xl border rounded-lg p-6">For private</h1>
        )}

        {user && <h1>Hi {user?.firstName} 👋</h1>}
      </div>
    </main>
  );
}
