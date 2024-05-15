import { useSession, signIn, signOut } from "next-auth/react";
import { SignButton, SignItemContainer, SignLink } from "./LoginButton.styled";
export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <SignButton onClick={() => signOut()}>Sign out</SignButton>
      </>
    );
  }
  return (
    <SignItemContainer>
      <p>Not signed in</p>
      <SignButton onClick={() => signIn()}>Login</SignButton>
      {/* <SignLink href="/register">Register</SignLink> */}
    </SignItemContainer>
  );
}