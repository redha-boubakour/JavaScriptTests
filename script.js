/* var year = 2020;
var yearMark = year - 33;
var yearJohn = year - 28;

console.log(yearJohn);
console.log(yearMark); */

/* var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

var ageJohn = now - yearJohn;

var isFullAge = ageJohn >= fullAge;

console.log(`John is ${ageJohn} years old`)
console.log(`is he more then 18 years old ? The answer is ${isFullAge}`); */

/* var markBMI, markMass, markHeight;
var johnBMI, johnMass, johnHeight;

markMass = 80; 
markHeight = 1.80;
johnMass = 60; 
johnHeight = 1.85;

markBMI = markMass / (markHeight*markHeight) ;
johnBMI = johnMass / (johnHeight*johnHeight) ;

var markIsHigher = markBMI > johnBMI;

console.log(`Mark's BMI : ${markBMI}`);
console.log(`John's BMI : ${johnBMI}`);

console.log(`Is Mark's BMI hiegher than John's ? ${markIsHigher}.`); */

var johnTeamG1 = 89;
var johnTeamG2 = 120;
var johnTeamG3 = 103;

var mikeTeamG1 = 116;
var mikeTeamG2 = 94;
var mikeTeamG3 = 123;

var maryTeamG1 = 97;
var maryTeamG2 = 134;
var maryTeamG3 = 105;

avgJohnTeam = (johnTeamG1 + johnTeamG2 + johnTeamG3) / 3;
avgMikeTeam = (mikeTeamG1 + mikeTeamG2 + mikeTeamG3) / 3;
avgMaryTeam = (maryTeamG1 + maryTeamG2 + maryTeamG3) / 3;

if (avgJohnTeam > avgMikeTeam && avgJohnTeam > avgMaryTeam) {
  console.log(`The team of John won. with an average score of ${avgJohnTeam}.`);
} else if (avgMikeTeam > avgJohnTeam && avgMikeTeam > avgMaryTeam) {
  console.log(`The team of Mike won. with an average score of ${avgMikeTeam}.`);
} else if (avgMaryTeam > avgJohnTeam && avgMaryTeam > avgMikeTeam) {
  console.log(`The team of Mary won. with an average score of ${avgMaryTeam}.`);
} else {
  console.log(
    `there is a perfect draw. The two teams have the exact same average score : ${avgJohnTeam}.`
  );
}

console.log(avgJohnTeam);
console.log(avgMikeTeam);
console.log(avgMaryTeam);
