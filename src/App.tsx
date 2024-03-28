import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "layouts/RootLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
