import React, { Component, useState } from 'react';

const IncomeStatement = () => { 

    const [incStat, setIncStat] = useState([])
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
        companyIncomeStatement()
        setFormDetails(formDetails, text)
        
      };

      const companyIncomeStatement = () => {
        fetch(`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${text}&apikey=ARU6VBZ6KLPWOGUD`)
      .then((res) => res.json())
      .then((data) => { 
        if (data.annualReports[0].fiscalDateEnding == undefined) {
            setUndef(true);
          }else{
            setUndef(false)
        let arr = incStat
          arr.push(data)
          setIncStat(arr)
          setText("")
      }
      
      })
    }

    return(
        <div>
              <p>Enter ticker symbol below to search Company Income Statement</p>
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
                    {incStat.map(((data, index) => {
                return (
                  <div key={index}>
                  <h1>Income Statement</h1>
                  <p>Fiscal Date Ending: {data.annualReports[0].fiscalDateEnding}</p>
                  <p>Total Revenue: ${data.annualReports[0].totalRevenue}</p>
                  <p>Total Operating Expense: ${data.annualReports[0].totalOperatingExpense}</p>
                  <p>Cost of Revenue: ${data.annualReports[0].costOfRevenue}</p>
                  <p>Gross Profit: ${data.annualReports[0].grossProfit}</p>
                  <p>Earnings Before Interest and Taxes: ${data.annualReports[0].ebit}</p>
                  <p>Net Income: ${data.annualReports[0].netIncome}</p>
                  <p>Research and Development: ${data.annualReports[0].researchAndDevelopment}</p>
                  <p>Income Before Tax: ${data.annualReports[0].incomeBeforeTax}</p>
                  <p>Minority Interest: ${data.annualReports[0].minorityInterest}</p>
                  <p>Selling General Administrative: ${data.annualReports[0].sellingGeneralAdministrative}</p>
                  <p>Operating Income: ${data.annualReports[0].operatingIncome}</p>
                  <p>Other Operating Expense: ${data.annualReports[0].otherOperatingExpense}</p>
                  <p>Interest Expense: ${data.annualReports[0].interestExpense}</p>
                  <p>Tax Provision: ${data.annualReports[0].taxProvision}</p>
                  <p>Net Interest Income: ${data.annualReports[0].netInterestIncome}</p>
                  <p>Extraordinary Items: ${data.annualReports[0].extraordinaryItems}</p>
                  <p>Income Tax Expense: ${data.annualReports[0].incomeTaxExpense}</p>
                  <p>Total Other Income Expense: ${data.annualReports[0].totalOtherIncomeExpense}</p>
                  <p>Discontinued Operations: ${data.annualReports[0].discontinuedOperations}</p>
                  <p>Net Income From Continuing Operations: ${data.annualReports[0].netIncomeFromContinuingOperations}</p>
                  <p>Net Income Applicable to Common Shares: ${data.annualReports[0].netIncomeApplicableToCommonShares}</p>
                </div>
                )
              }))}
              </div>
              )}
              </div>  
    )}
    export default IncomeStatement