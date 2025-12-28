const fs = require("fs");

function loadLocalQuestions() {
  const file = fs.readFileSync("app/[locale]/assessment/test/page.tsx", "utf8");
  const match = file.match(/const QUESTIONS: Question\[] = (\[[\s\S]*?\]);/);
  if (!match) throw new Error("QUESTIONS array not found");
  // eslint-disable-next-line no-eval
  return eval(match[1]);
}

function loadRefQuestions() {
  const json = fs.readFileSync(
    "D:/work/alex_file/alex294/questions-zh-slim.json",
    "utf8",
  );
  return JSON.parse(json);
}

function score(questions, answers) {
  const MAX = 4;
  let total = 0;
  const dims = {};

  questions.forEach((q, idx) => {
    const ansIndex = answers[idx];
    const opt = q.options[ansIndex];
    const s = opt.score;
    total += s;
    const dim = q.dimension;
    if (!dims[dim]) dims[dim] = { score: 0, count: 0 };
    dims[dim].score += s;
    dims[dim].count += 1;
  });

  const maxTotal = questions.length * MAX;
  const overall = Math.round((total / maxTotal) * 100);
  const perDim = {};
  for (const [k, v] of Object.entries(dims)) {
    const avg = v.count ? v.score / v.count : 0;
    perDim[k] = Math.round((avg / MAX) * 100);
  }
  return { overall, perDim, total };
}

const localQ = loadLocalQuestions();
const refQ = loadRefQuestions();

if (localQ.length !== refQ.length) {
  console.log("length mismatch", localQ.length, refQ.length);
}

// pattern: all choose last option (index 3)
const answersAllLast = Array(localQ.length).fill(3);
const localAllLast = score(localQ, answersAllLast);
const refAllLast = score(refQ, answersAllLast);

// pattern: only first question answered with last option, rest choose index 0
const answersFirstLast = Array(localQ.length).fill(0);
answersFirstLast[0] = 3;
const localFirstLast = score(localQ, answersFirstLast);
const refFirstLast = score(refQ, answersFirstLast);

console.log("All last options:");
console.log(" local:", localAllLast);
console.log(" ref  :", refAllLast);

console.log("\nFirst last option, others first:");
console.log(" local:", localFirstLast);
console.log(" ref  :", refFirstLast);

