import { useState ,useEffect} from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card , Row , Col , Input } from "antd";

import { useGetCryptosQuery } from '../services/cryptoApi'; 
import Loader from './Loader';
import ErrorPage from './ErrorPage';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList ,error, isFetching} = useGetCryptosQuery(count);
  const [ cryptos , setCryptos ] = useState([]);
  const [ searchTerm , setSearchTerm] = useState('');

  useEffect(() =>{
    const filterdData = cryptosList?.data?.coins?.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

    setCryptos(filterdData);
  },[cryptosList , searchTerm]);


  if(isFetching) return <Loader/>;
  if(error) return <ErrorPage error={error}/>

  return (
    <>
    {!simplified && (
      <div className='search-crypto'>
        <Input placeholder='Search Cryptocurrencies' onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>
    )}
      <Row gutter={[32 , 32]} className='crypto-card-container'>
        {cryptos?.map((currency ,i) =>(
          
          <Col key={i} sm={12} lg={6} xs={24} className='crypto-card'>
            <Link to={`/crypto/${currency?.uuid}`}>
              <Card title={`${currency.rank}. ${currency.name}`} extra={<img className='crypto-image' src={currency.iconUrl}/>} hoverable>
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card> 
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies