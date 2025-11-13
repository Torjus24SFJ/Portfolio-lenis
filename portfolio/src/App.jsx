import "./App.css";

function App() {
  
  return (
    <>
      <div className="wrapper w-screen h-screen bg-[url('/images/p6.png')] bg-repeat bg-auto">
      <header className="w-screen h-20 sticky top-0">
        <div className="flex items-center m-2">
          <div className="grid grid-rows-2"></div>
        <img src="../images/Logo-transparent-bg.png" className="w-10 h-10"></img>
        <p className="m-4 font-light">Torjus Tveten</p>
        </div>
      </header>
      <div className="flex justify-center"><p className="font-bold text-4xl mt-8">Front End Developer Portfolio</p></div>
    </div>
    </>
  );
}

export default App;
