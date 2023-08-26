import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col , Row , Typography} from "antd";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
  );

const { Title } =Typography;

const LineChart = ({ coinHistory , coinName , currentPrice}) => {
    const coinPrice = [];
    const coinTimestamp = [];

    console.log(coinHistory);

    for(let i= 0 ; i< coinHistory?.data?.history?.length; i++){
        coinPrice?.push(coinHistory?.data?.history[i].price)
        coinTimestamp?.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString())
    }

    const data ={
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd'
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
            },
        };

    return (
        <>
            <Row className='chart-header'>
                <Title level={2} className='chart-title'>
                    {coinName} Price Chart
                </Title>
                <Col className='price-container'>
                    <Title level={5} className='price-change'>{coinHistory?.data?.change}%</Title>
                    <Title level={5} className='current-change'>Current {coinName} Price: $ {currentPrice}</Title>
                </Col>
            </Row>
                <Line style={{width:"100%"}} data={data} options={options}/>
        </>
    )
}

export default LineChart