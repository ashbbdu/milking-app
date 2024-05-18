import { useState } from "react";
import { useStopwatch } from "react-timer-hook";
import Modal from "../components/Modal";
import { formatTime } from "../utils/formatTime";

const MainPage = () => {
  const [status, setStatus] = useState<String>("Not running");
  const [pauseBtn, setPauseBtn] = useState<Boolean>(false);

  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  return (
    <div>
      <div style={{ textAlign: "center" }}>
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
            }}
            className="mt-4 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-md px-4 py-2 text-center me-2 mb-2 outline-none"
          >
            Start Milking
          </button>
        )}
        {status === "Running" && (
          <Modal
            header={"Milk Amount (In Litres)"}
            label={"Please Enter the liters of milk"}
            cancelBtnText={"Cancel"}
            confirmBtnText={"Submit"}
          />
        )}
      </div>
    </div>
  );
};

export default MainPage;
