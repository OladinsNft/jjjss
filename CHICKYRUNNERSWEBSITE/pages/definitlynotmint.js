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



  return (
    
    <ThirdwebProvider activeChain="arbitrum-goerli" supportedWallets={[metamaskWallet()]}>
  
  
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



<div className="BagelFatOne" style={{ textAlign: 'center', padding: '10 40px' }} >Wallet address is {address} </div>

<div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
<iframe
    src="https://ipfs-2.thirdwebcdn.com/ipfs/QmPvTEZKMiHfQ4AHnd8uvUy3yPxKL2MesWGi3KGGT5Ro2n?contract=0x5DCBB6ECdcE91E4aeFbAAC5642CF023f6Bb7B949&chain=%7B%22name%22%3A%22Arbitrum+Goerli%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Farbitrum-goerli.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Arbitrum+Goerli+Ether%22%2C%22symbol%22%3A%22AGOR%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22arb-goerli%22%2C%22chainId%22%3A421613%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22arbitrum-goerli%22%7D&primaryColor=purple"
    width="900px"
    height="600px"
    frameborder="0"
    style={{ padding: '0 10px' }}
    ></iframe>
    




      {(isInList.toString() == "true") ? (
        <iframe
        src="https://ipfs-2.thirdwebcdn.com/ipfs/QmPvTEZKMiHfQ4AHnd8uvUy3yPxKL2MesWGi3KGGT5Ro2n?contract=0x0bb243b126fe501Cc6760c504429E7382B59E53b&chain=%7B%22name%22%3A%22Arbitrum+Goerli%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Farbitrum-goerli.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Arbitrum+Goerli+Ether%22%2C%22symbol%22%3A%22AGOR%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22arb-goerli%22%2C%22chainId%22%3A421613%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22arbitrum-goerli%22%7D&primaryColor=purple"
        width="900px"
        height="600px"
        frameborder="0"
        style={{ padding: '0 10px' }}
        >
          
        </iframe>
        
        
      ) : (
        
        <div className="BagelFatOne" style={{ padding: '0px', margin: '0 auto' }}>
          <div className="BagelFatOne" style={{ textAlign: 'center', padding: '0 20px', fontSize: '28px', color: '#d0d4f7', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '600px', margin: '0 auto', background: '#6370e5', border: '4px solid #d0d4f7' }}>
  If you are eligible for the Arbitrum airdrop, you have 1 free claim right. To check, please click on the &quot;CHECK FOR FREE CLAIM&quot; button below and wait for a moment.
</div>
<button className="BagelFatOne" onClick={handleButtonClick} style={{ fontSize: '40px', padding: '0px 75px' }}>CHECK FOR FREE CLAIM</button>
        
      </div>


        
      )}
    </div>
    
    

    

    <div className="footer">
  © 2023 CHICKY RUNNERS. All rights reserved.
</div>

</div>
</ThirdwebProvider>
);
      }
