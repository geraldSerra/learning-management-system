import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "layouts/RootLayout";
import Home from "./pages/Home";
import NavBar from "components/NavBar/NavBar";
import { Slider } from "components";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
