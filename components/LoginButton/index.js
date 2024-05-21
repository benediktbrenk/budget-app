import { useSession, signIn, signOut } from "next-auth/react";
import { SignButton, SignItemContainer } from "./LoginButton.styled";
import { FaCircleUser } from "react-icons/fa6";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginButton() {
  function showToastMessage() {
    toast.success("Successfully logged in!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    return (
      <SignItemContainer>
        <p>
          <FaCircleUser />
        </p>
        <SignButton onClick={() => signOut({ callbackUrl: "/" })}>
          Sign out
        </SignButton>
      </SignItemContainer>
    );
  }
  return (
    <SignItemContainer>
      <SignButton
        onClick={() => {
          signIn({ callbackUrl: "/" });
          return showToastMessage();
        }}
      >
        Login
      </SignButton>
      <ToastContainer />
    </SignItemContainer>
  );
}