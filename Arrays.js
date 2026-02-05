// Array is an object with extra ordeerd collection feature

let arr = new Array();

let arr2 =[];

let fruits =["apple","orange","plum"];

fruits[1] = "pear";
fruits.length;
fruits[0];

let arr3 = ["aniket",'A',335,{name:'ani'},true, function () {console.log('hello');
}]
fruits.at(-1);

let no =[1,2,3,4,5,6,7,8,9,10];

no.push(11,34,66,88);
no.pop();
no.shift();
no.unshift('f','55','aniekt','77');



let a= ["aniket"];
let b = a;

if(a === b){
    //console.log('true');
}

b.push('4');

//console.log(a);

let fruits1 =[];

fruits1[455]=5;
fruits1.app = "appple";

// Loop
let arr4 =[3,5,46,65,7,76,768];

// for loop
for(let i =0 ; i < arr4.length; i++){
    //console.log(arr4[i]); 
}

// for of
for(let arr of arr4){
   // console.log(arr); 
}

// for in
for(let arr in arr4){
   // console.log(arr4[arr]);
}


// length 

let fruit= [];

fruit[2424]= "apple";

fruit.length;

let arr5 = [2,4,5,7,8,9];
arr5.length =2;
arr5.length =5;
//console.log(arr5);

// new Array()

let arr1 =new Array(5,4,5,6,7,7);

arr1 = new Array(2);

arr1[0];

// multidimensional arrays

let matrix =
[
    [3,68,8,9,9],
    [3,45,67,3],
    [2,4,5.6]
];

matrix[1][1];

// to String

let str =[2,3,5,6,7];

String(str);

[1,4]+1;
"1,4"+1;

// === or ==


console.log([0] == [0]);
console.log([] == []);
console.log(0 == []);
console.log('0' == []);
console.log( 0 == '');
console.log('0' == '');


