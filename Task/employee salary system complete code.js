// Comprehensive Employee Salary Management System

// Utility Class for Validation and Helpers
class ValidationUtils {
    static validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static validateSalary(salary) {
        return salary > 0 && salary < 1000000;
    }

    static generateUniqueId() {
        return 'EMP-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    }
}

// Tax Calculation Utility
class TaxCalculator {
    static calculateTax(grossSalary) {
        // Progressive tax brackets (simplified)
        const taxBrackets = [
            { min: 0, max: 50000, rate: 0.10 },
            { min: 50001, max: 100000, rate: 0.20 },
            { min: 100001, max: 250000, rate: 0.30 },
            { min: 250001, max: Infinity, rate: 0.40 }
        ];

        let totalTax = 0;
        let remainingSalary = grossSalary;

        for (let bracket of taxBrackets) {
            if (remainingSalary > 0) {
                const taxableAmount = Math.min(remainingSalary, bracket.max - bracket.min);
                totalTax += taxableAmount * bracket.rate;
                remainingSalary -= taxableAmount;
            }
        }

        return {
            grossSalary,
            totalTax,
            netSalary: grossSalary - totalTax
        };
    }
}

// Benefit Management Class
class BenefitManager {
    constructor() {
        this.benefits = [];
    }

    addBenefit(benefit) {
        this.benefits.push(benefit);
    }

    removeBenefit(benefitName) {
        this.benefits = this.benefits.filter(b => b.name !== benefitName);
    }

    calculateTotalBenefitValue() {
        return this.benefits.reduce((total, benefit) => total + benefit.value, 0);
    }

    getBenefitsSummary() {
        return this.benefits.map(benefit => ({
            name: benefit.name,
            value: benefit.value,
            type: benefit.type
        }));
    }
}

// Performance Evaluation Class
class PerformanceEvaluator {
    constructor() {
        this.performanceRecords = [];
    }

    addPerformanceRecord(record) {
        this.performanceRecords.push({
            date: new Date(),
            ...record
        });
    }

    calculatePerformanceScore() {
        if (this.performanceRecords.length === 0) return 0;

        const totalScore = this.performanceRecords.reduce((sum, record) => sum + record.score, 0);
        return totalScore / this.performanceRecords.length;
    }

    getPerformanceTrend() {
        return this.performanceRecords.map(record => ({
            date: record.date,
            score: record.score,
            project: record.project
        }));
    }
}

// Employee Class
class Employee {
    constructor(details) {
        // Validate and set basic information
        if (!details.name) throw new Error('Name is required');
        if (!ValidationUtils.validateEmail(details.email)) throw new Error('Invalid email');

        this.id = details.id || ValidationUtils.generateUniqueId();
        this.name = details.name;
        this.email = details.email;
        this.department = details.department || 'Unassigned';
        this.position = details.position || 'Entry Level';
        this.hireDate = details.hireDate || new Date();
        this.baseSalary = details.baseSalary || 0;
        this.employmentType = details.employmentType || 'Full-time';

        // Composition for additional features
        this.benefitManager = new BenefitManager();
        this.performanceEvaluator = new PerformanceEvaluator();
    }

    // Salary and Compensation Methods
    calculateGrossSalary(includeBonus = true) {
        let grossSalary = this.baseSalary;
        
        // Performance-based bonus
        if (includeBonus) {
            const performanceScore = this.performanceEvaluator.calculatePerformanceScore();
            const bonusMultiplier = this.calculateBonusMultiplier(performanceScore);
            grossSalary += this.baseSalary * bonusMultiplier;
        }

        // Add benefits value
        grossSalary += this.benefitManager.calculateTotalBenefitValue();

        return grossSalary;
    }

    calculateBonusMultiplier(performanceScore) {
        if (performanceScore >= 9) return 0.20;  // Exceptional
        if (performanceScore >= 7) return 0.15;  // Excellent
        if (performanceScore >= 5) return 0.10;  // Good
        return 0.05;  // Needs improvement
    }

    calculateNetSalary() {
        const grossSalary = this.calculateGrossSalary();
        const taxCalculation = TaxCalculator.calculateTax(grossSalary);
        return taxCalculation;
    }

    // Benefit Management Delegation
    addBenefit(benefit) {
        this.benefitManager.addBenefit(benefit);
    }

    removeBenefit(benefitName) {
        this.benefitManager.removeBenefit(benefitName);
    }

    // Performance Management Delegation
    addPerformanceRecord(record) {
        this.performanceEvaluator.addPerformanceRecord(record);
    }

    // Comprehensive Employee Profile
    getEmployeeProfile() {
        const taxDetails = this.calculateNetSalary();
        
        return {
            personalInfo: {
                id: this.id,
                name: this.name,
                email: this.email,
                department: this.department,
                position: this.position,
                hireDate: this.hireDate,
                employmentType: this.employmentType
            },
            compensation: {
                baseSalary: this.baseSalary,
                grossSalary: taxDetails.grossSalary,
                netSalary: taxDetails.netSalary,
                taxDetails: {
                    totalTax: taxDetails.totalTax,
                    taxRate: (taxDetails.totalTax / taxDetails.grossSalary * 100).toFixed(2) + '%'
                }
            },
            benefits: this.benefitManager.getBenefitsSummary(),
            performance: {
                averageScore: this.performanceEvaluator.calculatePerformanceScore(),
                performanceTrend: this.performanceEvaluator.getPerformanceTrend()
            }
        };
    }
}

// Payroll Processing Class
class PayrollProcessor {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    processMonthlyPayroll() {
        return this.employees.map(employee => {
            const profile = employee.getEmployeeProfile();
            return {
                employeeId: employee.id,
                employeeName: employee.name,
                netSalary: profile.compensation.netSalary,
                paymentMethod: 'Direct Deposit'
            };
        });
    }

    generateDepartmentSalarySummary() {
        const departmentSummary = {};

        this.employees.forEach(employee => {
            const { department } = employee;
            if (!departmentSummary[department]) {
                departmentSummary[department] = {
                    totalEmployees: 0,
                    totalSalary: 0,
                    averageSalary: 0
                };
            }

            const profile = employee.getEmployeeProfile();
            departmentSummary[department].totalEmployees++;
            departmentSummary[department].totalSalary += profile.compensation.netSalary;
        });

        // Calculate average salaries
        Object.keys(departmentSummary).forEach(dept => {
            const summary = departmentSummary[dept];
            summary.averageSalary = summary.totalSalary / summary.totalEmployees;
        });

        return departmentSummary;
    }
}

// Example Usage and Demonstration
function demonstrateSalarySystem() {
    // Create Payroll Processor
    const payrollSystem = new PayrollProcessor();

    // Create Employees
    const john = new Employee({
        name: 'John Doe',
        email: 'john.doe@company.com',
        department: 'Engineering',
        position: 'Senior Developer',
        baseSalary: 85000,
        employmentType: 'Full-time'
    });

    // Add Benefits
    john.addBenefit({
        name: 'Health Insurance',
        value: 5000,
        type: 'Healthcare'
    });

    john.addBenefit({
        name: 'Retirement Plan',
        value: 4000,
        type: 'Pension'
    });

    // Add Performance Records
    john.addPerformanceRecord({
        project: 'Backend Redesign',
        score: 8.5,
        description: 'Exceptional project delivery'
    });

    // Add Employee to Payroll
    payrollSystem.addEmployee(john);

    // Generate Reports
    console.log('Employee Profile:', john.getEmployeeProfile());
    console.log('Monthly Payroll:', payrollSystem.processMonthlyPayroll());
    console.log('Department Salary Summary:', payrollSystem.generateDepartmentSalarySummary());
}

// Run the demonstration
demonstrateSalarySystem();

// Export classes for potential module usage
export {
    Employee,
    PayrollProcessor,
    TaxCalculator,
    ValidationUtils,
    BenefitManager,
    PerformanceEvaluator
};