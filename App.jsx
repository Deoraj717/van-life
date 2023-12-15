import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Nav from "./nav.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

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
