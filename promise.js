// promise is a platform where my songs will be given to subscribers , my songs miight late , but wont get croede for give song requiest to fans 

let promise = new Promise(function(resolve,reject){
    setTimeout(()=> resolve(console.log('done')
    ),1000);
});

console.log(promise);

promise = new Promise((reslove,reject)=>{
    setTimeout(()=> reject(new Error("woops!")),1000);
})

promise = new Promise(function(resolve,reject){
        resolve(console.log(123)
        );

        reject(new Error("..."));
        setTimeout(()=>{console.log('done');
        },1000);
})


//  then , catch        // fans to get subscribe song

/ promise.then(
    function(result){console.log('song')},
    function(error){console.log('song error')
    }
) 

promise = new Promise(function(resolve,reject){
      setTimeout(()=>resolve(console.log("done.then")
      ),1000);
});

promise.then(
    result => console.log('result'),
    error => console.log('error')   
)

promise.then(
    console.log('result 1')
);


// catch  



promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});
promise.catch(console.log('error')
);


// cleanup : finally 

promise = new Promise ((resolve, reject)=>{
    setTimeout(console.log('yes'),1000)
});

  // runs when the promise is settled, doesn't matter successfully or not
 promise.finally(() => ' stop loading indicator')
  // so the loading indicator is always stopped before we go on
  promise.then(result =>' show result, err => show error')

  new Promise((resolve, reject) => {
  setTimeout(() => resolve("value"), 2000);
})
  .finally(() => alert("Promise ready")) // triggers first
  .then(result => alert(result)); 

  function loadScript(src, callback){
    let script = document.createElement('script');
    script.src = src;

    script.onload=()=> callback(null,script);
    script.onerror=()=> callback(new Error(`script load error ${src}`));

    document.head.append(script);
  }

  function loadScript1(src){
    return new Promise(function (resolve,reject){
        let script = document.createElement('script');
        script.src =src;

        script.onload=()=> resolve(script);
        script.onerror=()=> resolve(new Error(`script load error for ${src}`));

        document.head.append(script);
    })

  }

promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);

promise.then(script => alert('Another handler...'));


// tasks


promise = new Promise(function(resolve,reject){
       resolve(1);

       setTimeout(resolve(2),1000);
})


function delay(MS){
    let promise = new Promise((resolve)=> setTimeout(resovle,MS));
}

delay(3000).then(()=> console.log('3sec')
);



//  promise clanning 

new Promise ( function (resolve,reject){
    setTimeout(()=> resolve(1),1000);
}).then(function (result){
    console.log(result*2);  
}).then(function (result){
    console.log(result*2);
}).then(
    function(result){
        console.log(result*2);
        
    }
)


promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});


promise =new Promise(function(resolve,reject){
    setTimeout(()=> resolve(1),1000);
}).then(function(result){
    console.log(result);
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(result*2),1000);
    })
    
}).then(function(result){
    console.log(result);

    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(result*2),1000);
    })
    
})



class Thenable{
    constructor(num){
        this.num;
    }
    then(resolve,reject){
        console.log(resolve);

        setTimeout(()=> reslove(this.num*2),1000);
        
    }
}

new Promise(resolve => resolve(1)).then(result => {
    return new Thenable(result);
})
.then(console.log('a'));

// fetch 

promise = fetch(url);

// request a object info bu url and give promise , promise response with object,remote server response with headers   for reading response wee have to call response.text(); it return promise

fetch('/article/promise-chaining/user.json')
.then(function(response){
    return Response.text();
})
.then(function(text){
    console.log(text); 
})

// when Response.text runs it runs response.json() give json

fetch('/article/promise-chaining/user.json')
.then(response => response.json()).then(user => console.log(user.name)
)

fetch('/article/promise-chaining/user.json').then(response => response.json()).then(user=> fetch(`https://api.github.com/users/${user.name}`))
.then(response => response.json()).then(githubUser=>{
    let img = document.createElement('img');
    img.src =githubUser.avatar_url;
    img.className="avatar";
    document.body.append(img);

    setTimeout(()=> img.remove(),3000);
})

fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise(function(resolve, reject) { 
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser); 
    }, 3000);
  }))
 
  .then(githubUser => alert(`Finished showing ${githubUser.name}`));

  function loadJson(url){
    return fetch(url)
    .then(response => response.json());
  }

  function loadGitUser(name){
    return loadJson(`https://api.github.com/users/${name}`);
  }

  function showAvatar(githubUser)
  {
    console.log('i');
    
  }



//  error handling wiht promises

fetch('https://no-such-server.blabla')
.then(response => response.json())
.catch(error => console.log('erroor')
)

fetch('/article/promise-chaining/user.json')
.then(response => response.json())
.then(user => fetch(`https://api.github.com/users/${user.name}`))
.then(response => response.json())
.then(githubUser => new Promise((resolve,reject)=>{
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className ="avatr";
    document.body.append(img);

    setTimeout(()=>{
        img.remove();
        resolve(githubUser);
    } ,3000)

}))
.catch(
    error=> console.log('error')
)


// rethrowing



new Promise((resolve,reject)=>{
    throw new Error('error');
}).catch(function (error){
    console.log('error is jandled');
}).then(()=>console.log('next handler runs')
);

new Promise((resolve,reject)=>{
    throw new Error('error');
}).catch(function(error)
{
    if(error instanceof URIError){

    }
    else{
        console.log('cant handle');
    }
})
.then(function(){

}).catch(error => {
    console.log(`${error}`);  
})

// unhalled rejection

new Promise(function(){
    noSuchFunction();
})
.then(()=> {

})


// when error is not handle it gives mesg in console

window.addEventListener('unhandledrejection',function(e){
    console.log(e.promise);
    console.log(e.reason);
});

new Promise(function(){
    throw new Error('error');
})

