//  object can be cosnider as a cabient with files haivng differnet name for each but have ( key :value )pairs

let user = new Object();    /// empty object

let user2 = {};          //empty cabient  { } is object literal


let user3 = {
    name:"john",
    age:38,
    "likes_birds" : true,
};

console.log(user3.name , user3.age, user3.admin = true,user3.likes_birds);
delete user3.age
console.log(user3);

