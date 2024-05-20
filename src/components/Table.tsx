const Table = ({ milkingDetails, milkingTableHeaderData }: any) => {
    console.log(milkingDetails);
    
  return (
    <div className="relative overflow-x-auto max-h-[600px] rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {milkingTableHeaderData.map((res: string, index: number) => {
              return (
                <th key={index} scope="col" className="px-6 py-3 capitalize">
                  {res}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {!milkingDetails ? (
            // <tr
            //   className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            // >
            //   <div className="px-6 py-4">
            //     No milking data to display
            //   </div>
            // </tr>
            <div>
              <h2 className="text-white text-xl">No milking data to display</h2>
            </div>
          ) : (
            milkingDetails.map((res: any, index: number) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{res.currentDate}</td>
                  <td className="px-6 py-4">{res.startTime}</td>
                  <td className="px-6 py-4">{res.endTime}</td>
                  <td className="px-6 py-4">{res.totalDuration}</td>
                  <td className="px-6 py-4">{res.totalMilk}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
