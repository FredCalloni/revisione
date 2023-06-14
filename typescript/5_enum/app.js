// solo numeri
var gommone;
(function (gommone) {
    gommone[gommone["motore"] = 2] = "motore";
    gommone[gommone["arco"] = 1] = "arco";
    gommone[gommone["poppa"] = 1] = "poppa";
})(gommone || (gommone = {}));
// nuova variabile
var numeroDiMotori = gommone.motore;
console.log('Motori: ' + numeroDiMotori);
