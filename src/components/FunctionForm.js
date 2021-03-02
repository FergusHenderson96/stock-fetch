import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Intraday = (text, setText) => { 

    const [price, setPrice] = useState([])
    // const [text, setText] = useState("")
    // const [formDetails, setFormDetails] = useState([])
    // const [undef, setUndef] = useState(false)
    const [chart, setChart] = useState([])
    const [chartPlot, setChartPlot] = useState(true)

    // const handleInput = (event) => {
    //     // getting the value of the input and assigning to the state
    //     setText(event.target.value);
    //   };
    //   const handleSubmit = (event) => {
    //     // stop default form behaviour which is to reload the page
    //     event.preventDefault();
    //     companyIntraday()
    //     setFormDetails(formDetails, text)
        
    //   };

      const companyIntraday = (e) => {
        e.preventDefault();
        fetch(`http://api.marketstack.com/v1/intraday?access_key=50bf475ef5b6b0f9498b98eab266ef2f&symbols=${text.text}`)
      .then((res) => res.json())
      .then((data) => { 
        // if (data.data[0].symbol == undefined) {
        //   setUndef(true);
        // }else{
        //   setUndef(false)
          let arr = price
          arr.push(data)
          setPrice(arr)
          // setText("")
        console.log(data)
        chartInfo()
      
        }  )}

     const chartInfo = () => {  
        let chartData =
        {
         options: {
             chart: {
                 background: '#f4f4f4',
                 foreColor: '#333',
              },
         style: {
                   fontSize: '3px'   
                 },
         xaxis: {
                 categories: [
                  price[0].data[0].date,
                  price[0].data[1].date,
                  price[0].data[2].date
                 
                 ]
                 
             },
             plotOptions: {
                 area: {
                     horizontal: false
                 }
             },
             fill: {
                 colors: ['#f44336']
             },
             dataLabels: {
                 enabled: false
             },
             title: {
                 text: 'Share Price',
                 align: 'center',
                 margin: 20,
                 offsetY: 20,
                 style: {
                     fontSize: '10px'
                 }
             },
         },
             series: [{
                 name: 'Share Price',
                 data: [
                     price[0].data[0].high,
                     price[0].data[1].high,
                     price[0].data[2].high
                 ]
             }],
             
         } 
         let arr2 = chart
         arr2.push(chartData)
         setChart(arr2)
         setChartPlot(false)
         console.log(chartData)
        }
        

 
      return(
        <div>
            <p>Get Current Share Price</p>
            <button onClick={companyIntraday}>Show</button>
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
        
          <div>
          {chartPlot ? (
              <div>
              </div>
              ) : (
                <div>
                {chart.map(((chartData, index) => {
                return (
                  <Chart key={index}
        options={chartData.options}
        series={chartData.series}
        type="area"
        height="400"
        width="25%"
        font-size="3px"
        />
                
                )
              }))}
              
        </div>
            )}
          </div>
          </div>
    )    
      }
   export default Intraday;