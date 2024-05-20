import useSound from "use-sound";
import MainPage from "./MainPage";
import SoothingAudio from "../assets/soothing.mp3";
import { MilkinSession } from "../utils/modals/Milking.modal";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Home = ({ setMilkingSession }: MilkinSession) => {
  const [play, { pause, stop }] = useSound(SoothingAudio);
 

  return (
    <div className="flex flex-col items-center justify-center px-4 ">

      <div className="text-3xl text-center mt-40">
        Welcome to Milking Tracker
      </div>
      <div></div>
      <div className="mt-30">
        <MainPage
          setMilkingSession={setMilkingSession}
          play={play}
          pauseSound={pause}
          stop={stop}
        />
      </div>
    </div>
  );
};

export default Home;
