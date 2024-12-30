//1. 

var data1 = '10';
var data2 = 10;
console.log(data1, typeof data1, typeof(data1));
console.log(data2, typeof data2, typeof(data2));

var data1 = true;
console.log(data1, typeof data1, typeof(data1))

console.log(name1, typeof(name1));
var name1 = '김영선'
console.log(name1, typeof(name1));

//hoisting(호이스팅) : 선언의 위치에 상관없이 존재하면 메모리에 할당된다
// 초기화 작업은 호이스팅 되지 않고 선언만 호이스팅 된다


//let
var data3 = "값 절대 수정 금지";
console.log(data3, typeof data3);
var data3 = '수정했지롱';
console.log(data3, typeof data3);