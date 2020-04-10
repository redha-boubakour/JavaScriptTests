/****************************************************************
var year = 2020;
var yearMark = year - 33;
var yearJohn = year - 28;

console.log(yearJohn);
console.log(yearMark);
****************************************************************/

/****************************************************************
var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

var ageJohn = now - yearJohn;

var isFullAge = ageJohn >= fullAge;

console.log(`John is ${ageJohn} years old`)
console.log(`is he more then 18 years old ? The answer is ${isFullAge}`);
****************************************************************/

/****************************************************************
var markBMI, markMass, markHeight;
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

console.log(`Is Mark's BMI hiegher than John's ? ${markIsHigher}.`); ****************************************************************/

/****************************************************************
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

console.log(avgJohnTeam, avgMikeTeam, avgMaryTeam);

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
****************************************************************/

/****************************************************************
var johnBills = [124, 48, 268];
var johnFinalBills = [];

function billPlusTipCalculator(bill) {
  if (bill < 50) {
    return johnFinalBills.push(bill + bill * (20 / 100));
  } else if (bill >= 50 && bill < 200) {
    return johnFinalBills.push(bill + bill * (15 / 100));
  } else {
    return johnFinalBills.push(bill + bill * (10 / 100));
  }
}

billPlusTipCalculator(johnBills[0]);
billPlusTipCalculator(johnBills[1]);
billPlusTipCalculator(johnBills[2]);

console.log(johnBills);
console.log(johnFinalBills);
****************************************************************/

/****************************************************************
var mark = {
  fullName: "Mark Smith",
  mass: 80,
  height: 1.8,
  calcBmi: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

var john = {
  fullName: "John Smith",
  mass: 60,
  height: 1.85,
  calcBmi: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(mark, john);

if (mark.calcBmi() > john.calcBmi()) {
  console.log(`Mark have a higher BMI. ${mark.bmi}`);
} else if (john.bmi > mark.bmi) {
  console.log(`John have a higher BMI. ${john.bmi}`);
} else {
  console.log("Their BMI is equal.");
}
****************************************************************/

var john = {
  bill: [124, 48, 268, 180, 42],
  tip: [],
  finalBill: [],
  tipCalc: function () {
    for (var i = 0; i < this.bill.length; i++) {
      if (this.bill[i] < 50) {
        tipF = this.bill[i] * 0.2;
      } else if (this.bill[i] >= 50 && this.bill[i] < 200) {
        tipF = this.bill[i] * 0.15;
      } else {
        tipF = this.bill[i] * 0.1;
      }
      this.tip.push(tipF);
    }
  },
  addAllCalc: function () {
    for (var i = 0; i < this.bill.length; i++) {
      billF = this.bill[i] + this.tip[i];
      this.finalBill.push(billF);
    }
  },
};

john.tipCalc();
john.addAllCalc();

console.log(john);

var mark = {
  bill: [77, 375, 110, 45],
  tip: [],
  finalBill: [],
  tipCalc: function () {
    for (var i = 0; i < this.bill.length; i++) {
      if (this.bill[i] < 100) {
        tipF = this.bill[i] * 0.2;
      } else if (this.bill[i] >= 100 && this.bill[i] < 300) {
        tipF = this.bill[i] * 0.1;
      } else {
        tipF = this.bill[i] * 0.25;
      }
      this.tip.push(tipF);
    }
  },
  addAllCalc: function () {
    for (var i = 0; i < this.bill.length; i++) {
      billF = this.bill[i] + this.tip[i];
      this.finalBill.push(billF);
    }
  },
};

mark.tipCalc();
mark.addAllCalc();

console.log(mark);

var avgTips = function (arr) {
  sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(avgTips(john.tip));
console.log(avgTips(mark.tip));

if (avgTips(john.tip) > avgTips(mark.tip)) {
  console.log(`The average tips of John is higher`);
} else if (avgTips(mark.tip) > avgTips(john.tip)) {
  console.log(`The average tips of Mark is higher`);
} else {
  console.log(`The average tips of John and Mark are equal`);
}
