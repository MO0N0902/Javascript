//1. 1. 매개변수로 두 숫자를 전달받아 합을 반환하는 함수를 작성하기
// (디폴트 매개변수 1개 사용 기본값 10)
function addNumbers(num1, num2 = 10) {
    return num1 + num2;
}
console.log(addNumbers(5)); 

// ## 2. 숫자의 제곱을 계산하는 함수 작성하기
// ### 익명함수 사용, square
const square = function(num) {
    return num * num;
};
console.log(square(5));

// ## 3. 가변매개변수를 사용하여 전달받은 모든 숫자의 합 계산하기
// ### sumAll1 일반함수
function sumAll1(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumAll1(1, 2, 3, 4));

// sumAll2 익명함수
const sumAll2 = function(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
};
console.log(sumAll2(1, 2, 3, 4));

// 4. 콜백함수를 매개변수로 받아 두 숫자를 전달하고 연산결과(사칙연산 모두) 출력하는 oper 만들기

function oper(num1, num2, callback) {
    return callback(num1, num2);
}
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div= (a, b) => (b !== 0 ? a / b : '0으로 나눌수 없습니다');

console.log('덧셈:', oper(10, 5, add)); 
console.log('뺄셈:', oper(10, 5, sub));
console.log('곱셈:', oper(10, 5, mul));  
console.log('나눗셈:', oper(10, 5, div)); 

// 5. 사용자 데이터를 배열로 받아 20살 이상인 사용자만 필터링 하는 newUser 함수 만들기
function newUser(user, callback){
    
    for(let i =0; i<user.length; i++){
        Adult += user[i];
    }
    return Adult;
}

function isAdult(name, age){
    if(age>=20){
        console.log('이름 : ' + name +', 나이 :' + age);
    }else{
        console.log(name+'는 성인이 아닙니다')
    }
    
}
console.log(newUser('짱구', 21, isAdult));



// function isAdult(age){
// for(let i =0; i< user.length; i++){
//     if(user.age>=20);
//         Adult += (user[i]);
// }
// }
// console.log(newUser('짱구', 21, isAdult));