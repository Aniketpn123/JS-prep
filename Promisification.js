function loadScript(src,callback){
    let script =document.createElement('script');
    script.src = src;

    script.onload=()=> callback(null , script);
    script.onerror =()=> callback(new Error(`error for ${src}`));

    document.head.append(script);
}

let loadScriptPromise = function(src){
    return new Promise((resolve,reject)=>{
        loadScript(src,(err,script)=>{
            if(err)  reject(err);
            else resolve(script);
        })
    })
}

function promisify(f){
    return function (...args){
        return new Promise((resolve,reject)=> {
            function callback(err,result){
                if(err){
                    reject(err);
                }
                else{
                    resolve(result);
                }
            }
            args.push(callback);
            f.call(this,...args);
        })
    }
}

loadScriptPromise= promisify(loadScript);
// loadScriptPromise(...).then(...);

function promisify(f,manArgs =false){
    return function (...args){
        return new Promise((resolve,reject)=> {
            function callback(err,...results){
                if(err){
                    reject(err);
                }
                else{
                    resolve(manArgs? results: results[0]);
                }
            }

            args.push(callback);

            f.call(this, ...args);
        })
    }
}

f = promisify(f,true);
// f(...).then(arrayOfResults => ...loadScript, err=> ...);