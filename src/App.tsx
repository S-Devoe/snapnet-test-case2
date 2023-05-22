import { RouterProvider } from "react-router-dom";
import "./App.css";
import "./styles/style.scss";
import { router } from "./routes/routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
