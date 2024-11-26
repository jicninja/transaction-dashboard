import { TransactionDTO } from '../types/transactions';
import { MOCK_TRANSACTIONS } from '../MOCKS/data';

const getTransactions = async (): Promise<TransactionDTO[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_TRANSACTIONS);
    }, 100);
  });
};

export { getTransactions };
