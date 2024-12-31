//1. 문자열을 인수로 받아 역순으로 뒤집을 결과를 반환하는 함수
// 콜백을 사용하여 문자열을 역순으로 출력


//함수명 printStr()  매개변수 1개
//함수명 reverseStr() 콜백사용
// 참고 : split(), reverse(), join()

//2.  성과 이름을 전달받아서 풀네임을 만든 뒤 000님 환영합니다 출력하기

//함수명 welcomeUser
function welcomeUser(firstName, lastName) {
  const fullName = `${lastName} ${firstName}`;
  console.log(`${fullName}님 환영합니다!`);
}
welcomeUser("준혁", "문");

//3. 사용자 나이를 입력후 성인이면 true반환, 아니면 false 반환

//함수명 isAdult
function isAdult2(age) {
  return age >= 19 ? true : false;
  
}
console.log(isAdult2(20));

//4. 객체를 사용해 성적관리 프로그램 만들기
//프로그램이 등록되지 않은 학생은 3명이다
//이름 : 둘리, 나이 : 5, 점수 : 80
//이름 : 도우너, 나이 : 6, 점수 : 50
//이름 : 또치, 나이 : 5, 점수 : 90
// 학생마다의 점수 출력하기(이름 점수 같이 출력할 것)
// 3명을 모두 프로그램에 등록시킨다
// 3명의 학생 정보를 학교 객체로 선언 후에 학교 객체에 등록시킨다

const stu1 =[
  {name : '둘리', age : 5, score : 80},
  {name : '도우너', age : 6, score : 50},
  {name : '또치', age : 5, score : 90}
]
stu1.forEach(stu1 => {
  console.log(`이름 : ${stu1.name}, 성적 : ${stu1.score}`);
});




//5. 포인트를 각각 객체에 추가하고 순서대로 point는 80, 50, 90이다
//포인트를 모두 더한 값을 출력하라
const point1 = {point: 80};
const point2 = {point: 50};
const point3 = {point: 90};

const totalPoint = point1.point+point2.point+point3.point;
console.log('포인트 합계:'+totalPoint);
