import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import MilkingHistory from "./pages/MilkingHistory"
import { MilkinSession } from "./utils/modals/Milking.modal"

const Routing = ({setMilkingSession} : MilkinSession) => {
  return (
    <Routes>
        <Route path="/" element={<Home  setMilkingSession={setMilkingSession} />} />
        <Route path="/history" element={<MilkingHistory />} />
    </Routes>
  )
}

export default Routing