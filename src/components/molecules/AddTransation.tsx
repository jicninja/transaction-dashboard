import { ChangeEventHandler, FormEvent, useState } from 'react';
import { TransactionDTO } from '../../types/transactions';
import { v4 as uuidv4 } from 'uuid';

type AddTransactionProps = {
  onAdd: (transaction: TransactionDTO) => void;
};

const AddTransaction = ({ onAdd }: AddTransactionProps) => {
  const [amount, setAmount] = useState(0);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    // TODO: move the ID and timeStamp generation to a service layer
    onAdd({
      id: uuidv4(),
      timeStamp: new Date(),
      amount,
    });

    setAmount(0);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        name={'amount'}
        type={'number'}
      ></input>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export { AddTransaction };
