import { useState, useEffect } from "react";
import { ReactComponent as X } from "../../assets/x.svg";
import { ReactComponent as DotMenu } from "../../assets/dot_menu.svg";

const type1 = [
  {
    name: "sdffwo",
    text: "모야모야 우리 밍디 어디갔찌?",
  },
  {
    name: "vjkew",
    text: "밍디 목소리 들으러 왔는데 ᅲᅲᅲ",
  },
  {
    name: "dsffff",
    text: "근데 송기백 아나운서면 정오뉴스??",
  },
  {
    name: "sqfekflw",
    text: "동에 번쩍 서에 번쩍 홍길동이여~? 뉴스하고 바로 라디오까지 ᄏᄏᄏ",
  },
  {
    name: "oosdgg",
    text: "왠지 바짝 긴장 하신 거 같아여~~~",
  },
  {
    name: "ekrkgg",
    text: "디제이 처음인 듯! 긴장 풀라고 입장주 대신 입장시 날려줍시다!!",
  },
  {
    name: "gglopl",
    text: "오 좋아요 좋아!! 밍디 첫방에 했던 그 시 어때요!!",
  },
  {
    name: "rgegw",
    text: "ᄏᄏᄏᄏᄏᄏᄏ아그겈ᄏᄏᄏᄏ 제목이 뭐더라",
  },
  {
    name: "wrqrrrr",
    text: "우포오오오오늪!!",
  },
  {
    name: "ewryours",
    text: "ᄏᄏᄏ앜ᄏᄏᄏᄏᄏ 그건 안됔ᄏᄏᄏᄏᄏ",
  },
  {
    name: "ghirtian",
    text: "ᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏ웃참챌린지 시작인가",
  },
  {
    name: "getaways",
    text: "오늘 정오 뉴스 방송사고 났던데 이것도 사고 내면 어캄ᄏᄏᄏᄏᄏᄏ",
  },
  {
    name: "peoqqwa",
    text: "지못미...",
  },
  {
    name: "says_er",
    text: "에이~~ 프로잖아 프로!! 할수이따 송기백!!",
  },
  {
    name: "debased",
    text: "김바다 시인의 우포늪!!! 신청합니닷!!! 가즈아아ᅡᅡᅡ!!!",
  },
  {
    name: "fellwwer",
    text: "자아~~ 새들의 세상으로 빠져~~봅시다~~",
  },
  {
    name: "Sdhrwls",
    text: "???",
  },
  {
    name: "Pshky",
    text: "아.. 벌써 웃기다",
  },
  {
    name: "Sho_ch",
    text: "이거 아침 알람으로 딱인듯 ᄏᄏᄏᄏ",
  },
  {
    name: "cdusalw",
    text: "우리집 강아지가 막 짓어요...ᅮᅮ",
  },
  {
    name: "dkaxgi",
    text: "헐.. 이거 제목이 뭐에요?",
  },
  {
    name: "Dogken",
    text: "아이고 저런 ᄒᄒᄒ",
  },
  {
    name: "Lllzzll_09",
    text: "송기백 프로 맞았어ᄏᄏᄏᄏ",
  },
  {
    name: "Cawqdg",
    text: "밍디 그래서 언제와요?",
  },
  {
    name: "memory",
    text: "송기백? 아까 그 뉴스 사고 걔 아닌가?",
  },
  {
    name: "whowhoyou",
    text: "뭐야 오늘 누구냐",
  },
  {
    name: "ezzzze9412",
    text: "뉴스 사고 엉망이던데 ㅋㅋㅋ",
  },
  {
    name: "hahadodo",
    text: "헐 송기백이다",
  },
  {
    name: "soso980310",
    text: "아나운서라고? 발음 기대함~~~~~",
  },
  {
    name: "mom86",
    text: "안녕하세요^^",
  },
  {
    name: "dksldy",
    text: "이제 송기백이 쭉 함?",
  },
  {
    name: "ghazjald",
    text: "오랜만에 들으러 왔는데 밍디가 아니네",
  },
  {
    name: "dhdldehdld",
    text: "ㅋㅋㅋㅋㅋㅋㅋㅋ송기백이다",
  },
  {
    name: "Qqoue",
    text: "송기백이 누구냐",
  },
  {
    name: "eopo1987",
    text: "헐 목소리 좋다",
  },
  {
    name: "rjrwjdgowna",
    text: "밍디 어디 아픔?ㅠㅠ왜 못나왔는지 알려줘요ㅠ",
  },
  {
    name: "tbtrkfrpdy",
    text: "오늘도 출석 완료! 근데 밍디가 아니네?",
  },
  {
    name: "suju",
    text: "송기백 모른다고? 뉴스 안보는 티나쥬~",
  },
  {
    name: "ddoopp912",
    text: "오늘따라 애들이 보채네요ㅠㅠ 제가 신청한 시 읽어주세요",
  },
  {
    name: "ghazjald",
    text: "오랜만에 들으러 왔는데 밍디가 아니네",
  },
];

const type2 = [
  {
    name: "sdlawlqw",
    text: "뭐야. 왤캐 진지햌ᄏᄏᄏᄏᄏ 근데 잘햌ᄏᄏᄏᄏ",
  },
  {
    name: "elttewr",
    text: "딕션 대박... 역시 아나운서의 바이브란 이런 것인가",
  },
  {
    name: "beohos",
    text: "딕션, 톤, 호흡 삼박자가 완벽해 하악...",
  },
  {
    name: "cdusalw",
    text: "아니 이거 그냥 읽기도 쉽지 않은데 ᄏᄏᄏ 단어 하나 안 틀리고 정확해",
  },
  {
    name: "dlqwlrs",
    text: "시작은 장난이었으나 끝은 창대하리라...! 입덕완♥",
  },
  {
    name: "djpueria",
    text: "게스트로 종종 나와줬음 좋겠다아아!!",
  },
  {
    name: "poeiieu",
    text: "웃참 걱정했더니 진지해서 더 웃곀ᄏᄏᄏ",
  },
  {
    name: "cawqdg",
    text: "송기백 이 이름 석자 기억해두겠어ᄏᄏᄏᄏᄏ",
  },
  {
    name: "Sungin0423",
    text: "밍디 보러왔다 기백님에게 빠져요",
  },
  {
    name: "Einkoj",
    text: "호흡 말투 한글자한글자마다 다웃겨ᄏᄏᄏ쿠ᅮᅮ",
  },
  {
    name: "Bhua031",
    text: "내새키도 아닌데 뿌듯하고 막 좋네 ᄒᄒ",
  },
  {
    name: "Cjaalll",
    text: "형.. 진짜 대단하다ᄃᄃᄃ",
  },
  {
    name: "Dadam1004",
    text: "ᄏᄏᄏᄏ와 이건 시리즈로 좀 나와줘라ᄏᄏᄏᄏ",
  },
  {
    name: "Dignity",
    text: "누가보면 우포늪에 사는줄 알겠어...",
  },
  {
    name: "Pjh01200306",
    text: "너무 웃겨서 울면서 들었네ᅮᅮᅮ",
  },
  {
    name: "Cremi",
    text: "갓기백!! 응원해! 송기백♥♥♥",
  },
  {
    name: "sjtcm12",
    text: "송기백 생각보다 웃기네 ㅋㅋㅋㅋㅋ",
  },
  {
    name: "mom86",
    text: "기백씨 덕분에 오늘 따라 라디오가 더 즐겁네요~^^",
  },
  {
    name: "djqtdj",
    text: "무슨 시를 이렇게 잘 읽냐 ᄏᄏᄏᄏᄏᄏ",
  },
  {
    name: "qlalfdms",
    text: "송기백임?",
  },
  {
    name: "birdmania",
    text: "와 방금 우리 집 앵무새가 반응함",
  },
  {
    name: "wlqdprkffo",
    text: "ᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏ",
  },
  {
    name: "woohoo",
    text: "아나운서라고? 어쩐지 딕션 대박이네",
  },
  {
    name: "miyeon9595",
    text: "ᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏ기백이 고정 가보즈아~",
  },
  {
    name: "wlqdprkffo",
    text: "ᄏᄏᄏᄏᄏᄏᄏ",
  },
  {
    name: "rleownd",
    text: "다음엔 밍디랑 같이 나와줘요 ᄏᄏᄏᄏᄏ",
  },
  {
    name: "wpdlxlqltl",
    text: "기백이형 열심히 사네",
  },
  {
    name: "Lovely",
    text: "ᄏᄏᄏᄏᄏᄏᄏᄏ시 읽자마자 우리집 고양이 다 모임",
  },
  {
    name: "dlekffld12",
    text: "zzzzzzzzzzzzzzzzzzzzzzzzz",
  },
  {
    name: "dntru88",
    text: "ᄏᄏᄏᄏᄏᄏᄏ왜 이제 나왔어!!!!!!!",
  },
  {
    name: "ioioi",
    text: "몰래 듣고 있었는데ᄏᄏᄏᄏᄏ 웃느라 들킴",
  },
  {
    name: "emfkak",
    text: "오랜만에 맘껏 웃어보네요~^^",
  },
  {
    name: "rkqhwmdk321",
    text: "누구임? 밍디 어디감??",
  },
  {
    name: "aksgrhksqn",
    text: "프브스 선정 '우포늪 제일 잘 읽는 사람 1위'",
  },
];

const Right = ({ startChat, setStartChat, type }) => {
  const Dummy = type === 1 ? type1 : type2;
  const [chatList, setChatList] = useState([]);
  useEffect(() => {
    if (startChat) {
      let idx = 0;
      const intervalId = setInterval(() => {
        console.log(idx, Dummy.length);
        console.log(Dummy[idx]);
        // 이거 왜 -1 일까...?
        if (idx < Dummy.length - 1) {
          setChatList((prev) => [Dummy[idx], ...prev]);
          idx++;
        } else {
          setStartChat(false);
          clearInterval(intervalId);
        }
      }, 500);
      return () => clearInterval(intervalId);
    }
  }, [startChat]);

  useEffect(() => {
    console.log(chatList);
  }, [chatList]);
  return (
    <div className="radio-right">
      <div className="header">
        <div className="left">
          <span className="profile-img"></span>
          <span className="text">
            <span className="name">성이나</span>님, 반갑습니다!
          </span>
        </div>
        <div className="right">
          <X />
        </div>
      </div>
      <ul className="nav">
        <li className="now">실시간 채팅</li>
        <li>선곡표</li>
      </ul>
      <div className="notice">
        <span className="subject">DJ 한마디</span>
        <span className="contents">오늘의 시에 대한 당신의 생각은?</span>
      </div>
      <div className="chat-area">
        <div className="chat-list-wrap">
          <ul className="chat-list">
            {chatList.map(
              (el, index) =>
                el.name &&
                el.text && (
                  <ChatBox
                    key={el.name + index}
                    name={el.name}
                    text={el.text}
                    sec={1}
                  />
                )
            )}
          </ul>
        </div>
        <div className="input-area">
          <div className="input">실시간 글쓰기 (150자 내외)</div>
          <button className="send">전송</button>
        </div>
      </div>
    </div>
  );
};

export default Right;

const ChatBox = ({ name, text, sec }) => {
  console.log(name, text);
  return (
    <li className="chat-box">
      <div className="header">
        <div className="left">
          <span className="profile-img"></span>
          <span className="name">{name}</span>
        </div>
        <div className="right">
          <DotMenu />
        </div>
      </div>
      <p>{text}</p>
      <div className="bottom">
        {/* <span className="time">{sec}초 전</span> */}
      </div>
    </li>
  );
};
