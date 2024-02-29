// alert('Hello JavaScrip')

var array = [1,2,3];
for (var i = 0; i < array.length; i++){
  console.log(i);
}

var array = [1,2,3];
array.forEach(function(i){
  console.log(i);
});

//---map()---
var student = [
    {
        name: 'A',
        id: 1234,
        class: '23T-DT1'
    },
    {
        name: 'B',
        id: 1235,
        class: '23T-DT2'
    }
]

function change(student, index){
    return {
        index: index,
        id: `2023_ ${student.id}`,
        name: student.name,
        class: student.class,
        course: `23Nh ${student.class}`,
    }
    
};

var re_student = student.map(change);
console.log(re_student);


