import React, { Component, useState } from 'react';

const Intraday = () => { 

    const [price, setPrice] = useState([])
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
        companyIntraday()
        setFormDetails(formDetails, text)
        
      };

      const companyIntraday = () => {
        fetch(`http://api.marketstack.com/v1/intraday?access_key=50bf475ef5b6b0f9498b98eab266ef2f&symbols=${text}`)
      .then((res) => res.json())
      .then((data) => { 
        if (data.data[0].symbol == undefined) {
          setUndef(true);
        }else{
          setUndef(false)
          let arr = price
          arr.push(data)
          setPrice(arr)
          setText("")
        console.log(data)
        
      }
        }  )}
 
      return(
        <div>
            <p>Enter ticker symbol below to get current price</p>
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
                {price.map(((data, index) => {
                return (
                  <div key={index}>
                  <h1>Stock price for {data.data[0].symbol} on date {data.data[0].date}</h1>
                  <p>High Price: {data.data[0].high}</p>
                  <p>Current Price: {data.data[0].last}</p>
                  <p>Low Price: {data.data[0].low}</p>
                </div>
                )
              }))}
        </div>
          )}
          </div>
    )    
      }
   export default Intraday;