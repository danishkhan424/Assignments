const students = [
    { name: "Alice", age: 20, marks: { math: 85, science: 90, english: 88 } },
    { name: "Bob", age: 21, marks: { math: 78, science: 85, english: 80 } },
    { name: "Charlie", age: 22, marks: { math: 92, science: 88, english: 94 } }
  ];
  const newStudent = {
    name: "David",
    age: 23,
    marks: {
      math: 88,
      science: 91,
      english: 86
    }
  };
  
  students.push(newStudent);

  let highestAvgStudent = null;
  let highestAvgMarks = -Infinity;
  
  for (let i = 0; i < students.length; i++) {
      const student = students[i];
      const avgMarks = (student.marks.math + student.marks.science + student.marks.english) / 3;
  
      if (avgMarks > highestAvgMarks) {
          highestAvgMarks = avgMarks;
          highestAvgStudent = student;
      }
      student.avgMarks = avgMarks
  }
  
  console.log("Student with the highest average marks:", highestAvgStudent);