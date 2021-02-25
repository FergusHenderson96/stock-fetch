import React, { Component, useState } from 'react';

const Earnings = () => { 

    const [earnings, setEarnings] = useState([])
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
        companyEarnings()
        setFormDetails(formDetails, text)
        
      };

      const companyEarnings = () => {
        fetch(`https://www.alphavantage.co/query?function=EARNINGS&symbol=${text}&apikey=ARU6VBZ6KLPWOGUD`)
      .then((res) => res.json())
      .then((data) => { 
        if (data.annualEarnings[0].fiscalDateEnding == undefined) {
            setUndef(true);
          }else{
            setUndef(false)
        let arr = earnings
          arr.push(data)
          setEarnings(arr)
          setText("")
      }
      
     })
    }

    return(
        <div>
              <p>Enter ticker symbol below to search Company Earnings</p>
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
                    {earnings.map(((data, index) => {
                return (
                  <div key={index}>
                  <h1>Earnings</h1>
                  <p>Earnings to date ending {data.annualEarnings[0].fiscalDateEnding}: ${data.annualEarnings[0].reportedEPS} Million</p>
                  <p>Earnings to date ending {data.annualEarnings[1].fiscalDateEnding}: ${data.annualEarnings[1].reportedEPS} Million</p>
                  <p>Earnings to date ending {data.annualEarnings[2].fiscalDateEnding}: ${data.annualEarnings[2].reportedEPS} Million</p>
                  <p>Earnings to date ending {data.annualEarnings[3].fiscalDateEnding}: ${data.annualEarnings[3].reportedEPS} Million</p>
                  <p>Earnings to date ending {data.annualEarnings[4].fiscalDateEnding}: ${data.annualEarnings[4].reportedEPS} Million</p>
                  <p>Earnings to date ending {data.annualEarnings[5].fiscalDateEnding}: ${data.annualEarnings[5].reportedEPS} Million</p>
                  <p>Earnings to date ending {data.annualEarnings[6].fiscalDateEnding}: ${data.annualEarnings[6].reportedEPS} Million</p>
                  <p>Earnings to date ending {data.annualEarnings[7].fiscalDateEnding}: ${data.annualEarnings[7].reportedEPS} Million</p>
                  <p>Earnings to date ending {data.annualEarnings[8].fiscalDateEnding}: ${data.annualEarnings[8].reportedEPS} Million</p>
                  <p>Earnings to date ending {data.annualEarnings[9].fiscalDateEnding}: ${data.annualEarnings[9].reportedEPS} Million</p>
                </div>
                )
              }))}
              </div>
              )}
              </div>  
    )}
    export default Earnings