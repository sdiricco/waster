//Questo codice crea un nuovo oggetto Date chiamato date.
//Se l’ora attuale è compresa tra le 6:00 e le 24:00,
//date viene impostato sull’ora di domani. 
//Altrimenti, se l’ora è compresa tra le 0:00 e le 6:00, date viene impostato sull’ora di oggi.
export function getNextDay():Date{
  let date = new Date();
  if (date.getHours() >= 6 && date.getHours() < 24) {
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  } 
  return date;
}