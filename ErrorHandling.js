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