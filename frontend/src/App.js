import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar.js";
import Home from "./pages/Home.js";
import SearchTrain from "./pages/Search.js";

const App=()=>{
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/search" element={<SearchTrain/>}/>
        </Routes>
      </BrowserRouter>
    </> 
  );
}

export default App;
