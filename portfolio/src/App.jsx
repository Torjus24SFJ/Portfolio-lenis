import "./App.css";
// import StaggerBoxes from "./components/StaggerBoxes";
// import HorizontalScroller from "./components/HorizontalScroller";
// import TextRevealer from "./components/TextRevealer";

function App() {
  
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4">
          {/* <StaggerBoxes /> */}
        </div>
      </div>
      <div className="h-screen" />
      {/* <HorizontalScroller /> */}
      <div className="sm:text-2xl md:text-4xl xl:text-5xl font-bold flex justify-center m-12 uppercase">
      {/* <TextRevealer font="font-monosans" text="This entire sentence reveals at once" /> */}
      </div>
      <div className="h-screen"></div>
    </>
  );
}

export default App;
