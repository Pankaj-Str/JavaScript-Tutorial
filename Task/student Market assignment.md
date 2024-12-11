##Assignment: Advanced Student Marksheet Application

Objective

Develop an advanced Student Marksheet Application using HTML, CSS, and JavaScript with extended features for data management and interactivity.

Problem Statement

Design a feature-rich application that allows users to:
	1.	Input student details (Name, Roll Number, and Marks in three subjects).
	2.	Perform advanced calculations:
	•	Total Marks
	•	Percentage
	•	Grade (based on a customizable grading scale).
	3.	Manage data through dynamic functionalities:
	•	Add, edit, and delete student records.
	•	Sort student records by Name, Roll Number, or Percentage.
	•	Filter records based on grades or a specific percentage range.

Functional Requirements

Core Features
	1.	Input Fields:
	•	Student Name
	•	Roll Number
	•	Marks in three subjects (e.g., Math, Science, and English).
	2.	Dynamic Calculations:
	•	Total Marks: Sum of marks in the three subjects.
	•	Percentage: (Total Marks / Maximum Marks) * 100.
	•	Grade:
	•	Implement a customizable grading system (e.g., A+, A, B, C, Fail).
	•	Allow users to adjust grade thresholds (e.g., 90%+ = A+).
	3.	Data Management:
	•	Add new records dynamically to a table.
	•	Edit existing records (e.g., update marks or student details).
	•	Delete specific records.
	4.	Table Interactivity:
	•	Sort records dynamically based on:
	•	Student Name (Alphabetically)
	•	Roll Number
	•	Percentage (Highest to Lowest).
	•	Filter records by:
	•	Grade (e.g., Show only A+ students).
	•	Percentage range (e.g., 70%-90%).

Advanced Features
	1.	Search Functionality:
	•	Enable users to search for specific students by Name or Roll Number.
	2.	Data Persistence:
	•	Save the student data in Local Storage so it persists across browser sessions.
	3.	Bulk Upload:
	•	Allow users to upload student data in bulk using a CSV file.
	•	Validate and parse the data to add it to the table dynamically.
	4.	Export Functionality:
	•	Provide an option to export the student records as a CSV file.
	5.	Responsive Design:
	•	Ensure the application is fully responsive and works seamlessly across different screen sizes.

Technical Requirements

HTML
	•	Create a structured form for student input.
	•	Design a table to display the results with sortable and filterable columns.

CSS
	•	Use advanced CSS features for a polished UI:
	•	Hover effects for table rows.
	•	Responsive layout with media queries.
	•	Styled buttons and modals for editing records.

JavaScript
	•	Use JavaScript to:
	•	Perform calculations (Total, Percentage, Grade).
	•	Manage data (Add, Edit, Delete, Sort, Filter).
	•	Implement Local Storage for data persistence.
	•	Handle file uploads and exports.

Assignment Deliverables
	1.	A fully functional Student Marksheet Application with:
	•	Add, edit, delete, sort, and filter functionalities.
	•	Local Storage implementation.
	•	CSV upload and export features.
	2.	Code Structure:
	•	Organize the code into separate files:
	•	index.html: For the structure.
	•	styles.css: For styling.
	•	script.js: For JavaScript logic.
	3.	Code Documentation:
	•	Include comments in your code to explain the logic and functionality.

Grading Criteria

Task	Marks
Proper HTML structure	10
Advanced CSS styling	15
JavaScript for dynamic calculations	15
Add, Edit, Delete functionality	20
Sort and Filter functionalities	20
Local Storage for data persistence	10
File Upload and Export	10

Example Scenarios
	1.	Scenario 1:
	•	Add a student named “John Doe” with Roll Number “101” and marks: Math = 85, Science = 78, English = 92.
	•	The application calculates Total Marks = 255, Percentage = 85%, Grade = A.
	2.	Scenario 2:
	•	Edit John Doe’s Science marks to 88.
	•	Total Marks and Percentage are recalculated dynamically.
	3.	Scenario 3:
	•	Filter the table to display only students with a grade of “A+”.
	4.	Scenario 4:
	•	Upload a CSV file with student data.
	•	Validate the data, calculate results, and display them in the table.
	5.	Scenario 5:
	•	Export the current table records as a CSV file.

Advanced Challenges (Optional)
	1.	Add a Graphical Representation:
	•	Use a JavaScript chart library (e.g., Chart.js) to display a bar chart showing the distribution of grades.
	2.	Add Authentication:
	•	Implement a basic login system to secure the application.
	3.	Add Dark Mode:
	•	Provide a toggle option for dark mode.