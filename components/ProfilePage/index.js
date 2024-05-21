import { ProfileIconWrapper } from "@/components/LoginButton/LoginButton.styled";
import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";

export default function ProfilePage({ userData }) {
  if (!userData || !userData.username || !userData.email) {
    return <div></div>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <ProfileIconWrapper>
        <FaCircleUser size={24} />
      </ProfileIconWrapper>
      <div>
        <p>Username: {userData.username}</p>
        <p>Email: {userData.email}</p>
      </div>

      <div>
        <Link href="/EditProfile">
          <button>Edit Profile</button>
        </Link>
      </div>
    </div>
  );
}
