import { RouterProvider } from "react-router-dom";
import Router from "./utils/Router";
import "./style/_reset.scss";
import "./style/common.scss";

function App() {
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
