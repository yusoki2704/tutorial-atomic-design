import { UserProvider } from "./providers/UserProviders";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
