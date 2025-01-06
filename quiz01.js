// ## 1. 빈칸 채우기 문제

// 아래 내용에서 빈 칸에 들어갈 항목들을 채워주시고 왜 그렇게 생각했는지
// 본인의 생각을 간단하게 1줄 정도 같이 적어주세요.

```
javascript

1.
let uninitialized;
console.log(uninitialized); // 결과값 < undefined >
uninitialized 변수를 선언하였으나, 값을 할당하지 않았음

2. < const > apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
Error 코드 = constant variable에 재할당 불가능하다.

3.
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
배열의 index의 시작 번호는 0부터, 0, 1, 2, 3...

4.
let mySchedule = "";
console.log(mySchedule || false); // < false >
// "" 은 falsy한 값 // console.log(typeof mySchedule); 결과값 string, cf. " " truthy value
console.log(!!mySchedule); // < false >
// mySchedule = falsy -> NOT(!).. true -> NOT(!).. false

```;
