//try...ccatch

try{
console.log(a);

}
catch(err){
  new Error('error');
}

try{
    console.log('satrt');
    console.log('end');
}
catch(err){
    console.log(ignored);
}

try{
    setTimeout(function(){
        novar;
    },1000);
}
catch(err){
    console.log('error');
    
}


setTimeout(function(){
    try{
        noVar;
    }
    catch(err){
        console.log('error');
    }
},1000);

/// errror object

// when js observe a error it prensent in object  the object we pass to catch as arguent

//refernceerror for undef var

try {
    lalalla;
}
catch(err){
    console.log(err.name); // referceerror
    console.log(err.name); 
    console.log(err.stack);  // referenece errorr
}

// catch binding 

let json ='{"name":"John", "age": 30}'; 
try{
let user = JSON.parse(json);

console.log(user.name);
}
catch(err){
    console.log('error');
    console.log(
        err.name
    );
    
}

// throwing our own errors


json = '{"age":30}';

try{
    let user = JSON.parse(json);
    console.log(user.name);
}
catch(err){
    console.log('error and desont execrute');
}

// throw

// throw <error object>

let error = new Error(msg);
error = new SyntaxError(msg);
error = new ReferenceError(msg);

try{
    let user = JSON.parse(json);

    if(!user.name){
        throw new SyntaxError("incomplete data");
    }
    console.log(user.name);
}
catch(err){
    console.log("JSon error:" + err.msg);
}

// rethrowing

try{
    user = JSON.parse(json);
}
catch(err){
    console.log('json error ' + err);
}

json ='{"age" :30}';

try{
    let user = JSON.parse(json);
    if(!user.name){
        throw new SyntaxError("no name");
    }

    lalal();

    console.log(user.name);
}
catch(err){
    if(err instanceof SyntaxError){
        console.log("json error" + err.msg);
    }
    else{
        throw err;
    }
}

function readData(){
    let json = '{"age : 30}';

    try{
        lalal();
    }
    catch(err){
        if(!err instanceof SyntaxError)
        {
            throw err;
        }
    }
}

try{
    readData();
}
catch(err){
    console.log("external catch "+err);
}


// try cath finally 

// finally always run if tehre is try no error or catch errros

try{
console.log();
}
catch(err){
    console.log(err); 
}
finally{
    console.log('execute always');
}

let num = +prompt('enetr a no ', 35)

let diff,result;

function fib(n){
    if(n< 0 || Math.trunc(n) != n){
        throw new Error('must not be -ve also an int');
    }
    return n <= 1 ? n : fib(n-1) + fib(n-2);
}

let start = Date.now();

try{
    result = fib(num);
}
catch(err){
    result =0 ;
}
finally{
    diff =Date.now() - start;
}

console.log(result || "error occured");

console.log( `execution took ${diff}ms`);


// Gloabl catch

window.onerror =function(message,url, line, col,error){

};

window.onerror =function(mesage,url, line, col, error){
    console.log(`${mesage} \n at ${line} : ${col} of ${url}`);
}

function readData(){
    badFunc();
}

readData();

// summary 


// try ... catch  always handle runtime erorrs




//   custom errors , extending errors

