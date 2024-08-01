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
  화살표 함수는 this를 바인딩하지 않으나 setTimeout 함수 내에 function으로 일반 함수로 setTimeout의 인자로 사용하고 있다.
  따라서, 화살표 함수의 this는 setTimeout을 출력하게 된다
*/