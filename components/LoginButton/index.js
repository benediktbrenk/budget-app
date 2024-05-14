import { useSession, signIn, signOut } from "next-auth/react";
import { SignItemContainer, SignLink } from "./LoginButton.styled";
export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <SignItemContainer>
      <p>Not signed in</p>
      <button onClick={() => signIn()}>Login</button>
      {/* <SignLink href="/register">Register</SignLink> */}
    </SignItemContainer>
  );
}