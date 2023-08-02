import React from 'react';
import { useState } from 'react';
import {  Flex, Image, Link} from '@chakra-ui/react';





export default function Home() {
  


 
  const [isLoading, setIsLoading] = useState(true);
  
  
  const [hoveredIndex, setHoveredIndex] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(false);
  };
  const buttons = [
    { name: 'About', href: '/about' },
    
    { name: 'Mint', href: 'https://injective.talis.art/' },
  ];
  const [isHovered, setIsHovered] = useState(false);

  
  
  const mintMouseEnter = () => {
    setIsHovered(true);
  };

  const mintMouseLeave = () => {
    setIsHovered(false);
  };
  const mints = [
    { name: 'About', href: '/' },
    
  ];
  
 
  
  


  
  
  

  return (
    
    
  
  
<div className="moving-background"> 
<Flex  className="superstar_memesbruh03" justify="space-between" align="center" padding="30px">

        
            {/*Left Side - Social Media Icons*/}
            
            <Flex justify="space-between" align="center" padding="2px">
                <Link href="/">
                    <Image src="/images/logo-export (1).png" width="250px" margin="0 50px"/>
                </Link>
                
            
            
           

            
            {/*Right Side - Sections and Connect*/}
            
            
      {buttons.map((button, index) => (
        <a
          key={index}
          href={button.href}
          className='class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">'
          style={{
            margin: '0 8px',
            padding: '10px 30px',
            background: `linear-gradient(135deg, ${hoveredIndex === index ?'#e79b6b' : '#e79b6b' }, ${hoveredIndex === index ? '#e79b6b' : '#ffb975'})`,
            color: hoveredIndex === index ? 'black' : 'white',
            cursor: 'pointer',
            textDecoration: 'none',
            borderRadius: '10%',
            fontSize: '25px',
            lineHeight: '0.75',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            
            
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {button.name}
        </a>
        
      ))}
      <button className='superstar_memesbruh03'
      style={{
        backgroundColor: isHovered ? 'darkgray' : 'gray',
        cursor: 'pointer',
            textDecoration: 'none',
            borderRadius: '10%',
            fontSize: '25px',
            lineHeight: '0.75',
            margin: '0 8px',
            padding: '10px 30px',
      }}
      onMouseEnter={mintMouseEnter}
      onMouseLeave={mintMouseLeave}
      href=""
    >
      Game
    </button>
    <Link href="https://twitter.com/theinjhallas">
                    <Image src="/images/580b57fcd9996e24bc43c53e.png" width="60px" margin="0 10px"/>
                </Link>
    </Flex>
  
</Flex>


</div>

);
    






}








