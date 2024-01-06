import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>

      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route path={route.path} key={index} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
