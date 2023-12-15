import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Nav from "./nav.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </BrowserRouter>
  );
}  

export default App;
