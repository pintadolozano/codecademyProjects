// Write your function here:
function howOld(age, year) {
  const currentYear = 2020;
  const diffBetweenYearInputAndCurrent = Math.abs(year - currentYear);
  const yearsBeforeBirth = Math.abs((currentYear - age) - year)
  if (year > currentYear) {
    const calculateAge = age + diffBetweenYearInputAndCurrent;
    return `You will be ${calculateAge} in the year ${year}.`;
  }
  if (year < currentYear - age) {
    return `The year ${year} was ${yearsBeforeBirth} years before you were born.`;
  }
  if (year < currentYear) {
    const calculateAge = age - diffBetweenYearInputAndCurrent;
    return `You were ${calculateAge} in the year ${year}.`;
  }
};




// Once your function is written, write function calls to test your code!
howOld(22, 2000);