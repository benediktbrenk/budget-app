import { useSession, signOut } from "next-auth/react";
import {
  SignButton,
  DropDownConatiner,
  DropDownUl,
  DropDownLi,
  Divider,
  DropDownLink,
} from "./DropDownProfile.styled";

function DropDownProfile({ setOpenProfileDropDown }) {
  return (
    <DropDownConatiner>
      <DropDownUl>
        <DropDownLi>
          <DropDownLink
            href="/profilepage"
            onClick={() => setOpenProfileDropDown((state) => !state)}
          >
            Profile
          </DropDownLink>
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
