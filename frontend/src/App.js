import "./App.css";
import Profile from "./Components/Profile/Profile";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <Profile />
      </ToastProvider>
    </div>
  );
}

export default App;
