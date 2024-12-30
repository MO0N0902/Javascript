// 익명함수

let printAll = function (num){
  console.log(num);
};

printAll(100);

//매개변수로 잔달한 값이 짝수라면 +10한 값을 출력
// 아니라면 전달된 값만 출력
// result 변수, 익명함수 이용

//익명함수 생성
// 조건문작성 === 이용해서 
let Add10 = function(num){
  if(typeof num === 'number' && num %2===0){
    console.log(num+10);
  }else{
    console.log(num);
  }
};

Add10(13);
Add10(10);
Add10('ㄴㅇㄹ');

setTimeout(function(){
  console.log("2초뒤 출력")
}, 2000);