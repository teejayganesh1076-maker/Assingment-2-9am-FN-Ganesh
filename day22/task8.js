let marks = {
  math: 90,
  english: 75,
  science: 40,
  tamil: 55,
};
for (let i in marks) {
  let score = marks[i];
  let grade = "";
  if (score >= 90) {
    grade = "A+";
  } else if (score >= 80) {
    grade = "A";
  } else if (score >= 60) {
    grade = "B+";
  } else if (score >= 50) {
    grade = "B";
  } else if (score >= 35) {
    grade = "c";
  } else {
    grade = "fail";
  }
  console.log(i + " :" + grade);
}