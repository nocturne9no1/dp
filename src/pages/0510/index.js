import MenuIcon from "../../assets/icons8-menu.svg";
import IcoTv from "../../assets/ico_tv.png";
import IcoSearch from "../../assets/icons8-search.svg";
import { ReactComponent as IcoArrow } from "../../assets/back-arrow.svg";
import { ReactComponent as IcoFilter } from "../../assets/ico_filter.svg";
import { ReactComponent as IcoTV } from "../../assets/ico_tv.svg";
import { ReactComponent as IcoChev } from "../../assets/ico_chevron_right.svg";
import { ReactComponent as IcoChevDouble } from "../../assets/ico_double_chevron_right.svg";

import "../../style/0510.scss";

const Index = () => {
  return (
    <div className="app-wrap">
      <div className="app-header">
        <img src={MenuIcon} alt="" className="header-icon" />
        <div className="logo">
          <span>DANMEDIA</span>
          <IcoTV />
        </div>
      </div>
      <div className="search-area">
        <IcoArrow />
        <input type="text" value={"아나운서"} />
        <img src={IcoSearch} alt="" className="search" />
      </div>
      <div className="menu-wrap">
        <div>통합검색</div>
        <div>채용정보</div>
        <div>교육정보</div>
        <div>취업가이드</div>
      </div>
      <div className="tag-wrap">
        <div>지역</div>
        <div>직종</div>
        <div>고용형태</div>
        <div>경력</div>
        <span className="filter">
          <IcoFilter />
        </span>
      </div>
      <div className="list-header">
        <strong>채용정보</strong>
        <span>
          총 <span className="number">102</span>건
        </span>
      </div>
      <ul className="career-list">
        {itemList.map((el) => (
          <ListItem {...el} key={el.name} />
        ))}
      </ul>
      <div className="footer">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>
          <IcoChev />
        </div>
        <div>
          <IcoChevDouble />
        </div>
      </div>
    </div>
  );
};

const ListItem = ({ name, end, content }) => (
  <li>
    <div className="item-header">
      <strong>{name}</strong>
      <span>{end}</span>
    </div>
    <div className="content">{content}</div>
  </li>
);

export default Index;

const itemList = [
  {
    name: "HTN",
    end: "채용시까지",
    content: (
      <span>
        HTN 방송 <b>아나운서</b> 및 리포터 채용
      </span>
    ),
  },
  {
    name: "주식회사 업코리아",
    end: "급구",
    content: (
      <span>
        [<b>아나운서</b>/리포터] 미디어 마케터, 글로벌 마케터 및 홍보
      </span>
    ),
  },
  {
    name: "겨루온",
    end: "상시채용",
    content: (
      <span>
        2021 WBS <b>아나운서</b> 합격/스타 스포츠 <b>아나운서</b> 배출/방송...
      </span>
    ),
  },
  {
    name: "포티비 아카데미",
    end: "상시채용",
    content: (
      <span>
        국내유일 방송국 연계/현직<b>아나운서</b> 직강
      </span>
    ),
  },
  {
    name: "몰온 스피치",
    end: "상시채용",
    content: (
      <span>
        방송인 독보적 합격률! <b>아나운서</b> 합격전략 상담문의!
      </span>
    ),
  },
  {
    name: "한국방송인클럽 K&F",
    end: "채용시까지",
    content: (
      <span>
        지역 <b>아나운서</b>, 쇼핑 호스트 모십니다.
      </span>
    ),
  },
  {
    name: "스픽앤",
    end: "6/30까지",
    content: (
      <span>
        <b>아나운서</b> 아카데미 강사 모집(교육, 상담) 및 영업사원(기획홍보
        마케팅) 모집
      </span>
    ),
  },
  {
    name: "영일방송",
    end: "6/22까지",
    content: (
      <span>
        (주) 영일방송 <b>아나운서</b> 채용 (신입/경력)
      </span>
    ),
  },
  {
    name: "투투키즈 스피치",
    end: "6/22까지",
    content: (
      <span>
        [옥수지역]어린이 스피치 강사 모집
        <br />(<b>아나운서</b>, 방송, 배우, 어린이 스피치 경력자 우대)
      </span>
    ),
  },
  {
    name: "더 오리진스",
    end: "급구",
    content: <span>각종 행사, 결혼식 사회 진행할 행사MC 모집</span>,
  },
  {
    name: "TP 인베스트먼트",
    end: "7/30",
    content: (
      <span>
        (긴급) <b>아나운서</b> 겸 리포터 모집. 바로 방송 진행 가능한 경력자.
      </span>
    ),
  },
  {
    name: "미니랩솔루션",
    end: "상시채용",
    content: (
      <span>
        [경제방송] 유튜브 성우/<b>아나운서</b> 채용/워라벨 최상
      </span>
    ),
  },
  {
    name: "(주)실퍼파트너그룹",
    end: "채용시까지",
    content: (
      <span>
        [여의도 센터] 유튜브 주식전문가 공개채용.
        <br />
        <b>아나운서</b> / 쇼호스트 성우
      </span>
    ),
  },
  {
    name: "레슨스픽",
    end: "급구",
    content: (
      <span>
        <b>아나운서</b> 아카데미 강사 모집.
      </span>
    ),
  },
  {
    name: "햇방송",
    end: "채용시까지",
    content: <span>스마트TV 진행자(캐스터) 구인</span>,
  },
  {
    name: "JHK티비(주)",
    end: "상시채용",
    content: <span>프리랜서 리포터 모집합니다</span>,
  },
  {
    name: "SS미디",
    end: "7/30까지",
    content: <span>[프리랜서] 사내 교육 프로그램 MC/리포터/진행자 모집</span>,
  },
  {
    name: "스마트ME",
    end: "급구",
    content: (
      <span>
        주식전문가 채용/<b>아나운서</b>,라이브커머스,쇼호스트
      </span>
    ),
  },
  {
    name: "채널영상 FM",
    end: "7/30까지",
    content: (
      <span>
        채널영상과 함께할 신입 <b>아나운서를</b> 모집합니다.
      </span>
    ),
  },
  {
    name: "예외뉴스",
    end: "상시채용",
    content: (
      <span>
        기자, <b>아나운서</b> 겸 리포터 모집
      </span>
    ),
  },
  {
    name: "306(원TV)",
    end: "채용시까지",
    content: (
      <span>
        <b>아나운서</b>/리포터/방송취재기자/인터넷신문기자
      </span>
    ),
  },
  {
    name: "탐스마치",
    end: "급구",
    content: <span>결혼식 축가, 행사, 사회, 이벤트 MC</span>,
  },
  {
    name: "광커뮤니케이션",
    end: "채용시까지",
    content: (
      <span>
        <b>아나운서</b>/MC 신입 채용
      </span>
    ),
  },
  {
    name: "스포츠솔루션즈",
    end: "7/20까지",
    content: (
      <span>
        축구뉴스 <b>아나운서</b> 채용
      </span>
    ),
  },
];
