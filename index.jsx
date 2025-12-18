import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetails from './pages/VanDetails';
import Layout from './Components/Layout';
import Dashboard from './Host/Dashboard';
import Income from './Host/Income';
import Review from './Host/Review';
import HostLayout from './Components/HostLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetails />} />
            <Route path="/vans/host" element={<Host />} >
              <Route path="/vans/host" element={<Dashboard />} />
              <Route path="/vans/id" element={<Income />} />
              <Route path="/vans/review" element={<Review />} />
            </Route>
            
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);