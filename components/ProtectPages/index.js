import { useSession } from "next-auth/react";

export default function ProtectPage({ children }) {
  // required: true makes only 'loading' or 'authenticated' possible. Else the user is redirected to login page.
  const { status } = useSession({ required: true });
  if (status === "loading") {
    return <div>Is loading...</div>;
  }
  return children;
}
