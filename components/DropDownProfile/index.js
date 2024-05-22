import { useSession, signOut } from "next-auth/react";
import {
  SignButton,
  DropDownConatiner,
  DropDownUl,
  DropDownLi,
  Divider,
  DropDownLink,
} from "./DropDownProfile.styled";

function DropDownProfile() {
  return (
    <DropDownConatiner>
      <DropDownUl>
        <DropDownLi>
          <DropDownLink href="/">Profile</DropDownLink>
        </DropDownLi>
        <Divider />
        <DropDownLi>
          <SignButton onClick={() => signOut({ callbackUrl: "/" })}>
            Sign out
          </SignButton>
        </DropDownLi>
      </DropDownUl>
    </DropDownConatiner>
  );
}

export default DropDownProfile;