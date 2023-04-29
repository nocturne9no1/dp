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
  // {
  //   name: "wrqrrrr",
  //   text: "우포오오오오늪!!",
  // },
  {
    name: "ewryours",
    text: "ᄏᄏᄏ앜ᄏᄏᄏᄏᄏ 그건 안됔ᄏᄏᄏᄏᄏ",
  },
  // {
  //   name: "ghirtian",
  //   text: "ᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏ웃참챌린지 시작인가",
  // },
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
  // {
  //   name: "debased",
  //   text: "김바다 시인의 우포늪!!! 신청합니닷!!! 가즈아아ᅡᅡᅡ!!!",
  // },
  // {
  //   name: "fellwwer",
  //   text: "자아~~ 새들의 세상으로 빠져~~봅시다~~",
  // },
  {
    name: "Sdhrwls",
    text: "???",
  },
  // {
  //   name: "Pshky",
  //   text: "아.. 벌써 웃기다",
  // },
  // {
  //   name: "Sho_ch",
  //   text: "이거 아침 알람으로 딱인듯 ᄏᄏᄏᄏ",
  // },
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
  {
    name: "abcefa",
    text: "기백씨 안녕하세요^^",
  },
  {
    name: "dduyw22",
    text: "오! 뭔가 낯설다",
  },
  {
    name: "hoqwe",
    text: "누구라고??",
  },
  {
    name: "qazplm45",
    text: "헐 형 팬이에요",
  },
  {
    name: "Sktlrhfod",
    text: "찐임?",
  },
  {
    name: "food984",
    text: "아까 콧구멍 사고 난 애 아님?",
  },
  {
    name: "aldks",
    text: "누구라고? 자기 소개 한번만 더 해줘요~~~",
  },
  {
    name: "oouu33",
    text: "밍디는??",
  },
  {
    name: "thznFl",
    text: "ᄏᄏᄏᄏᄏ콧구멍ᄏᄏᄏ",
  },
  {
    name: "sksmswndus",
    text: "시읽남 밍디에서 바뀐거임?",
  },
  {
    name: "집이야",
    text: "날이 좋아^^ 분갈이 하고 있어요~ 어울리는 시 읽 어주세요~~",
  },
  {
    name: "피곤해9281",
    text: "밍디 무슨일 있나?",
  },
  {
    name: "kuyu68",
    text: "밍디가 읽어주는 시 듣고 싶었는데 ᅲᅲ",
  },
  {
    name: "rhfharh",
    text: "아나운서가 읽어주는 시라니^^",
  },
  {
    name: "qjtmdkszz",
    text: "내가 아는 송기백임?",
  },
  {
    name: "wkrhtlvdj",
    text: "나는 멋있던데...? 콧구멍 빼고ᄏᄏᄏᄏ",
  },
  {
    name: "sjsmswndu",
    text: "제가 쓴 시 읽어주세요!!!",
  },
  {
    name: "tjsgus",
    text: "오라버니 안녕하세요♡",
  },
  {
    name: "dfaas34",
    text: "ᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏ기사 엄청 났던데",
  },
  {
    name: "dfioi91",
    text: "정오뉴스 송기백?",
  },
  {
    name: "rkvudrns",
    text: "나 김성훈 팬이었는데...ᅲᅲᅲᅲᅲᅲ",
  },
  {
    name: "sunghoon1004",
    text: "무슨일 있었음??",
  },
  {
    name: "ooui38",
    text: "ᄏᄏᄏᄏᄏᄏ방송사고 땜에 ᅲᅲ집중 안돼요..",
  },
  {
    name: "menmen",
    text: "오늘 무슨 날임?",
  },
  {
    name: "qnrausrkwk",
    text: "형 뉴스는 어떻게 됐어요",
  },
  {
    name: "wkalos2002",
    text: "으으..!",
  },
  {
    name: "dfpop77",
    text: "다음주는 밍디 오나요?",
  },
  {
    name: "qhrhtlvdj",
    text: "저녁 뭐 먹을지 메뉴 추천해주세요.",
  },
  {
    name: "khss1019",
    text: "울엄마 회원가입 해드렸어요ᄒᄒ 앞으로 많이 읽어 주세요.",
  },
  {
    name: "jqyoung20",
    text: "일하면서 잘듣고 있어요",
  },
  {
    name: "soundy98",
    text: "피디님 선곡? 선시? 아무튼 최고네요!!",
  },
  {
    name: "lhjsl2",
    text: "ᄒᄋ",
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
  {
    name: "jugg",
    text: "ᄏᄏᄏᄏᄏᄏ역시 아나운서네",
  },
  {
    name: "thansemerh",
    text: "소문듣고 찾아왔슴다^^7",
  },
  {
    name: "ekfekfdl",
    text: "ᄏᄏᄏᄏᄏᄏᄏᄏ송기백 뭐야 ᄏᄏᄏᄏ웃기네",
  },
  {
    name: "kes4023",
    text: "ᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏ밍디 밥그릇 조심해야할 듯",
  },
  {
    name: "toyou",
    text: "정오뉴스도 그렇고 ᄏᄏᄏᄏ오늘 송기백데이인 듯",
  },
  {
    name: "jjunem8584",
    text: "^^;(",
  },
  {
    name: "tlsrlfn2002",
    text: "눈 앞에 우포늪이 펼쳐짐.",
  },
  {
    name: "happy65",
    text: "기백씨 다음에 또 나와줘요~ 우리 딸이 같이 듣고 너무 좋아하네요^^",
  },
  {
    name: "o8896o",
    text: "ᄏᄏᄏᄏᄏᄏᄏ라디오 하나 해도 될 듯",
  },
  {
    name: "ititt88",
    text: "ᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏ골때린다",
  },
  {
    name: "dfhur",
    text: "와 이걸 이렇게 읽는다고?",
  },
  {
    name: "bbyoii23",
    text: "뭐야 나 못들었어ᅲ 다시 읽어줘 ᅲᅮ",
  },
  {
    name: "ekdmams",
    text: "다음은 무슨 시? 기대되는데ᄏᄏᄏᄏᄏ",
  },
  {
    name: "aajdej81",
    text: "밍디 불안할 듯ᄏᄏᄏᄏᄏᄏ",
  },
  {
    name: "tlrksdk",
    text: "지금 밍디 뛰어오는 중임;;",
  },
  {
    name: "douiq190",
    text: "원래 이런 시임? ᄏᄏᄏᄏᄏᄏ",
  },
  {
    name: "tlrksdk",
    text: "지금 밍디 뛰어오는 중임;;",
  },
  {
    name: "claeochlrh",
    text: "다들 뭐해? 송기백 안쓰고?",
  },
  {
    name: "lmaroll",
    text: "안녕하세요~",
  },
  {
    name: "ziin0218",
    text: "뼈 때렸다.",
  },
  {
    name: "dlqnftkffo88",
    text: "ᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏ",
  },
  {
    name: "akfkzkd21",
    text: "와.. 발음 정확한 거 보소",
  },
  {
    name: "vkdlxld",
    text: "아나운서는 아나운서네ᄏᄏᄏᄏ",
  },
  {
    name: "bbyoii23",
    text: "뭔데.. 나 못들었다고.. 왜 다들 뭇는데..",
  },
  {
    name: "rkdgkssk11",
    text: "시 읽기의 정석이네요^^",
  },
  {
    name: "realove82",
    text: "오빠 수고 많았어요. 그냥 낼 만나요",
  },
  {
    name: "c54103285",
    text: "정신이 사나워 꿈자리 뒤숭숭 할 듯.",
  },
  {
    name: "22sung",
    text: "그래서 밍디 언제 온다고?",
  },
  {
    name: "chosim45",
    text: "ᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏ뉴스 기사 찾아봐야겠네",
  },
  {
    name: "parkhm111",
    text: "ᅮᅮᅮᅮ자꾸 귀에서 맴돌아",
  },
  {
    name: "kji5060",
    text: "나 꼭 다시듣기로 들을거야ᄏᄏᄏᄏᄏ",
  },
  {
    name: "09skysea",
    text: "ᄏᄏᄏᄏᄏᄏᄏ오포늪 1시간 재생 가자!!",
  },
  {
    name: "lsuk4145",
    text: "시가 기가 막히네 아주ᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏᄏ",
  },
];

const Right = ({ startChat, setStartChat, type }) => {
  const Dummy = type === 1 ? type1 : type2;
  const [chatList, setChatList] = useState([]);
  let idx = 4;
  useEffect(() => {
    if (startChat) {
      const intervalId = setInterval(() => {
        // console.log(idx, Dummy.length);
        // console.log(Dummy[idx]);
        // 이거 왜 -1 일까...?
        if (idx < Dummy.length - 1) {
          setChatList((prev) => [Dummy[idx], ...prev]);
          idx++;
        } else {
          setStartChat(false);
          clearInterval(intervalId);
        }
        if (idx === Dummy.length - 1) {
          idx = 0;
        }
        console.log(idx, chatList.length);
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
            {Dummy.slice(0, 4).map(
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
