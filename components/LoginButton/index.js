import { useSession, signIn, signOut } from "next-auth/react";
import { SignButton, SignItemContainer } from "./LoginButton.styled";
import { FaCircleUser } from "react-icons/fa6";
import { useRouter } from "next/router";
import DropDownProfile from "../DropDownProfile";
import { useState } from "react";
import Link from "next/link";

export default function LoginButton() {
  const [openProfileDropDown, setOpenProfileDropDown] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    return (
      <SignItemContainer>
        <span onClick={() => setOpenProfileDropDown((state) => !state)}>
          <FaCircleUser />
        </span>
        {openProfileDropDown && <DropDownProfile />}
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