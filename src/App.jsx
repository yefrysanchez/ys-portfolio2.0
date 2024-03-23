import Navbar from "./components/Navbar";
import RouterPage from "./router/RouterPage";




//https://blnk.framer.website/

function App() {
  return (
    <div className="font-work-sans min-h-screen bg-shade1 px-4 max-w-7xl mx-auto">
      <Navbar />
      <RouterPage />
    </div>
  );
}

export default App;
