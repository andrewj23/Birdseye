import React from "react";

const Transaction = (props) => {
  // time={transactionObj.updated_at}
  // type={transactionObj.type}
  // amount={transactionObj.amount.amount}
  // token={transactionObj.amount.currency}
  // value={transactionObj.native_amount.amount}
  // title={transactionObj.details.title}
  return (
    <div>{props.title} {props.time}: {props.amount} of {props.token} worth ${props.value}</div>
  )
}


const TransactionFeed = (props) => {
  function getTimeAsNumberOfMinutes(time) {
    let timeParts = time.split(":");
    let timeInMinutes = (parseFloat(timeParts[0]) * 60) + parseFloat(timeParts[1])+parseFloat(timeParts[2])/60;
    return timeInMinutes;
  }

  function dateComparison(date1, date2) {
    const comp1 = {
      year: parseFloat(date1.slice(0,4)),
      month: parseFloat(date1.slice(5,7)),
      day: parseFloat(date1.slice(8,10)),
      time: getTimeAsNumberOfMinutes(date1.slice(11,19)),
    }
    const comp2 = {
      year: parseFloat(date2.slice(0,4)),
      month: parseFloat(date2.slice(5,7)),
      day: parseFloat(date2.slice(8,10)),
      time: getTimeAsNumberOfMinutes(date2.slice(11,19)),
    }
    if (comp1.year < comp2.year){
      return true
    }
    if (comp1.year > comp2.year){
      return false
    }
    if (comp1.month < comp2.month){
      return true
    }
    if (comp1.month > comp2.month){
      return false
    }
    if (comp1.day < comp2.day){
      return true
    }
    if (comp1.day > comp2.day){
      return false
    }
    return comp1.time < comp2.time;

  }

  const hasTransactions = props?.allTransactions.length !== 0;
  let allSortedTransactions = [...props.allTransactions];
  allSortedTransactions.sort((trans1, trans2) => (dateComparison(trans1.updated_at, trans2.updated_at)) ? -1 : 1 ).reverse()

  return hasTransactions ? (
    <div className={"transFeed-container"}>
  {allSortedTransactions.map((transactionObj) => (
    <Transaction
      time={transactionObj.updated_at}
      type={transactionObj.type}
      amount={transactionObj.amount.amount}
      token={transactionObj.amount.currency}
      value={transactionObj.native_amount.amount}
      title={transactionObj.details.title}
    />
  ))}
    </div>
  ) : (
    <div>No Transactions</div>
  )
}

export default TransactionFeed;