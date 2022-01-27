var todayDate = new Date();
var currentMois = todayDate.getMonth();

function geCurrentMonth() {

    var mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Décembre"];
    var todayDate = new Date();
    var currentMois = todayDate.getMonth();
    var nomDuMois = mois[currentMois];

    document.getElementById('mois').innerHTML = nomDuMois;

}
console.log()
