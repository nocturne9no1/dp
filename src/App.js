import { useState } from "react";
import Left from "./components/Left";
import Right from "./components/Right";
import "./style/_reset.scss";
import "./style/common.scss";
import "./style/dict.scss";

import Header from "./components/Header";
import Header2 from "./components/Header2";
import Box from "./components/Box";
import Area from "./components/Area";

function App() {
  const [step, setStep] = useState(0);
  return (
    <div className="App">
      {step === 0 ? <Header setStep={setStep} step={step} /> : <Header2 />}
      {step === 0 ? (
        <>
          <Box subject={"단어"} t1="Unbelievable" t2="믿을 수 없는" />
          <Box
            subject={"회화"}
            t1="I’ve really messed up this time."
            t2="내가 이번에는 진짜로 다 망쳐 버렸어."
          />
        </>
      ) : (
        <Area />
      )}
    </div>
  );
}

export default App;
