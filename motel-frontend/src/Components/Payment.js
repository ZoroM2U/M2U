import React, { useEffect, useState } from 'react';
import paymentService from '../Payment';

function Payment() {
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    paymentService.getInvoice().then(data => setInvoice(data));
  }, []);

  if (!invoice) return <div>Loading...</div>;

  return (
    <div>
      <h2>Payment</h2>
      <p>Total Amount: {invoice.totalAmount}</p>
      {/* Add more invoice details as needed */}
    </div>
  );
}

export default Payment;
