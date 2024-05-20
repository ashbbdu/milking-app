import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import MilkingHistory from "./pages/MilkingHistory"

const Routing = ({setMilkingSession} : any) => {
  return (
    <Routes>
        <Route path="/" element={<Home  setMilkingSession={setMilkingSession} />} />
        <Route path="/history" element={<MilkingHistory />} />
    </Routes>
  )
}

export default Routing