import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
function App() {
  const[count, setCount] = useState(0)

  return (
    
   <>
   {/* agr aaise content lana hai then hme app ko wrap krna padega browerrouter ke andr */}
   {/* <Header/>
   <Home/>
   
   <Footer/> */}
   
   </>
  );
}

export default App;
