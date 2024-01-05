import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const AriaBasicChart = (props) => {
  const { data } = props;
  const [ months, setMonths ] = useState([]);
  const [ totalAmounts, setTotalAmounts ] = useState([]);
  const [ state , setState ] = useState({
    series: [],
    options: {
      chart: {
        height: "90%",
        width: "100%",
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: months
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  });

  useEffect(()=>{
    if (data.chart_data_last_months) {
      const mon = data.chart_data_last_months.months;
      const tot = data.chart_data_last_months.totalAmounts;

      if (!mon && !tot) return;

      state.series = [{
        name: 'الأرباح',
        data: tot
      }];
      state.options.xaxis = {
        type: 'category',
        categories: mon
      }
      
      setState({...state});

      setMonths([...mon]);
      setTotalAmounts([...tot]);
    } 
  },[data]);
  
  return (
    <> { months.length > 0 && totalAmounts.length > 0&& <ReactApexChart options={state.options} series={state.series} type="area" height={"100%"} width={"100%"} /> } </>
  );
}

export default AriaBasicChart;