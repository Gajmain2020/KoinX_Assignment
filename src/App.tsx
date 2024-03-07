import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Description from "./components/Description/Description";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="px-20 sm:px-2 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Description />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
