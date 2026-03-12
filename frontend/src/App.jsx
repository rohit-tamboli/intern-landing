import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Failure from "./Components/Failure";
import Success from "./Components/Success";
import Phonepe from "./file/phonepe/Phonepe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/phonepe" element={<Phonepe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
