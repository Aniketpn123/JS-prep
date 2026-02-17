//  object can be cosnider as a cabient with files haivng differnet name for each but have ( key :value )pairs

let user = new Object();    /// empty object

let user2 = {};          //empty cabient  { } is object literal

let fruit = 'apple';
let user3 = {
    name:"john",
    age:38,
    "likes_birds" : true,
    [fruit] : 5,
    [fruit + 'comp'] : 10,
};

console.log(user3.name , user3.age, user3.admin = true,user3.likes_birds);
delete user3.age

//  error user3.likes birds = true;

user3.$an= true;
user3["aniket my name"] =true;
delete user3["aniket my name"] ;

let key = "my name";
user3[key] = true;
console.log(user3[key]);
console.log(user3.apple);
console.log(user3.applecomp);
/// error console.log(user3.key);

function makeUser(name , age,nickName){
    return {
        name : name ,
        age : age,
        nickName : 'ani',
        for : 2,
        let : 1,
        int : 3,
        $:10,
        0:11,

    };
}

let user4 = makeUser('anikt', 32);

console.log(user4.nickName,user4.name,user4.int,user4["0"],user4[0],);


//.....................

let obj ={};

obj.__proto__ = 5;
console.log(obj.__proto__,obj['3'] == undefined);

let user5 = {name : 'ani' , age :30 ,test : undefined};
let myName = 'age'
console.log( 'name' in user5  , 'ani' in user5, myName in user5,
    user5.test  , 'test' in user5
);

console.log("...................");

// (for.. in) loop

let obj1 =
{
  name: 'john',
  age : 30,
  isadmin: true,
    49: "Germany",
  "4.1": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for(let key in obj1)
{
    console.log(key);
    console.log(obj1[key]);
}

let obj2 ={
    age: 34,
    name: "aniekt",
}

obj2.user = "ani";

for(let obj in obj2){
    console.log(obj);
    
}

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for(let code in codes){
    console.log(+code);
    
}



/////    tasks
console.log("...............");


let user7 ={
        name : "John",
        surname : "smith",
};

user7.name = "Pete";
delete user7.name;

//2. 

function isEmpty(obj){
    for(let item in obj){

        return true;
    }
    return true;
}
let schedule ={};

isEmpty(schedule);

schedule["3.34"]= "get up";

isEmpty(schedule);

// 3.  

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
function salary(salaries){
    let sum =0;
   for (let item in salaries)
   {
     sum += salaries[item];
   }
   console.log(sum);
   
}

salary(salaries);


// 4.  
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
function multi(menu){
  for(let item in menu){
    if( typeof menu[item] == 'number')
    {
     menu[item] = 2*menu[item];
  }
}
  console.log(menu);
  
}
multi(menu);