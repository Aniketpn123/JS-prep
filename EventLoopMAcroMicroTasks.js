//Event Loop


//Macrotask
//event loop   ->  script -> mousemove -> setTimeout -> event loop

// when tasks takes to lon time it raise alert like "Page Unresponsive"  in case of big calculation and programinng error.

// splitting CPU- hungry tasks


let i =0 ;
let start = Date.now();
function count(){
    for(let j =0 ; j < 1e9 ;j++){
        i++;
    }
    console.log('done' + (Date.now()-start) + 'ms');
}

function count(){
    do{
        i++; 
    }
    while(i%1e6  !=0 );

    if(1 === 1e9){
        console.log(Date.now() -start);
    }
    else{
        setTimeout(count);
    }
}

count();


// MacroTasks and MicroTAsks


//macrotasks we see in before in function using divieding task in using setImeOut

// microtasks  uses promises  execution of .then/catch/finally 


function count(){
    do{
        i++;
        ProgressEvent.innerHTML =i;
    }while(i% 1e3 !== 0);

    if(i< 1e6){
        queueMicrotask(count);
    }
}

count();


// summary

// to use macrotasks use setTimeout();

// to shedule microtask us efuntion or promise handler