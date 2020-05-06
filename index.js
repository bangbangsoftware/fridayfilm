const getPicked = (crew, today = new Date()) => {
  crew.forEach((member, index) => console.log(index + ". " + member));

  const year = new Array(52);
  for (let x = 0; x < 53; x++) {
    const crewNo = x % crew.length;
    year[x] = crew[crewNo];
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

  const weekNo = getWeekNumber(today);
  const picked = "" + year[weekNo];

  const lastNo = weekNo == 0 ? 53 : weekNo - 1;
  const last = "" + year[lastNo];

  const nextNo = weekNo == 53 ? 0 : weekNo + 1;
  const next = "" + year[nextNo];
  return { last, picked, next, weekNo };
};

const update = (id, text) => {
  const element = document.getElementById(id);
  element.innerText = text;
};

const updates = (idTexts) =>
  idTexts.forEach((d) => {
    const key = Object.keys(d)[0];
    update(key, d[key]);
  });

const today = new Date();
const { last, picked, next, weekNo } = getPicked(
  ["Paxo", "Claire", "Karl", "Mick"],
  today
);

const date = new Intl.DateTimeFormat("en-GB").format(today);
const week = "(Week " + weekNo + ")";
updates([{ picked }, { next }, { last }, { date }, { week }]);
