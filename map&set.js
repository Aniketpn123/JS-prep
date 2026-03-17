// Map & Set

// map is collection of keyed data items like object

let map = new Map();
Map.set(key, value);
Map.set("name", "aniket");
Map.has("name");
Map.get("name");
Map.delete("name");
Map.clear();
Map.size;

// map can also use objects as keys

let john = { name: "john" };

let m = new Map();

m.set(john, 123);
console.log(m.get(john));

let jon = { name: "john" };
let ben = { name: "john" };

let obj = {};

obj[jon] = 234;
obj[john] = 123;

console.log(obj["ben"]);

// chain map
map.set("1", "str1").set(1, "num1").set(true, "bool1");

// looping over map

map.keys();
map.values();
map.entries();
for (x of m) {
  return x;
}

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

for (let veg of recipeMap.keys()) {
  console.log(veg);
}

for (let amount of recipeMap.values()) {
  console.log(amount);
}

for (let entry of recipeMap) {
  console.log(entry);
}

recipeMap.forEach((value,key,map)=>{
    console.log(`${key} : ${value}`);
    
})
