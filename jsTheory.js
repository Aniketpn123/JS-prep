// js is object oriented language , comminly used to make interacice wffects within web browsers, scripting lanaguage.

//  clienr side scripting language

// light weigth progrming lanauage


// compilation -- 
//     high language language converted to bit to get understand by system where we run it 

// interpretation   -- aynchrouns langaude 
// java is both compile and interpreted 

document.write("wel-come");

//  variable  == let , const , var;

//var have global scope   //var might accedently change 

// let have block scope

//Data type = primitive  , non primirive (object type)

// primitive =  number , boolean, string, null, bigint

// non primirive  =  array , list set , function map date

// ES 2020   ecma script satrandrad from js

// if(){}
// else if(){}

// switch(){
//     case 1: ;break;
//     default: ;break;
// }

// break; take poniter out off loop 
// continue ; skip cuurent itration 

//  objects

const person ={
    name: "aniekt ",
    salary : "15",
    date: "2/456/66",
}

// Arrays

let cast =["ss",'r',24,424.4];
let cars = new Array(4);
const car = new Array(4,4,634,54,7);
//Date is object predefiend

// console.log(Date());
// console.log(Date(year,month,day));
// console.log(Date(year,month,hours,minutes));
// console.log(Date(date string)=> new Date('YYYY/MM/DD'));
//console.log(Date(millieseconds));



// function

function name(a){
    return 1 + a;
}
name(2);

// Map

let m =new Map();
m.set(Key,value);
m.get(key);
m.has(key);
m.delete(key);

for(const k of m.keys()){
    console.log(k);
}
for(cosnt [key,value] of fruits){
    document.write(key + value)
}

// Set      set stores unique values 
//only value stores

const fruits = new Set();
fruits.add('apple');
fruits.add('banaana');
for(let f of fruits){
    document.write(f);
}

document.write(fruits.has(apple));
document.write(fruits.size(apple));
document.write(fruits.delete(apple));

document.write("<h1>welcome to JS</h1>");

// script tag can  be in head & body

document.write("<h1>welcoem from external js</h1>");

var a =123;
var b = BigInt("214134");
var c = "string";
var d = true;
var e = null;
var f = undefined;
document.write(" "+ a + " " + b);


let arr = [5,34,23,25,46.66, "string"];
let ar = new Array(3);
for(let x in arr){
        console.log(x + arr[x]);
        
}

const Person ={
        name: "aniket",
        gender: "male",
        dob : "28/03/2001",
}

document.write(person.name + "" + person.dob);

const obj = {};
obj.empno =101;
obj.name ="aniekt";
obj.age = 24;
obj.city= "Pune";
obj.all = function(){return obj.empno+""+obj.age};

document.write("<br/>" + obj.age+ " "+ obj.city);

function Student(age, name, std){
    this.name = name;
    this.age =age;
    this.std =std;
    this.fullinfo = function(){
        let text = this.name + " "+ this.lastname;
    }
}

const student1 = new Student(15,"aniekt","a");

document.write(student1.age+" " + student1.std+ "" + student1.name);
document.write(student1.fullinfo());

console.log(person["name"]); 

let text= " ";
const myarray = obj.value;
for(let x in myarray){
    text += student1[x];
}

let y = JSON.stringify(obj);
document.write(y);

console.log(text);


// DOM 




