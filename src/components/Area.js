import { ReactComponent as Arrow } from "../assets/arrowsimple-left.svg";
import { ReactComponent as Play } from "../assets/play.svg";

const Area = () => {
  return (
    <div className="result">
      <div className="first-row">
        <div>
          <span>
            <Play />
            3000
          </span>
          <span>★★</span>
        </div>
      </div>
      <strong>switch</strong>
      <ul>
        <li>
          <span>1.</span> 스위치
        </li>
        <li>
          <span>2.</span> 전환하다; 바꾸다
        </li>
      </ul>
      <div className="pron">
        <strong>발음</strong>
        <span>
          미국∙영국 <span>[ swɪtʃ ]</span>
        </span>
      </div>
      <div className="verb">
        <div className="left">동사형</div>
        <div className="right">
          <ul>
            <li>
              3인칭 단수 현재 <span>switches</span>
            </li>
            <li>
              과거형 <span>switched</span> 과거 분사 <span>switched</span>
            </li>
            <li>
              현재 분사 <span>switching</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="n-row">
        <strong>명사</strong>
        <div>
          예문 열기 <Arrow />
        </div>
      </div>
      <ol>
        <li>
          <span>1. 스위치</span>
          <span>
            turn on the <strong>switch</strong>
            <div>
              <p>
                <span></span>
              </p>
              <p>
                <span></span>
              </p>
              <p>
                <span></span>
              </p>
            </div>
          </span>
          <span>스위치를 켜다</span>
          <span>
            예문 열기 <Arrow />
          </span>
        </li>
        <li>
          <span>2. 전환</span>
          <span>
            a <strong>switch</strong> of priorities
            <div>
              <p>
                <span></span>
              </p>
              <p>
                <span></span>
              </p>
              <p>
                <span></span>
              </p>
            </div>
          </span>
          <span>우선 사항들의 전환</span>
          <span>
            예문 열기 <Arrow />
          </span>
        </li>
      </ol>
    </div>
  );
};

export default Area;
