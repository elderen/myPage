import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import API_KEY from '../util/API_KEY.js'
import Plot from 'react-plotly.js';

const Stock = () => {
  const [XValues, setXValues] = useState([]);
  const [YValues, setYValues] = useState([]);

  useEffect(() => {
    fetchStock();
    // console.log('X:', XValues);
    // console.log('Y:', YValues);
  },[])

  // useEffect( () => {
  //   console.log('X:', XValues);
  //   console.log('Y:', YValues);
  // },[XValue, YValue])

  const fetchStock = () => {
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];
    const KEY = API_KEY;
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=META&outputsize=compact&apikey=${KEY}`;

    axios(API_Call)
      .then((res)=>{
        console.log(res.data)
        
        for(let key in res.data['Time Series (Daily)']) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(res.data['Time Series (Daily)'][key]['1. open']);
        }
        setXValues(stockChartXValuesFunction);
        setYValues(stockChartYValuesFunction);
        console.log('X:', stockChartXValuesFunction);
        console.log('Y:', stockChartYValuesFunction);
        // console.log('X:', XValues);
        // console.log('Y:', YValues);
      })
      .catch(err=>console.error(err))
  }

  return (
    <Box 
      sx={{
        backgroundColor: 'white',
        color: 'primary.main',
        height: '440px',
        width: '720px',
        padding: '16px',
        border: 1,
        borderColor: 'primary.main',
        margin: '20px',
        '&:hover': {
          backgroundColor: 'primary.light'
        }
      }}
      >
      <Plot
        data={[
          {
            x: XValues,
            y: YValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          }
        ]}
        layout={ {width: 720, height: 440, title: 'A Fancy Plot'} }
      />
    </Box>
  );
};

export default Stock;