import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const url = import.meta.env.VITE_BASE_URL;
  console.log(url)
  return (
    <>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
