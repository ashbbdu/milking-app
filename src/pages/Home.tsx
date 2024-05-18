import MainPage from "./MainPage"

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 ">
    <div className="text-3xl text-center mt-40">
      Welcome to Milking Tracker
    </div>
    <div></div>
    <div className="mt-30">
      <MainPage />
    </div>
  </div>
  )
}

export default Home