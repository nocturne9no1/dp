import Actor from "../../assets/image/0514/img_actor.jpeg";
import { ReactComponent as Chev } from "../../assets/ico_chevron_right.svg";

const Inner = () => {
  return (
    <div className="namu-inner">
      <div className="header">
        <strong>피엔</strong>
        <div className="right">
          <ul>
            <li>
              <span>&#9733;</span>51
            </li>
            <li>역링크</li>
            <li>토론</li>
            <li>편집</li>
            <li>역사</li>
            <li>ACL</li>
          </ul>
          <span>최근 수정 시각: 2023-05-13 14:06:00</span>
        </div>
      </div>
      <div className="overview">
        <div className="top">피엔 관련 둘러보기 틀</div>
        <div className="bottom">[ 펼치기 · 접기 ]</div>
      </div>
      <div className="contents">
        <div className="index">
          <strong>목차</strong>
          <ol>
            <li>개요</li>
            <li>활동</li>
            <li>데뷔전</li>
            <li>성격</li>
            <li>역주행의 주인공</li>
            <li>
              방송 출연
              <span className="blue">6-1. 미스터리 음악쇼 가면왕</span>
            </li>
            <li>
              출연작품
              <span>
                <span className="blue">7-1.</span> 뮤직비디오
              </span>
              <span className="blue">7-2. 광고</span>
            </li>
            <li>여담</li>
          </ol>
        </div>
        <div className="detail">
          <div className="top">피엔</div>
          <div className="img-wrap">
            <img src={Actor} alt="" />
          </div>
          <dl>
            <dt>본명</dt>
            <dd>박진복 (朴進福, Park Jinbok)</dd>
          </dl>
          <dl className="birth">
            <dt>출생</dt>
            <dd>
              <span className="row">
                <span className="blue">1992년 10월 21일</span> (31세)
              </span>
              <span className="row">
                <span className="blue">경기도 수원시 팔달구</span>
              </span>
            </dd>
          </dl>
          <dl>
            <dt>국적</dt>
            <dd>
              <span className="blue">대한민국</span>
            </dd>
          </dl>
          <dl>
            <dt>본관</dt>
            <dd>
              <span className="blue">밀양 박씨</span> (密陽 朴氏)
            </dd>
          </dl>
          <dl>
            <dt>신체</dt>
            <dd>
              178cm, 63kg, <span className="blue">AB형</span>, 260mm
            </dd>
          </dl>
          <dl>
            <dt>가족</dt>
            <dd>부모님, 남동생 박영복(1995년생)</dd>
          </dl>
          <dl className="education">
            <dt>학력</dt>
            <dd>
              <span>
                <span className="blue">달원초등학교</span> (졸업)
              </span>
              <span>
                <span className="blue">달원중학교</span> (졸업)
              </span>
              <span>
                <span className="blue">수원남자고등학교</span> (졸업)
              </span>
            </dd>
          </dl>
          <dl>
            <dt>종교</dt>
            <dd className="blue">무종교</dd>
          </dl>
          <dl>
            <dt>소속사</dt>
            <dd>SULIME</dd>
          </dl>
          <dl>
            <dt>데뷔</dt>
            <dd className="blue">2008년 11월 16일 솔로1집 {`<거지의 꿈>`}</dd>
          </dl>
          <dl>
            <dt>별명</dt>
            <dd className="">[ 펼치기 · 접기 ]</dd>
          </dl>
        </div>
      </div>
      <div className="info-detail">
        <strong>
          <Chev />
          <span className="blue">1.</span> 개요
        </strong>
        <p>
          대한민국의 <span className="blue">가수.</span>
        </p>
        <strong>
          <Chev />
          <span className="blue">2.</span> 활동
        </strong>
        <ul>
          <li>
            2008년 올망졸망 청소년 트로트 가요제에서 품바 춤으로 입상, 지금의
            기획사에 발탁되었다. 2008년 11월 16일 솔로 1집 {`<거지의 꿈>`}{" "}
            데뷔를 했지만, 성적이 좋지 못했다.
          </li>
          <li>
            지방 행사에서 어느 대포 팬에 의해서 우연히 찍힌 직캠으로 역 주행
            시작, 전국민적인 인기를 얻었다. 이후 지금까지 폭발적인 인기를 누리고
            있다.
          </li>
          <li>
            브랜드평판지수 가수부문, 스타 부문 3년 연속 3위권 내의 입지 나
            아이돌차트 평점랭킹 연속 1위 등 여러 시상식, 차트에서 정 상을
            유지하며 계속 고공행진을 이어가고 있다.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Inner;
