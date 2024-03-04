import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Bitcoin from "./components/Bitcoin/Bitcoin";

function App() {
  return (
    <div className="max-w-screen-2xl min-h-screen bg-[#eff2f5]">
      <Navbar />
      <div className="px-24 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bitcoin" element={<Bitcoin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
