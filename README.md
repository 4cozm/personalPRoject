영화 검색 사이트 제작

프로젝트 소개 : 오픈 API 이용해서 영화 데이터를 받아와서 검색 창에 데이터를 입력하면 일치하는 데이터만 보여준다.
의도

순수 바닐라 자바스크립트만으로 영화 리스트 조회 및 검색 UI 구현
학습해온 자바스크립트 문법을 최대한 활용
스타일링 작업하며 css 와 친해지기
팀원 : 안홍걸

개발 기간 : 2024.04.25(목)~04.29(월)

기능 :검색버튼 클릭시 영화 정보 보여주기
      요약에 대한 내용을 스크롤 형식으로 구현하기
      검색버튼 대신 Enter을 눌렀을때,검색이 되도록 구현하기
      각 영화 요소 클릭시 ID가 출력되도록 이벤트 등록하기
      viewport단위를 사용하여 반응형 웹사이트가 되도록 구현

개발 환경 HTML, CSS, JavaScript

화면 구현 장면) TMDB의 API로 영화 정보를 불러온다,검색기능을 구현해 별도의 비동기 작업 없이 데이터를 가공해 출력하게끔 설계했다.
<img width="915" alt="image" src="https://github.com/4cozm/personalPRoject/assets/49065386/f874ac32-4f3c-4758-bde9-a518909b10c3">


구현 요구사항

TMDB 오픈 API 영화 정보 불러오기
영화정보 카드 리스트 UI 구현
카드에는 title(제목), overview(내용 요약), poster_path(포스터 이미지 경로), vote_average(평점) 이렇게 4가지 정보가 필수
영화 포스터 카드 클릭 시 클릭한 영화 id를 나타내는 alert 창띄우기
영화 검색 ui 구현
API로 받아온 전체 영화들 중 영화 제목에 input 창에 입력한 문자값이 포함되는 영화들만 화면에 보이도록 합니다.
입력 후 검색버튼 클릭 시 실행되도록 합니다.
const와 let 사용
화살표 함수 1개 이상 사용
배열 메소드 2개 이상 사용(forEach, map, filter, reduce, find)
DOM 제어하기 : api 목록 중 2개 이상 사용하기

어려웠던 점 : 없음

개발후 여유시간(금,일,월)에 팀원들의 코딩을 도와주었습니다. (약13시간)
https://github.com/YOON0425/personalproject1/tree/main/%EA%B0%9C%EC%9D%B8%EA%B3%BC%EC%A0%9C
https://github.com/Eomhyein/movie_search

직접적으로 도와준 내용:
프로젝트
  구현해야하는 기능들을 의사코드로 미리 주석처리하여 개략적인 프로젝트의 구현 순서와 코드 흐름에 대해 파악할 수 있도록 도왔습니다.
  CodeConvension에 대한 간단한 설명과 CamelCase에 대해 설명했습니다.
HTML
  HTML의 태그에 따른 특성에 대해 쉽게 이해할 수 있도록 도왔습니다.
  <h1>태그와 <p>태그의 차이,태그 내부 속성에 따른 기본이벤트 발생여부,Class와ID의 차이,SelfClosingTag에 대한 설명 등이 있습니다.
CSS
  CSS의 Cascading 특성에 대한 설명,display:flex,flex-warp,z-index등의 사용법과 상속에 관한 지식들을 이해할 수 있도록 도왔습니다.
JS
  fetch 비동기 작업의 개념과 처리과정,promise,then,체이닝,예외처리에 대한 전반적인 지식을 알려줬습니다.
  익명함수와 기명함수의 차이,선언방법에 대해 이해하기 쉽게 설명해주었습니다.
  받아온 API의 데이터 트리구조를 파악 할 수 있도록 도왔으며 이 구조를 보면서 각 기능에 대한 개발을 진행 할 수 있도록 도왔습니다.
  API데이터를 활용하여 HTML에 내용을 삽입할 수 있도록 innerHtml=""과 document.createElement,classList.add(),appendChild()등의 사용 방법을 알려주었습니다. 
  전역변수와 지역변수의 차이를 직접 코드를 구현하며 이해할 수 있도록 도왔습니다.
  함수의 선언과 사용에 따라 코드의 재사용성과 가독성이 증가하는 것을 실질적 예시통해 이해할 수 있도록 도왔습니다.
  querySelectorAll로 받아온 유사배열 NodeList의 트리구조를 직접 확인하고,이를 Array메서드를 통해 배열로 변경핧 수 있도록 도왔습니다.
  addEventListener를 활용해 원하는 요소에 이벤트를 바인딩 할 수 있도록 도왔습니다.
  API에서 response된 배열 데이터를 기반으로 다차원 배열에 대해 쉽게 이해할 수 있도록 도왔습니다.
