import { useState } from "react";
import Left from "./components/Left";
import Right from "./components/Right";
import "./style/_reset.scss";
import "./style/common.scss";

function App() {
  const [startChat, setStartChat] = useState(false);
  return (
    <div className="App">
      <div className="radio-wrap">
        <div className="radio-inner">
          <Left setStartChat={setStartChat} />
          <Right startChat={startChat} setStartChat={setStartChat} />
        </div>
      </div>
    </div>
  );
}

export default App;
