// week of the year will be a number between 1 and 52,
//I need easter and Christmas Christmas or Advent 4? Probably advent 4.
//

const easterWeek = {
  2022: 15,
  2023: 14,
  2024: 13,
  2025: 16,
};
const newYear = {
  2022: 48,
  2021: 32,
  2020: 45,
};
const churchCalendarWeek = (weekOfYear, year) => {
  console.log();
  if (weekOfYear === easterWeek[year]) {
    return "It's Easter!";
  } else if (weekOfYear < easterWeek[year]) {
    return "It's not easter yet.";
  } else if (weekOfYear > easterWeek[year] && weekOfYear < newYear[year]) {
    return "It's been easter!";
  } else if (weekOfYear === newYear[year]) {
    return "Happy new year!";
  } else if (weekOfYear > newYear[year] && weekOfYear < 52) {
    return "Almost Christmas!";
  } else {
    return "something went wrong";
  }
};

console.log(churchCalendarWeek(49, 2020));
