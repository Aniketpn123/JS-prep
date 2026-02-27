// microtasks


let promise = Promise.resolve();

promise.then(()=> console.log('done')
)

console.log('fineished');


// microtasks queue

// unhandled rej

promise =Promise.reject(new Error(failed));

promise.catch(err=> console.log('caught')
)

window.addEventListener('unhandledrejection', e => console.log(e.reason)
)

promise = Promise.reject(new error('failed'));
//failed to detect
window.addEventListener('unhandledrejection',e=> console.log(e.reason)
)

promise = new Promise.reject(new Error("failed"));

setTimeout(()=> promise.catch(err=> console.log('caught')
),1000);

window.addEventListener('unhandledrejection',e=> console.log(e.reason)
)

