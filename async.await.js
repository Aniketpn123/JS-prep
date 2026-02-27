// async/await  is more easy way to deal with promises

//async function

async function name() {
    return 1;
}         /// async shows it wiil always return promise

name().then(alert)

async function name(params) {
    return Promise.resolve(1);
}

// wraps non promise in it 
//
// await works inside async 


//Await

async function f() {
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('done'),1000)
    });

    let result = await promise;
    console.log(result);
    
}

f();

function f(){
    let promise = Promise.resolve(1);
    let r = await promise;     // syntax error
}

async function showAvatar() {
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();

    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();

     let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  await new Promise((resolve,reject)=> setTimeout(resolve,3000));

  img.remove();

  return githubUser;
}


// error handling

async function name(params) {
    await Promise.reject(new Error('error'));
}

async function name(params) {
    throw new Error('error');
}


async function name(params) {
    try{
         let response = await fetch('http://no-such-url');
    }
    catch(err){
        console.log(err);
        
    }
}

async function name(params) {
    try{
        let response = await fetch('/no-user-here');
    let user = await response.json();
    }
    catch(err){
        console.log(err);
        
    }
}

async function name(params) {
    let promise = new Promise(reject => new Error(console.log('error')
    ))
}

name().catch(console.log('error')
)

// taskss

async function loadJson(url){
    let response = await fetch(url);
    if(response.status == 200){
      let json=  await response.json();
      return json;
    }
    
        throw new Error('error');
    
}

loadJson('https://javascript.info/no-such-user.json')
  .catch(alert);


  //2.

  class httpError extends Error{
    constructor(response){
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
  }

 async function loadJson(url){
    let response = await fetch(url);
    if(response.status == 200){
        return await response.json();
    }
    else{
        throw new httpError(response);
    }
  }

  async function demoGithubUser() {
    let uset ;
    while(true){
let name = promt('enter a name' ,'aniket' );

try{
    user =await loadJson(`https://api.github.com/users/${name}`);
    break;
}

}

  }