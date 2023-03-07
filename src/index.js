import React from "react";
import { createRoot } from "react-dom/client"
import App from "./App.jsx";
// import Course from "./Course.jsx";
// import JSON from "./course.json";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


createRoot(document.getElementById("root")).render(<App/>)
