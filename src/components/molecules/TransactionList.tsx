import { TransactionItem } from '../atoms/TransactionItem';
import type { TransactionDTO } from '../../types/transactions';

type TransactionListProps = {
  transactions: TransactionDTO[];
};

const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <div>
      {transactions.map((transaction) => (
        <TransactionItem item={transaction} key={transaction.id} />
      ))}
    </div>
  );
};

export { TransactionList };
