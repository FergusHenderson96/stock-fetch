import React, { useState } from 'react';

const Earnings = (text, setText) => { 

    const [earnings, setEarnings] = useState([])
    const [formDetails, setFormDetails] = useState([])

    // const handleInput = (event) => {
    //     // getting the value of the input and assigning to the state
    //     setText(event.target.value);
    //   };
    //   const handleSubmit = (event) => {
    //     // stop default form behaviour which is to reload the page
    //     event.preventDefault();
    //     companyEarnings()
    //     setFormDetails(formDetails, text)
        
    //   };

      const companyEarnings = (e) => {
        e.preventDefault();
        fetch(`https://www.alphavantage.co/query?function=EARNINGS&symbol=${text.text}&apikey=ARU6VBZ6KLPWOGUD`)
      .then((res) => res.json())
      .then((data) => { 
        let arr = earnings
          arr.push(data)
          setEarnings(arr)
          setFormDetails(text)

     })
    }

    return(
        <div>
              <p>Company Earnings</p>
              <button onClick={companyEarnings}>Show</button>
                <div>
                    {earnings.map(((data, index) => {
                return (
                  <div key={index}>
                  <h1>Earnings for the last 10 years</h1>
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
              </div>  
    )}
    export default Earnings