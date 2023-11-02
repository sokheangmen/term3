//____addbject______
// let person={
//     "name":"Mey Heang",
//     "age":19
// }
//===1st way====
// person['province']='PS'
//====2nd way======
// person.position = 'Student'
// console.log(person);

//____process______
// let person={
//     "name":"Mey Heang",
//     "age":19
// }
// //===1st way=======
// console.log(person["name"]);
// //===2nd way=======
// console.log(person.age);


//____delete______
// let person={
//     "name":"Mey Heang",
//     "age":19
// }
// delete person.age;
// console.log(person);

//__________composed________
// let Student = {
//     generation: {
//         year: 2021,
//         major: {
//             mobile: {
//                 teacher: 'Rady',
//                 coach: 'Ronan'
//             },
//             web: {
//                 teacher: 'Him',
//                 coach: 'Clement'
//             }
//         },
//         school: 'PNC'
//     }
// }
// console.log(Student.generation.major.mobile);
// console.log(Student.generation.major.web);

//__________express or normal function________
/*
function sum(num1,num2){
    return num1+num2
}
console.log(sum(2, 3));
*/
//____arrow function_______

//not return
// let sum = (num1, num2) => num1+num2;
// console.log(sum(2,3));

// //have return
// let multiply = (num1, num2) => {
//     return num1*num2
// }
// console.log(multiply(2,3));


let numbers=[10,10,2,10]
//1 express function

// function sum (numbers){
//     let total =0
//     for ( let number of numbers){
//        total+=number
//     }
//     return total
// }
// console.log(sum(numbers));

//2 arrow function
let total = numbers => {
    let sum =0
    for (let number of numbers){
        sum+=number
    }
    return sum
}
console.log(total(numbers));