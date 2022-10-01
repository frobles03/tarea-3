const cars = require('./cars.json');

let contador=0;
cars.forEach(function(item) {
    if(item.year>2010){
    contador++;
       
    }
    
});

console.log("cantidad de autos con años superior a 2010: " + contador);
contador=0;



cars.forEach(function(item) {
    if(item.color==="Red"){
    contador++;
       
    }
});
    console.log("cantidad de autos de color rojo es : " + contador);

//usar filter
