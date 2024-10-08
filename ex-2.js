//Exercise #2: At Least Five Function

function atLeastFive(array, operation,room) {
  let result = operation(array);
  return `นักเรียนห้องที่ ${room} ${result}`;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function checkingScore (array){
  let count = 0
  for (let i of array){
    if(i > 70){
      count++
    }
  }

  if(count >= 5){
    return "ผ่านเกณฑ์ ✅"
  }else {
    return "ไม่ผ่านเกณฑ์ ❌"
  }
}

let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkingScore,1);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkingScore,2);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkingScore,3);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);