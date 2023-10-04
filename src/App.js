import { useState } from 'react';
import Bill from './components/Bill';
import Rating from './components/Rating';

function App() {
  const [bill, setBill] = useState(0);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const handleOnClick = () => {
    setBill(0);
    setTip1(0);
    setTip2(0);
  };

  const handleOnSelect = (value, setter) => {
    setter(value);
  };
  const handleSetBill = (value) => {
    if (value > 0) setBill(value);
  };
  return (
    <div>
      <Bill handleSetBill={handleSetBill} bill={bill}>
        How much was the bill?
      </Bill>
      <Rating
        handleOnSelect={handleOnSelect}
        tip={tip1}
        setTip={setTip1}
      >
        How did you like the service?
      </Rating>
      <Rating
        handleOnSelect={handleOnSelect}
        tip={tip2}
        setTip={setTip2}
      >
        How did your friend like the service?
      </Rating>
      <h1>
        You pay ${(bill + bill * (tip1 + tip2)).toFixed(2)} (${bill} +
        ${(bill * (tip1 + tip2)).toFixed(2)})
      </h1>
      <button onClick={handleOnClick}>Reset</button>
    </div>
  );
}

export default App;
