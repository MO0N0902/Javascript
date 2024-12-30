// 일반함수

//매개변수 o, 리턴값o함수정의
function getAge(age, num){
  console.log(age, typeof age);
  console.log(num, typeof num);
  return age + num;
}
//디폴트 매개변수
function getAge1(name, age, num =1){
  console.log(name, typeof name);
  console.log(age, typeof age);
  console.log(num, typeof num);
  return age + num;
}

let result2 = getAge1('준혁', 27);
console.log(result2);


//매개변수 o 리턴값 함수호출 출력(식별자(인수, 인수2)) or 변수명 = 식별자(인수1, 인수2);
console.log(getAge(20,1));
let result = getAge(25,1);
console.log(result);

// 아이디, 비밀번호, 이름을 전달받고 이름의 기본값을 사용자로 설정하기
// 함수명 : introduce 매개변수 o, 리턴값 x



function introduce(id, pw, name = 'user'){
console.log(`아이디 : ${id}, 비밀번호 : ${pw}, 이름 : ${name}`);

}

introduce("abc",1234);

//가변 매개변수 : 함수 호출 시 몇개의 값이 전달될지 모를 때 사용한다
  function printadd(...numbers){
    console.log(numbers, typeof numbers);
    for(let i=0; i<numbers.length; i++){
      console.log(i);
      // console.log(numbers[i]);
    }
    for(let i in numbers){
      console.log(i);
    }
  }

// 자바스크립트 for(let 변수명 in 배열명){}


  printadd(1,2,3,'q');