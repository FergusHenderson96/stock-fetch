import React, { Component, useState } from 'react';

const CashFlow = () => { 
    
  const [cashFlow, setCashFlow] = useState([])
  const [text, setText] = useState("")
  const [formDetails, setFormDetails] = useState([])
  const [undef, setUndef] = useState(false)

  const handleInput = (event) => {
    // getting the value of the input and assigning to the state
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    // stop default form behaviour which is to reload the page
    event.preventDefault();
    companyCashFlow()
    setFormDetails(formDetails, text)
    
  };

const companyCashFlow = () => {
  fetch(`https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${text}&apikey=ARU6VBZ6KLPWOGUD`)
.then((res) => res.json())
.then((data) => { 
  if (data.annualReports[0].fiscalDateEnding == undefined) {
    setUndef(true);
  }else{
    setUndef(false)
    let arr = cashFlow
    arr.push(data)
    setCashFlow(arr)
    setText("")
    console.log(data)
}
})
}



    return(
      <div>
            <p>Enter ticker symbol below to search Company Cash Flow</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                // value={text}
                onChange={handleInput}
              />
              <button type="submit">Search</button>
            </form>
              {undef ? (
              <div>
                No company found
              </div>
              ) : (
              <div>
                {cashFlow.map(((data, index) => {
                return (
                  <div key={index}>
                  <h1>Company Cash Flow</h1>
                  <p>Fiscal Date Ending: {data.annualReports[0].fiscalDateEnding}</p>
                  <p>Capital Expenditures: {data.annualReports[0].capitalExpenditures}</p>
                  <p>Cashflow From Financing: ${data.annualReports[0].cashflowFromFinancing}</p>
                  <p>Cashflow From Investment: ${data.annualReports[0].cashflowFromInvestment}</p>
                  <p>Change In Account Receivables: ${data.annualReports[0].changeInAccountReceivables}</p>
                  <p>Change In Cash: ${data.annualReports[0].changeInCash}</p>
                  <p>Change In Cash And Cash Equivalents: ${data.annualReports[0].changeInCashAndCashEquivalents}</p>
                  <p>Change In Exchange Rate: ${data.annualReports[0].changeInExchangeRate}</p>
                  <p>Change In Inventory: ${data.annualReports[0].changeInInventory}</p>
                  <p>Change In Liabilities: ${data.annualReports[0].changeInLiabilities}</p>
                  <p>Change In Net Income: ${data.annualReports[0].changeInNetIncome}</p>
                  <p>Change In Operating Activities: ${data.annualReports[0].changeInOperatingActivities}</p>
                  <p>Change In Receivables: ${data.annualReports[0].changeInReceivables}</p>
                  <p>Depreciation: ${data.annualReports[0].depreciation}</p>
                  <p>Dividend Payout: ${data.annualReports[0].dividendPayout}</p>
                  <p>Investments: ${data.annualReports[0].investments}</p>
                  <p>Net Borrowings: ${data.annualReports[0].netBorrowings}</p>
                  <p>Net Income: ${data.annualReports[0].netIncome}</p>
                  <p>Operating Cashflow: ${data.annualReports[0].operatingCashflow}</p>
                  <p>Other Cashflow From Financing: ${data.annualReports[0].otherCashflowFromFinancing}</p>
                  <p>Other Cashflow From Investment: ${data.annualReports[0].otherCashflowFromInvestment}</p>
                  <p>Other Operating Cashflow: ${data.annualReports[0].otherOperatingCashflow}</p>
                  <p>Reported Currency: {data.annualReports[0].reportedCurrency}</p>
                  <p>Stock Sale And Purchase: ${data.annualReports[0].stockSaleAndPurchase}</p>
                </div>
                )
              }))}
              </div>
            )}
            </div>
    ) 
  }    
  
   export default CashFlow; 