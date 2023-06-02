import moment from 'moment';
import 'moment/locale/it'; 

moment.locale('it');

export enum Wastes {
  PLASTIC_AND_METALS = "plastic-and-metals",
  PAPER_AND_CARDBOARD = "paper-and-cardboard",
  ORGANIC = "organic",
  GREEN = "green",
  GLASS = "glass",
  DRY_RESIDUE = "dry-residue",
}

enum Days {
  MONDAY = 1,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

const firstDayOfGlass = moment('2023-01-20') 
const firstDayOfPlasticAndMetals =  moment('2023-01-02')
const firstDayOfDryResidue = moment('2023-01-10')
const firstDayOfPaperAndCardboard = moment('2023-01-12')

export function checkIfDayOfGlass(date: Date){
  return !((moment(date).dayOfYear() - firstDayOfGlass.dayOfYear())%28)
}

export function checkIfDayOfPlasticAndMetals(date: Date){
  return firstDayOfPlasticAndMetals.dayOfYear()%2 === moment(date).dayOfYear()%2
}

export function checkIfDayOfDryResidue(date: Date){
  return firstDayOfDryResidue.dayOfYear()%2 === moment(date).dayOfYear()%2
}

export function checkIfDayOfPaperAndCardboard(date: Date){
  return firstDayOfPaperAndCardboard.dayOfYear()%2 === moment(date).dayOfYear()%2
}

export function getWaste(date: Date = new Date()): any {
  const day = date.getDay();

  const weekCalendar:any = {
    [Days.MONDAY]: checkIfDayOfPlasticAndMetals(date) ? [Wastes.PLASTIC_AND_METALS] : [],
    [Days.TUESDAY]: checkIfDayOfDryResidue(date) ? [Wastes.DRY_RESIDUE] : [],
    [Days.WEDNESDAY]: [Wastes.ORGANIC],
    [Days.THURSDAY]: checkIfDayOfPaperAndCardboard(date) ? [Wastes.PAPER_AND_CARDBOARD] : [],
    [Days.FRIDAY]: checkIfDayOfGlass(date) ? [Wastes.GLASS] : [],
    [Days.SATURDAY]: [Wastes.ORGANIC],
    [Days.SUNDAY]: []
  }

  return weekCalendar[day];
}

export function getColorIcon(waste: string) {
  return {
    [Wastes.PLASTIC_AND_METALS]: "#00a1e7",
    [Wastes.PAPER_AND_CARDBOARD]: "#ffc300",
    [Wastes.ORGANIC]: "#975000",
    [Wastes.GREEN]: "green",
    [Wastes.GLASS]: "#00a1e7",
    [Wastes.DRY_RESIDUE]: "#767265",
  }[waste];
}

export function getWasteDescription(waste: string) {
  return {
    [Wastes.PLASTIC_AND_METALS]:  {
      in: "Bicchieri e piatti di plastica monouso, privi di evidenti residui di cibo, Bombolette spray vuote di prodotti per l’igiene della casa e personale, Borsette in plastica se pulite, Bottiglie d’acqua, bibite, latte, ecc., Buste e scatole in plastica per maglie, camicie o altri capi, Carta stagnola, Confezioni per alimenti, Confezioni sagomate in plastica (senza il cartoncino), Confezioni sagomate per alimenti in porzioni monouso, Contenitori per salviette umidificate, Contenitori in acciaio, latta, banda stagnata o altri metalli (es. scatola del tonno o dei pelati), Contenitori in plastica per creme o altri cosmetici, Coperchi in plastica di barattoli e contenitori vari, Copridamigiane in plastica, Film e pellicole per imballaggio, Flaconi di candeggina o di altre sostanze pericolose debitamente svuotati e risciacquati, Flaconi di detersivi, saponi, shampoo e bagnoschiuma, Flaconi/dispensatori di maionese e salse, Fusti, fustini e secchielli in acciaio vuoti e senza residui di sostanze pericolose, Grucce appendiabiti in plastica, Imballaggi per beni durevoli (polistirolo, con le bolle d’aria, plastica espansa, chips in polistirolo), Lattine in alluminio (AL), Reggette per legatura pacchi, Retine per frutta e verdura (es. per limoni, arance, cipolle, ecc.), Tappi e coperchi di metallo, Vaschette in alluminio, Vaschette in plastica o polistirolo per carne, pesce, verdure o altri alimenti, Vaschette in plastica utilizzate nei banchi di gastronomia, Vaschette/barattoli per gelati, vasetti di yogurt, Vasi per piante da vivaisti",
      out: "Arredi e giochi da giardino di plastica, Bombolette spray contrassegnate da pittogrammi di pericolo, Bottiglie contenenti liquidi, Contenitori contrassegnati da pittogrammi di pericolo di provenienza non domestica, Contenitori e stoviglie in plastica rigida, Contenitori per colle e silicone, Contenitori per soluzioni ospedaliere, Giocattoli di plastica o gomma, Manufatti per l’edilizia e l’idraulica come tubi, fili elettrici, materiale isolante, ecc., Oggetti gonfiabili: piscine, salvagenti, braccioli, ecc., Oggetti in acciaio di piccole dimensioni (posate, piccole pentole, pinze, chiavi inglesi, chiodi, barre, tubi e profili massimo 3 mm), Oggetti in metallo di grandi dimensioni (stendibiancheria, biciclette, scale, ecc.), Oggetti in ottone, Posate di plastica monouso, Reti da cantiere, Secchi, bacinelle, Soprammobili e casalinghi in plastica o gomma, Sottovasi, Teli di nylon usati per imbiancare, Teli di nylon, plastica, gomma e ombreggianti, Teli e reti per pacciamatura, Tubi e canne per l’irrigazione",
    },
    [Wastes.PAPER_AND_CARDBOARD]:  {
      in: "Bicchieri e piatti di carta, anche compostabili, privi di residui di cibo, Cartoni della pizza privi di evidenti residui di cibo, Cartoni per bevande (per latte, succhi, vino, ecc.) preferibilmente sciacquati, schiacciati e senza tappo, Fogli e fotocopie, Giornali e riviste, Imballaggi di carta per alimenti senza residui di cibo, Imballaggi ed altre confezioni in cartone, Quaderni e libri, Scatole, Scatole in cartoncino dei farmaci",
      out: "Carta e cartone eccessivamente sporchi, Carta carbone, carta chimica (scontrini) e carta vetrata, Carta da forno, Carta fotografica, Lastre ospedaliere",
    },
    [Wastes.ORGANIC]:  {
      in: "Alimenti avariati senza confezione, Avanzi di cibo e scarti di cucina, Bastoncino in legno di gelati e ghiaccioli, Bicchieri e piatti compostabili in carta o in altri materiali certificati ed etichettati UNI EN 13432 o UNI EN 14995 con residui di cibo; manufatti in altri materiali compostabili, diversi dalla carta, certificati ed etichettati UNI EN 13432 o UNI EN 14995 anche senza residui di cibo, Ceneri spente in modeste quantità, Cialde, capsule di caffè e filtri di tè solo se biodegradabili e compostabili, Fiori recisi, Fondi di caffè, Gusci d’uovo, Gusci di noci e frutta secca, Lettiere per animali solo se biodegradabili e compostabili, Pane vecchio, Posate, cannucce e cotton fioc in materiale compostabile certificati ed etichettati UNI EN 13432 o UNI EN 14995, Salviette e fazzoletti di carta usati, Stuzzicadenti",
      out: "Capsule di caffè, Conchiglie o gusci di molluschi, Mozziconi di sigarette, Ossi",
    },
    [Wastes.GREEN]:  {
      in: "rami e foglie, erba, vari residui vegetali",
      out: "ceramica, calcinacci e materiale edilizio, sassi",
    },
    [Wastes.GLASS]:  {
      in: "Barattoli e vasi senza coperchio, Bicchieri, Bottiglie senza il tappo, Contenitori",
      out: "Contenitori in vetro per soluzioni ospedaliere, Copridamigiane, Cristallo, Lampadine a basso consumo e a incandescenza, Lastre di vetro o vetri per finestre e parabrezza, Piatti e oggetti di ceramica, terracotta e porcellana, Pirex",
    },
    [Wastes.DRY_RESIDUE]:  {
      in: "Cancelleria per la scuola: penne, pennarelli, cartelline in plastica, nastro adesivo, Capelli, Capsule di caffè, Carta oleata, plastificata, da forno, Cartoni della pizza sporchi e unti, Cartucce per caraffe filtranti e resine per addolcitori, Cd, musicassette, videocassette, floppy disk e rispettive custodie, Conchiglie o gusci di molluschi, Confezioni in poliaccoppiati (esclusi cartoni per bevande), Contenitori e manufatti in silicone (es. stampini da forno), Contenitori e stoviglie di plastica rigida, Contenitori per soluzioni ospedaliere, Creme e altri cosmetici scaduti, Fotografie e lastre radiografiche di provenienza domestica, Giocattoli, peluche, Guanti di gomma, Guanti monouso, Imballaggi in plastica con evidenti residui di contenuto, Lampadine a incandescenza, Lettiere per animali domestici, Manufatti per l’edilizia e l’idraulica come tubi, fili elettrici ecc., Mascherine, Mozziconi di sigarette, accendini scarichi, Oggetti gonfiabili, Ombrelli rotti, Ossi, Pannolini, assorbenti, Pirex, Posate monouso di plastica, Rasoi usa e getta, siringhe con cappuccio di protezione per uso domestico, Sacchetti e polveri dell’aspirapolvere, Scarpe e ciabatte rotte in plastica o gomma o cuoio, Sottovasi, Spazzolini, pettini e spazzole, Stracci sporchi, spugne usate, indumenti deteriorati, Terracotta, ceramica, porcellana, gesso",
      out: "",
    },
  }[waste];
}

export function getWasteName(waste: string) {
  return {
    [Wastes.PLASTIC_AND_METALS]: "Plastica e metalli",
    [Wastes.PAPER_AND_CARDBOARD]: "Carta e cartone",
    [Wastes.ORGANIC]: "Umido organico",
    [Wastes.GREEN]: "Verde",
    [Wastes.GLASS]: "Vetro",
    [Wastes.DRY_RESIDUE]: "Secco residuo",
  }[waste];
}

