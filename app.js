let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */
// - Créez un nouveau tableau qui contiendra la valeur de chaque élément de ***tableauUn*** exposant lui même.
let result1 = document.getElementById("result1");
let tableauExpo = tableauUn.map(item => item*item);
result1.innerHTML = tableauExpo.toString();

//- Créez un nouveau tableau qui contiendra la valeur de chaque élément de ***tableauUn*** multiplié par 10
let result2 = document.getElementById("result2");
let tableauMulti = tableauUn.map(item => item*10);
result2.innerHTML = tableauMulti.toString();

// - Créez un nouveau tableau qui contiendra la valeur de chaque élément de ***tableauUn***
// en ajoutant 2 et en divisant par votre age
let result3 = document.getElementById("result3");
let tableauAge = tableauUn.map(item => ((item+2)/42));
result3.innerHTML = tableauAge.toString().fixed();

//- Filtrez **tableauUn** de manière à récupérer toutes les valeurs étant plus > que 2
let result4 = document.getElementById("result4");
let tableauFiltre1 = tableauUn.filter(function (item){
    return item > 2;

});
result4.innerHTML = tableauFiltre1;

//- Filtrez **tableauUn** de manière à récupérer toutes les valeurs divisibles par 2 ( modulo... ????)
let result5 = document.getElementById("result5");
let tableauModulo = tableauUn.filter(function (item){
    return !!(item % 2);

});
result5.innerHTML = tableauModulo;

// - Filtrez **tableauUn** de manière à récupérer toutes les valeurs
// qui une fois multipliées par 3 sont plus grandes que 10
let result6 = document.getElementById("result6");
let tableauFiltre2 = tableauUn.map(item =>(item * 3));
tableauFiltre3 = tableauFiltre2.filter(function (item){
    return item > 10;

});
result6.innerHTML = tableauFiltre3;

//- Créez un nouveau tableau qui contiendra la valeur de la longueur de chaque élément de ***tableauDeux***.
let result7 = document.getElementById("result7");
let tableauLong = tableauDeux.map(item => item.length);
result7.innerHTML = tableauLong;

//- Créez un nouveau tableau qui contiendra la valeur + la valeur de la longueur de chaque élément de ***tableauDeux***
//      (Exemple : L'élément valeur1 à une longueur de 7)
let result8 = document.getElementById("result8");
         for(let i =0; i < tableauDeux.length; i++)
             result8.innerHTML += "l'element " + tableauDeux[i] + " a une longueur de " + tableauLong[i] + "<br>";

// - Créez un nouveau tableau qui contiendra la valeur de chaque élément de ***tableauDeux***
// concaténé avec lui même ( Exemple : valeur1valeur1 )
let result9 = document.getElementById("result9");
let tableauConca = tableauDeux.map(item => item.length+item.length);
result9.innerHTML = tableauConca;

// - Filtrez **tableauDeux** de manière à récupérer toutes les valeurs ayant une longueur plus > que 2 + 2
let result10 = document.getElementById("result10");
let tableauFiltre4 = tableauDeux.map(item => item);
tableauFiltre4.filter(function (item){
                    return item > 4;
});
result10.innerHTML = tableauFiltre4;

// - Filtrez **tableauDeux** de manière à récupérer toutes les valeurs dont la longueur est divisible par 2 ( modulo... ????)
let result11 = document.getElementById("result11");
let tableauFiltreModulo = tableauDeux.map(item => item.length);
let tableauFiltreModulo1 = tableauFiltreModulo.filter(function (item){
    return (item % 2);
});
result11.innerHTML = tableauFiltreModulo1;

//- Filtrez **tableauDeux** de manière à récupérer toutes les valeurs dont la longueur moins 3 est plus grande que 10
let result12 = document.getElementById("result12");
let tableauFiltre5 = tableauDeux.map(item => item.length-3);
let tableauFiltre6 = tableauFiltre5.filter(function (item){
                    return item > 10;
});
result12.innerHTML = tableauFiltre6; 
