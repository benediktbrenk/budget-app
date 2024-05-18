import { useSession, signIn, signOut } from "next-auth/react";
import { SignButton, SignItemContainer } from "./LoginButton.styled";
import { FaCircleUser } from "react-icons/fa6";
import { useRouter } from "next/router";

export default function LoginButton() {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    return (
      <SignItemContainer>
        <p>
          <FaCircleUser />
        </p>
        <SignButton onClick={() => signOut({ callbackUrl: "/" })}>
          Sign out
        </SignButton>
      </SignItemContainer>
    );
  }
  return (
    <SignItemContainer>
      <SignButton onClick={() => signIn({ callbackUrl: "/" })}>
        Login
      </SignButton>
    </SignItemContainer>
  );
}