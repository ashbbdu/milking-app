import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Routing from "./Routing";

function App() {
  const [milkingSession , setMilkingSession] = useState<boolean>(false)
  return (
    <div id="main" className="bg-gradient-to-r from-blue-500 to-pink-500 w-full h-[100vh]">
      <Navbar milkingSession={milkingSession} />
      <Routing setMilkingSession={setMilkingSession} />
    </div>
  );
}

export default App;
