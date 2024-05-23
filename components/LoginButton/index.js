import { useSession, signIn, signOut } from "next-auth/react";
import {
  SignButton,
  SignItemContainer,
  AvatarContainer,
} from "./LoginButton.styled";
import { FaCircleUser } from "react-icons/fa6";
import { useRouter } from "next/router";
import DropDownProfile from "../DropDownProfile";
import { useState } from "react";
import Image from "next/image";

export default function LoginButton() {
  const [openProfileDropDown, setOpenProfileDropDown] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  if (session) {
    return (
      <SignItemContainer>
        <AvatarContainer
          onClick={() => setOpenProfileDropDown((state) => !state)}
        >
          {session.user.image ? (
            <Image
              src={session.user.image}
              width={50}
              height={50}
              alt="user image"
            />
          ) : (
            <FaCircleUser fontSize={50} />
          )}
        </AvatarContainer>
        {openProfileDropDown && (
          <DropDownProfile setOpenProfileDropDown={setOpenProfileDropDown} />
        )}
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
