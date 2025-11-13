import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper w-screen h-screen">
        <header className="w-screen h-20 sticky top-0">
          <div className="flex items-center m-2">
            <div className="grid grid-rows-2"></div>
            <img
              src="../images/Logo-transparent-bg.png"
              className="w-10 h-10"
            ></img>
            <p className="m-4 font-medium font-dmsans">Torjus Tveten</p>
          </div>
        </header>
        <div className="flex flex-col gap-2 font-dmsans mt-8 max-w-4xl mx-auto">
          <h1 className="font-bold text-5xl text-left">
            Front End Developer Portfolio
          </h1>
          <h2 className="text-left">
            I build front-end experiences that are simple, fast, and enjoyable
            to use.
          </h2>
        </div>
        {/* IMAGES NOT DONE YET */}
        {/* <div className="image-container flex flex-rows-2 gap-6 p-10 ml-20">
          <div className="grid gap-2 w-[900px] h-[370px]">
          <div className="w-[120px] h-[130px] bg-black rounded-xl">
          </div>
          <div className="w-[180px] h-[90px] bg-black rounded-xl">
          </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
