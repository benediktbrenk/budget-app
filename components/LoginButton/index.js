import Image from "next/image";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import DropDownProfile from "../DropDownProfile";
import {
  AvatarContainer,
  SignButton,
  SignItemContainer,
} from "./LoginButton.styled";

export default function LoginButton() {
  const [openProfileDropDown, setOpenProfileDropDown] = useState(false);
  const _router = useRouter();
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
