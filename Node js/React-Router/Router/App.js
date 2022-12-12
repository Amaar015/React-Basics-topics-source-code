import './App.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { Switch, Routes, Route } from "react-router-dom";
import About from './Component/About';
import Contact from './Component/Contact';
// import Layout from './Component/Layout';
// import NoPage from './Component/NoPage';
// import Home from './Component/Home';
export default function App() {
  return (
    <>
      <About/>
      <Contact/>
      </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);