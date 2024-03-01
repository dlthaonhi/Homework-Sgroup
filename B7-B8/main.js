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


var students = ["Anna", "Belle", "Celine", "Diana"];


//map()


function change(ms_student) {
    return `Ms.${ms_student}`;
}
var re_student = students.map(change);
console.log(re_student);

const array_map = [];
for (let j=0; j< students.length; j++) {
    array_map[j]=`Ms.${students[j]}`;
    // console.log(`Ms.${students[j]}`);
}
console.log(array_map);


// forEach()

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

let i=0;
    while(students[i]!=="Belle") {
        i++
    }
console.log(students[i]);



////////////////////////////////////////////
const numbers = [ 1, 4, 10, 18, 21];

function odd_numbers(odd_number, index) {
    return odd_number%2==1
}

//finIndex

const odd_number_finInDex = numbers.findIndex(odd_numbers);
console.log(odd_number_finInDex);

let k=0;
    while(numbers[i]%2==1) {
        break;
    }
console.log(k);


//filter()

const odd_number_filter = numbers.filter(odd_numbers);
console.log(odd_number_filter);

const array_filter = [];
let dem=0;
for (let i=0; i< numbers.length;i++) {
    if (numbers[i]%2==1) {
        array_filter[dem]=numbers[i];
        dem++;
        // console.log(`${dem}, odd numbers: ${numbers[i]}`);
    }
}
console.log(array_filter);



//reduce()

function total(sum_reduce, curvalue, curindex, origin_arr) {
    return sum_reduce + curvalue;
}
let total_numbers = numbers.reduce(total, 0);
console.log(total_numbers);

let sum=0;
for (let a=0; a<numbers.length; a++) {
    sum+=numbers[a];
}
console.log(sum);

