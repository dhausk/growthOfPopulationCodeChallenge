function nbYear(p0, percent, aug, p) {
  let pop = p0;
  let year = 0;
  while (pop < p) {
    pop = pop + (pop * percent / 100) + aug;
    year++;
  }
  return year;
}