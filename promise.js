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


