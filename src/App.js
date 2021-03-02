import React, {useState} from 'react';
import Overview from './components/stockInfo/Overview';
import IncomeStatement from './components/stockInfo/IncomeStatement';
import BalanceSheet from './components/stockInfo/BalanceSheet';
import CashFlow from './components/stockInfo/CashFlow';
import Earnings from './components/stockInfo/Earnings';
import EarningsCalendar from './components/stockInfo/EarningsCalendar';
import MarketStack from './components/MarketStack';
import PopChart from './components/PopChart';
import FunctionForm from './components/FunctionForm';
import ForexIntraday from './components/currencyInfo/Forex';
import CryptoDaily from './components/currencyInfo/Crypto';

const App = () => {

  const [ticker, setTickers] = useState([])
  const [text, setText] = useState("")
  const [formDetails, setFormDetails] = useState([])
  const [undef, setUndef] = useState(false)
  const [comp, setComp] = useState("")

  const handleInput = (event) => {
    // getting the value of the input and assigning to the state
    setText(event.target.value);
    setComp(event.target.value);
  };
  const handleSubmit = (event) => {
    // stop default form behaviour which is to reload the page
    event.preventDefault();
    
    companyOverview()
    setFormDetails(formDetails, text)
  };

const companyOverview = () => {
  fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${comp}&apikey=ARU6VBZ6KLPWOGUD`)
.then((res) => res.json())
.then((data) => { 
  if (data.FullTimeEmployees == undefined) {
    setUndef(true);
  }else{
    setUndef(false)
    let arr = ticker
    arr.push(data)
    setTickers(arr)
    setFormDetails("")
    setComp("")
}
})
}
console.log(comp)


    return(
      <div>
        <h2>Company Information (NASDAQ)</h2>
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
                  <br/>
      <IncomeStatement text={text} setText={setText}/>
      <br/>
      <BalanceSheet text={text} setText={setText}/>
      <br/>
      <CashFlow text={text} setText={setText}/>
      <br/>
      <Earnings text={text} setText={setText}/>
      <br/>
      {/* <EarningsCalendar/> */}
  
      <FunctionForm text={text} setText={setText}/>
      <br/>
      
                </div>
                )
              }))}
      <div>
        <h2>Stock Prices (Global)</h2>
        <br/>
      <MarketStack/> 
      <br/>
      {/* <PopChart/> */}
      <br/>
      <h2>Currency</h2>
      <br/>
      <ForexIntraday/>
      {/* <br/>
      <CryptoDaily/> */}
      </div>
              </div>
            )}
            </div>
    ) 
  }    

   
export default App;
