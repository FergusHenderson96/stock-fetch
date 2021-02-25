import React, {Component, useEffect} from 'react';
import Overview from './components/stockInfo/Overview';
import IncomeStatement from './components/stockInfo/IncomeStatement';
import BalanceSheet from './components/stockInfo/BalanceSheet';
import CashFlow from './components/stockInfo/CashFlow';
import Earnings from './components/stockInfo/Earnings';
import EarningsCalendar from './components/stockInfo/EarningsCalendar';
import MarketStack from './components/MarketStack';
import PopChart from './components/PopChart';
import FunctionForm from './components/FunctionForm';

const App = () => {


    return (
      <div>
      {/* <Overview/>
      <IncomeStatement/>
      <BalanceSheet/>
      <CashFlow/>
      <Earnings/>
      <EarningsCalendar/>
      <MarketStack/> */}
      {/* <PopChart/> */}
      <FunctionForm/>
      {/* <PopChart/> */}
    </div>
    
    )
}
export default App;
