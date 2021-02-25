import React, {useState} from 'react';
import Chart from 'react-apexcharts';

const FunctionForm = () =>  {

    const [price, setPrice] = useState([])
    const [text, setText] = useState("")
    const [formDetails, setFormDetails] = useState([])
    const [undef, setUndef] = useState(false)
    const [chart, setChart] = useState([])

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
      console.log(price[0].data[0].last)
      
    }
      }  )
      let chartData =
               {
                options: {
                    chart: {
                        background: '#f4f4f4',
                        foreColor: '#333',
                     },
                style: {
                          fontSize: '13px'   
                        },
                xaxis: {
                        categories: [
                        'monday',
                        'tuesday',
                        'wednesday'
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
                          price[0].data[0].last, 
                          2,
                          3
                        ]
                    }],
                   
                } 
                setChart(chartData) 
              }


   
      
console.log(price)
    return (
    
    
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
                  <Chart
        options={chart.options}
        series={chart.series}
        type="area"
        height="140"
        width="15%"
        fontSize="143px"
        />
                </div>
                )
              }))}
        </div>
          )}
          </div>
        )
    
    
}

export default FunctionForm;