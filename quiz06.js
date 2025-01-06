// ## 6. 장바구니 뒤바뀜 문제

// 아래 코드는 두 명의 유저(유저 A, 유저 B)가 각각 장바구니를 가지고 있다고 가정한 예시입니다.

// B 유저에게 할인 쿠폰을 적용하려고 applyCoupon 함수를 만들었습니다.

// ```javascript```
function applyCoupon(cart, coupon) {
  cart.items.forEach((item) => {
    item.price -= coupon.discount;
  });
}

const userACart = {
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};

const userBCart = userACart;
const coupon = { discount: 5000 };

// 유저 추가하기 - JSON / stringify
const userCCart = JSON.parse(JSON.stringify(userACart)); // 할인해보기
const userDCart = JSON.parse(JSON.stringify(userACart)); // 할인안하기
// console.log(userCCart); // {items: [ { name: '키보드', price: 30000 }, { name: '마우스', price: 20000 } ]}
// console.log(userDCart); // {items: [ { name: '키보드', price: 30000 }, { name: '마우스', price: 20000 } ]}

applyCoupon(userBCart, coupon);

// 1.	실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요?
// console.log(userACart); // {items: [ { name: '키보드', price: 25000 }, { name: '마우스', price: 15000 } ]}
// console.log(userBCart); // {items: [ { name: '키보드', price: 25000 }, { name: '마우스', price: 15000 } ]}
// 두 명의 유저 모두 -5,000원씩의 할인이 적용됨.

// 2.	1번의 결과에 대한 이유를 설명해보세요.
// userBCart 변수 할당 시, userACart의 얕은 복사를 수행.
// 따라서 userBCart는 userA가 가진 데이터와 동일한 주소값을 가지고 있다.
// 할인처리를 하면 두개 변수가 함께 움직이는 것

// 3.	원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데, 그렇게 하려면 코드를 어떻게 수정해야 할까요?
// userBCart 변수에 값을 할당할 때, userACart의 깊은 복사를 수행하여 두 개의 유저가 같은 값이지만 독립적일 수 있도록 해야 함.

// userD는 그대로 두고, userC의 장바구니에만 할인 먹이기
applyCoupon(userCCart, coupon);
// console.log(userCCart); // {items: [ { name: '키보드', price: 25000 }, { name: '마우스', price: 15000 } ]} 할인됨
// console.log(userDCart); // {items: [ { name: '키보드', price: 30000 }, { name: '마우스', price: 20000 } ]} 그대로

console.log(userACart); // origin : 키보드 25000 마우스 15000
console.log(userBCart); // A의 얕복 : 키보드 25000 마우스 15000
console.log(userCCart); // A의 깊복 & 할인 : 키보드 25000 마우스 15000
console.log(userDCart); // A의 깊복 : 키보드 30000 마우스 20000
console.log(userACart === userBCart ? "동일" : "상이"); // 동일 - 얕은복사로 같은객체로 봐도 무방할까?
console.log(userACart === userCCart ? "동일" : "상이"); // 상이 - 가격은 같지만 다르다 왜냐면 깊은복사를 통해 다른객체로 선언함
console.log(userACart === userDCart ? "동일" : "상이"); // 상이 - 이건 가격부터 다르니까 상이한 게 맞음
