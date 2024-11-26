import type { TransactionDTO } from '../types/transactions';

const MOCK_TRANSACTIONS: TransactionDTO[] = [
  {
    id: '1',
    timeStamp: new Date(1732648624282),
    amount: 1,
  },
  {
    id: '2',
    timeStamp: new Date(1732648624281),
    amount: 2,
  },
  {
    id: '3',
    timeStamp: new Date(1732648624283),
    amount: 3,
  },
];

export { MOCK_TRANSACTIONS };
