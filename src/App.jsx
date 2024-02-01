import Navbar from "./components/Navbar";
import BlogsListPage from "./pages/BlogsListPage";




//https://blnk.framer.website/

function App() {
  return (
    <div className="font-work-sans min-h-screen bg-shade5 px-4 max-w-7xl mx-auto">
      <Navbar />
      <BlogsListPage />
    </div>
  );
}

export default App;
