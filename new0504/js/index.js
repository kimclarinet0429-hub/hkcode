const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

// 작업대상세팅 준비작업

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

// 로컬스토리지에는 모든 데이터가 '문자' 형태로 저장된다.
// true 또는  false 라는 문자가 저장되어 있다.
// 이 문자를 자바스크립트가 참, 거짓으로 인지하지 못하고 순수한 문자로 인식함.
// 자바스트립트 입장에서 참 또는 거짓으로 인지할 수 있도록 변환한다.

// JSON~ 이후 문장이 뜨면 자바스트립트가 이해할 수 있는 문장이 다음에 와야함.
// 모든 데이타, 네트워크 구조는 일렬로 나란히 간다.

function updateBody() {
  if (inputEl.checked) {
    bodyEl.classList.add("dark");
  } else {
    bodyEl.classList.remove("dark");
  }
}
// 페이지가 처음 로드될 때 스위치 상태에 맞추어 화면을 그리는 단계
updateBody();

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
