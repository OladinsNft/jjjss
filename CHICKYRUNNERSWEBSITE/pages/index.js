import React from 'react';
import { useState } from 'react';
import {  Flex, Image, Link} from '@chakra-ui/react';
import { metamaskWallet } from "@thirdweb-dev/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
import { useConnectionStatus } from "@thirdweb-dev/react";




export default function Home() {
  


  const metamaskConfig = metamaskWallet();
  const connectionStatus = useConnectionStatus();
  const address = useAddress();
  const [isLoading, setIsLoading] = useState(true);
  
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
    
    { name: 'Game', href: '/game' },
  ];
  const [isHovered, setIsHovered] = useState(false);
  const mintStyle = {
    backgroundColor: isHovered ? 'darkgray' : 'gray',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    transitionDuration: '0.3s',
  };
  
  
  const mintMouseEnter = () => {
    setIsHovered(true);
  };

  const mintMouseLeave = () => {
    setIsHovered(false);
  };
  const mints = [
    { name: 'About', href: '/' },
    
  ];
  
  const [isHovereded, setIsHovereded] = useState(false);
  const stakeMouseEnter = () => {
    setIsHovereded(true);
  };

  const stakeMouseLeave = () => {
    setIsHovereded(false);
  };
  


  
  
  

  return (
    
    <ThirdwebProvider activeChain="arbitrum-goerli" supportedWallets={[metamaskWallet()]}>
  
  
<div className="moving-background"> 
<Flex  className="BagelFatOne" justify="space-between" align="center" padding="30px">

        
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
      <button className='BagelFatOne'
      style={{
        backgroundColor: isHovereded ? 'darkgray' : 'gray',
        cursor: 'pointer',
            textDecoration: 'none',
            borderRadius: '10%',
            fontSize: '20px',
            lineHeight: '0.75',
            margin: '0 8px',
            padding: '10px 30px',
      }}
      onMouseEnter={stakeMouseEnter}
      onMouseLeave={stakeMouseLeave}
      href=""
    >
      Stake
    </button>
      <button className='BagelFatOne'
      style={{
        backgroundColor: isHovered ? 'darkgray' : 'gray',
        cursor: 'pointer',
            textDecoration: 'none',
            borderRadius: '10%',
            fontSize: '20px',
            lineHeight: '0.75',
            margin: '0 8px',
            padding: '10px 30px',
      }}
      onMouseEnter={mintMouseEnter}
      onMouseLeave={mintMouseLeave}
      href=""
    >
      Mint
    </button>
      
    </Flex>
  
</Flex>


</div>
</ThirdwebProvider>
);
    






}








