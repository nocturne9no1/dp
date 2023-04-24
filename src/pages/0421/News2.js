import MenuIcon from "../../assets/icons8-menu.svg";
import SearchIcon from "../../assets/icons8-search.svg";
import LogoIcon from "../../assets/header-logo.svg";
import ShareIcon from "../../assets/share.png";
import PrintIcon from "../../assets/print.png";
import PlusIcon from "../../assets/plus-icon.png";
import MinusIcon from "../../assets/minus-button.png";
import { useEffect } from "react";
const News2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="news-2">
      <div className="header">
        <img src={MenuIcon} alt="" />
        <div className="company-name">
          <span>KBN</span> 뉴스
        </div>
        <div className="right">
          <img src={SearchIcon} alt="" style={{ width: 25 }} />
          <img src={LogoIcon} alt="" style={{ width: 25, marginLeft: 10 }} />
        </div>
      </div>
      <div className="body">
        <div className="title">
          <p>“아야야 이거 놔라”...JBC 방송사고</p>
          <p>
            아내의 외도에 분노한 남자의 발악
            <br />
            송기백 아나운서, 머리채 잡히고 콧구멍 찔려
          </p>
          <p>
            KBN 뉴스 <span>정진영</span> 기자
          </p>
          <p>입력 2023-04-24 13:02:33</p>
          <div className="bugagineung-wrap">
            <img src={ShareIcon} alt="" />
            <div className="right">
              <img src={PrintIcon} alt="" />
              <img src={PlusIcon} alt="" style={{ marginLeft: 10 }} />
              <span>가</span>
              <img src={MinusIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="content-wrap">
          <div className="content-image"></div>
          <div className="content-article">
            <p>
              오늘 오후 JBC 정오뉴스에서 황당한 생방송 뉴스 사고가 벌어졌다.
            </p>
            <p>
              24일 오후 12시 11분께 뉴스데스크로 한 남성이 다가와 “가정파괴범
              김성훈을 단죄하라!”며 카메라에 외치고 위협했다.{" "}
            </p>
            <p>
              상황을 중재하던 송기백 아나운서는 남성에게 머리채가 잡히고 코까지
              찔렸다. 그 모습은 그대로 방송으로 생중계되었다.{" "}
            </p>
            <p>
              한편 갑자기 등장한 이 남성은 정오뉴스 이혜연 아나운서의 남편으로
              밝혀져 충격을 주고 있다.
            </p>
            <p>
              이 황당한 방송 사고의 시발점인 김성훈은 당시 ‘뛰는 형님들’ 촬영
              중이었던 것으로 알려졌다.{" "}
            </p>
            <p>
              김성훈의 소속사 측에서는 아직 명확한 입장을 보이지 않고 있고,
              김성훈도 연락두절 상태다.
            </p>
            <p>
              온라인 커뮤니티에는 “생방송으로 보다가 진짜 깜짝 놀랐다”, “고래
              싸움에 새우 등 터진 송기백은 뭔 죄냐”, “김성훈 이혜연 그런
              사람들인 줄 몰랐는데 대실망” 등의 누리꾼들의 글이 줄줄이 올라왔다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News2;
