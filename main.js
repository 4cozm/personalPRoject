let movieJson;
fetch('https://api.themoviedb.org/3/movie/top_rated?language=ko-US&page=1', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmE0MjVmM2FhNGNiNDhkMmI2YTljMzcyNDA0Y2MyNCIsInN1YiI6IjY2MmIxMzk3YjUxM2E4MDExZjNlZTE0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0-mrmO8I3U9eBAn_iK2nqTNCuv2DMe06aJAgr_dJF1Q',
    'Accept': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  movieJson = data.results;
  createPoster(movieJson); 
})
.catch(error => console.error('Error fetching data:', error));



const btn = document.querySelector("#searchBtn"); //버튼
btn.addEventListener("click",()=>{
  const search = document.querySelector("#search").value;
  changeToSearch(search,movieJson); 
});

let createPoster = function(JSON){ //Json.results을 받아오면 원하는 데이터를 추출해 복제된 HTML을 생성
  JSON.forEach(function(data){
    const content = document.createElement("div");
    content.classList.add("content"); //영화포스터 컨테이너

    const img = document.createElement("img"); //포스터
    img.classList.add("poster_path");
    img.src="https://image.tmdb.org/t/p/w500/"+data.poster_path;

    const title = document.createElement("p"); //영화 제목
    title.classList.add("title");
    title.textContent=data.title;

    const overview = document.createElement("p"); //요약
    overview.classList.add("overview");
    overview.textContent="줄거리: "+data.overview;

    const vote_average = document.createElement("p"); //평균평점
    vote_average.classList.add("vote_average");
    vote_average.textContent="평점:  "+data.vote_average;

    const id = document.createElement("p"); //ID값 CSS에서 display:none;으로 숨김처리
    id.classList.add("voidID");
    id.textContent=data.id;

    content.appendChild(img);
    content.appendChild(title);
    content.appendChild(overview);
    content.appendChild(vote_average);
    content.appendChild(id);
    document.querySelector(".container").appendChild(content);
    
  });
  idAlert(); //ID를 출력하는 이벤트를 바인딩하는 작업 forEach문이 끝나고 한번에 바인딩
};

/* 강의에서 배운 방법
  const makeContaniner= document.createElement("div");
  makeContainer.classList.add("content");
  
  const tempHtml=`
  <img class="poster_path" src="https://image.tmdb.org/t/p/w500/${data.poster_path}">
  <p class="title">${data.title}</p>
  <p class="overview">줄거리:${data.overview}</p>
  <p class="vote_average">평점:${data.vote_average}</p>
  <p class="voidID">${data.id}</p>
`
makeContainer.appenChild(tempHtml);
*/
let changeToSearch = function(input,JSON){ //버튼입력되면 문자열데이터 받아옴 Json.results의 결과를 토대로 데이터 처리
  const content = document.querySelectorAll(".content"); //기존있는 포스터를 NodeList 형으로 받아옴
  content.forEach(content =>{content.remove();}); //크로미늄에선 유사배열 내부에도 forEach가 작동하긴함 //그냥 .container의 innerHtml=''; 처리해도됨
  let searchResult=[]; //검색결과와 일치하는 영화 배열 인덱스만 받음

  JSON.forEach(function(array) {
    const title = array.title.toLowerCase();
    if (title.includes(input.toLowerCase())) {
      searchResult.push(array);
    }
  });
  createPoster(searchResult);
}

let idAlert= function(){
  const ContentSelect =  document.querySelectorAll(".content");
  const alertArray = Array.from(ContentSelect); //querySelectorAll로 받은 NodeList를 배열로 바꿈
alertArray.forEach(array=>{
  array.addEventListener("click",function(event){
    const clicked=event.target; // 클릭된 타겟 확보
    const findID=clicked.closest('.content').querySelector(".voidID").textContent;
    alert("ID:"+findID);
    });
  });
};
//선택구현과제

//엔터 누르면 버튼이벤트 실행!
const form = document.querySelector(".searchContainer");
form.addEventListener("submit",event =>{
  event.preventDefault(); //enter버튼도 새로고침 됨
  btn.click();
})

//웹사이트 랜딩후 검색창 자동 포커싱 ->실패
window.addEventListener('load',()=>{
  const searchInput = document.querySelector("#search");
  searchInput.focus;
});