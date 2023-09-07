import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Authors from "./pages/Authors";
import Books from "./pages/Books";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

//Layouts
import RootLayout from './Layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="authors" element={<Authors />} />
      <Route path="books" element={<Books />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
