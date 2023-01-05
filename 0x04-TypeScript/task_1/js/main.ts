interface Teacher extends Record<string, any> {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearofExperience?: number;
  location: string;
}
interface Directors extends Teacher {
  numberOfReports: number;
}
function printTeacher(firstName: string, lastName: string) {
  console.log(firstName[0] + ".", lastName);
}
interface printTeacherFunction {
  printTeacher: string;
}
interface StudentClass {
  firstName: string;
  lastName: string;
}
interface constructor {
  firstName: string;
  lastName: string;
}

class StudentClass {
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return "Currently working";
    console.log("Currently working");
  }

  displayName() {
    return this.firstName;
  }
}
