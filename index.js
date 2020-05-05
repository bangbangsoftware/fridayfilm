const crew = [];
crew.push("Mick");
crew.push("Claire");
crew.push("Paxo");
crew.push("Karl");

crew.forEach((member, index) => console.log(index + ". " + member));

const year = [];

let crewNo = 1;

for (let x = 0; x < 53; x++) {
  year[x] = crew[crewNo];
  crewNo = crewNo + 1;
  if (crewNo + 1 > crew.length) {
    crewNo = 0;
  }
  console.log(x + ". " + year[x]);
}

const getWeekNumber = (date) => {
  const copiedDate = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  copiedDate.setUTCDate(
    copiedDate.getUTCDate() + 4 - (copiedDate.getUTCDay() || 7)
  );
  var yearStart = new Date(Date.UTC(copiedDate.getUTCFullYear(), 0, 1));
  var weekNo = Math.ceil(((copiedDate - yearStart) / 86400000 + 1) / 7);
  return weekNo;
};

const now = new Date();

const weekOfYear = getWeekNumber(now);
console.log("Todays week number is " + weekOfYear);
const statement = "" + year[weekOfYear];

console.log(statement);

const element = document.getElementById("who");
element.innerText = statement;

const dateElemenet = document.getElementById("date");
dateElemenet.innerText = new Intl.DateTimeFormat("en-GB").format(now);
