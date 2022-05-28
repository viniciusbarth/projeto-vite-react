import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<h1> teste</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
