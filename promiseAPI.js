// promise API 

let promsie = Promise.all(iterable );  // iterables  array of promise retunr new promise

Promise.all([
    new Promise(reslove => setTimeout(()=> reslove(1) ,3000 )),
    new Promise(reslove => setTimeout(()=> reslove(2) ,2000 )),
    new Promise(reslove => setTimeout(()=> reslove(3) ,1000 )),
]).then(console.log(arr)
)

let urls= ['https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'];

  let requests = urls.map(url => fetch(url));

  Promise.all(requests)
  .then(response => response.forEach(response=> console.log(`${response.url} : ${response.status}`)
  ));

  let names = ['iliakan', 'remy', 'jeresig'];

requests= names.map(name => fetch(`https://api.github.com/users/${name}`));     // return promise   promise<response>   to get actcal data do    response.json
   
Promise.all(requests).then(response => {
    for(let response of responses){
        console.log(`${response.url}: ${response.status}`);
    }
    return responses;
})
.then(responses => Promise.all(responses.map(r => r.json())))
.then(users => users.forEach(user => console.log(user.name)
));


Promise.all([
    fetch('/template.html'),
  fetch('/style.css'),
  fetch('/data.json')
]).then(render);

let url = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(url.map(url => fetch(url)))
.then(results => {
    results.forEach((result,num)=>{
        if(result.status == 'fulfilled'){
            console.log(`${url[num]} : ${result.value.status}`);
        }
        if(result.status == 'rejected'){
            console.log(`${url[num]}: ${result.reason}`);
            
        }
    })
})

if(!Promise.allSettled){
    const rejectHandler = reason => ({status:'rejected' , reason});
    const resloveHandelr = value=> ({status :'fulfiled' , value});

    Promise.allSettled=function (promises){
        const convertedPromises = promises.map(p=> Promise.resolve(p).then(resloveHandelr,rejectHandler));
        return Promise.all(convertedPromises);
    }
}


Promise.race

Promise.race([
    new Promise((resolve,reject)=> setTimeout(()=> resolve(1),1000)),
    new Promise((resolve,reject)=> setTimeout(()=> reject(new Error("whoops")),2000)),
    new Promise((resolve,reject)=> setTimeout(()=> resolve(3),3000)),
])

// Promise.any

Promise.any([
    new Promise((resolve,reject)=> setTimeout(()=> reject(new Error("error")),1000)),
    new Promise((resolve,reject)=> setTimeout(()=> reject(new error('error2'),2000)))
]);


//Promise.resolve/reject

let cache = new Map();

function loadCached(url){
    if(cache.has(url)){
        return Promise.resolve(cache.get(url));
    }
    return fetch(url)
    .then(response=> response.text())
    .then(text => {
        cache.set(url,text);
        return text;
    })
}

// Promise.reject

promsie = new Promise((resolve,reject)=> reject(error));



//  summary       Promise  Methods

Promise.all(promises)      // waited to reolve all promise and return arr of result   , if one error occur in promise all are  reject and reults ignored.

Promise.allSettled(promises)    // wait for promises to settled reult is arr og obj 

Promise.race(promises)  // firts promise to setted and than outcome is result/error

Promise.any(promsies)  // firts promsies to setetd it bcome outcome  , uf all are error AggregateError 

Promise.relove(value)      // make resolve with given value

promsie.reject(error)  // make promise reject with given error


promsie.all // i comaminly used 
