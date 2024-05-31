import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Link, Outlet } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/BlogList';

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Blog</Link>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* Renders the matched child route */}
    </div>
  );
}

// Create the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {

 

  return (
    <>
      <RouterProvider router={router} />;
      </>
  
  );

}

export default App;


