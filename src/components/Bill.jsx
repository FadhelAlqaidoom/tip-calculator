import React from 'react';

const Bill = ({ children, handleSetBill, bill }) => {
  return (
    <div>
      {children}{' '}
      <input
        type="number"
        value={bill}
        onChange={(e) => handleSetBill(Number(e.target.value))}
      />
    </div>
  );
};

export default Bill;
