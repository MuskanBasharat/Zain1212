import React from 'react'
import {MyForm} from "./MyForm";

export const Contact = () => {
    const linkedin = "https://raw.githubusercontent.com/ZAINBASHARATALI/Large-Gif/master/linkedin.png";
    const whatsapp = "https://raw.githubusercontent.com/ZAINBASHARATALI/Large-Gif/master/whatsapp.png";
    const facebook = "https://raw.githubusercontent.com/ZAINBASHARATALI/Large-Gif/master/facebook.png";
    const instagram = "https://raw.githubusercontent.com/ZAINBASHARATALI/Large-Gif/master/insta.png";
    const twitter = "https://raw.githubusercontent.com/ZAINBASHARATALI/Large-Gif/master/x.png";
  return (

    <div className='contact' id='contact'>
        <h1 className="heading contact-head">Just say hi.</h1>
        <MyForm/>
         <div className="icons">
           <a href="https://www.linkedin.com/in/zainaliflutterdeveloper" target="_blank"><img src={linkedin} alt='linkedin' className='icon' /></a>
           <a href="https://wa.me/923034081609" target="_blank"> <img src={whatsapp} alt='whatsapp' className='icon' /></a>
           <a href="https://twitter.com/ZainBasharatAli" target="_blank"> <img src={twitter} alt='twitter' className='icon' /></a>
           <a href="https://www.instagram.com/zain_basharat_ali/" target="_blank"> <img src={instagram} alt='instagram' className='icon' /></a>
           <a href="https://web.facebook.com/zain.basharatali" target="_blank"> <img src={facebook} alt='facebook' className='icon' /></a>
         </div>
       {/* <div className="tip">  <p>I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
        <p>Feel free to reach out to me via email or connect with me on LinkedIn.</p></div>*/}
      
        
    </div>
  )
}
