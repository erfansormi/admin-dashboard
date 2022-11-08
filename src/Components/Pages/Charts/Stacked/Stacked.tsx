import React from 'react'
import ExpenseChart from '../../Ecommerce/BottomCharts/RightSection/ChartComponents';
import TitlePage from '../../TitlePage/TitlePage';

const Stacked = () => {
    return (
        <div>
            <TitlePage category='chart' title="stacked" />
            <div className="shadow content-colors content-padding">
                <ExpenseChart height='500px' />
            </div>
        </div>
    )
}

export default Stacked;