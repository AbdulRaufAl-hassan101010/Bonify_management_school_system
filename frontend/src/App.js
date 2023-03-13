import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Navbar from "./components/landingPage/Navbar";
import Home from "./pages/landingPage/Home.js";

const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}>
        <Route path="contact" element={<Navbar />} />
        <Route path="dashboard" element={<Navbar />} />
        <Route element={<Navbar />}>
          <Route path="login" element={<Navbar />} />
          <Route path="logout" />
        </Route>
      </Route>
    </>
  )
);

export default App;
