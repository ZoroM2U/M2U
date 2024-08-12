const User = require('../models/ User');
exports.getMotelInfo = (req, res) => {
    const motelInfo = {
      description: "Welcome to our motel! We offer a variety of services to make your stay comfortable.",
      checkInCheckOut: "Check-in time is 3:00 PM, and check-out time is 11:00 AM. Please contact the front desk for late check-out options.",
      poolHours: "The pool is open from 11:30 AM to 8:00 PM daily.",
      breakfastMenu: {
        Monday: "Scrambled eggs, bacon, toast",
        Tuesday: "Pancakes, sausage, fruit",
        // Add more days
      },
      gymInfo: "Our gym is open 24/7 for your convenience.",
      laundryService: "Laundry services are available from 7:00 AM to 9:00 PM.",
      diningInfo: "Dining is available at our in-house restaurant from 6:00 AM to 10:00 PM.",
      helpDesk: "For any assistance, contact the front desk at extension 091."
    };
    res.json(motelInfo);
  };
  