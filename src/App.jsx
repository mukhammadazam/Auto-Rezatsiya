import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";

function App() {
  const url = import.meta.env.VITE_BASE_URL;
  console.log(url)
  return (
    <>
      <Routes>
        <Route path='/' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
