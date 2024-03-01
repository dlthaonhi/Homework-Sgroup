//Merge array 
var a = ['hi', 'hello', 'hola', 'bonjour'];
var b = [1,2,3,4];
console.log(b.concat(a));



var numbers_01 = [1,2,5,6,8];
var numbers_02 = [2,4,6,8,10];
var numbers_03 = [1,3,5,7,9,11];


//every () _ even number
var even_number = numbers_01.every((number,index) => {
    return number%2==0
})
console.log(numbers_01);
if (even_number == false) {
    console.log('No');
}
else console.log('Yes');

var even_number = numbers_02.every((number,index) => {
    return number%2==0
})

console.log(numbers_02);
if (even_number ==false) {
    console.log('No');
}
else console.log('Yes');


//some() _ even number
var even_number = numbers_01.some((number,index) => {
    return number%2==0;
})
console.log(numbers_01);
if (even_number ==false) {
    console.log('No');
}
else console.log('Yes');

var even_number = numbers_03.some((number,index) => {
    return number%2==0;
})

console.log(numbers_03);
if (even_number == false) {
    console.log('No');
}
else console.log('Yes');


//filter() _ positive numbers
numbers_01 = [-2,-3,1,-5,3,-10];
numbers_02 = [-1,-5,-3,-10];

var positive_number = numbers_01.filter((number,index) => {
    return number > 0;
})

console.log(positive_number);


//find() & finInDex() _ first positive number
var positive_number = numbers_01.find((number,index) => {
    return number > 0;
})
var positive_number_index = numbers_01.findIndex((number,index) => {
    return number > 0;
})

if (positive_number == undefined) {
    console.log('No result');
} else {
    console.log(`${positive_number_index} ${positive_number}`);
}

var positive_number = numbers_02.find((number,index) => {
    return number > 0;
})
var positive_number_index = numbers_02.findIndex((number,index) => {
    return number > 0;
})


if (positive_number == undefined) {
    console.log('No result');
} else {
    console.log(`${positive_number_index} ${positive_number}`);
}


//forEach() _ divisible by 5 

var numbers = [1,3,5,7,10,25];

var divisible5 = numbers.forEach((number,index) => {
    if (number%5==0) {
        console.log(number);
    }
})


//lastIndexOf() _ value 2

numbers_01 = [1,6,2,3,5,2,7,11,2,8];
numbers_02 = [1,3,4,5,6];

var value2_first = numbers_01.indexOf(2);
var value2_last = numbers_01.lastIndexOf(2);

if (value2_first == -1) {
    console.log(`No result`);
} else {
    console.log(`${value2_first} ${value2_last}`);
}

var value2_first = numbers_02.indexOf(2);
var value2_last = numbers_02.lastIndexOf(2);

if (value2_first == -1) {
    console.log(`No result`);
} else {
    console.log(`${value2_first} ${value2_last}`);
}


//join()
console.log(`"${a.join()}"`);
console.log(`"${b.join()}"`);
// console.log(`"${((a.concat(b)).join())}"`);


//absolute value 
numbers = [2,-5,6,-10,4,-8,-9];

var abs_number = numbers.map((number,index) => {
    return Math.abs(number);
})

console.log(abs_number);


//Reverse Integer

// console.log(typeof(Number("0")));
let x= -1230010;
let y= x.toString();
let z=y.split('');


console.log(x);
console.log(y);
console.log(z);


var dem=0;
var array=[];


var value0 = z.lastIndexOf('0');
console.log(value0);
console.log(`length ${z.length}`);
// z.pop()
// console.log(z);

while (value0==z.length-1) {
    z.pop();
    value0 = z.lastIndexOf('0');
}
console.log(z);
console.log(`length ${z.length}`);


// let before= Number(z.join());
// console.log(z.toString());
// console.log(before);


// function check(number,index,array) {
//     var temp= Number(number);
//     if(typeof(number)== undefined) {
//         array[0]=number;
//         console.log(number);
//         dem++;
//         console.log(array[0]);
//     }
//     else {
//         console.log(temp);
//         console.log(`length ${z.length}`);
//         console.log(`index ${index}`);
//         console.log(`vitri ${z.length-index}`);
//         array[z.length-index]=temp;
//     }
// }
console.log(z);
var output = z.forEach((number,index) => {
    // console.log(number);
    // console.log(typeof(number));
    // if (number = '-') {
    //     // array[0]='-';
    //     dem++;
    // }
    // console.log(number);
    array[z.length-1+dem-index]=number;
    // console.log(number);
    // else {
    //     console.log(number);
    //     console.log(typeof(number));
    //     array[z.length-1+dem-index]=number;
    //     console.log(array[z.length-1+dem-index]);
    // }

    // var temp= Number(number);
    // // console.log(`temp= ${temp} type= ${typeof(temp)}`);
    // if( typeof(temp) == number) {
    //     array[z.length-1+dem-index]=temp;


});

if (array[z.length-1]='-') {
    array.pop();
    array.unshift('-');
}

console.log(array.join(""));


