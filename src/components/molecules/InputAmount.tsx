import { useState } from 'react';
import type { TransactionDTO } from '../../types/transactions';

type InputAmountProps = {
  transactions: TransactionDTO[];
};

const InputAmount = ({ transactions = [] }: InputAmountProps) => {
  const [userAmount, setUserAmount] = useState(0);
  const [results, setResults] = useState([]);

  const handleCheck = () => {
    const res = transactions.reduce((acc, current, index) => {
      const addAmount = current.amount + acc[index].amount;

      if (addAmount > userAmount) {
        acc.push(acc[index].id);
        acc.push(current.id);
      }
      return acc;
    }, []);

    setResults(res);
  };

  return (
    <div>
      <input
        value={userAmount}
        onChange={(e) => setUserAmount(e.target.value)}
        type={'number'}
      />
      <button onClick={handleCheck}>Check Transaction</button>

      <div>result:</div>

      {results.map((val, index) => (
        <div key={index}>{val}</div>
      ))}
    </div>
  );
};

export { InputAmount };
