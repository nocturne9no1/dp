import { ReactComponent as IconSearch } from "../../assets/search.svg";
import { useEffect } from "react";
const News3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="news-1">
      <div className="top">
        <div className="header">
          <div className="menu">{/* <IconMenu /> */}</div>
          <span className="lastpage-news-title">예인뉴스24</span>
          <div className="search2">
            <IconSearch />
          </div>
        </div>
        <div className="navigation2">
          <span>엔터경제</span>
          <span className="pink-span">연예</span>
          <span>스포츠</span>
          <span>라이프&</span>
          <span>포토</span>
          <span>영상</span>
        </div>
      </div>
      <div className="contents">
        <strong className="title lastpage-title">
          JBC 정오뉴스 생방송 중 난동극 그대로 송출
        </strong>
        <div className="info-row">
          <span className="date">입력 2023-04-24 12:58:12</span>
          <div className="buttons">
            <div>댓글쓰기</div>
            <div>가</div>
          </div>
        </div>
        <div className="content">
          <div className="chroma"></div>
          <div className="text">
            <p>
              24일 오후 12시 11분께 생방송 중 뉴스데스크로 한 남성이 다가와
              “가정파괴범 김성훈을 단죄하라!”며 카메라에 외치고 아나운서들을
              위협했다.{" "}
            </p>
            <p>
              제재하는 관계자들에 격하게 반항하는 모습까지 그대로 생방송 전파를
              탔다.{" "}
            </p>
            <p>
              한편 이 남성은 정오뉴스 이혜연 아나운서의 남편으로 밝혀져
              누리꾼들의 관심을 받고 있다.
            </p>
            <p>
              이 황당한 방송 사고의 당사자인 김성훈은 당시 ‘뛰는 형님들’ 촬영
              중이었는데, 갑자기 사라져서 연락이 두절되었다.{" "}
            </p>
            <p>김성훈의 소속사 측에서는 아직 명확한 입장을 밝히지 않고 있다.</p>
            <p>
              누리꾼들은 온라인 커뮤니티에 “불륜 미친거 아님?”, “고래 싸움에
              새우 등 터진 송기백”, “공개 단죄 대박”, “JBC는 큰일 났겠지만 남편
              단죄 속 시원하네” 등의 글을 올렸다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News3;
