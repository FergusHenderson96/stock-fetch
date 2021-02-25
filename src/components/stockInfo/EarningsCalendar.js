import React, { Component, useState } from 'react';

const EarningsCalendar = () => { 

    const [earningsCalendar, setEarningsCalendar] = useState([])
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
        companyEarningsCalendar()
        setFormDetails(formDetails, text)
        
      };

      const companyEarningsCalendar = () => {
        fetch(`https://www.alphavantage.co/query?function=EARNINGS_CALENDAR&horizon=${text}month&apikey=ARU6VBZ6KLPWOGUD`)
      .then((res) => res.json())
      .then((data) => { 
        // if (data.annualReports[0].fiscalDateEnding == undefined) {
        //     setUndef(true);
        //   }else{
        //     setUndef(false)
        let arr = earningsCalendar
          arr.push(data)
          setEarningsCalendar(arr)
          setText("")
          console.log(data)
      }
      
      )
    }

    return(
        <div>
              <h3>Search Upcoming Company Earnings by 3, 6 or 12 months</h3>
              <p>Enter number of months below</p>
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
                    {earningsCalendar.map(((data, index) => {
                return (
                  <div key={index}>
                  <h1>Earnings Calendar</h1>
                  
                </div>
                )
              }))}
              </div>
              )}
              </div>  
    )}
    export default EarningsCalendar