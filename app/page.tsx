import { SessionWrapper } from "@/components/SessionWrapper";
import SigninComponents from "@/components/login/SigninComponents";
import { auth } from "@/lib/auth";



export default async function Home() {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <div>
      <SessionWrapper>
        {isAuthenticated}
        <SigninComponents/>
      </SessionWrapper>
    </div>
  );
}
