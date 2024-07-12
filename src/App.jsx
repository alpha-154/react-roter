//import { Routes, Route, Link } from "react-router-dom";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansLoader } from "./pages/vans/Vans"
import VanDetail , { loader as vanDetailLoader} from "./pages/vans/VanDetail"
import Dashboard from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"
import HostVans, { loader as hostVansLoader} from "./pages/host/hostVans/HostVans"
import HostVanDetail, { loader as hostVanDetailLoader } from "./pages/host/hostVans/HostVanDetail"
import HostVanInfo from "./pages/host/hostVans/HostVanInfo"
import HostVanPricing from "./pages/host/hostVans/HostVanPricing"
import HostVanPhotos from "./pages/host/hostVans/HostVanPhotos"
import NotFound from "./pages/NotFound"
import Login, { loader as loginLoader, action as loginAction } from "./pages/Login"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import Error from "./components/Error"
import { requireAuth } from "./utils"
import "./App.css"
import "./server"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
      path="login"
      element={<Login />}
      loader={loginLoader}
      action={loginAction}
    />
    <Route
      path="vans"
      element={<Vans />}
      errorElement={<Error />}
      loader={vansLoader}
    />
    <Route 
      path="vans/:id" 
      element={<VanDetail />} 
      loader={vanDetailLoader}
    />

    <Route path="host" element={<HostLayout />}>
      <Route
        index
        element={<Dashboard />}
        loader={async () => await requireAuth()}
      />
      <Route
        path="income"
        element={<Income />}
        loader={async () => await requireAuth()}
      />
      <Route
        path="reviews"
        element={<Reviews />}
        loader={async () => await requireAuth()}
      />
      <Route
        path="vans"
        element={<HostVans />}
        loader={hostVansLoader}
      />
      <Route
        path="vans/:id"
        element={<HostVanDetail />}
        loader={hostVanDetailLoader}
      >
        <Route
          index
          element={<HostVanInfo />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="pricing"
          element={<HostVanPricing />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="photos"
          element={<HostVanPhotos />}
          loader={async () => await requireAuth()}
        />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
))




function App() {
  return (
    <>
    {/* *****  OLDER WAY OF WRITING REACT ROUTER   */}
      {/* <Routes>

        <Route path="/" element={<Layout/>}>

          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard/>} />
            <Route path="income" element={<Income/>} />
            <Route path="reviews" element={<Reviews/>} />
            <Route path="vans" element={<HostVans/>} />

            <Route path="vans/:id" element={<HostVanDetail/>}>
              <Route index element={<HostVanInfo/>}/>
              <Route path="pricing" element={<HostVanPricing/>} />
              <Route path="photos" element={<HostVanPhotos/>} />
            </Route>

          </Route>
          <Route path="*" element={<NotFound/>}/>

        </Route>

      </Routes> */}

       <RouterProvider router={router}/>

    </>
  );
}

export default App;


