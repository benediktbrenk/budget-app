import { SectionContainer } from "./ProtectPages.styled";
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
        <h1>Manage Your Finances Effortlessly</h1>
        <p>
          Track, analyze, and optimize your expenses with our user-friendly
          Expense App.
        </p>
      </SectionContainer>
    );
  }
  return children;
}
