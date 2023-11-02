// Function 1 (the avg
function averageNum(num1, num2) {
  return (num1 + num2) / 2;
}
console.log("test function1:", averageNum(4, 6));

// Function 2 (as example)
// TODO
function merge(num1, num2) {
  return (num1 + num2) / 2;
}
console.log("test function2:",merge(14, 16));

//Function 3 (as example)
//TODO
function string(s1, s2) {
  return (s1 + s2) ;
}
console.log("test function3:",averageNum("ronan", " the best" ));

//Function 4 (as example)
//TODO
let numbers=[4,4,3,4];
function equal(numbers){
  let isEqual=false
  let isSame=true
  let i=0
  while (i<numbers.length && isSame){
    if (numbers[0]==numbers[i]){
      isEqual=true
    }else{
      isSame=false
      isEqual=false
    }
    i+=1
  }
  return isEqual
}
console.log("test function3:", equal(numbers));

//Function 5 (as example)
//TODO
let students = {
  name : 'ronan',
  age : 17
}
function string (students){
  let res=""
  res+="student " +students.name+" is "+students.age+" years old"
  return res
}
console.log("test function5:", string(students));

//Function 6 (as example)
//TODO
let s1 = "aaa"
let s2 = "a"
let result = false
function isLonger(s1,s2){
    if (s1.length>s2.length){
        result = true
    }
    return result
}
console.log("test function6:",isLonger(s1,s2));
//Function 7 (as example)
//TODO
let Numbers = [1,3,5,7,9]
function sum(numbers){
    let total = 0
    for ( number of Numbers){
        total += number
    }
    return total
}
console.log("test function7:",sum(Numbers));

//Function 8 (as example)
//TODO
let Row=2
let Col=3
function createArr(Row,Col){
  let arr2D=[]
  let arr=[]
  for (let i=0; i<2;i++){
    for (let j=0 ; j<3 ; j++){
      arr.push(0)
    }
    arr2D.push(arr)
    arr=[]
  }
  return arr2D
}
console.log("test function7:",createArr(Row,Col));
