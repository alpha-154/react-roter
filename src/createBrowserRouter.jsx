//here is a example of how to switch from the older version of
//react router to latest version of react router which allows
//the uses of dataLayerApis


import React from "react";
import ReactDOM from "react-dom/client";
//import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { RouterProvider,
     createBrowserRouter,
     createRoutesFromElements,
    Route } 
    from "react-router-dom";


function HomePage() {
  return (
    <main>
      <h1>Home page</h1>
    </main>
  );
}

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<HomePage />} />
))

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router}/>
  )
}

//ReactDOM.createRoot(document.getElementById("root")).render(<App />)