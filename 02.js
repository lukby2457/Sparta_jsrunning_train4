// 1. 출력값과 출력되는 값의 이유를 설명해주세요
var name = "yuno";

function myName(){
    var name = "yuno2";
    function a(){
        console.log(name);
    }
    return a();
}

myName();

/*
  yuno2

  function a에서 name이 호출되어 있지 않으니
  name을 찾을려고 한 단계 밖인 myName에 접근해서 name 값이 저장되어 있는지 확인한다
  myName에서 name이 yuno2로 설정되어 있으니 출력값으로 yuno2가 나오게 된다
*/


// 2. 출력값과 출력되는 값의 이유를 설명해주세요
function test() {
    var x = 1;

    if(true){
        var x = 2; 
    }

    console.log(x);
}

test();

/*
  2

  var는 선언 후 값을 지정한 후 if나 for의 {}를 만나도 값이 변경되어 저장되게 된다
  따라서, if안에 x는 2라고 저장되었으므로 출력값은 2가 되게 된다
*/


// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.
const nameObj  = {
    name: "yuno",
    method: function() {
        const arrow = () => {
            console.log(`화살표 함수 : ${this.name}`);
        };
        function normal() {
            console.log(`일반 함수 : ${this.name}`);
        }
        arrow();
        normal();
    }
};

nameObj.method();

/*
  화살표 함수 : yuno
  일반 함수 : undefined

  화살표 함수는 화살표 함수 내에 name이라는 값이 정의 되어 있지 않으면
  화살표 함수 밖과 method 밖의 name을 참조하게 된다
  따라서, 화살표 함수에는 name이 yuno로 출력되게 된다
  
  일반 함수는 함수 밖만 참조하므로 함수 밖인 method에 name이 선언되어 있지 않으므로
  name에 undefined가 출력된다
*/