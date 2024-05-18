import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MilkingHistory from "./pages/MilkingHistory";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-pink-500 w-full h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<MilkingHistory />} />
      </Routes>
    </div>
  );
}

export default App;
