
export function getNextDay():Date{
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + 1);
  return nextDate
}