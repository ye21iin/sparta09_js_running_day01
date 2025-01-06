// ## 4. 계산기 문제

// 연산자와 함수, 조건문을 토대로 계산기 함수를 하나 만들어 보려고 합니다.
// 함수에 숫자 , 연산자 , 숫자 세 개의 매개변수를 넣었을 때 해당 연산자를 기준으로 연산을 해서 값을 반환하는 함수를 만들어주세요.

// 예시

// ```javascript
// function 함수명(매개변수1, 매개변수2, 매개변수3) {
//   // 코드를 작성해주세요.
// }

// 함수명(3, "+", 6); // 결과값 9
// 함수명(11, "-", 6); // 결과값 5
// 함수명(6, "*", 3); // 결과값 18
// 함수명(15, "/", 3); // 결과값 5
// ```

// 답안

function calculator(num1, tactic, num2) {
  let result;
  switch (tactic) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      return console.log("it's unassigned tactic");
      break;
  }
  return console.log(result);
}

calculator(3, "+", 6); // 결과값 9
calculator(11, "-", 6); // 결과값 5
calculator(6, "*", 3); // 결과값 18
calculator(15, "/", 3); // 결과값 5
calculator(15, "a", 3); // 결과값 it's unassigned tactic
