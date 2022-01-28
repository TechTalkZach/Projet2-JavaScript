var todayDate = new Date();
var currentMois = todayDate.getMonth();

function geCurrentMonth() {

    var mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Décembre"];
    var todayDate = new Date();
    var currentMois = todayDate.getMonth();
    var nomDuMois = mois[currentMois];

    return nomDuMois;

}
console.log(getCurrentMonth());
