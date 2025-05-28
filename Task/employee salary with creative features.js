// Enhanced Employee Salary Management System with Creative Features

class Employee {
    constructor(id, name, position, baseSalary) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.baseSalary = baseSalary;
        this.benefits = [];
        this.performanceHistory = [];
        this.creativityScore = 0;
        this.specialTalents = [];
    }

    // Innovative salary calculation method
    calculateTotalSalary() {
        // Base salary + benefits + creativity bonus
        const benefitsTotal = this.benefits.reduce((sum, benefit) => sum + benefit.amount, 0);
        const creativityBonus = this.calculateCreativityBonus();
        return this.baseSalary + benefitsTotal + creativityBonus;
    }

    // Add a special talent to the employee
    addSpecialTalent(talent) {
        this.specialTalents.push({
            name: talent.name,
            description: talent.description,
            potentialImpact: talent.potentialImpact
        });
    }

    // Track performance and creativity
    addPerformanceRecord(record) {
        this.performanceHistory.push({
            date: new Date(),
            project: record.project,
            rating: record.rating,
            creativity: record.creativity
        });

        // Update creativity score
        this.updateCreativityScore(record.creativity);
    }

    // Calculate creativity bonus
    calculateCreativityBonus() {
        // More creative employees get higher bonuses
        return this.creativityScore * 50;
    }

    // Update creativity score based on performance
    updateCreativityScore(creativityRating) {
        this.creativityScore += creativityRating;
    }

    // Generate a comprehensive employee profile
    getEnhancedEmployeeProfile() {
        return {
            basicInfo: {
                id: this.id,
                name: this.name,
                position: this.position
            },
            compensation: {
                baseSalary: this.baseSalary,
                totalSalary: this.calculateTotalSalary(),
                benefits: this.benefits
            },
            creativity: {
                creativityScore: this.creativityScore,
                specialTalents: this.specialTalents
            },
            performanceHistory: this.performanceHistory
        };
    }

    // Recommend career growth opportunities
    getCareerGrowthRecommendations() {
        const recommendations = [];

        // Analyze special talents and performance
        this.specialTalents.forEach(talent => {
            recommendations.push({
                type: 'Talent Development',
                suggestion: `Explore advanced training in ${talent.name}`,
                potentialImpact: talent.potentialImpact
            });
        });

        // Check for consistent high creativity
        if (this.creativityScore > 100) {
            recommendations.push({
                type: 'Innovation Track',
                suggestion: 'Consider moving to an innovation-focused role',
                rationale: 'High creativity potential'
            });
        }

        return recommendations;
    }
}

// Example Usage
const innovativeEmployee = new Employee(1, 'Alice Dreamweaver', 'Creative Strategist', 75000);

// Add special talents
innovativeEmployee.addSpecialTalent({
    name: 'Design Thinking',
    description: 'Exceptional ability to solve complex problems creatively',
    potentialImpact: 'High'
});

// Track performance
innovativeEmployee.addPerformanceRecord({
    project: 'Radical Product Redesign',
    rating: 9.5,
    creativity: 9
});

// Get enhanced profile
const employeeProfile = innovativeEmployee.getEnhancedEmployeeProfile();
console.log(employeeProfile);

// Get career growth recommendations
const growthPaths = innovativeEmployee.getCareerGrowthRecommendations();
console.log(growthPaths);

export default Employee;