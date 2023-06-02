export enum Wastes {
  MULTI_MATERIAL = "multi-material",
  PLASTIC_AND_METALS = "plastic-and-metals",
  PLASTIC = "plastic",
  PAPER = "paper",
  PAPER_AND_CARDBOARD = "paper-and-cardboard",
  ORGANIC = "organic",
  GREEN = "green",
  DIAPERS = "diapers",
  GLASS = "glass",
  UNDIFFERENTIATED = "undifferentiated",
  DRY_RESIDUE = "dry-residue",
}

enum Months {
  JANUARY = 0,
  FEBRUARY,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPTEMBER,
  OCTOBER,
  NOVEMBER,
  DECEMBER,
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

const glassCalendar: any = {
  [Months.JANUARY]: [6, 20],
  [Months.FEBRUARY]: [3, 17],
  [Months.MARCH]: [3, 17, 31],
  [Months.APRIL]: [14, 28],
  [Months.MAY]: [12, 26],
  [Months.JUNE]: [9, 23],
  [Months.JULY]: [7, 21],
  [Months.AUGUST]: [4, 18],
  [Months.SEPTEMBER]: [1, 15, 29],
  [Months.OCTOBER]: [13, 27],
  [Months.NOVEMBER]: [10, 24],
  [Months.DECEMBER]: [8, 22],
};

const greenCalendar: any = {
  [Months.JANUARY]: [17],
  [Months.FEBRUARY]: [14, 28],
  [Months.MARCH]: [14, 28],
  [Months.APRIL]: [4, 11, 18, 25],
  [Months.MAY]: [2, 9, 16, 23, 30],
  [Months.JUNE]: [6, 13, 20, 27],
  [Months.JULY]: [11, 25],
  [Months.AUGUST]: [8, 22],
  [Months.SEPTEMBER]: [5, 19, 26],
  [Months.OCTOBER]: [3, 17, 24],
  [Months.NOVEMBER]: [7, 21, 28],
  [Months.DECEMBER]: [19],
};

export function getWaste(date: Date = new Date()): any {
  const day = date.getDay();

  const weekCalendar:any = {
    [Days.MONDAY]: [Wastes.DRY_RESIDUE, Wastes.ORGANIC],
    [Days.TUESDAY]: [Wastes.PLASTIC_AND_METALS, Wastes.GLASS],
    [Days.WEDNESDAY]: [Wastes.DRY_RESIDUE, Wastes.ORGANIC, Wastes.PAPER_AND_CARDBOARD],
    [Days.THURSDAY]: [],
    [Days.FRIDAY]: [Wastes.PAPER_AND_CARDBOARD, Wastes.PLASTIC_AND_METALS, Wastes.GLASS],
    [Days.SATURDAY]: [Wastes.DRY_RESIDUE, Wastes.ORGANIC],
    [Days.SUNDAY]: []
  }

  return weekCalendar[day];
}

export function getColorIcon(waste: string) {
  return {
    [Wastes.MULTI_MATERIAL]: "#ffd623",
    [Wastes.ORGANIC]: "#e09524",
    [Wastes.DIAPERS]: "#e47dbd",
    [Wastes.UNDIFFERENTIATED]: "#494b4e",
    [Wastes.PAPER]: "#000",
    [Wastes.GLASS]: "#5dd648",
    [Wastes.GREEN]: "#00c850",
  }[waste];
}

export function getWasteDescription(waste: string) {
  return {
    [Wastes.MULTI_MATERIAL]: {
      in: "SOLO imballaggi in plastica, in polistirolo, in latta e tetrapack",
      out: "Tutti gli oggetti che non sono imballaggi, oggetti in plastica e plastica compostabile",
    },
    [Wastes.ORGANIC]: {
      in: "Avanzi di cucina, shopper in plastica compostabile, fondi di caffè, filtri di tè",
      out: "Salviette umidificate, mozziconi di sigarette",
    },
    [Wastes.DIAPERS]: {
      in: "SOLO pannolini",
      out: "",
    },
    [Wastes.UNDIFFERENTIATED]: {
      in: "assorbenti, calze di nylon, stracci non riciclabili, mozziconi di sigarette, polveri e sacchetto dell’aspirapolvere, cassette audio, DVD, rasoi, spazzole, carta plastificata e da forno, cerotti, gomme da masticare, scontrini termici",
      out: "Tutti i materiali separabili e riciclabili (vetro, carta, cartone e cartoncino, plastica, acciaio e alluminio, organico), tessili, piccoli e grandi RAEE (Rifiuti da Apparecchiature Elettriche ed Elettroniche), ingombranti, farmaci, pile e accumulatori, olio vegetale esausto, legno",
    },
    [Wastes.PAPER]: {
      in: "giornali, riviste, libri, quaderni, moduli continui, scatole di prodotti alimentari e imballaggi in cartone (piegati e - schiacciati) poliaccoppiati (Tetra pak®, brik del latte e del succo di frutta), senza parti in plastica e residui",
      out: "carta con residui di colla, contenitori unti (es. cartone della pizza se sporco), carta accoppiata, carta chimica (es. fax, scontrini), carta autocopiante, bicchieri e piatti di carta",
    },
    [Wastes.GLASS]: {
      in: "Bottiglie, vasetti, fiaschi, barattoli",
      out: "Ceramica, porcellana, cristallo, lampadine e neon, specchi, lastre di vetro, damigiane, pirofile in pirex, tappi",
    },
    [Wastes.GREEN]: {
      in: "rami e foglie, erba, vari residui vegetali",
      out: "ceramica, calcinacci e materiale edilizio, sassi",
    },
  }[waste];
}

export function getWasteName(waste: string) {
  return {
    [Wastes.MULTI_MATERIAL]: "Multimateriale",
    [Wastes.ORGANIC]: "Organico",
    [Wastes.DIAPERS]: "Pannolini",
    [Wastes.UNDIFFERENTIATED]: "Indifferenziata",
    [Wastes.PAPER]: "Carta",
    [Wastes.GLASS]: "Vetro",
    [Wastes.GREEN]: "Verde",
  }[waste];
}

function checkCalendar(date: Date, calendar: any) {
  const month = date.getMonth();
  const dayOfMonth = date.getDate();
  const daysInThisMonth = calendar[month];
  return daysInThisMonth.includes(dayOfMonth);
}
