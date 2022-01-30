var todayDate = new Date();
var currentMois = todayDate.getMonth();

function getCurrentMonth() {

    var mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Décembre"];
    var todayDate = new Date();
    var currentMois = todayDate.getMonth();

    return currentMois;

 } 

 function convertMonthToString() {

    var mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Décembre"];

    var nomDuMois = mois[currentMois];

    return nomDuMois;

 }

 function getSeason() {

    var season = ["Winter", "Spring", "Summer", "Fall"];

    

    if(currentMois == 11 || currentMois == 0 || currentMois == 1) 

        return season[0];

        else if(currentMois == 2 || currentMois == 3 || currentMois == 4)

        return season[1];

        else if(currentMois == 5 || currentMois == 6 || currentMois == 7)

        return season[2];

        else 
        return season[3];
 }


 function getRandomArbitrary(min, max) {     //Fonction qui retourne un nombre random entre 2 chiffres
    return Math.random() * (max - min) + min;
}

 let numericMonth = getCurrentMonth();
 console.log(numericMonth);
 console.log(convertMonthToString(numericMonth));
 console.log(getSeason(numericMonth));

let saison = getSeason();

function getRandomTemperature() {

    let automneHiverRandTemp = Math.round(getRandomArbitrary(-20,10),2);  //

    let printempsEteRandTemp = Math.round(getRandomArbitrary(10,35),2);

    if(saison == "Winter" || saison == "Spring")
        
        return automneHiverRandTemp;

    if(saison == "Summer" || saison == "Fall")
        
        return printempsEteRandTemp;
 }

let temperature =getRandomTemperature(); 

console.log(temperature);               //variable random temperature


