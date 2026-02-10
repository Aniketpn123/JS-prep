// Array Methods

// arr.push("r","r","r");
// arr.pop();
// arr.shift();
// arr.unshift("t",0,"r");

let ar = [ "I" ," go", "home"];
delete ar[1];
ar.length;

// splice can insert , remove , replace 

// ar.splice(start[, deleteCount ,elem1,...,elemN]);

let ar1 =[1,35,7,63,6,36,3];
ar1.splice(1,3,"ani","nak");

let removed = ar1.splice(0, 3);
console.log(removed);

ar1.splice(2, 0 ,"myname");


// -1 index

ar1.splice(-1, 0 , "surname", 3);
console.log(ar1);

// slice 

//ar.slice([start],[end]);

let ar2 = ["t","r","w","d","f"];

console.log(ar2.slice(2,3));
console.log(ar2.slice(-2));


// concat 
console.log(ar2.concat(2,[2,4]));
let arrayLike ={
    0 : "some",
    length :1,
    arr : [2,44,5],
    [Symbol.isConcatSpreadable]: true,
}
console.log(ar2.concat(2,arrayLike));

// iterate : forEach

// arr.forEach(function(item,index,array){
//     console.log("a");
// });

ar2.forEach(function(index,item,arr){
    console.log(index,item,ar2);
    
});


// search in array 

//indexof/lastindexof and includes

let item =ar2.indexOf("t" , 4);
item = ar2.includes("t" ,3);
console.log(item);

let ar3 = [1,0,false];

console.log(ar3.indexOf(0));
console.log(ar3.indexOf(null));

console.log(ar3.includes(2));

let fruits = ['apple','aniket' ,' orange' , 'grapes'];

console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('appl'));

//find and findIndex / findLastIndex

let result = fruits.find(function(item,index,arr){
console.log(item, index, fruits);
});

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id ==1);
let name = users.find((users ) => users.name == "Mary");
console.log(name);

console.log(users.findIndex(user => user.name == 'john'));
console.log(users.findLastIndex(user => user.name == 'john'));


///  filter

result = fruits.filter(function(item , index ,array)
{
    console.log(item, index, array);
});

let someUsers = users.filter(item => item.id <3);
console.log(someUsers , someUsers.length);


// map
let arr5 =[1,3,4,5,6,7];
let result1 = arr5.map(function(item, index,array){
    console.log(item,index,arr5);
})

let lengths = ["biblo","gandalf","nazugl"].map(item => item.length);
console.log(lengths);


//  sort(fn)

let arr = [1,2,15];

console.log(arr.sort());

function compareNum(a,b){
     if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
    console.log(a);
    console.log(b);
}

let arr2 = [ 1,2,15];


console.log(arr2.sort(compareNum));



