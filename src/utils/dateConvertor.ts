import dayjs from "dayjs";

export const convertSecondsToTimeFormat = (totalSeconds : number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours} Hr ${formattedMinutes} Min ${formattedSeconds} Sec`;
};


export const dateAndTime = () => {
    const now = dayjs(new Date()).format("DD/MM/YYYY HH:mm:ss");
    const dateAndTime = now.split(" ");
    const date = dateAndTime[0]
    const time = dateAndTime[1]
    return [date , time];
};