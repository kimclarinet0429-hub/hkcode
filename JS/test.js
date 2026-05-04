const name = document.getElementById('userName').value;
const email = document.getElementById('userEmail').value;
const age = document.getElementById('userAge').value;
const city = document.getElementById('userCity').value;
const isAgreed = document.getElementById('agree').checked;

//체크박스의 내용을 가져와야해서. checked가 박히면 참 거짓으로 판단함.
// value가 붙으면 그 값을 가지고 와야해서 하는것, 안붙으면 그작업을 하겠다는 것.

const genderRadios = document.getElementById('gender');
let gender = "";
for(let radio of genderRadios) {
  if(radio.checked){
    gender = radio.value;
    break;
    // 찾는순간 멈추게 하기위해서.
  }
}

if(!name || !email) {

}

if(!isAgreed) {
  
}

const resultDiv = document.getElementById('result');
// 지금까지 입력한 내용 모두 출력하게 하려고 이 작업을 하는 것임.(회원가입시 생각해볼것.)

// form태그에서는 입력을 받기 위해 만든거라 if하고 !으로 코딩함.
// for문에서 (let radio of gende~~ 여기 첫번째꺼 때려넣고진행, 두번째꺼(갯수만큼))
// Radio는 한 그룹이다. 동시 선택X, 하나는 무조건 선택해야함.