// Employee Salary Management System

class Employee {
    constructor(id, name, position, baseSalary) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.baseSalary = baseSalary;
        this.benefits = [];
    }

    // Calculate total salary including benefits
    calculateTotalSalary() {
        const benefitsTotal = this.benefits.reduce((sum, benefit) => sum + benefit.amount, 0);
        return this.baseSalary + benefitsTotal;
    }

    // Add a benefit to the employee
    addBenefit(benefit) {
        this.benefits.push(benefit);
    }

    // Generate employee details
    getEmployeeDetails() {
        return {
            id: this.id,
            name: this.name,
            position: this.position,
            baseSalary: this.baseSalary,
            totalSalary: this.calculateTotalSalary(),
            benefits: this.benefits
        };
    }
}

class Benefit {
    constructor(name, amount) {</antArtifact>