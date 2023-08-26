import {useState , useEffect} from 'react';
import { Button , Menu, Typography , Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined  , BulbOutlined , FundOutlined , MenuOutlined } from "@ant-design/icons";

import icon from "../images/cryptocurrency.png"


const Navbar = () => {
    const [activeMenu , setActiveMenu ] = useState(true);
    const [screenSize , setScreenSize ] = useState(null);

    useEffect(() =>{
        const handleResize =() => setScreenSize(window.innerWidth);

        window.addEventListener('resize' , handleResize);

        handleResize();

        return() => window.removeEventListener("resize" , handleResize);
    },[]);

    useEffect(() =>{
        if(screenSize < 768){
            setActiveMenu(false)
        }else{
            setActiveMenu(true)
        }
    }, [screenSize]);

    const listOfItems = [
        {
            key: 'first',
            icon: <HomeOutlined/>,
            label : <Link to="/">Home</Link>
        },
        {
            key: "second",
            icon: <FundOutlined/>,
            label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        },
        {
            key: "forth",
            icon: <BulbOutlined/>,
            label: <Link to="/news">News</Link>
        }
    ];

    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className='logo'>
                    <Link to="/">
                        Cryptoverse
                    </Link>
                </Typography.Title>
                <Button className='menu-control-container' onClick={() =>setActiveMenu(!activeMenu)}>
                    <MenuOutlined/>
                </Button>
            </div>
            {activeMenu && (
                <Menu theme='dark' items={listOfItems}/>
            )}
            
        </div>
    )
}

export default Navbar;