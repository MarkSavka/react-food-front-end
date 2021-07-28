import React from 'react';
import HeaderInfo from '../../components/headerInfo';
import TotalStatistic from './TotalStatistic';

const Dashboard = () => {
   
   return(
      <div className="dashboard">
         <header>
            <HeaderInfo label={"Dasboard"} />
            <hr />
         </header>
         <TotalStatistic />
         <div className="order_report"></div>
         <div className="most_order"></div>
         <div className="most_type_order"></div>
      </div>
   )
}

export default Dashboard;