JavaScript Project Assignment: Student Marksheet

Objective:

Create a Student Marksheet application using HTML, CSS, and JavaScript. The application should allow users to input student details, calculate total marks, percentage, and grade, and display the information in a tabular format.

Requirements:
	1.	HTML Form:
	•	Inputs for student details:
	•	Student Name
	•	Roll Number
	•	Marks in three subjects (e.g., Math, Science, English)
	•	A submit button to calculate and display results.
	2.	Table for Results:
	•	Display:
	•	Name
	•	Roll Number
	•	Marks for each subject
	•	Total Marks
	•	Percentage
	•	Grade
	3.	JavaScript Functionality:
	•	Calculate Total Marks, Percentage, and Grade:
	•	Grade rules:
	•	90% and above: A+
	•	80-89%: A
	•	70-79%: B
	•	60-69%: C
	•	Below 60%: Fail
	•	Validate inputs (e.g., no empty fields, marks should be numbers between 0 and 100).
	•	Update the table dynamically with the calculated results.
	4.	Styling (Optional):
	•	Use CSS to make the form and table visually appealing.

Expected Output:

A functional web page where users can enter student details, view their calculated results, and see a list of all students added so far.

Code Template:

HTML:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Marksheet</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Student Marksheet</h1>
  <form id="marksheetForm">
    <label for="name">Student Name:</label>
    <input type="text" id="name" required>
    
    <label for="roll">Roll Number:</label>
    <input type="text" id="roll" required>
    
    <label for="math">Math Marks:</label>
    <input type="number" id="math" min="0" max="100" required>
    
    <label for="science">Science Marks:</label>
    <input type="number" id="science" min="0" max="100" required>
    
    <label for="english">English Marks:</label>
    <input type="number" id="english" min="0" max="100" required>
    
    <button type="submit">Add to Marksheet</button>
  </form>

  <h2>Results</h2>
  <table id="resultsTable" border="1">
    <thead>
      <tr>
        <th>Name</th>
        <th>Roll Number</th>
        <th>Math</th>
        <th>Science</th>
        <th>English</th>
        <th>Total</th>
        <th>Percentage</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody>
      <!-- Results will be dynamically added here -->
    </tbody>
  </table>

  <script src="script.js"></script>
</body>
</html>

CSS:

body {
  font-family: Arial, sans-serif;
  margin: 20px;
  padding: 0;
  background-color: #f9f9f9;
}

h1, h2 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  gap: 10px;
}

label {
  font-weight: bold;
}

input {
  padding: 8px;
  font-size: 16px;
}

button {
  padding: 10px;
  font-size: 16px;
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  text-align: center;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
}

th {
  background-color: #007BFF;
  color: white;
}

JavaScript:

document.getElementById("marksheetForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const math = parseInt(document.getElementById("math").value);
  const science = parseInt(document.getElementById("science").value);
  const english = parseInt(document.getElementById("english").value);

  // Validate inputs
  if (isNaN(math) || isNaN(science) || isNaN(english) || math < 0 || science < 0 || english < 0) {
    alert("Please enter valid marks between 0 and 100.");
    return;
  }

  // Calculate total, percentage, and grade
  const total = math + science + english;
  const percentage = (total / 300) * 100;
  let grade = "";

  if (percentage >= 90) grade = "A+";
  else if (percentage >= 80) grade = "A";
  else if (percentage >= 70) grade = "B";
  else if (percentage >= 60) grade = "C";
  else grade = "Fail";

  // Add row to the table
  const table = document.getElementById("resultsTable").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  newRow.innerHTML = `
    <td>${name}</td>
    <td>${roll}</td>
    <td>${math}</td>
    <td>${science}</td>
    <td>${english}</td>
    <td>${total}</td>
    <td>${percentage.toFixed(2)}%</td>
    <td>${grade}</td>
  `;

  // Clear form inputs
  document.getElementById("marksheetForm").reset();
});

Enhancements (Optional):
	•	Add sorting functionality for the table.
	•	Allow deletion or editing of rows.
	•	Store results in local storage to persist data across page reloads.