function showMessage(){
    console.log(
        'hello'
    );
    
}



showMessage();
// ..................................
let userName ='john';

function showMessage1(){

   let  userName ='aniket';
    let msg = "hello"+ userName;  //local variaable
    console.log(msg);

}
console.log(userName);

showMessage1();

console.log(userName);

// ..................................
function showMessage2(from,text)
{

    console.log(from + ':' + text);
    
}

showMessage2( 'aniekt', 'hello');
// ..................................
function showMessage3(from , text){
  from = '*' + from + '*';
  console.log(from + ':' + text);
  
}

let from ="aniket";

showMessage3(from, "hello");

console.log(from);
// ..................................
function showMessage3(from , text = " hello"){
  from = '*' + from + '*';
  console.log(from + ':' + text);
  
}

showMessage3('aniekt');

// ..................................


function showMessage4(text){
    if(text === undefined){
        text ='hello';
    }
    console.log(text);
    
}

function showMessage5(text){
    console.log( text ?? "unkown");   
}

showMessage5();

function sum(a,b){
    return a+b ;
}
let result = sum(1,2);

console.log(result);

// ..................................

function checkage(age){
    if(age >= 18){
        return true;
    }
    else{
        return false;
    }
}

if( checkage(19)){
    console.log('yes granted');
}
else{
    console.log('denied');
}

// ..................................

function showMovie(age){
    if(!checkage(age)){
        return;
    }
    console.log("movie");
    
}

showMovie(19);

// ..................................

function doNothing(){
    return (some + long +experession * f(a) + f(b));
}

console.log(doNothing() === undefined);

// ..................................

function showPrimes(n){
    nextPrime: for(let i =2 ; i < n ;i++){
        for(let j=0 ; j < i ;j++ ){
            if(i % j == 0)  continue nextPrime;
        }

        console.log(i);
        
    }
}



//tasks

//1. 

function checkAge(age){
    return ( age > 18 ?true : "not allow");
}

// 2. 

function min(a, b){
    if (a>b){
        return b;
    }
    return a;
}

// 3.

function pow(x,n){
    return x ** n;
}