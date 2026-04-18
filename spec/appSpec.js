const { calculateTax } = require('../src/app.js');

describe("Tax Calculator", function() {
    it("should return the correct total including 15% tax", function() {
        const subtotal = 100;
        const taxRate = 0.15;
        const total = calculateTax(subtotal, taxRate);
        
        expect(total).toBe(115);
    });

    it("should return the correct total for zero tax", function() {
        const subtotal = 50;
        const taxRate = 0.0;
        const total = calculateTax(subtotal, taxRate);
        
        expect(total).toBe(50);
    });
});
