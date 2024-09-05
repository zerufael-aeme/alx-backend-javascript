export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const studentsByLocation = listOfStudents.filter((student) => student.location === city);
  
  const updatedStudents = studentsByLocation.map((student) => {
    const gradeItem = newGrades.find((item) => item.studentId === student.id);
  
    return {
      ...student,
      grade: gradeUtem ? gradeItem.grade : 'N/A'
    };
  });
  
  return updatedStudents;
}
