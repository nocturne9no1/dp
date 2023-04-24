import HomeHeader from "../../components/naver/HomeHeader";
import HomeNewsPaperBox from "../../components/naver/HomeNewsPaperBox";

import Image1 from "../../assets/image/0425/1.jpeg";
import Image2 from "../../assets/image/0425/2.jpeg";
import Image3 from "../../assets/image/0425/3.jpeg";

import "../../style/0425.scss";

const newsList = [
  {
    paperName: "서원일보",
    logo: <span className="seo-won">서원일보</span>,
    newsList: [
      '워키코인, 결국 상폐...코인 거래소 "거래 종료"',
      "경찰청장, 中 공안에 '마약음료' 주범 검거 협조 요청",
      "'140억대 전세 사기' 30대 빌라왕 구속기소",
      "강원·충북·영남·전남·제주에 황사위기경보 '주의'·'관심'",
    ],
    image1: {
      text: "지상파 아나운서 S씨, 촬영 중 난동 ‘충격’",
      link: "/0425/page-2",
    },
    image2: {
      src: Image1,
      text: "‘돈봉투 의혹’ 핵심 전 대청홀딩스 부회장 구속",
    },
  },
  {
    paperName: "인스패치",
    logo: <span className="ins">인스패치</span>,
    newsList: [
      "남해 지나던 어선 화재 13시간 만에 진화",
      "화재 속 동료 구하다 숨진 김경운 씨 등 2명 의사자 인정",
      "14살 중학교 같은 반 학생 3명 필로폰 투약 ‘충격'",
      "고사리 따다가 100년 묵은 산삼급 초대형 더덕 발견 ‘대박'",
    ],
    image1: {
      src: Image2,
      text: "달고 짜게 먹으면 피부 빨리 처진다",
    },
    image2: {
      src: Image3,
      text: "푹신한 소파...디스크 발병 위험 주의보",
    },
  },
];

const Page1 = () => {
  return (
    <div className="page1">
      <HomeHeader />
      <div className="news-list-wrap">
        {newsList.map((el, index) => (
          <HomeNewsPaperBox {...el} key={el.paperName + index} />
        ))}
      </div>
    </div>
  );
};

export default Page1;
