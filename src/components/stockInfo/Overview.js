import React, { Component, useState } from 'react';

const Overview = () => { 
    
  const [ticker, setTickers] = useState([])
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
    companyOverview()
    setFormDetails(formDetails, text)
    
  };

const companyOverview = () => {
  fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${text}&apikey=ARU6VBZ6KLPWOGUD`)
.then((res) => res.json())
.then((data) => { 
  if (data.FullTimeEmployees == undefined) {
    setUndef(true);
  }else{
    setUndef(false)
    let arr = ticker
    arr.push(data)
    setTickers(arr)
    setText("")
}
})
}



    return(
      <div>
            <p>Enter ticker symbol below</p>
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
                {ticker.map(((data, index) => {
                return (
                  <div key={index}>
                  <h1>Company Overview</h1>
                  <p>Name: {data.Name}</p>
                  <p>Ticker Symbol: {data.Symbol}</p>
                  <p>Exchange: {data.Exchange}</p>
                  <p>Currency: {data.Currency}</p>
                  <p>Country: {data.Country}</p>
                  <p>Sector: {data.Sector}</p>
                  <p>Market Cap: ${data.MarketCapitalization}</p>
                  <p>Dividende Per Share: ${data.DividendPerShare}</p>
                  <p>Gross Profit Trailing Twelve Months: ${data.GrossProfitTTM}</p>
                  <p>Analyst Target Price: ${data.AnalystTargetPrice}</p>
                  <p>Description: {data.Description}</p>
                </div>
                )
              }))}
              </div>
            )}
            </div>
    ) 
  }    
  
   export default Overview; 