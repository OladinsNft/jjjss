import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head'
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import { useConnect, metamaskWallet } from "@thirdweb-dev/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import { useConnectionStatus } from "@thirdweb-dev/react";

import axios from 'axios';
import Papa from 'papaparse';




  









export default function Home() {
  


  const metamaskConfig = metamaskWallet();
  const connectionStatus = useConnectionStatus();
  const address = useAddress();
  
  const buttonStyle = {
    backgroundColor: '#ad0000',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };
  const buttonStyleMint = {
    backgroundColor: 'gray',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };
  const [hoveredIndex, setHoveredIndex] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(false);
  };
  const buttons = [
    { name: 'About', href: '/about' },
    { name: 'Mint', href: '/mint' },
    { name: 'Game', href: '/game' },
  ];
  const [lastFiveDigits, setLastFiveDigits] = useState('');

  useEffect(() => {
    if (address) {
      const slicedDigits = address.slice(-5).toLowerCase();;
      console.log(address);
      setLastFiveDigits(slicedDigits);
      setMyAddress(slicedDigits);
    } else {
      setLastFiveDigits('');
    }
  }, [address]);
  
  const [addresses, setAddresses] = useState([]);
  const [myAddress, setMyAddress] = useState('');
  const [isInList, setIsInList] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/outputlast5.json');
      const data = await response.json();

      if (typeof data === 'string') {
        const addressesArray = data.split(',').map(address => address.trim());
        setAddresses(addressesArray);
      } else if (Array.isArray(data)) {
        setAddresses(data);
      } else {
        console.error('Invalid data format in addresses.json');
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    
    // Check if myAddress is in the list
    setIsInList(addresses.includes(lastFiveDigits));
  }, [addresses, myAddress]);
  
  function handleButtonClick() {
    
    window.location.reload();
  }
 const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const countDownDate = new Date();
    countDownDate.setUTCHours(16, 0, 0, 0); // Set the target time to 04:00 PM UTC

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        // Timer has reached the target time
        clearInterval(timer);
        setTimeLeft('Mint started!');
      } else {
        // Calculate the remaining time
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft(`${hours}:${minutes}:${seconds}`);
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    
    <ThirdwebProvider activeChain="arbitrum" supportedWallets={[metamaskWallet()]}>
  
  
<div className="about-background" > 

<Flex className="BagelFatOne" justify="space-between" align="center" padding="30px">

       
            {/*Left Side - Social Media Icons*/}
             
                
                <Link href="/">
                    <Image src="/images/LOGO.png" width="175px" margin="0 100px"/>
                </Link>
                
            
            
           

            
            {/*Right Side - Sections and Connect*/}
            
            <Flex justify="space-between" align="center" padding="30px">
            <Link href="https://twitter.com/ChickyRunners">
                    <Image src="/images/twitter-bird-symbols-png-logo-0.png" width="60px" margin="0 10px"/>
                </Link>
            
      {buttons.map((button, index) => (
        <a
          key={index}
          href={button.href}
          style={{
            margin: '0 8px',
            padding: '10px 30px',
            backgroundColor: hoveredIndex === index ? '#b1b8f2' : '#929bed',
            color: hoveredIndex === index ? 'black' : 'white',
            cursor: 'pointer',
            textDecoration: 'none',
            borderRadius: '10%',
            fontSize: '20px',
            lineHeight: '0.75',
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {button.name}
        </a>
      ))}
      <ConnectWallet />
      
    </Flex>
  
</Flex>



<div className="BagelFatOne" style={{ textAlign: 'center', padding: '10 40px' }} >  </div>

<div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
<iframe
    src="https://bafybeidpp4d3znpjxlvlhitaylbqwmyk2gzcxazp5wkftvwu7r3lsyku2q.gateway.ipfscdn.io/?contract=0x32E0708527D4a4Dda94e4bf8E78dc9BC314f78b8&chain=%7B%22name%22%3A%22Arbitrum+One%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Farbitrum.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22arb1%22%2C%22chainId%22%3A42161%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22arbitrum%22%7D&primaryColor=purple"
    width="900px"
    height="600px"
    frameborder="0"
    style={{ padding: '0 10px' }}
    ></iframe>
    


<iframe
        src="https://bafybeidpp4d3znpjxlvlhitaylbqwmyk2gzcxazp5wkftvwu7r3lsyku2q.gateway.ipfscdn.io/?contract=0x2919065dEA40d1025fE9B4C3a83c96d7c7E9281C&chain=%7B%22name%22%3A%22Arbitrum+One%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Farbitrum.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22arb1%22%2C%22chainId%22%3A42161%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22arbitrum%22%7D&primaryColor=purple"
        width="900px"
        height="600px"
        frameborder="0"
        style={{ padding: '0 10px' }}
        >

    </div>
    
    

    

    

</div>
</ThirdwebProvider>
);
      }
