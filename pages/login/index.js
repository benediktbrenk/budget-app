import { SectionContainer } from "@/Homepage.styled";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (session && status === "authenticated") {
    router.push("/");
    return;
  }
  return (
    <SectionContainer>
      <h2>Login and check your Budget!</h2>
      <p>This way you can keep an eye on your finances</p>
      <span>
        <p>Try our Test Account:</p>
        <p>
          <strong>username:</strong> user
        </p>
        <p>
          <strong>password:</strong> user
        </p>
      </span>
    </SectionContainer>
  );
}
