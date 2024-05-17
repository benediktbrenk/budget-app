import { SectionContainer } from "@/Homepage.styled";
import { useSession } from "next-auth/react";

export default function ProtectPage({ children }) {
  // required: true makes only 'loading' or 'authenticated' possible. Else the user is redirected to login page.
  const { status } = useSession();
  if (status === "loading") {
    return <div>Is loading...</div>;
  }
  if (status !== "authenticated") {
    return (
      <SectionContainer>
        <h2>Login and check your Budget!</h2>
        <p>This way you can keep an eye on your finances</p>
        <span>
          <p>Try our Test Account:</p>
          <p>
            <strong>username:</strong> user
          </p>
          <p>
            <strong>password:</strong> user
          </p>
        </span>
      </SectionContainer>
    );
  }
  return children;
}
