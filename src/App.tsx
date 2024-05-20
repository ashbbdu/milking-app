import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Routing from "./Routing";

function App() {
  const [milkingSession , setMilkingSession] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  },[]);

  return (
    <div id="main" className="bg-gradient-to-r from-blue-500 to-pink-500 w-full h-[100vh]">
      {loading  && <Loader />} 
      <Navbar milkingSession={milkingSession} />
      <Routing setMilkingSession={setMilkingSession} />
    </div>
  );
}

export default App;
