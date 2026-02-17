// async is special syntax use to work with promises

async function name(params) {
    return console.log(1);
    ;
}

name().then(console.log());
 

// async returns promise and wraps non -primise

// await only works inside async fun

 //  let value = await Promise;


 // await makes JS wait until promise setle and return result

 async function name1(params) {
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=> resolve("done!") ,1000);
    })
    let result = await promise;
    console.log(result);
    
 }
name1();