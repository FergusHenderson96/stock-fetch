import React, { Component, useState } from 'react';

const ForexIntraday = () => { 

    const [price, setPrice] = useState([])
    const [curr, setCurr] = useState("")
    const [curr2, setCurr2] = useState("")
    const [formDetails, setFormDetails] = useState([])
    const [formDetails2, setFormDetails2] = useState([])
    const [undef, setUndef] = useState(false)

    const handleInput = (event) => {
        // getting the value of the input and assigning to the state
        setCurr(event.target.value);
      };
      const handleSubmit = (event) => {
        // stop default form behaviour which is to reload the page
        event.preventDefault();
        companyIntraday()
        setFormDetails(formDetails, curr)
      };


      const handleInput2 = (event) => {
        // getting the value of the input and assigning to the state
        setCurr2(event.target.value);
      };
      const handleSubmit2 = (event) => {
        // stop default form behaviour which is to reload the page
        event.preventDefault();
        companyIntraday()
        setFormDetails2(formDetails2, curr2)
      };


      const companyIntraday = () => {
        fetch(`https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=${curr}&to_symbol=${curr2}&interval=1min&apikey=50bf475ef5b6b0f9498b98eab266ef2f`)
      .then((res) => res.json())
      .then((data) => { 
        if (data["Time Series FX (1min)"][data["Meta Data"]["4. Last Refreshed"]]["2. high"] == undefined) {
          setUndef(true);
        }else{
          setUndef(false)
          let arr = price
          arr.push(data)
          setPrice(arr)
          setCurr("")
      }
        }  )}
    
      return(
        <div>
            <p>Enter two currencies you wish to exchange eg. EUR GBP</p>
            <form onSubmit={handleSubmit, handleSubmit2}>
              <input
                type="text"
                // value={text}
                onChange={handleInput}
              />
              <input
                type="text"
                // value={text}
                onChange={handleInput2}
              />
              <button type="submit">Search</button>
            </form>
            
            {undef ? (
              <div>
                No company found
              </div>
              ) : (
              <div>
                {price.map(((data, index) => {
                return (
                  <div key={index}>
                  <h1>Exchange rate for {data["Meta Data"]["2. From Symbol"]} to {data["Meta Data"]["3. To Symbol"]}.</h1>
                  <h2>Last updated at {data["Meta Data"]["4. Last Refreshed"]}</h2>
                  <h3>Timezone: {data["Meta Data"]["7. Time Zone"]}</h3>
                  <p>High Price: {data["Time Series FX (1min)"][data["Meta Data"]["4. Last Refreshed"]]["2. high"]}</p> 
                  <p>Open Price: {data["Time Series FX (1min)"][data["Meta Data"]["4. Last Refreshed"]]["1. open"]}</p> 
                  <p>Low Price: {data["Time Series FX (1min)"][data["Meta Data"]["4. Last Refreshed"]]["3. low"]}</p>
                <br/>
                <p>Foreign Exchange Rate 1
                {data["Meta Data"]["2. From Symbol"]} = {data["Time Series FX (1min)"][data["Meta Data"]["4. Last Refreshed"]]["1. open"]}
                {data["Meta Data"]["3. To Symbol"]}
                 </p>
                </div>
                )
              }))}
        </div>
          )}
          </div>
    )    
      }
   export default ForexIntraday;