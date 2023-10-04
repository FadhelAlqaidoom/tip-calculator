import React from 'react';

const Rating = ({ children, handleOnSelect, tip, setTip }) => {
  return (
    <div>
      {children}{' '}
      <select
        value={tip}
        onChange={(e) =>
          handleOnSelect(Number(e.target.value), setTip)
        }
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="0.05">It was okay (5%)</option>
        <option value="0.1">It was good (10%)</option>
        <option value="0.2">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
};

export default Rating;
