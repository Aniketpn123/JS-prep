// window is global object
function sayHi(){
    console.log('hello');
}

// window.sayHi();

// document object is main "entry Point"

document.body.syule.background ="red";
setTimeout(()=> document.body.style.background="",1000);

// BOM (browser object model)

// navigator.userAgent;
// navigator.platform;

// location.host;

console.log(location.href);
if(confirm("go to wikipedia")){
   location.href = "https://wikipedia.org";
}

//  alert/ confirm / prompt  / setTimeout are also  part of BOM.


// summmary 


