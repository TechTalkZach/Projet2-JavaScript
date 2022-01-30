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

 function getRandomTemperature() {


 }

 let numericMonth = getCurrentMonth();
 console.log(numericMonth);
 console.log(convertMonthToString(numericMonth));
 console.log(getSeason(numericMonth));

