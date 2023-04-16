import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/landingPage/Home.js";
import Register1 from "./pages/landingPage/Register1";
import Register2 from "./pages/landingPage/Register2.js";
import Register3 from "./pages/landingPage/Register3.js";

const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="signup" element={<Register1 />} />
      <Route path="signup/school_info" element={<Register2 />} />
      <Route path="signup/school_details" element={<Register3 />} />
    </>
  )
);

export default App;
