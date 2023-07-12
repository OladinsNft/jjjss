import React from 'react';
import {  useState } from 'react';
import { Flex, Image, Link,Box } from '@chakra-ui/react';







export default function Home() {
 
  const teamMembers = [
    { name: 'Kevin', role: 'Co-Founder' },
    { name: 'Shingeki', role: 'Co-Founder' },
    { name: 'Mikishima', role: 'Artist' },
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
<div  className="BagelFatOne" style={{ textAlign: 'center', padding: '0 20px', fontSize: '48px', color: '#d0d4f7'  }} >CHICKY RUNNERS</div>
<div className="container">
      <img className="gif" src="/images/idle_map.gif" alt="Fancy GIF" />
    </div>


    <div className="BagelFatOne" style={{ textAlign: 'center', padding: '0 20px', fontSize: '24px', color: '#d0d4f7', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '700px', margin: '0 auto' }}>
  <p className="mt-6 text-lg text-yellow-500">
  Chicky Runners is a community-driven NFT project that combines games and blockchain. It takes your experience to the next level by utilizing the speed and reliability of the Arbitrum network.
  </p>
</div>
<Flex className="BagelFatOne" justify="space-between" align="center" padding="100px" color ='#d0d4f7'>
      {/* Left Side - Photo */}
      <div style={{ padding: '150px' }}>
        <img src="/images/13.png" alt="Photo" width="400px" border= "8px solid #d0d4f7"/>
      </div>

      {/* Right Side - Text */}
      <div className="BagelFatOne" style={{ textAlign: 'center', padding: '0 20px', fontSize: '28px', color: '#d0d4f7', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h1 fontSize= "100px">About Us</h1>
        <p>Chicky Runners were born to compete. The ones who collect the most eggs will be the happiest at home. Be a chicky, win prizes!</p>
      </div>
    </Flex>

    <Flex className="BagelFatOne" justify="space-between" align="center" padding="100px" color ='#d0d4f7'>
      {/* Left Side - Photo */}
      <div className="BagelFatOne" style={{ textAlign: 'center', padding: '0 20px', fontSize: '28px', color: '#d0d4f7', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h1 fontSize= "100px">About Us</h1>
        <p>Chicky Runners are running for wealth in a unique and unconventional way. These chicks are boldly taking action to surpass the standard norms and achieve financial success. They have chosen to defy the limitations of the daily routine and create their own opportunities. Embarking on their journey towards wealth, they have deviated from conventional norms and fearlessly taken steps to carve out their own destiny.</p>
      </div>

      <div style={{ padding: '150px' }}>
        <img src="/images/1041.png" alt="Photo" width="400px"border= "8px solid #d0d4f7" />
      </div>

      {/* Right Side - Text */}
      
    </Flex>

    <section className="team-section">
  <h2>Our Team</h2>
  <Box display="flex" justifyContent="center" alignItems="center">
    {teamMembers.map((member, index) => (
      <div key={index} className="team-member">
        <img src={`/images/${index + 1}.jpeg`} alt={member.name} />
        <div>
          <p>{member.name}</p>
          <p>{member.role}</p>
        </div>
      </div>
    ))}
  </Box>
</section>





<div className="footer">
  © 2023 CHICKY RUNNERS. All rights reserved.
</div>



</div>
    

    
  )
}
