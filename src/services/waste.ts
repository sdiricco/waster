function isDayOfGlass(date: Date = new Date()) {
  const month = date.getMonth();
  const day = date.getDay();
  const dayOfMonth = date.getDate();

  //verifico se è venerdì
  if (day === 4) {
    return false
  }

  switch (month) {
    //Gennaio
    case 0: {
      if (dayOfMonth === 7 || dayOfMonth === 21) {
        return true;
      }
      return false;
    }
    //Febbraio
    case 1: {
      if (dayOfMonth === 4 || dayOfMonth === 18) {
        return true;
      }
      return false;
    }
    //Marzo
    case 2: {
      if (dayOfMonth === 4 || dayOfMonth === 18) {
        return true;
      }
      return false;
    }
    //Aprile
    case 3: {
      if (dayOfMonth === 1 || dayOfMonth === 15 || dayOfMonth === 29) {
        return true;
      }
      return false;
    }
    //Maggio
    case 4: {
      if (dayOfMonth === 13 || dayOfMonth === 27) {
        return true;
      }
      return false;
    }
    //Giugno
    case 5: {
      if (dayOfMonth === 10 || dayOfMonth === 24) {
        return true;
      }
      return false;
    }
    //Luglio
    case 6: {
      if (dayOfMonth === 8 || dayOfMonth === 22) {
        return true;
      }
      return false;
    }
    //Agosto
    case 7: {
      if (dayOfMonth === 5 || dayOfMonth === 19) {
        return true;
      }
      return false;
    }
    //Settembre
    case 8: {
      if (dayOfMonth === 2 || dayOfMonth === 16 || dayOfMonth === 30) {
        return true;
      }
      return false;
    }
    //Ottobre
    case 9: {
      if (dayOfMonth === 14 || dayOfMonth === 28) {
        return true;
      }
      return false;
    }
    //Novembre
    case 10: {
      if (dayOfMonth === 11 || dayOfMonth === 25) {
        return true;
      }
      return false;
    }
    //Dicembre
    case 11: {
      if (dayOfMonth === 9 || dayOfMonth === 23) {
        return true;
      }
      return false;
    }


  }
}

export function getWaste(date: Date = new Date()): any {
  const day = date.getDay() -1;
  console.log('day', day);

  switch (day) {
    case 0: {
      return ['Multimateriale']
    }
    case 1: {
      return ['Organico']
    }
    case 2: {
      return ['Pannolini', 'Indifferenziato']
    }
    case 3: {
      return ['Carta']
    }
    case 4: {
      if (isDayOfGlass(date)) {
        return ['Vetro']
      }
      return ['Multimateriale']
    }
    case 5: {
      return ['Organico', 'Pannolini']
    }
    default: {
      return []
    }
  }
}

export function getWasteIcon(waste: string) {
  switch (waste) {
    case "Multimateriale": {
      return "fa-solid fa-bottle-water";
    }
    case "Carta": {
      return "fa-solid fa-newspaper";
    }
    case "Organico": {
      return "fa-solid fa-fish";
    }
    case "Pannolini": {
      return "fa-solid fa-baby";
    }
    case "Indifferenziato": {
      return "fa-solid fa-biohazard";
    }
    case "Vetro": {
      return "fa-solid fa-glasses";
    }
  }
}

export function  getColorIcon (waste: string) {
  switch (waste) {
    case "Multimateriale": {
      return "var(--ion-color-primary)";
    }
    case "Organico": {
      return "var(--ion-color-warning)";
    }
    case "Pannolini": {
      return "var(--ion-color-secondary-tint)";
    }
    case "Indifferenziato": {
      return "var(--ion-color-medium)";
    }
    case "Carta": {
      return "var(--ion-color-secondary-tint)";
    }
    case "Vetro": {
      return "var(--ion-color-dark)";
    }
  }
}