export const local = [
  {
    서울: [
      "종로구",
      "중구",
      "용산구",
      "성동구",
      "광진구",
      "동대문구",
      "중랑구",
      "성북구",
      "강북구",
      "도봉구",
      "노원구",
      "은평구",
      "서대문구",
      "마포구",
      "양천구",
      "강서구",
      "구로구",
      "금천구",
      "영등포구",
      "동작구",
      "관악구",
      "서초구",
      "강남구",
      "송파구",
      "강동구",
    ],
  },
  {
    부산: [
      "중구",
      "서구",
      "동구",
      "영도구",
      "부산진구",
      "동래구",
      "남구",
      "북구",
      "해운대구",
      "사하구",
      "금정구",
      "강서구",
      "연제구",
      "수영구",
      "사상구",
      "기장군",
    ],
  },
  {
    경기도: [
      "수원시",
      "성남시",
      "고양시",
      "용인시",
      "부천시",
      "안산시",
      "안양시",
      "남양주시",
      "화성시",
      "평택시",
      "의정부시",
      "시흥시",
      "파주시",
      "광명시",
      "김포시",
      "군포시",
      "광주시",
      "이천시",
      "양주시",
      "오산시",
      "구리시",
      "안성시",
      "포천시",
      "의왕시",
      "하남시",
      "여주시",
      "양평군",
      "동두천시",
      "가평군",
      "과천시",
      "연천군",
    ],
  },
];

export const weddingHallList = [
  {
    id: 1,
    title: "Maison d'Italie",
    tags: ["강남구", "블랙홀", "호텔식 웨딩"],
    images: [
      "/halltour/wedding5.png",
      "/halltour/wedding2.jpg",
      "/halltour/wedding3.jpg",
      "/halltour/wedding4.jpg",
      "/halltour/wedding1.png",
    ],
    name: "르비르모어 선릉",
    description:
      "르비르모어 선릉은 당신의 특별한 날을 더욱 빛나게 할 완벽한 공간입니다. 품격 있는 서비스와 세련된 인테리어로 소중한 순간을 더욱 특별하게 만들어 드립니다. 넓고 아름다운 연회장, 맞춤형 메뉴, 세심한 고객 서비스까지, 모든 것이 당신의 행복한 시작을 위해 준비되어 있습니다. 르비르모어 선릉과 함께 꿈꾸던 결혼식을 실현하세요.",
    locationType: ["서울", "강남구"],
    hallType: ["컨벤션 홀, 가든 홀"],
    weddingTime: [
      "11:00",
      "12:30",
      "14:00",
      "15:30",
      "17:00",
      "18:30",
      "20:00",
    ],
    weddingHalls: {
      리베라홀: 8000000,
      르메르홀: 15000000,
    },

    mealType: { 뷔페식: 70000, 호텔식: 100000 },
    minGuarantee: [250],
    hallPrice: 800,
    parking: [150],
    weddingInterval: 90,
    mealPrice: 70000,
    maxCapacity: [550],
    photoTable: "포함",
    specialDirecting: ["음향 및 특수조명, 스크린 상영"],
    weddingSupplies: ["방명록", "장갑", "혼인서약", "성혼선언문", "예식 봉투"],
    concierge: ["화촉점화", "플라워샤워", "버틀러안내"],
    flower: ["생화 장식"],
    flowerPrice: {
      price: [7000000, 8500000],
      option: ["필수"],
      company: [],
      instagram: [],
      visible: true,
    },
    snapPhoto: {
      price: [1000000, 1250000],
      option: ["필수"],
      company: ["제이준스냅", "위시위스퍼"],
      instagram: [
        "https://www.instagram.com/j.junsnap_official",
        "https://www.naver.com",
      ],
      visible: true,
    },
    pyeback: { price: [200000], option: ["선택"] },
    flowerWrapping: {
      price: [],
      option: ["선택"],
      visible: true,
    },
    flowerShower: {
      price: [300000],
      option: ["선택"],
      visible: true,
    },
    photoBooth: {
      price: [550000],
      option: ["선택"],
      visible: true,
    },
    officiant: {
      price: [250000],
      option: ["선택"],
      visible: true,
    },
    mc: { price: [300000], option: ["선택"], visible: true },
    weddingSong: {
      price: [250000],
      option: ["선택"],
      visible: true,
    },
    benefit: true,
    other: [
      {
        name: "추가사항1",
        price: "100000",
        option: "선택",
        company: "",
        instagram: "",
      },
    ],
    address: "서울 강남구 광명로 지하270",
    tel: "02-555-5555",
    homePage: "https://weddinghall.com",
    publicTransport: "2호선 선릉역 7번 출구 도보 5분",
  },
  {
    id: 2,
    title: "Art Hall",
    tags: ["강남구", "블랙홀", "호텔식 웨딩"],
    images: [
      "/halltour/wedding6.png",
      "/halltour/wedding2.png",
      "/halltour/wedding3.png",
      "/halltour/wedding4.png",
      "/halltour/wedding5.png",
    ],
    name: "서울 서초구",
    description:
      "상록 아트홀은 당신의 특별한 날을 더욱 빛나게 할 완벽한 공간입니다. 품격 있는 서비스와 세련된 인테리어로 소중한 순간을 완벽하게 연출해 보세요.",
    locationType: ["서울", "서초구"],
    hallType: ["컨벤션홀, 호텔웨딩"],
    flower: ["전체", "생화장식"],
    minGuarantee: 200,
    hallPrice: 800,
    mealType: ["뷔페식"],
    mealPrice: 70000,
    benefit: true,
  },
  {
    id: 3,
    title: "Maison d'Italie",
    tags: ["강남구", "블랙홀", "호텔식 웨딩"],
    images: [
      "/halltour/wedding1.png",
      "/halltour/wedding2.png",
      "/halltour/wedding3.png",
      "/halltour/wedding4.png",
      "/halltour/wedding1.png",
    ],
    name: "서울 송파구",
    description:
      "르비르모어 선릉은 당신의 특별한 날을 더욱 빛나게 할 완벽한 공간입니다. 품격 있는 서비스와 세련된 인테리어로 소중한 순간을 더욱 특별하게 만들어 드립니다. 넓고 아름다운 연회장, 맞춤형 메뉴, 세심한 고객 서비스까지, 모든 것이 당신의 행복한 시작을 위해 준비되어 있습니다. 르비르모어 선릉과 함께 꿈꾸던 결혼식을 실현하세요.",
    locationType: ["서울", "송파"],
    hallType: ["채플"],
    flower: ["전체", "생화장식", "조화장식"],
    minGuarantee: 300,
    hallPrice: 1500,
    mealType: ["뷔페식"],
    mealPrice: 70000,
    benefit: true,
  },
  {
    id: 4,
    title: "Art Hall",
    tags: ["강남구", "블랙홀", "호텔식 웨딩"],
    images: [
      "/halltour/wedding2.jpg",
      "/halltour/wedding2.png",
      "/halltour/wedding3.png",
      "/halltour/wedding4.png",
      "/halltour/wedding5.png",
    ],
    name: "경기도 수원시",
    description:
      "상록 아트홀은 당신의 특별한 날을 더욱 빛나게 할 완벽한 공간입니다. 품격 있는 서비스와 세련된 인테리어로 소중한 순간을 완벽하게 연출해 보세요.",
    locationType: ["경기도", "수원시"],
    hallType: ["컨벤션홀, 호텔웨딩"],
    flower: ["전체", "생화장식"],
    minGuarantee: 200,
    hallPrice: 800,
    mealType: ["뷔페식"],
    mealPrice: 70000,
    benefit: true,
  },
  {
    id: 5,
    title: "Maison d'Italie",
    tags: ["강남구", "블랙홀", "호텔식 웨딩"],
    images: [
      "/halltour/wedding3.jpg",
      "/halltour/wedding2.png",
      "/halltour/wedding3.png",
      "/halltour/wedding4.png",
      "/halltour/wedding1.png",
    ],
    name: "서울 강동구",
    description:
      "르비르모어 선릉은 당신의 특별한 날을 더욱 빛나게 할 완벽한 공간입니다. 품격 있는 서비스와 세련된 인테리어로 소중한 순간을 더욱 특별하게 만들어 드립니다. 넓고 아름다운 연회장, 맞춤형 메뉴, 세심한 고객 서비스까지, 모든 것이 당신의 행복한 시작을 위해 준비되어 있습니다. 르비르모어 선릉과 함께 꿈꾸던 결혼식을 실현하세요.",
    locationType: ["서울", "강동구"],
    hallType: ["컨벤션홀, 호텔웨딩"],
    flower: ["전체", "조화장식"],
    minGuarantee: 200,
    hallPrice: 1500,
    mealType: ["뷔페식"],
    mealPrice: 70000,
    benefit: true,
  },
  {
    id: 6,
    title: "Art Hall",
    tags: ["강남구", "블랙홀", "호텔식 웨딩"],
    images: [
      "/halltour/wedding4.jpg",
      "/halltour/wedding2.png",
      "/halltour/wedding3.png",
      "/halltour/wedding4.png",
      "/halltour/wedding5.png",
    ],
    name: "경기도 화성시",
    description:
      "상록 아트홀은 당신의 특별한 날을 더욱 빛나게 할 완벽한 공간입니다. 품격 있는 서비스와 세련된 인테리어로 소중한 순간을 완벽하게 연출해 보세요.",
    locationType: ["경기도", "화성시"],
    hallType: ["컨벤션홀, 호텔웨딩"],
    flower: ["전체", "생화장식"],
    minGuarantee: 200,
    hallPrice: 800,
    mealType: ["뷔페식"],
    mealPrice: 70000,
    benefit: true,
  },
];
