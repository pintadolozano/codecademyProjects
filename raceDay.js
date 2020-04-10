let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const runnerAge = 17;
if (registeredEarly && runnerAge >= 18) {
  raceNumber += 1000;
}

if (runnerAge >= 18 && registeredEarly) {
  console.log(`You must run at 9:30 am. Your number is ${raceNumber}.`)
} else if (runnerAge >= 18 && !registeredEarly) {
  console.log(`You must run at 11:00 am. Your number is ${raceNumber}.`)
} else if (runnerAge < 18) {
  console.log(`You must run at 12:30 am. Your number is ${raceNumber}.`)
} else {
  console.log('Go to the registration desk.')
}