const getPicked = (crew, today = new Date()) => {
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
    const yearStart = new Date(Date.UTC(copiedDate.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil(((copiedDate - yearStart) / 86400000 + 1) / 7);
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
  idTexts.forEach((data) => {
    const key = Object.keys(data)[0];
    update(key, data[key]);
  });

const go = (...crew) => {
  const today = new Date();
  const { last, picked, next, weekNo } = getPicked(crew, today);
  const date = new Intl.DateTimeFormat("en-GB").format(today);
  const week = "(Week " + weekNo + ")";

  updates([{ picked }, { next }, { last }, { date }, { week }]);
};

go("Claire", "Karl", "Mick", "Paxo");
