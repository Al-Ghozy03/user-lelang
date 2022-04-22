import "./App.css";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Protect from "./component/protectRoute";
import Register from "./pages/register";
import Verifikasi from "./pages/verifikasi";
import Detail from "./pages/detail";
import SearchPage from "./pages/searchPage";
import Category from "./pages/category";
import Penawaran from "./pages/penawaran";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        replace
        path="/verifikasi"
        element={<Protect children={<Verifikasi />} />}
      />
      <Route
        replace
        path="/dashboard"
        element={<Protect children={<Dashboard />} />}
      />
      <Route
        replace
        path="/detail/:id"
        element={<Protect children={<Detail />} />}
      />
      <Route
        replace
        path="/category"
        element={<Protect children={<Category />} />}
      />
      <Route
        replace
        path="/penawaran/:id"
        element={<Protect children={<Penawaran />} />}
      />
      <Route
        replace
        path="/search"
        element={<Protect children={<SearchPage />} />}
      />
      <Route path="/" element={<Navigate replace to="/dashboard" />} />
    </Routes>
  );
}

export default App;
