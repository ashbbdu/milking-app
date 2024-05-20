import { useState } from "react";
import { useStopwatch } from "react-timer-hook";
import Modal from "../components/Modal";
import { convertDate, convertSecondsToTimeFormat, time , dateAndTime } from "../utils/dateConvertor";
import { formatTime } from "../utils/formatTime";

const MainPage = ({play, pauseSound , stop} : any) => {
  const [status, setStatus] = useState<String>("Not running");
  const [pauseBtn, setPauseBtn] = useState<boolean>(false);
  const [totalMilk, setTotalMilk] = useState<number>(0);
  const [startTime, setStartTime] = useState<String>("");
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    start,
    pause,
  } = useStopwatch({ autoStart: false });

  const currentDate = dateAndTime()[0];
  const endTime = dateAndTime()[1]

  const startTimeFn = () => {
    let startTime = dateAndTime()[1];
    setStartTime(startTime);
  };

  const handleTableData = () => {
    const milkingDetails = {
      totalDuration: convertSecondsToTimeFormat(totalSeconds),
      totalMilk,
      currentDate,
      startTime,
      endTime,
    };
    const storageData = localStorage.getItem("details");
    const details = storageData !== null ? JSON.parse(storageData) : [];
    localStorage.setItem(
      "details",
      JSON.stringify([milkingDetails, ...details])
    );
  };

  return (
    <div>
      <div className="text-center">
        {status === "Not running" ? (
          <div></div>
        ) : (
          <div className="text-5xl flex items-center justify-between">
            <span className="">{formatTime(days)}</span>:
            <span className="">{formatTime(hours)}</span>:
            <span className="">{formatTime(minutes)}</span>:
            <span className="">{formatTime(seconds)}</span>
          </div>
        )}
        {status === "Running" ? (
          <>
            {pauseBtn ? (
              <button
                onClick={() => {
                  start();
                  setPauseBtn((prev) => !prev);
                  play()
                }}
                className="mt-4 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-md px-4 py-2 text-center me-2 mb-2 outline-none"
              >
                Resume
              </button>
            ) : (
              <button
                onClick={() => {
                  pause();
                  setPauseBtn((prev) => !prev);
                  pauseSound()
                }}
                className="mt-4 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-md px-4 py-2 text-center me-2 mb-2 outline-none"
              >
                Pause
              </button>
            )}
          </>
        ) : (
          <button
            type="button"
            onClick={() => {
              start();
              setStatus("Running");
              startTimeFn()
              play()
            }}
            className="mt-4 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-md px-4 py-2 text-center me-2 mb-2 outline-none"
          >
            Start Milking
          </button>
        )}
        {status === "Running" && (
          <Modal
            pauseSound={pauseSound}
            stop={stop}
            header={"Milk Amount (In Litres)"}
            label={"Please Enter the liters of milk"}
            cancelBtnText={"Cancel"}
            confirmBtnText={"Submit"}
            totalMilk={totalMilk}
            setTotalMilk={setTotalMilk}
            pause={pause}
            pauseBtn={pauseBtn}
            setPauseBtn={setPauseBtn}
            handleTableData={handleTableData}
          />
        )}
      </div>
    </div>
  );
};

export default MainPage;
