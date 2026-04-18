const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

// Tax Calculator Logic
function calculateTax(subtotal, taxRate) {
    return subtotal + (subtotal * taxRate);
}

app.get('/', (req, res) => {
    res.send('<h1>Tax Calculator Application</h1><p>Send a POST request to /calculate to compute tax.</p>');
});

app.post('/calculate', (req, res) => {
    const subtotal = parseFloat(req.body.subtotal);
    const taxRate = parseFloat(req.body.taxRate);
    
    if (isNaN(subtotal) || isNaN(taxRate)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    
    const total = calculateTax(subtotal, taxRate);
    res.json({ subtotal, taxRate, total });
});

// Export calculateTax for unit testing
module.exports = { calculateTax, app };

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Tax Calculator app listening on port ${port}`);
    });
}
