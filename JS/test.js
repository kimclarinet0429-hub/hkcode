// 키보드 입력 방식을 반드시 알아야 한다.

// prompt()



// while (1) {
//   i >= 0;
//   let input = parseInt(prompt("정수를 입력하시오."));
//   input = i + 1;
//   if (input) {
//     console.log('정수의 값을 더합니다.')
//   }
// }
// 반복문 안에 프롬프트가 들어오지 않아서 작동1번만됨. 

// 1부터 입력받은 정수까지 정수이 합게 출력하세요.

while (1) {
  let input = parseInt(prompt("정수를입력하세요"));
  if (input === 7) {
    console.log("7입력되었으니 종료");
    break;
  }
  let tot = 0;
  for (i =1; i<= input; i++) {
    tot = tot + i;
  }
  console.log(tot);
}
