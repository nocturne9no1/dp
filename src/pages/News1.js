import { ReactComponent as IconMenu } from "../assets/hamburgermenu.svg";
import { ReactComponent as IconSearch } from "../assets/search.svg";

const News1 = () => {
  return (
    <div className="news-1">
      <div className="top">
        <div className="header">
          <div className="menu">
            <IconMenu />
          </div>
          <strong>news now inside</strong>
          <div className="search">
            <IconSearch />
          </div>
        </div>
        <div className="navigation">
          <span>전체기사</span>
          <span>정치</span>
          <span>경제</span>
          <span>사회</span>
          <span>세계</span>
          <span>문화</span>
          <span>미디어</span>
        </div>
        <div className="breadcrumb">
          <span>홈</span>
          <span>미디어</span>
          <span>방송</span>
        </div>
      </div>
      <div className="contents">
        <strong className="title">불륜과 응징, 희대의 방송사고</strong>
        <p className="sub-title">아내의 외도에 분노한 남자의 응징</p>
        <p className="sub-title">김성훈‧이혜연 불륜 진실로 밝혀져</p>
        <div className="info-row">
          <span className="date">2023-04-24 12:48:19</span>
          <div className="buttons">
            <div>+ 확대</div>
            <div>- 축소</div>
          </div>
        </div>
        <div className="content">
          <div className="chroma"></div>
          <pre>
            JBC 뉴스 생방송 중 발생한 희대의 방송사고가 일파만파 커지고 있다.

            24일 방송된 JBC '정오뉴스'에서 뉴스를 전하던 아나운서 앞으로 한
            남성이 다가와 난동을 피우는 방송 사고가 발생했다. 남성은 “가정파괴
            범 김성훈을 단죄해야 합니다!”라며 카메라에 소리쳤고, 관계자들에게
            곧바로 제재당했다. 하지만 이미 생방송으로 만천하에 모든 상황이 내보
            내졌고, 송기백 아나운서의 우스꽝스러운 모습으로 엔딩을 장식하며 뉴
            스는 중단되었다.
            
            그 남성은 정오뉴스를 진행하는 이혜연 아나운서의 남편이었다. 바람피 는 아내와 상대를 공개 단죄하겠다고 생방송 중
            무단침입한 것.
            
            한편, 이 황당한 방송 사고의 장본인인 김성훈은 ‘뛰는
            형님들’ 촬영 중 이었던 것으로 알려졌다. 방송 이후 김성훈은 잠적했고,
            김성훈의 소속 사 측은 아직 명확한 입장을 밝히지 않고 있다.
            
            방송 직후 해당 장면은 온라인 커뮤니티에서 큰 화제를 모았다. 누리꾼 들은
            “눈에는 눈 이에는 이”, “잘못은 반성해야지”, “생방송 중에 대박이
            었다”, “그 순간 그 어떤 예능보다 재밌었다” 등의 반응을 보였다.
          </pre>
        </div>
      </div>
    </div>
  );
};

export default News1;
