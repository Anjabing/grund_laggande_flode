//read json den call classifyStudents
$.getJSON('/json/student.json', classifyStudents);

function classifyStudents(data){
  let students = [];
  for(let obj of data){
    students.push(new Student(obj));
  }
  main(students);
}

function main(students){
  students[0].beginCourse('programmering');
  students[1].beginCourse('programmering');
  students[2].beginCourse('programmering');
  console.log(students);
  console.log(students[0].sayHi());
}
