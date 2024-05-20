import Table from "../components/Table"
import { milkingTableHeaderData } from "../utils/constants"

const MilkingHistory = () => {

    const storageData = localStorage.getItem("details");
    const milkingDetails = storageData !== null ? JSON.parse(storageData) : [];

    // const milkingDetails = JSON.parse(localStorage.getItem("details")) || {}
  return (
    <div className="p-4">
    <Table milkingDetails={milkingDetails} milkingTableHeaderData={milkingTableHeaderData}   />
</div>
  )
}

export default MilkingHistory