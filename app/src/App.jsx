import "./App.css";
import { Home } from "./Components/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login.jsx";
import RegisterTeacher from "./Components/RegisterTeacher.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/accounts/register/teacher"
          element={<RegisterTeacher />}
        />
        <Route path="/accounts/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
