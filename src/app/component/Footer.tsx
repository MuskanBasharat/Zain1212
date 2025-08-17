import React from 'react'

export const Footer = () => {
  const date =new Date().getFullYear();
    const logo = "https://raw.githubusercontent.com/ZAINBASHARATALI/Large-Gif/master/namelogo.png";
  return (
    <div className='footer'> 
    <div className="footer-container"><div className='footer-left'>
      <img src={logo} alt='logo' className='footer-logo'/>
            <h3 className='footer-text'>Zain Basharat Ali<br/> Flutter APP Developer</h3>
             </div>
             <div className='footer-right'>
            <p className='footer-copy'>© {date} zainali.dev </p>
            
         <p className='text-p'>   Made with ❤️ by Muskan Basharat</p></div>
    </div>
           
    </div>
  )
}
