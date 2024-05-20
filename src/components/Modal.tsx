import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TotalMilkModal } from "../utils/modals/Milking.modal";

const Modal = ({
  header,
  label,
  cancelBtnText,
  confirmBtnText,
  totalMilk,
  setMilkingSession,
  setTotalMilk,
  pause,
  setPauseBtn,
  handleTableData,
  endTimeFn,
  pauseSound,
  error,
  stop,
}: TotalMilkModal) => {
  console.log(totalMilk, "toal");
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState<Boolean>(false);
  return (
    <>
      <button
        className="mt-4 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-md px-4 py-2 text-center me-2 mb-2 outline-none"
        type="button"
        onClick={() => {
          setShowModal(true);
          pause();
          setPauseBtn(true);
          pauseSound();
          endTimeFn();
        }}
      >
        Stop
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-2x px-4">
              <div className="border-0 rounded-lg shadow-lg relative  flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold text-black">{header}</h3>
                </div>

                <div className="relative p-6 flex-auto">
                  <form>
                    <label
                      htmlFor="milkamout"
                      className="mb-2 font-semibold text-md text-gray-900 dark:text-white"
                    >
                      {label}
                    </label>
                    <input
                      value={totalMilk || 0}
                      type="number"
                      id="milkamout"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter In Liters"
                      required
                      onChange={(e) => setTotalMilk(Number(e.target.value))}
                    />
                    {totalMilk <= 0 ? (
                      <div className="text-red-600 my-1">*{error}</div>
                    ) : (
                      <div>*{error}</div>
                    )}
                    <div className="mt-6 flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        {cancelBtnText}
                      </button>
                      <button
                        disabled={totalMilk > 0 ? false : true}
                        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-md px-4 py-2 text-center me-2 mb-2 outline-none"
                        type="button"
                        onClick={() => {
                          setShowModal(false);
                          handleTableData();
                          navigate("/history");
                          stop();
                          setMilkingSession(false);
                          //   endTimeFn()
                        }}
                      >
                        {confirmBtnText}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
