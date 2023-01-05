interface Student {
  firstname: string;
  lastname: string;
  age: number;
  location: string;
}

const firststudent: Student = {
  firstname: "Hayes",
  lastname: "John",
  age: 12,
  location: "Spooner Street",
};

const secondstudent: Student = {
  firstname: "Lamar",
  lastname: "Johnson",
  age: 14,
  location: "24th Street",
};

const studentsList: Student[] = [firststudent, secondstudent];

var mytable = "<table>";
for (var student of studentsList) {
  mytable += "<tr>";
  mytable += "<td>" + student.firstname + "</td>";
  mytable += "<td>" + student.location + "</td>";
  mytable += "</tr>";
}
mytable += "</table>";
