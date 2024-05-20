
export interface TotalMilkModal {
    header: string;
    label: string;
    cancelBtnText: string;
    confirmBtnText: string;
    totalMilk: number;
    setTotalMilk: (one: number) => void;
    setMilkingSession : (arg : boolean) =>   void;
    endTimeFn : () => void;
    pause: () => void;
    pauseBtn: boolean,
    setPauseBtn: (bool : boolean) => void,
    handleTableData : () => void,
    pauseSound: (id?: string) => void,
    stop : (id?: string) => void
    error : string
  }

  export interface MilkinSession {
    setMilkingSession : (arg : boolean) => void;
  }