import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProfilePage from "../ProfilePage";
import EditProfile from "../EditProfile";

export default function ProfileManager() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const updateUserData = (newData) => {
    setUserData(newData);
    router.push("/ProfilePage");
  };

  useEffect(() => {}, [router.pathname]);

  return (
    <div>
      {router.pathname === "/ProfilePage" && (
        <ProfilePage userData={userData} />
      )}
      {router.pathname === "/EditProfile" && (
        <EditProfile userData={userData} updateUserData={updateUserData} />
      )}
    </div>
  );
}
