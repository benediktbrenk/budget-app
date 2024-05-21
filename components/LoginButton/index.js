import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import {
  SignButton,
  SignItemContainer,
  ProfileIconWrapper,
} from "./LoginButton.styled";
import { FaCircleUser } from "react-icons/fa6";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <SignItemContainer>
        <Link href="/ProfilePage">
          <ProfileIconWrapper>
            <FaCircleUser size={24} />
          </ProfileIconWrapper>
        </Link>
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
