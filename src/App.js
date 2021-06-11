import { PrimaryButon } from "./components/atoms/button/PrimaryButton";
import { SecondaryButon } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "ゆーすけ",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "12345@example.com",
  phone: "090-111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButon>テスト</PrimaryButon>
      <SecondaryButon>検索</SecondaryButon>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
