interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Zerufael",
    lastName: "Aemero",
    age: 26,
    location: "Addis Ababa",
}

const student2: Student = {
    firstName: "Test",
    lastName: "Test",
    age: 26,
    location: "New York",
}

let studentsList: Array<Student> = [student1, student2];

// Create the table structure
document.body.innerHTML = `
  <table border="1">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody id="studentTableBody">
    </tbody>
  </table>
`;

// Append each student's data to the table
const tableBody = document.getElementById('studentTableBody') as HTMLElement;

studentsList.forEach((student) => {
    let row = document.createElement('tr');

    // Create table cells for the student's first name and location
    let firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    let locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    // Append the cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    // Append the row to the table body
    tableBody.appendChild(row);
});
