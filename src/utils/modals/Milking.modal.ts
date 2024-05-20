
export interface TotalMilkModal {
    header: string;
    label: string;
    cancelBtnText: string;
    confirmBtnText: string;
    totalMilk: number;
    setTotalMilk: (one: number) => void;
    setMilkingSession : () =>   void;
    endTimeFn : () => void;
    pause: () => void;
    pauseBtn: boolean,
    setPauseBtn: (bool : boolean) => void,
    handleTableData : () => void,
    pauseSound: (id?: string) => void,
    stop : (id?: string) => void
  }