
const User = require('../models/ User');
exports.getInvoice = (req, res) => {
    const invoice = {
      totalAmount: 200.00,
      items: [
        { description: "Room Charge", amount: 150.00 },
        { description: "Room Service", amount: 30.00 },
        { description: "Laundry", amount: 20.00 }
      ]
    };
    res.json(invoice);
  };
  