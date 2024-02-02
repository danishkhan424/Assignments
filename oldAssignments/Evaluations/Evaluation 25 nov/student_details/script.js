// You need to create a Constructor function which will create object for Student details of the following properties:

// name: It will store student name
// roll_no: Stores the roll number
// class: Stores the class
// section: Stores the section
// marks_of_5_subjects: It will store marks of science, maths, social science, english & hindi. You can store marks in this format:

function StudentDetails(name, rl, cl, sec, marks) {
  this.name = name;
  this.roll_no = rl;
  this.class = cl;
  this.section = sec;
  this.marks_of_5_subjects = {
    science: marks[0],
    maths: marks[1],
    social_science: marks[2],
    english: marks[3],
    hindi: marks[4],
  };
}

// printTop3Subjects: It is a function method. It will print top three subject names based on marks.

StudentDetails.prototype.printTop3Subjects = function () {
  let top3Subj = Object.keys(this.marks_of_5_subjects).sort(
    (a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]
  );

  console.log("Top 3 Subjects:");
  for (let i = 0; i < 3; i++) {
    console.log(`${top3Subj[i]} : ${this.marks_of_5_subjects[top3Subj[i]]}`);
  }
};

// printReportCard: It is also a function method. It will create and print a report card of a student. For example:
// +--------------------+
// |     REPORT CARD    |
// +--------------------+
// | Name     - Huzaifa |
// | Roll no. - 16      |
// | Class    - X       |
// | Section  - A       |
// | Science  - 73      |
// | S.Sc     - 79      |
// | Maths    - 75      |
// | English  - 80      |
// | Hindi    - 67      |
// | Prectage - 74.8 %  |
// +--------------------+

StudentDetails.prototype.printReportCard = function () {
    let total =
        (this.marks_of_5_subjects.science +
            this.marks_of_5_subjects.social_science +
            this.marks_of_5_subjects.maths +
            this.marks_of_5_subjects.english +
            this.marks_of_5_subjects.hindi);
    let percentage = (total / 500) * 100;
    percentage = percentage.toFixed(2)
  console.log(
    `+----------------------+
|     REPORT CARD      |
+----------------------+
| Name       - ${this.name}  |
| Roll no.   - ${this.roll_no}      |
| Class      - ${this.class}       |
| Section    - ${this.section}       |
| Science    - ${this.marks_of_5_subjects.science}      |
| S.Sc       - ${this.marks_of_5_subjects.social_science}      |
| Maths      - ${this.marks_of_5_subjects.maths}      |
| English    - ${this.marks_of_5_subjects.english}      |
| Hindi      - ${this.marks_of_5_subjects.hindi}      |
| Percentage - ${percentage} % |
+----------------------+`
  );
};

let Student01 = new StudentDetails("Danish", 12, "X", "B", [84, 68, 70, 75, 88]);
let Student02 = new StudentDetails(
  "Huzaifa",
  16,
  "X",
  "A",
  [73, 79, 75, 80, 67]
);



console.log(Student01);
Student01.printTop3Subjects();
Student01.printReportCard();
console.log(Student02);
Student02.printTop3Subjects();
Student02.printReportCard();
