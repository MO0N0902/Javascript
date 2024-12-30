//1. 1. 매개변수로 두 숫자를 전달받아 합을 반환하는 함수를 작성하기
// (디폴트 매개변수 1개 사용 기본값 10)
function addNumbers(num1, num2 = 10){
  return num1 + num2;
}
console.log(addNumbers(4));
// (디폴트 매개변수 1개 사용 기본값 10)

// ## 2. 숫자의 제곱을 계산하는 함수 작성하기
// ### 익명함수 사용, square
const square = function(num3){
  return num3*num3;
}
console.log(square(4));
// ## 3. 가변매개변수를 사용하여 전달받은 모든 숫자의 합 계산하기
// ### sumAll1 일반함수
function sumAll1(...numbers){
  let sum = 0;
  for(let i = 0; i< numbers.length; i++){
    sum += numbers[i];
  }
return sum;
}
console.log(sumAll1(40,5,3,6));

// sumAll2 익명함수
const sumAll2 = function(...numbers){
  let sum = 0;
  for(let i = 0; i< numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}
console.log(sumAll2(40,6,23,5,7));
// 4. 콜백함수를 매개변수로 받아 두 숫자를 전달하고 연산결과(사칙연산 모두) 출력하는 oper 만들기
function oper(num1, num2, callback){
  return callback(num1, num2)
}
const add = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mul = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

console.log('덧셈 :', oper(10,5,add));
console.log('뺄셈 :', oper(5,10,sub));
console.log('나눗셈 :', oper(5,2,div));
// 5. 사용자 데이터를 배열로 받아 20살 이상인 사용자만 필터링 하는 newUser 함수 만들기
function newUser(...name, ...age, callback){
  return callback(name,age);
}
for(let i =0; i<age.length; i++){
  if(age<20){
    console.log('성인이 아닙니다')
  }else{
    Adult[]+=(name, age);
  }
}