let readlineSync = require('readline-sync');

console.log("Je staat voor een oud, verlaten herenhuis op een donkere, regenachtige nacht. Je weet niet zeker hoe je je voelt om dit herenhuis voor je te zien.");
let tekst1 = ("Je besluit het herenhuis binnen te gaan. In de foyer vind je een kaars en een doolhof van gangen voor je. Je steekt de kaars aan en begint de gangen te verkennen. Je hoort een geluid vanuit een van de kamers.");
let tekst2 = ("Je blijft buiten en gaat opzoek naar een andere plek, dit herenhuis geeft je geen fijn gevoel. -- Neutraal einde, einde 1/4.");
let tekst3 = ("Je besluit naar de kamer te gaan. In de kamer vind je een oude, stoffige spiegel. Je ziet een vage reflectie van iets bewegen achter je.");
let tekst4 = ("Je rent met kaars en al naar buiten en de deur gaat keihard achter je dicht. Goed einde, einde 2/4.");
let tekst5 = ("Je draait je om en ziet niets. Je voelt echter een ijzige adem in je nek.");
let tekst6 = ("Je probeert weg te rennen met geen geluk je struikelt over wat je zelf denkt niks te zijn.");
let tekst7 = ("Je besluit de confrontatie aan te gaan. Iets kouds raakt je schouder en een fluisterende stem zegt: " + "Vind mijn rust.");
let tekst8 = ("");






let keuze1 = readlineSync.question('Wat wil je doen? 1. Ga het herenhuis binnen, 2.Blijf buiten en probeer een andere plek te vinden. ');
if (keuze1 == 1){
    console.log(tekst1);
    } else if( keuze1 == 2){
        console.log(tekst2);
        process.exit();
    }

let keuze2 = readlineSync.question('Wat wil je doen? 1.Verken de gangen, 2.Ga terug naar buiten; dit is te griezelig. ');
if(keuze2 == 1){
    console.log(tekst3);
    }else if(keuze2 == 2){
        console.log(tekst4)
        process.exit();
        }

let keuze3 = readlineSync.question('Wat wil je doen? 1.Draai je om en kijk wat er is, 2.Ren weg van de spiegel en terug naar de gang.')
if(keuze3 == 1){
    console.log(tekst5);
}else if(keuze3 == 2){
    console.log(tekst6);
}

let keuze4 = readlineSync.question('Wat wil je doen? 1.Blijf staan en confronteer de onzichtbare aanwezigheid, 2.Ren weg en probeer te ontsnappen.')
if(keuze4 == 1){
    console.log(tekst7);
}else if(keuze4 == 2){
    console.log(tekst8)
}
