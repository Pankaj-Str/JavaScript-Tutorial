/**
 * Advanced Student Marksheet Management System
 * Comprehensive Implementation
 */
class StudentMarksheet {
    /**
     * Constructor to initialize student details
     * @param {string} name - Full name of the student
     * @param {number} studentId - Unique student identifier
     * @param {Object} subjects - Object containing subject names and marks
     */
    constructor(name, studentId, subjects) {
        this.validateStudentData(name, studentId, subjects);
        
        this.name = name;
        this.studentId = studentId;
        this.subjects = subjects;
    }

    /**
     * Comprehensive data validation method
     * @param {string} name 
     * @param {number} studentId 
     * @param {Object} subjects 
     * @throws {Error} For invalid input
     */
    validateStudentData(name, studentId, subjects) {
        // Name validation
        if (typeof name !== 'string' || name.trim().split(' ').length < 2) {
            throw new Error('Name must be at least two words');
        }

        // Student ID validation
        if (typeof studentId !== 'number' || 
            !Number.isInteger(studentId) || 
            studentId < 100000 || 
            studentId > 999999) {
            throw new Error('Student ID must be a 6-digit positive number');
        }

        // Subjects validation
        if (!subjects || typeof subjects !== 'object' || Object.keys(subjects).length < 5) {
            throw new Error('Minimum of 5 subjects required');
        }

        // Subject marks validation
        for (const [subject, mark] of Object.entries(subjects)) {
            if (typeof mark !== 'number' || mark < 0 || mark > 100) {
                throw new Error(`Invalid mark for ${subject}. Marks must be between 0-100`);
            }
        }
    }

    /**
     * Generate comprehensive performance report
     * @returns {Object} Performance analytics
     */
    generatePerformanceReport() {
        const subjects = this.subjects;
        const totalMarks = Object.values(subjects).reduce((sum, mark) => sum + mark, 0);
        const averageMarks = totalMarks / Object.keys(subjects).length;
        
        return {
            name: this.name,
            studentId: this.studentId,
            totalMarks: totalMarks,
            averageMarks: averageMarks.toFixed(2),
            highestMark: Math.max(...Object.values(subjects)),
            lowestMark: Math.min(...Object.values(subjects)),
            grade: this.calculateGrade(averageMarks),
            subjectPerformance: subjects
        };
    }

    /**
     * Calculate performance grade
     * @param {number} averageMarks 
     * @returns {string} Grade
     */
    calculateGrade(averageMarks) {
        if (averageMarks >= 90) return 'A+';
        if (averageMarks >= 80) return 'A';
        if (averageMarks >= 70) return 'B';
        if (averageMarks >= 60) return 'C';
        if (averageMarks >= 50) return 'D';
        return 'F';
    }

    /**
     * Calculate weighted average with subject weights
     * @param {Object} weightedSubjects - Subjects with weights
     * @returns {number} Weighted average score
     */
    calculateWeightedAverage(weightedSubjects = {}) {
        // Default weights if not provided
        const defaultWeights = {
            'Mathematics': 1.2,
            'Science': 1.1,
            'English': 1.0,
            'History': 1.0,
            'Computer Science': 1.1
        };

        const weights = { ...defaultWeights, ...weightedSubjects };
        let totalWeightedMarks = 0;
        let totalWeight = 0;

        for (const [subject, mark] of Object.entries(this.subjects)) {
            const weight = weights[subject] || 1.0;
            totalWeightedMarks += mark * weight;
            totalWeight += weight;
        }

        return (totalWeightedMarks / totalWeight).toFixed(2);
    }

    /**
     * Generate detailed performance report
     * @returns {string} Formatted report
     */
    generateDetailedReport() {
        const report = this.generatePerformanceReport();
        const motivationalMessage = this.getMotivationalMessage(report.grade);

        return `
===== Student Performance Report =====
Name: ${report.name}
Student ID: ${report.studentId}

Performance Metrics:
- Total Marks: ${report.totalMarks}
- Average Marks: ${report.averageMarks}
- Highest Mark: ${report.highestMark}
- Lowest Mark: ${report.lowestMark}
- Overall Grade: ${report.grade}

Subject Breakdown:
${Object.entries(this.subjects).map(([subject, mark]) => 
    `- ${subject}: ${mark}`
).join('\n')}

${motivationalMessage}
====================================
        `;
    }

    /**
     * Generate motivational message based on grade
     * @param {string} grade 
     * @returns {string} Motivational message
     */
    getMotivationalMessage(grade) {
        const messages = {
            'A+': 'Outstanding performance! Keep up the excellent work!',
            'A': 'Excellent results! You\'re on the path to success!',
            'B': 'Good job! There\'s room for improvement.',
            'C': 'You\'re making progress. Stay focused and keep studying!',
            'D': 'You can do better. Seek help and stay motivated!',
            'F': 'Don\'t be discouraged. Every setback is a chance to learn.'
        };
        return messages[grade] || 'Keep working hard!';
    }

    /**
     * Compare multiple students and rank them
     * @param {Array} students - Array of StudentMarksheet instances
     * @returns {Array} Ranked list of students
     */
    static compareStudents(students) {
        if (!Array.isArray(students) || students.length === 0) {
            throw new Error('Invalid input. Provide an array of students.');
        }

        // Sort students by total marks in descending order
        return students
            .map(student => ({
                name: student.name,
                studentId: student.studentId,
                totalMarks: Object.values(student.subjects).reduce((sum, mark) => sum + mark, 0)
            }))
            .sort((a, b) => b.totalMarks - a.totalMarks)
            .map((student, index) => ({
                ...student,
                rank: index + 1
            }));
    }

    /**
     * Export marksheet to JSON
     * @returns {string} JSON representation of marksheet
     */
    exportToJSON() {
        return JSON.stringify({
            name: this.name,
            studentId: this.studentId,
            subjects: this.subjects,
            performanceReport: this.generatePerformanceReport()
        }, null, 2);
    }
}

// Demonstration and Testing
function demonstrateMarksheetSystem() {
    try {
        // Create students
        const student1 = new StudentMarksheet("John Doe", 123456, {
            "Mathematics": 85,
            "Science": 92,
            "English": 78,
            "History": 88,
            "Computer Science": 95
        });

        const student2 = new StudentMarksheet("Jane Smith", 654321, {
            "Mathematics": 90,
            "Science": 88,
            "English": 85,
            "History": 92,
            "Computer Science": 87
        });

        // Generate and display reports
        console.log(student1.generateDetailedReport());
        console.log(student1.calculateWeightedAverage());

        // Compare students
        const rankedStudents = StudentMarksheet.compareStudents([student1, student2]);
        console.log("Student Rankings:", rankedStudents);

        // Export to JSON
        console.log("JSON Export:", student1.exportToJSON());

    } catch (error) {
        console.error("Marksheet System Error:", error.message);
    }
}

// Run the demonstration
demonstrateMarksheetSystem();

// Export the class for potential module usage
export default StudentMarksheet;