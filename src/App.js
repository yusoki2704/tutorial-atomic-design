import { PrimaryButon } from "./components/atoms/button/PrimaryButton";
import { SecondaryButon } from "./components/atoms/button/SecondaryButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButon>テスト</PrimaryButon>
      <SecondaryButon>検索</SecondaryButon>
    </div>
  );
}
