let readlineSync = require('readline-sync');

console.log("Je staat voor een oud, verlaten herenhuis op een donkere, regenachtige nacht. Je weet niet zeker hoe je je voelt om dit herenhuis voor je te zien.");
let tekst1 = ("Je besluit het herenhuis binnen te gaan. In de foyer vind je een kaars en een doolhof van gangen voor je. Je steekt de kaars aan en begint de gangen te verkennen. Je hoort een geluid vanuit een van de kamers.");
let tekst2 = ("Je blijft buiten en gaat opzoek naar een andere plek, dit herenhuis geeft je geen fijn gevoel. -- Neutraal einde, einde 1/5.");
let tekst3 = ("Je besluit naar de kamer te gaan. In de kamer vind je een oude, stoffige spiegel. Je ziet een vage reflectie van iets bewegen achter je.");
let tekst4 = ("Je rent met kaars en al naar buiten en de deur gaat keihard achter je dicht. Goed einde, einde 2/5.");
let tekst5 = ("Je draait je om en ziet niets. Je voelt echter een ijzige adem in je nek.");
let tekst6 = ("Je probeert weg te rennen met geen geluk. Je struikelt over wat je zelf denkt niks te zijn. Iets kouds raakt je schouder en een fluisterende stem zegt: 'Vind mijn rust.'");
let tekst7 = ("Je besluit dan maar de confrontatie aan te gaan. Iets kouds raakt je schouder en een fluisterende stem zegt: 'Vind mijn rust.'");
let tekst8 = ("Hoe graag je ook zou willen bewegen heb je op dit moment geen macht over je lichaam en blijf je staan.");
let tekst9 = ("De stem fluistert over een vergeten graf in de tuin.")
let tekst10 = ("Zelfs met al het wil in de wereld heb je geen macht over je lichaam en blijf je stil staan als een standbeeld. De stem fluistert over een vergeten graf in de tuin.")
let tekst11 = ("Je besluit naar buiten te gaan. In de tuin vind je een vergeten grafsteen.")
let tekst12 = ("Terwijl je rent wordt je lichaam opeens heel warm en je hoofd ontploft... Volgens mij was de geest niet zo blij met je... Slecht einde, einde 3/5.")
let tekst13 = ("Je besluit het graf open te graven. Binnenin vind je een verweerd dagboek en een foto van een jonge vrouw vies van de aarde.");
let tekst14 = ("Je begint zomaar het graf open te graven. Binnen vind je een verweerd dagboek ene en forot van een jonge vrouw vies van de aarde.");
let tekst15 = ("Je besluit het dagboek te lezen. Het onthult een tragisch verhaal over een vrouw die in het herenhuis woonde en stierf onder mysterieuze omstandigheden.");
let tekst16 = ("Je draait de foto om en kijkt naar de achterkant. Op de achterkant zie je nog een foto met dezelfde vrouw samen met een man wiens hoofd is doorkruist met pen.");
let tekst17 = ("Je besluit de geest met de ontdekte informatie te confronteren en vraagt hoe je kunt helpen. De geestelijke aanwezigheid begint te praten, en haar stem wordt zachter. Ze smeekt je om haar man te vinden en hem te confronteren met de waarheid. Haar man is nog steeds in het herenhuis, gevangen in een spiraal van schuld en waanzin.");
let tekst18 = ("Je besluit de geest met de ontdekte informatie te confronteren en vraagt hoe je kunt helpen. De geestelijke aanwezigheid begint te praten, en haar stem wordt zachter. Ze smeekt je om haar man te vinden en hem te confronteren met de waarheid. Haar man is nog steeds in het herenhuis, gevangen in een spiraal van schuld en waanzin.");
let tekst19 = ("Je besluit om op zoek te gaan naar de man om de waarheid te onthullen. Je begint het herenhuis grondig te doorzoeken en volgt het geluid van zacht gehuil naar een afgesloten kamer op de bovenste verdieping. Daar vind je de man, verstopt in een donkere hoek. Hij ziet er uitgeput en verward uit.");
let tekst20 = ("Terwijl je rent wordt je lichaam opeens heel warm en je hoofd ontploft... Volgens mij was de geest niet zo blij met je... Slecht einde, einde 3/5.");
let tekst21 = ("Je besluit de man met de waarheid te confronteren en dwingt hem om zijn daden op te biechten. De man, overmand door schuldgevoelens, bekent wat hij de vrouw heeft aangedaan. Hij smeekt om vergiffenis en belooft de geestelijke aanwezigheid te helpen rust te vinden.");
let tekst22 = ("Je besluit de man aarzelend met de waarheid te confronteren en dwingt hem om zijn daden op te biechten. De man, overmand door schuldgevoelens, bekent wat hij de vrouw heeft aangedaan. Hij smeekt om vergiffenis en belooft de geestelijke aanwezigheid te helpen rust te vinden.");
let tekst23 = ("Je besluit de man te helpen om zijn belofte na te komen en de geest te bevrijden. Samen met de man zoek je naar een manier om de geestelijke aanwezigheid te bevrijden. Uiteindelijk ontdekken jullie een oud ritueel dat de geest zal helpen om eindelijk rust te vinden. Het ritueel is angstaanjagend, maar noodzakelijk.");
let tekst24 = ("Na wat je hebt gehoord van de man en wat hij de vrouw had aangedaan besluit je hem daar achter te laten in het herenhuis hopend dat hij zelf naar sterft. Neutraal einde, einde 4/5.");
let tekst25 = ("Je besluit het ritueel uit te voeren en helpt de geest rust te vinden. Het ritueel is angstaanjagend, maar samen met de man en de geest volg je de stappen. Er klinkt een luid gekraak, en plotseling verdwijnt de geestelijke aanwezigheid samen met de man, en het herenhuis lijkt plotseling rustiger. Goed einde, einde 5/5.");

let keuze1 = readlineSync.question('Wat wil je doen? 1.Ga het herenhuis binnen, 2.Blijf buiten en probeer een andere plek te vinden. ');
if (keuze1 == 1){
    console.log(tekst1);
    } else if( keuze1 == 2){
        console.log(tekst2);
        process.exit();
    }

let keuze2 = readlineSync.question('Wat wil je doen? 1.Ga naar de kamer toe om te zien wat er is, 2.Ga terug naar buiten, dit is te griezelig. ');
if(keuze2 == 1){
    console.log(tekst3);
    }else if(keuze2 == 2){
        console.log(tekst4)
        process.exit();
        }

let keuze3 = readlineSync.question('Wat wil je doen? 1.Draai je om en kijk wat er is, 2.Ren weg van de spiegel en terug naar de gang. ');
if(keuze3 == 1){
    console.log(tekst5);
}else if(keuze3 == 2){
    console.log(tekst6);
}

let keuze4 = readlineSync.question('Wat wil je doen? 1.Blijf staan en confronteer de onzichtbare stem, 2.Ren weg en probeer te ontsnappen. ');
if(keuze4 == 1){
    console.log(tekst7);
}else if(keuze4 == 2){
    console.log(tekst8);
}

let keuze5 = readlineSync.question('Wat wil je doen? 1.Vraag de stem waarom hij rust nodig heeft, 2.Probeer weg te komen. ');
if(keuze5 == 1){
    console.log(tekst9);
}else if(keuze5 == 2){
    console.log(tekst10);
}

let keuze6 = readlineSync.question('Wat wil je doen? 1.Ga naar buiten en zoek het graf, 2.Probeer te ontsnappen uit het herenhuis. ');
if(keuze6 == 1){
    console.log(tekst11);
}else if (keuze == 2){
    console.log(tekst12);
    process.exit();
}

let keuze7 = readlineSync.question('Wat wil je doen? 1.Graaf het graf open om te zien wat er binnenin is, 2.Graaf het graf maar dan tegen je wil. ');
if(keuze7 == 1){
    console.log(tekst13);
}else if(keuze7 == 2){
    console.log(tekst14);
}

let keuze8 = readlineSync.question('Wat wil je doen? 1.Lees het dagboek om meer te weten te komen, 2.Bestudeer de foto. ');
if(keuze8 == 1){
    console.log(tekst15);
}else if(keuze8 == 2){
    console.log(tekst16);
}

let keuze9 = readlineSync.question('Wat wil je doen? 1.Keer terug naar het herenhuis om meer te ontdekken, 2.Neem de foto en keer terug naar de foyer. ');
if(keuze9 == 1){
    console.log(tekst17);
}else if(keuze9 == 2){
    console.log(tekst18);
}

let keuze10 = readlineSync.question('Wat wil je doen? 1.Ga op zoek naar de man om de waarheid te onthullen, 2.Probeer de geest met rust te laten en het herenhuis te verlaten. ');
if(keuze10 == 1){
    console.log(tekst19);
}else if(keuze10 == 2){
    console.log(tekst20);
}

let keuze11 = readlineSync.question('Wat wil je doen? 1.Confronteer de man met de waarheid en dwing hem om zijn daden op te biechten, 2.Confronteer de man aarzelend om zijn daden op te biechten. ');
if(keuze11 == 1){
    console.log(tekst21);
}else if(keuze11 == 2){
    console.log(tekst22);
}

let keuze12 = readlineSync.question('Wat wil je doen? 1.Help de man om zijn belofte na te komen en de geest te bevrijden, 2.Laat de man aan zijn lot over en vertrek uit het herenhuis. ');
if(keuze12 == 1){
    console.log(tekst23);
}else if(keuze12 == 2){
    console.log(tekst24);
}

let keuze13 = readlineSync.question('Wat wil je doen? 1.Voer het ritueel uit en help de geest rust te vinden.');
if(keuze13 == 1){
    console.log(tekst25);
}