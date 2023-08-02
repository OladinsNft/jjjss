import React from 'react';
import {  useState } from 'react';
import { Flex, Image, Link,Box } from '@chakra-ui/react';







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
    
    <div className="about-background"> 
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
GAME

</button>
<Link href="https://twitter.com/theinjhallas">
        <Image src="/images/580b57fcd9996e24bc43c53e.png" width="60px" margin="0 10px"/>
    </Link>
</Flex>

</Flex>

      <div className="ymain-container" style={{ textAlign: 'center', padding: '0 20px', fontSize: '48px', color: '#e79b6b'  }}>
  <div className="superstar_memesbruh03">
    
    <h2 >1111 InjHallas ready to take over Injective Deserts!</h2>

    <p>InjHallas is on a mission to get those precious oils from the Injective Deserts.
    </p>
    <p> We&apos;ll soon uncover the riches of Injective!</p>
  </div>
  <div className="yright-section">
    <img className="ygif" src="/images/injhallas_gif2 (1).gif" alt="Fancy GIF" />
  </div>
</div>

    
    
<Flex className="superstar_memesbruh03" justify="space-between" align="center" padding="100px" color ='#e79b6b'>
      {/* Left Side - Photo */}
      <div style={{ padding: '150px' }}>
        <img src="/images/site2-export.png" alt="Photo" width="500px" />
      </div>

      {/* Right Side - Text */}
      <div className="superstar_memesbruh03" style={{ textAlign: 'center', padding: '0 20px', fontSize: '28px', color: '#e79b6b', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h1 fontSize= "100px">The InjHallas first NFT-Gaming Project on Injective</h1>
        <p>We will create tight-knit
DAO while having fun with our community games. Not only will we enjoy playing games but also contribute to Injective. We are with you with the P4R experience.</p>
      </div>
    </Flex>

    <Flex className="superstar_memesbruh03" justify="space-between" align="center" padding="100px" color ='#e79b6b'>
      {/* Left Side - Photo */}
      <div className="superstar_memesbruh03" style={{ textAlign: 'center', padding: '0 20px', fontSize: '28px', color: 'linear-gradient(to right, #e79b6b, #f9d9b0)', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h1 fontSize= "100px">community</h1>
        <p>Community is our top priority. It&apos;s the biggest supporter of long-term initiatives. With whitelists, sub-DAOs and token rewards, we will always manage to stay strong.</p>
      </div>

      <div style={{ padding: '150px' }}>
        <img src="/images/stop-export.png" alt="Photo" width="500px" />
      </div>

      {/* Right Side - Text */}
      
    </Flex>

    





<div className="footer">
  © 2023 THE INJHALLAS.
</div>



</div>
    

    
  )
}