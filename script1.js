function sayHello(name){
    console.log( name);
}
setTimeout(()=>{
    sayHello("Hello Ayesha");
}, 3000);

console.log("Greeting msg will be displayed after 3 seconds");  