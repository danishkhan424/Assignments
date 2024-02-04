/*              ### **Problem-2 Grade Student Marks**

    - Given an object of student grades and their marks in the mentioned 
        below format, print the highest scored student for each grade 
                    along with the total */

let arr = [
  {
    grade: "V",
    students: [
      { name: "Nrupul", marks: [10, 20, 30] },
      { name: "Prateek", marks: [20, 30, 40] },
    ],
  },
  {
    grade: "VI",
    students: [
      { name: "Aman", marks: [10, 20, 30] },
      { name: "Albert", marks: [20, 30, 40] },
    ],
  },
  {
    grade: "VII",
    students: [
      { name: "Yogesh", marks: [10, 20, 30] },
      { name: "Sandhya", marks: [20, 30, 40] },
    ],
  },
];
for (let i = 0; i < arr.length; i++){
  let obj = arr[i];
  let student = obj.students;
  let max = -Infinity;
  let name = "";
  let grade = "";
  for (let j = 0; j < student.length; j++) {
    let marks = student[j].marks;
    let total = 0;
    for (let k = 0; k < marks.length; k++) {
      total += marks[k];
    }
    if (total > max) {
        max = total;
        name = student[j].name;
        grade = obj.grade;
    }
  }
  console.log(`${grade}-${name}-${max}`)
}
