import Profile from "@/components/ProfilePage";

const user = {
  name: "John Doe",
  email: "john@example.com",
  age: 30,
};

export default function ProfilePage({ isDarkModeOn, toggleSwitch }) {
  return (
    <div>
      <Profile
        user={user}
        isDarkModeOn={isDarkModeOn}
        toggleSwitch={toggleSwitch}
      />
    </div>
  );
}
