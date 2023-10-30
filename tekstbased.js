let readlineSync = require('readline-sync');

console.log("Je wordt wakker in een oud huis je bent vergeten hoe je daar bent gekomen en je hebt het koud. Het duurt even voordat je ogen wennen aan het donker voordat je goed kan rondkijken. Je ziet een raam");

let keuze1 = readlineSync.question('Wat wil je doen? 1.Kijk naar buiten, 2.Blijf rondkijken. ');
if (keuze1 == 1){
    console.log("Het is donker buiten en je ziet niks, dat denk je tenminste. Hoe langer je blijft kijken hoe beter je dingen kan uitmaken. Het blijkt dat je ver boven de grond zit. “Maar hoe kan dat eigenlijk?” denk je. Je kan bijna geen gras en bomen zien door de wolken heen. Je draait je om.Nu dat je ogen gewend zijn aan het donker begin je veel meer te kunnen zien en begin je dingen op te merken, je ziet een deur een bed en een kast, verder is het allemaal rommelige dingen met stof en spinnenwebben.");
} else if( keuze1 == 2){
    console.log("Nu dat je ogen gewend zijn aan het donker begin je veel meer te kunnen zien en begin je dingen op te merken, je ziet een deur een bed en een kast, verder is het allemaal rommelige dingen met stof en spinnenwebben.");
}else {
    console.log('Dit is niet een optie');
}

let keuze2 = readlineSync.question('Wat wil je doen? 1.Probeer de deur te openen, 2.Ga bij het bed kijken, 3.Open de kastdeur. ');
if(keuze2 == 1){
    console.log("");
}else if(keuze2 == 2){
    console.log("")
}else{
    console.log("")
}