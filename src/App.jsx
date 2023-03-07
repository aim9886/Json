// Course Json

// import React from 'react'
// import JSON from "./course.json"
// import Course from './Course.jsx';
// import "./global.css"

// const App = () => {
//   return (
//     <div>
//         <Course data={JSON}/>
//     </div>
//   )
// }

// export default App
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Routers

import React from "react";
import "./App.css";
import Signup from "./components/Signup"
import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import { ToastContainer , toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Login from "./components/Login"
import Home from "./components/Home";

function App() {
  return(
    <>
    <ToastContainer />
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App

