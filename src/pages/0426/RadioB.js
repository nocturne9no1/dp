import { useState } from "react";
import Left from "../../components/0426_radio/Left";
import Right from "../../components/0426_radio/Right";
import "../../style/0426.scss";

const Radio = () => {
  const [startChat, setStartChat] = useState(false);
  return (
    <div className="App">
      <div className="radio-wrap">
        <div className="radio-inner">
          <Left setStartChat={setStartChat} />
          <Right startChat={startChat} setStartChat={setStartChat} type={2} />
        </div>
      </div>
    </div>
  );
};

export default Radio;
