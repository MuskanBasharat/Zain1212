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
            <img src={linkedin} alt='linkedin' className='icon' />
            <img src={whatsapp} alt='whatsapp' className='icon' />
            <img src={twitter} alt='twitter' className='icon' />
            <img src={instagram} alt='instagram' className='icon' />
            <img src={facebook} alt='facebook' className='icon' />
         </div>
       {/* <div className="tip">  <p>I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
        <p>Feel free to reach out to me via email or connect with me on LinkedIn.</p></div>*/}
      
        
    </div>
  )
}
