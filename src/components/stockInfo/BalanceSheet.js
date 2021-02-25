import React, { Component, useState } from 'react';

const BalanceSheet = () => { 

    const [balSheet, setBalSheet] = useState([])
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
        companyBalanceSheet()
        setFormDetails(formDetails, text)
        
      };

      const companyBalanceSheet = () => {
        fetch(`https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${text}&apikey=ARU6VBZ6KLPWOGUD`)
      .then((res) => res.json())
      .then((data) => { 
        if (data.annualReports[0].fiscalDateEnding == undefined) {
            setUndef(true);
          }else{
            setUndef(false)
        let arr = balSheet
          arr.push(data)
          setBalSheet(arr)
          setText("")
      }
      
      })
    }

    return(
        <div>
              <p>Enter ticker symbol below to search Company Balance Sheet</p>
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
                    {balSheet.map(((data, index) => {
                return (
                  <div key={index}>
                  <h1>Balance Sheet</h1>
                  <p>Fiscal Date Ending: {data.annualReports[0].fiscalDateEnding}</p>
                  <p>Total Assets: ${data.annualReports[0].totalAssets}</p>
                  <p>Intangible Assets: ${data.annualReports[0].intangibleAssets}</p>
                  <p>Earning Assets: ${data.annualReports[0].earningAssets}</p>
                  <p>Other Current Assets: ${data.annualReports[0].otherCurrentAssets}</p>
                  <p>Total Liabilities: ${data.annualReports[0].totalLiabilities}</p>
                  <p>Total Shareholder Equity: ${data.annualReports[0].totalShareholderEquity}</p>
                  <p>Deferred Long Term Liabilities: ${data.annualReports[0].deferredLongTermLiabilities}</p>
                  <p>Other Current Liabilities: ${data.annualReports[0].otherCurrentLiabilities}</p>
                  <p>Common Stock: ${data.annualReports[0].commonStock}</p>
                  <p>Retained Earnings: ${data.annualReports[0].retainedEarnings}</p>
                  <p>Other Liabilities: ${data.annualReports[0].otherLiabilities}</p>
                  <p>Goodwill: ${data.annualReports[0].goodwill}</p>
                  <p>Other Assets: ${data.annualReports[0].otherAssets}</p>
                  <p>Cash: ${data.annualReports[0].cash}</p>
                  <p>Total Current Liabilities: ${data.annualReports[0].totalCurrentLiabilities}</p>
                  <p>Short Term Debt: ${data.annualReports[0].shortTermDebt}</p>
                  <p>Current Long Term Debt: ${data.annualReports[0].currentLongTermDebt}</p>
                  <p>Other Shareholder Equity: ${data.annualReports[0].otherShareholderEquity}</p>
                  <p>Property Plant Equipment: ${data.annualReports[0].propertyPlantEquipment}</p>
                  <p>Total Current Assets: ${data.annualReports[0].totalCurrentAssets}</p>
                  <p>Long Term Investments: ${data.annualReports[0].longTermInvestments}</p>
                  <p>Net Tangible Assets: ${data.annualReports[0].netTangibleAssets}</p>
                  <p>Short Term Investments: ${data.annualReports[0].shortTermInvestments}</p>
                  <p>Net Receivables: ${data.annualReports[0].netReceivables}</p>
                  <p>Long Term Debt: ${data.annualReports[0].longTermDebt}</p>
                  <p>Inventory: ${data.annualReports[0].inventory}</p>
                  <p>Accounts Payable: ${data.annualReports[0].accountsPayable}</p>
                  <p>Total Permanent Equity: ${data.annualReports[0].totalPermanentEquity}</p>
                  <p>Additional Paid In Capital: ${data.annualReports[0].additionalPaidInCapital}</p>
                  <p>Common Stock Total Equity: ${data.annualReports[0].commonStockTotalEquity}</p>
                  <p>Preferred Stock Total Equity: ${data.annualReports[0].preferredStockTotalEquity}</p>
                  <p>Retained Earnings Total Equity: ${data.annualReports[0].retainedEarningsTotalEquity}</p>
                  <p>Treasury Stock: ${data.annualReports[0].treasuryStock}</p>
                  <p>Accumulated Amortization: ${data.annualReports[0].accumulatedAmortization}</p>
                  <p>Other Non Currrent Assets: ${data.annualReports[0].otherNonCurrrentAssets}</p>
                  <p>Deferred Long Term Asset Charges: ${data.annualReports[0].deferredLongTermAssetCharges}</p>
                  <p>Total Non Current Assets: ${data.annualReports[0].totalNonCurrentAssets}</p>
                  <p>Capital Lease Obligations: ${data.annualReports[0].capitalLeaseObligations}</p>
                  <p>Total Long Term Debt: ${data.annualReports[0].totalLongTermDebt}</p>
                  <p>Other Non Current Liabilities: ${data.annualReports[0].otherNonCurrentLiabilities}</p>
                  <p>Total Non Current Liabilities: ${data.annualReports[0].totalNonCurrentLiabilities}</p>
                  <p>Negative Goodwill: ${data.annualReports[0].negativeGoodwill}</p>
                  <p>Warrants: ${data.annualReports[0].warrants}</p>
                  <p>Preferred Stock Redeemable: ${data.annualReports[0].preferredStockRedeemable}</p>
                  <p>Capital Surplus: ${data.annualReports[0].capitalSurplus}</p>
                  <p>Liabilities And Shareholder Equity: ${data.annualReports[0].liabilitiesAndShareholderEquity}</p>
                  <p>Cash And Short Term Investments: ${data.annualReports[0].cashAndShortTermInvestments}</p>
                  <p>Accumulated Depreciation: ${data.annualReports[0].accumulatedDepreciation}</p>
                  <p>Common Stock Shares Outstanding: ${data.annualReports[0].commonStockSharesOutstanding}</p>
                </div>
                )
              }))}
              </div>
              )}
              </div>  
    )}
    export default BalanceSheet