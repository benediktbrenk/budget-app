import { useSession, signIn, signOut } from "next-auth/react";
import * as Styled from "./LoginButton.styled";
import { FaCircleUser } from "react-icons/fa6";
import { useRouter } from "next/router";

export default function LoginButton() {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    return (
      <Styled.SignItemContainer>
        <Styled.ProfileIcon>
          <FaCircleUser />
        </Styled.ProfileIcon>
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
