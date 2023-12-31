import React from 'react';
import millify from 'millify';
import { Typography , Row , Col , Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from "./index";
import Loader from './Loader';
import ErrorPage from './ErrorPage';

const { Title } =Typography;

const HomePage = () => {
  const { data , error, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if(isFetching) return <Loader/>
  if(error) return <ErrorPage error={error} />

  return (
    <>
      <Title level={2} className='heading'>
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}><Statistic title="Totle Cryptocurrencies" value={globalStats?.total}/></Col>
        <Col span={12}><Statistic title="Totle Exchanges" value={millify(globalStats?.totalExchanges)}/></Col>
        <Col span={12}><Statistic title="Totle Market Cap" value={millify(globalStats?.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title="Totle 24h Volume" value={millify(globalStats?.total24Volume)}/></Col>
        <Col span={12}><Statistic title="Totle Markets" value={millify(globalStats?.totalMarkets)}/></Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className='show-more'><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={3} className='show-more'><Link to="/news">Show More</Link></Title>
      </div>
      <News simplified/>
    </>
  )
}

export default HomePage;