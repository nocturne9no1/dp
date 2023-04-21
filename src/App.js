import { RouterProvider } from "react-router-dom";
import Router from "./utils/Router";
import "./style/_reset.scss";
import "./style/common.scss";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
