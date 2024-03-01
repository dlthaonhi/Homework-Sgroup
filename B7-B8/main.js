// alert('Hello JavaScrip')

// var array = [1,2,3];
// for (var i = 0; i < array.length; i++){
//   console.log(i);
// }

// var array = [1,2,3];
// array.forEach(function(i){
//   console.log(i);
// });

//---map()---
// var student = [
//     {
//         name: 'A',
//         id: 1234,
//         class: '23T-DT1'
//     },
//     {
//         name: 'B',
//         id: 1235,
//         class: '23T-DT2'
//     }
// ]



//map()



// forEach()
var students = ["Anna", "Belle", "Celine", "Diana"];

students.forEach((value, index, origin_arr) => {
    console.log(`index: ${index}, student: ${value}, class: ${students}`);
})

for (let i=0; i< students.length;i++) {
    console.log(`index: ${i}, student: ${students[i]}, class: ${students}`);
}

//find()

const find_name = students.find(function(student_name, index) {
    return student_name === "Belle";
})

console.log(find_name);

for (let i=0; i< students.length;i++) {
    while(students[i]==="Belle") {
        console.log(students[i])
    }
}

//finInDex

//reduce()

let sum=0;
var numbers = [ 1, 4, 10, 18];
let total = numbers.reduce((0,sum,index,arr))

//filter()

const odd = numbers.filter() 


// function change(student, index){
//     return {
//         index: index,
//         id: `2023_ ${student.id}`,
//         name: student.name,
//         class: student.class,
//         course: `23Nh ${student.class}`,
//     }
    
// };

// var re_student = student.map(change);
// console.log(re_student);

// let sum=0; 

