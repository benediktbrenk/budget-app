import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import * as Styled from "./LoginButton.styled";
import { FaCircleUser } from "react-icons/fa6";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Styled.SignItemContainer>
        <Link href="/ProfilePage">
          <Styled.ProfileIcon>
            <FaCircleUser />
          </Styled.ProfileIcon>
        </Link>
        <Styled.SignButton onClick={() => signOut({ callbackUrl: "/" })}>
          Sign out
        </Styled.SignButton>
      </Styled.SignItemContainer>
    );
  }

  return (
    <Styled.SignItemContainer>
      <Styled.SignButton onClick={() => signIn({ callbackUrl: "/" })}>
        Login
      </Styled.SignButton>
    </Styled.SignItemContainer>
  );
}
