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

