import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Transaction from "./Transaction";

export default function TransactionList() {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}
