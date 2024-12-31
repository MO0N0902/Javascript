//1. 나이가 19살 이상이면 입장가능, 19살 미만이면 입장 불가 출력
// 나이가 10살이면 당첨을 출력하고 아니면 다음기회에 출력
// 본인이름, 나이는 상수로 설정, 삼항연산자 사용할 것
const name = '문준혁';
const age = 27;

function function1(name, age){
const isAdult = age>19?'입장가능입니다':'입장불가능입니다';
const Event = age === 10 ? "당첨" : "다음기회에";
console.log(`${name}님은 ${age}살 입장가능여부는 ${isAdult}`);
console.log(`이벤트 당첨여부: ${Event}`);
}
function1('name', age);

//출력결과
// 본인이름님은 00살 입장가능여부는 결과 
// 이벤트 당첨여부
//출력

//2. 점수가 60점 이상이면 합격, 60점 미만이면 불합격출력
// 점수가 100점이면 장학생, 아니면 일반학생 출력
// 학생이름, 점수는 상수로 설정
const studentName = "문준혁";
const score = 85;
function function2(studentName, score){
    const pass = score>60?"합격":"불합격"
    const scholarship = score===100?"장학생":"일반학생";
    console.log(`${studentName} 학생의 점수는 ${score}점, 합격 여부: ${pass}`);
    console.log('장학생 여부 : '+scholarship);
}
function2(studentName,score);


//3. 학생의 이름과 성적을 입력받아서 성적에 따른 학점 출력
// 90점 이상 : A, 80점 이상 : B,  70점이상 : C, 그외 : F
function checkGrade(name3, score3){
if(score3>=90){
    console.log(name3+' 학점 : A');
}else if(score3>=80){
    console.log(name3+' 학점 : B');
}else if(score3>=70){
    console.log(name3+' 학점 : C');
}else{
    console.log(name3+' 학점 : F');
}
};
checkGrade('문준혁',80);



function checkGrade2(score3){
if(score3>=90){
    return 'A'
}else if(score3>=80){
    return 'B'
}else if(score3>=70){
    return 'C'
}else{
    return 'F'
}
};
console.log(checkGrade2(60));








//4. 1부터 100까지의 숫자중 3, 6, 9의 배수 합계 출력
function function3() {
    let sum = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 6 === 0 || i % 9 === 0) {
            sum += i;
        }
    }

    console.log(`1부터 100까지 3, 6, 9의 배수의 합계는 ${sum}입니다.`);
}
function3();