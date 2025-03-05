document.addEventListener("DOMContentLoaded", function () {
  const YOUR_REST_API_KEY = "5c6302bf67b9e03443fcd9a66be2a956"; // 발급받은 API 키

  function openModal(infoId) {
    const modalInfo = modalData.find((data) => data.id === infoId);
    if (modalInfo) {
      document.getElementById("myModal").style.display = "block";
      document.getElementById("modal-info").innerHTML = `
          <div id="${modalInfo.mapId}" style="width: 100%; height: 20vw;"></div>
          <div id="${modalInfo.id}">${modalInfo.title}</div>
          <div id="${modalInfo.subId}" style="height:10vw"></div>
        `;
      setTimeout(
        () => getDirections(modalInfo.mapId, modalInfo.subId, infoId),
        100
      ); // 지연 후 지도 생성
    }
  }

  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  // 모달 외부 클릭시 닫기
  window.onclick = function (event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  const modalData = [
    {
      title: "서울 도심 드라이브",
      id: "info1",
      mapId: "map1",
      subId: "sub-info1",
    },
    {
      title: "미사 한강공원 ~ 남한강",
      id: "info2",
      mapId: "map2",
      subId: "sub-info2",
    },
    { title: "인천 영종대교", id: "info3", mapId: "map3", subId: "sub-info3" },
    {
      title: "제주 서해안 도로",
      id: "info4",
      mapId: "map4",
      subId: "sub-info4",
    },
    { title: "강릉 해안 도로", id: "info5", mapId: "map5", subId: "sub-info5" },
    {
      title: "속초 청초호 ~ 영랑호",
      id: "info6",
      mapId: "map6",
      subId: "sub-info6",
    },
    {
      title: "대구 동인청사 ~ 오도산",
      id: "info7",
      mapId: "map7",
      subId: "sub-info7",
    },
    {
      title: "경기 광주 새오개길",
      id: "info8",
      mapId: "map8",
      subId: "sub-info8",
    },
    { title: "부안 변산반도", id: "info9", mapId: "map9", subId: "sub-info9" },
  ];

  async function getDirections(mapId, subId, infoId) {
    const routeData = {
      info1: {
        origin: { name: "남산 타워", x: "126.9882266", y: "37.5511694" },
        destination: { name: "속초 시내", x: "127.0867236", y: "37.5175896" },
        waypoints: [
          { name: "wp1", x: "126.97958313526664", y: "37.57839533107093" },
          { name: "wp2", x: "126.9786692", y: "37.5691015" },
          { name: "wp3", x: "126.92378097116217", y: "37.55667614969547" },
          { name: "wp4", x: "126.99232766814202", y: "37.53996335597507" },
          { name: "wp5", x: "127.10107040248062", y: "37.512020278988544" },
        ],
        priority: "RECOMMEND",
        car_fuel: "GASOLINE",
        car_hipass: false,
        alternatives: false,
        road_details: false,
      },
      info2: {
        origin: {
          name: "미사 한강 공원",
          x: "127.17995715796712",
          y: "37.5771835345252",
        },
        destination: {
          name: "갈산공원",
          x: "127.49269008636475",
          y: "37.485858168354895",
        },
        waypoints: [
          { name: "wp1", x: "127.29367956502044", y: "37.47134426391707" },
          { name: "wp2", x: "127.33304385860376", y: "37.531139455278854" },
          { name: "wp3", x: "127.37674712901907", y: "37.50566142463161" },
          { name: "wp4", x: "127.394550493196", y: "37.48653105064164" },
          { name: "wp5", x: "127.4459383755879", y: "37.504657791651404" },
        ],
        priority: "RECOMMEND",
        car_fuel: "GASOLINE",
        car_hipass: false,
        alternatives: false,
        road_details: false,
      },
      info3: {
        origin: {
          name: "인천 국제 공항",
          x: "126.4599415994162",
          y: "37.44480271557246",
        },
        destination: {
          name: "남한산성 유원지",
          x: "126.50979727506638",
          y: "37.598891769705475",
        },
        waypoints: [
          { name: "wp1", x: "126.55469974432943", y: "37.53115493452805" },
          { name: "wp2", x: "126.5897045213629", y: "37.56900555040932" },
          { name: "wp3", x: "126.55601972514742", y: "37.61036675433251" },
          { name: "wp4", x: "126.53994750726717", y: "37.6321001330363" },
          { name: "wp5", x: "126.53207851504865", y: "37.61373405692489" },
        ],
        priority: "RECOMMEND",
        car_fuel: "GASOLINE",
        car_hipass: false,
        alternatives: false,
        road_details: false,
      },
      info4: {
        origin: {
          name: "옥계 해수욕장",
          x: "129.04771305272098",
          y: "37.62699779649604",
        },
        destination: {
          name: "메이플 비치 골프 엔 리조트",
          x: "128.97487517533733",
          y: "37.74732110008853",
        },
        waypoints: [
          { name: "wp1", x: "129.0448731705388", y: "37.634482789012225" },
          { name: "wp2", x: "129.05603753668038", y: "37.65790036662673" },
          { name: "wp3", x: "129.04367338324275", y: "37.67736316853156" },
          { name: "wp4", x: "129.0397049548893", y: "37.68644638806264" },
          { name: "wp5", x: "129.01268675696764", y: "37.70680357014878" },
        ],
        priority: "RECOMMEND",
        car_fuel: "GASOLINE",
        car_hipass: false,
        alternatives: false,
        road_details: false,
      },
      info5: {
        origin: { name: "옥계 해수욕장", x: "126.5033901", y: "33.5170488" },
        destination: {
          name: "연대원담",
          x: "126.42411455853043",
          y: "33.49428166826544",
        },
        waypoints: [
          { name: "wp1", x: "126.48314793642187", y: "33.51062286561004" },
          { name: "wp2", x: "126.45515996758027", y: "33.503837728251796" },
          { name: "wp3", x: "126.45627928546757", y: "33.49682861218233" },
          { name: "wp4", x: "126.43719493193349", y: "33.49570303486461" },
          { name: "wp5", x: "126.42880170215662", y: "33.49269540158301" },
        ],
        priority: "RECOMMEND",
        car_fuel: "GASOLINE",
        car_hipass: false,
        alternatives: false,
        road_details: false,
      },
      info6: {
        origin: {
          name: "속초 시내",
          x: "128.58832630014433",
          y: "38.20423487983859",
        },
        destination: {
          name: "속초 시내",
          x: "128.58832630014433",
          y: "38.20423487983859",
        },
        waypoints: [
          { name: "wp1", x: "128.5816082737378", y: "38.19410608719044" },
          { name: "wp2", x: "128.59496779380382", y: "38.19151094748732" },
          { name: "wp3", x: "128.59024680315832", y: "38.21747027949415" },
          { name: "wp4", x: "128.57821638038055", y: "38.21279228125387" },
          { name: "wp5", x: "128.57598254297525", y: "38.21977516924588" },
        ],
        priority: "RECOMMEND",
        car_fuel: "GASOLINE",
        car_hipass: false,
        alternatives: false,
        road_details: false,
      },
      info7: {
        origin: { name: "대구 동인청사", x: "128.601505", y: "35.8715411" },
        destination: { name: "오도산 전망대", x: "128.075", y: "35.6738889" },
        waypoints: [],
        priority: "RECOMMEND",
        car_fuel: "GASOLINE",
        car_hipass: false,
        alternatives: false,
        road_details: false,
      },
      info8: {
        origin: {
          name: "경기 광주 시청",
          x: "127.25352272313773",
          y: "37.42942594579135",
        },
        destination: {
          name: "남한산성 유원지",
          x: "127.1720897812364",
          y: "37.46464855683316",
        },
        waypoints: [
          { name: "wp1", x: "127.24265445800604", y: "37.42663624454129" },
          { name: "wp2", x: "127.2294087120574", y: "37.435052011614076" },
          { name: "wp3", x: "127.21404420056227", y: "37.43407047154339" },
          { name: "wp4", x: "127.1968433095638", y: "37.43205894125537" },
          { name: "wp5", x: "127.17258615073062", y: "37.46159224373801" },
        ],
        priority: "RECOMMEND",
        car_fuel: "GASOLINE",
        car_hipass: false,
        alternatives: false,
        road_details: false,
      },
      info9: {
        origin: {
          name: "국립 새만금 간척 박물관",
          x: "126.5561686",
          y: "35.6965017",
        },
        destination: {
          name: "수협 중앙회 곰소어업 정보 통신국",
          x: "126.45923745504543",
          y: "35.63597043511328",
        },
        waypoints: [
          { name: "wp1", x: "126.541365476438", y: "35.69056159332082" },
          { name: "wp2", x: "126.53224583854256", y: "35.68401164864545" },
          { name: "wp3", x: "126.5247427859542", y: "35.67465025095237" },
          { name: "wp4", x: "126.51126436141982", y: "35.66273569778194" },
          { name: "wp5", x: "126.48953636598921", y: "35.65124835102893" },
        ],
        priority: "RECOMMEND",
        car_fuel: "GASOLINE",
        car_hipass: false,
        alternatives: false,
        road_details: false,
      },
      // 다른 info 추가...
    };

    const response = await fetch(
      "https://apis-navi.kakaomobility.com/v1/waypoints/directions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `KakaoAK ${YOUR_REST_API_KEY}`,
        },
        body: JSON.stringify(routeData[infoId]),
      }
    );

    const data = await response.json();
    console.log(data);

    if (data.routes && data.routes.length > 0) {
      const mapContainer = document.getElementById(mapId),
        mapOption = {
          center: new kakao.maps.LatLng(
            routeData[infoId].origin.y,
            routeData[infoId].origin.x
          ), // y, x 순서로 수정
          level: 8,
        };

      const map = new kakao.maps.Map(mapContainer, mapOption);
      const linePath = [];

      data.routes[0].sections.forEach((section) => {
        section.roads.forEach((road) => {
          for (var j = 0; j < road.vertexes.length; j += 2) {
            linePath.push(
              new kakao.maps.LatLng(road.vertexes[j + 1], road.vertexes[j])
            );
          }
        });
      });

      const polyline = new kakao.maps.Polyline({
        path: linePath,
        strokeWeight: 5,
        strokeColor: "#00FF00",
        strokeOpacity: 0.7,
        strokeStyle: "solid",
      });

      polyline.setMap(map);

      // 거리 및 소요 시간 정보 추가
      // 경로 데이터를 가져와서 요약 정보를 추출
      const totalDistance = data.routes[0].summary.distance / 1000; // m를 km로 변환
      const totalTimeSeconds = data.routes[0].summary.duration; // 소요 시간(초)
      const toll = data.routes[0].summary.fare.toll; // 통행료 정보 (toll)

      // 소요 시간 계산
      const hours = Math.floor(totalTimeSeconds / 3600);
      const minutes = Math.floor((totalTimeSeconds % 3600) / 60);
      const seconds = totalTimeSeconds % 60;

      // HTML 요소에 데이터 표시
      document.getElementById(subId).innerHTML = `
        총 거리: ${totalDistance.toFixed(2)} km <br>
        총 소요 시간: ${hours}시간 ${minutes}분 ${seconds}초 <br>
        통행 비용: ${toll ? toll + "원" : "없음"} <br>
      `;
    } else {
      console.error("경로를 찾을 수 없습니다.");
    }
  }

  window.openModal = openModal;
  window.closeModal = closeModal;
});
