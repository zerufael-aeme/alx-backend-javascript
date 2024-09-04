export default function getListStudentIds(listOfStudents) {
    const idArray = new Array();

    if (!Array.isArray(listOfStudents)) {
        return idArray;
    }

    idArray = listOfStudents.map(student => student.id);
}
