import "./App.css";
import Profile from "./Components/Profile/Profile";
import { ToastProvider } from "react-toast-notifications";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";
import {useEffect} from "react";
function App() {
    if (typeof window !== "undefined") {
        injectStyle();
    }
    const notify = () => {
        toast.dark("Last update: 25 Oct 2021 📆");
    }
    useEffect(()=>{
        notify()
    },[])
  return (
    <div className="App">
      <ToastProvider>
        <Profile />
      </ToastProvider>
        <ToastContainer />
    </div>
  );
}

export default App;
