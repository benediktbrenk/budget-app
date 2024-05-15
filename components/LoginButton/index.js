import { useSession, signIn, signOut } from "next-auth/react";
import { SignButton, SignItemContainer } from "./LoginButton.styled";
import { FaCircleUser } from "react-icons/fa6";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <SignItemContainer>
        {/* Signed in as {session.user.email} <br /> */}
        <p>
          <FaCircleUser />
        </p>
        <SignButton onClick={() => signOut()}>Sign out</SignButton>
      </SignItemContainer>
    );
  }
  return (
    <SignItemContainer>
      <SignButton onClick={() => signIn()}>Login</SignButton>
    </SignItemContainer>
  );
}