import Profile from "@/components/ProfilePage";

export default function ProfilePage({ isDarkModeOn, toggleSwitch }) {
  return <Profile isDarkModeOn={isDarkModeOn} toggleSwitch={toggleSwitch} />;
}
