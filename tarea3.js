const cars = require('./cars.json');
/**
 * 1
 */
 console.log("");
 console.log("1");
 console.log("");
let contador=0;
cars.forEach(function(item) {
    if(item.year>2010){
    contador++;
       
    }
    
});

console.log("cantidad de autos con años superior a 2010: " + contador);
contador=0;

console.log("");
console.log("2");
console.log("");
/**
 * 2
 */


cars.forEach(function(item) {
    if(item.color==="Red"){
    contador++;
       
    }
});
    console.log("cantidad de autos de color rojo es : " + contador);

/**
 * 3
 **/
 console.log("");
 console.log("3");
 console.log("");
 cars.forEach(function(item) {
    if(item.year>2010){
        console.log(item.brand+"-"+item.model+" "+item.year);
       
    }
    
});



/**
 * 4
 */
 console.log("*");
 console.log("4");
 console.log("*");
let luxurytax=true;
let contador2=0;
let contador3=0;
 const result = cars.filter(function(item) {
    
        if(item.brand==="Jaguar" || item.brand==="Aston Martin"){
        return (item.brand==="Jaguar" || item.brand==="Aston Martin");
        console.log(result.length);
        
    }else {
       
       
    }
    
   

    });



 cars.forEach(function(item) {
    if(item.brand==="Jaguar" || item.brand==="Aston Martin"){
        
       return true;
    }else{
        return false;
        console.log(return);
    }
});



 
//usar filter

/**
 * 5
 */
 console.log("*");
 console.log("5");
 console.log("*");

cars.forEach(function(item) {
    year=2010;

    if(item.year===year){
    console.log(item.model+"-"+item.year);
       
    }
    
});
