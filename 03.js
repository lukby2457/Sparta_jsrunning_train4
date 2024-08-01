"use strict";

// 1. <빈칸>을 작성해주세요
const obj1 = {
  value :20,
  getValue() {
    return this.value;
  }
}
console.log(obj1.getValue()) ; //  출력값 20

// 2. 웹 브라우저에서 setTimeout 함수 내에서 this가 가리키는 출력값이 왜 그런지 설명해주세요
  const obj2 = {
      method : function() {
          console.log('첫번째 this : ', this);

          const innerMethod = () => {
              setTimeout(function() {
                  console.log('두번째 this : ' , this); 
              });
          }
          innerMethod();
      }
  }

  obj2.method();

/*
  화살표 함수는 this를 바인딩하지 않는다.
  setTimeout 안에서 function으로 this가 호출되고 있고, 일반함수로 호출되면 호출주체가 없어
  this는 전역객체를 가리키기 때문에 출력값으로 this는 Window를 출력하게 된다
*/