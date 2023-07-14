import React from 'react';
import {  useState } from 'react';
import { Flex, Image, Link,Box } from '@chakra-ui/react';







export default function Home() {
 
  const teamMembers = [
    { name: 'Kevin', role: 'Co-Founder' },
    { name: 'Shingeki', role: 'Co-Founder' },
    { name: 'Ishima', role: 'Artist' },
    { name: 'Rax', role: 'Developer' },
    { name: 'Emily', role: 'Game Designer' },
  ];
  
  
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
   { name: '$CRUN TOKEN', href: '/cruntoken' },
   { name: 'Mint', href: '/mint' },
    { name: 'Nft Staking', href: '/' },
  ];
  const [isHovered, setIsHovered] = useState(false);
  const [isHovereded, setIsHovereded] = useState(false);
 
  
  
  const mintMouseEnter = () => {
    setIsHovered(true);
  };

  const mintMouseLeave = () => {
    setIsHovered(false);
  };
  const stakeMouseEnter = () => {
    setIsHovereded(true);
  };

  const stakeMouseLeave = () => {
    setIsHovereded(false);
  };
  const mints = [
    { name: 'About', href: '/' },
    
  ];
  
  
  

  return (
    
    <div className="about-background"> 
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
    
    
      
      
    </Flex>
  
</Flex>
<div  className="BagelFatOne" style={{ textAlign: 'center', padding: '0 20px', fontSize: '48px', color: '#ffd780'  }} >$CRUN TOKENOMICS</div>
<div className="container">
      <img className="gif" src="/images/token.gif" alt="Fancy GIF" />
    </div>


    <div className="BagelFatOne" style={{ textAlign: 'center', padding: '0 20px', fontSize: '24px', color: '#ffd780', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '700px', margin: '0 auto' }}>
  <p className="mt-6 text-lg text-yellow-500">
  The $CRUN token is the main incentive of the Chicky Runners project. We attach great importance to the token and are steady about it. Our DAO and game are built around our token. We have a token that is improved through burning, high liquidity, and events.
  </p>
</div>
<Flex className="BagelFatOne" justify="space-between" align="center" padding="100px" color ='#d0d4f7'>
      {/* Left Side - Photo */}
      <div style={{ padding: '150px' }}>
        <img src="/images/tekonomics5-export-export-export.png" alt="Photo" width="800px" />
      </div>

      {/* Right Side - Text */}
      <div className="BagelFatOne" style={{ textAlign: 'center', padding: '0 20px', fontSize: '28px', color: '#ffd780', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h1 fontSize= "100px">TOKENOMICS</h1>
        <p>As you can see, we are with you with a highly secured token. You are not even aware of our partnerships and events... For more details, you can read our whitepaper and follow us on Twitter.</p>
      </div>
    </Flex>

    <Flex className="BagelFatOne" justify="space-between" align="center" padding="100px" color ='#ffd780'>
      {/* Left Side - Photo */}
      <div className="BagelFatOne" style={{ textAlign: 'center', padding: '0 20px', fontSize: '28px', color: '#ffd780', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h1 fontSize= "100px">Arbitrum Airdrop Claimoooors!</h1>
        <p>If you are eligible to receive the Arbitrum airdrop, you can mint our GEN-0 NFTs for free on July 13th at 16:00 UTC! They are limited to only 2000 supply, so you need to be fast.</p>
      </div>

      <div style={{ padding: '150px' }}>
        <img src="/images/drop2.gif" alt="Photo" width="850px"border= "8px solid #d0d4f7" />
      </div>

      {/* Right Side - Text */}
      
    </Flex>
    <a href="https://chicky-runners.gitbook.io/chicky-runners/usdcrun-tokenomics">
<div className="BagelFatOne" style={{ textAlign: 'center', padding: '0 20px', fontSize: '28px', color: '#ffd780', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h1 fontSize= "100px">Click to Read Our Whitepaper!</h1>
        <p></p>
      </div>
      </a>



<div className="footer">
  © 2023 CHICKY RUNNERS. All rights reserved.
</div>



</div>
    

    
  )
}
