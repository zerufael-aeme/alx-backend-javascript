export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  let studentsByLocation = listOfStudents.filter(student => student.location === city);

  const updatedStudents = studentsByLocation.map(student => {
    const gradeItem = newGrades.find(item => item.studentId === student.id);

    student.grade = gradeItem ? gradeItem.grade : 'N/A';

    return student;
  });

  return updatedStudents;
}
