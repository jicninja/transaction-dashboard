import './App.css';
import { TransactionList } from './components/molecules/TransactionList';
import { AddTransaction } from './components/molecules/AddTransation';
import { InputAmount } from './components/molecules/InputAmount';
import { getTransactions } from './services/transatctions';
import type { TransactionDTO } from './types/transactions';
import { useState, useEffect } from 'react';

function App() {
  const [transactions, setTrasactions] = useState<TransactionDTO[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTransactions();

      setTrasactions(data);
    };

    fetchData();
  }, []);

  const handleAdd = (newTransaction: TransactionDTO) => {
    setTrasactions((state) => {
      const copy = Object.assign([], state);
      copy.push(newTransaction);

      return copy;
    });
  };

  return (
    <div className="App">
      <AddTransaction onAdd={handleAdd} />
      <InputAmount transactions={transactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
