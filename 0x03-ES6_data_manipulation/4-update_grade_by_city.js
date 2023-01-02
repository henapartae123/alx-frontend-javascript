export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location == city)
    .map((student) => {
      let grades = newGrades.find((grade) => grade.studentId == student.id);
      let grade = grades ? grades.grade : "N/A";
      return { ...student, grade };
    });
}
