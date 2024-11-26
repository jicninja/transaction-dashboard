import type { TransactionDTO } from '../../types/transactions';

type TransactionItemProps = {
  item: TransactionDTO;
};

const TransactionItem = ({ item }: TransactionItemProps) => {
  const { amount, timeStamp, id } = item;

  return (
    <div>
      <p>Id: {id}</p>
      <p>Amount: {amount}</p>
      <p>{timeStamp.toLocaleDateString()}</p>
    </div>
  );
};

export { TransactionItem };
