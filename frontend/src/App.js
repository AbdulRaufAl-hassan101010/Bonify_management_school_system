import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/landingPage/Home.js";
import Register1 from "./pages/landingPage/Register1";
import Register2 from "./pages/landingPage/Register2.js";

const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="signup" element={<Register1 />}>
        <Route path=":id" element={<Register2 />} />
      </Route>
    </>
  )
);

export default App;
