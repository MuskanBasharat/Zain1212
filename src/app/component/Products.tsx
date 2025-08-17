import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
export const Products = () => {
    const Pro1 = "https://raw.githubusercontent.com/ZAINBASHARATALI/Large-Gif/master/civicmedia.webp";
    const Pro2 = "https://raw.githubusercontent.com/ZAINBASHARATALI/Large-Gif/master/iyyu.webp";
    const Pro3 = "https://raw.githubusercontent.com/ZAINBASHARATALI/Large-Gif/master/thepeople.webp";
  return (
    <div className='products' id='products'>
        <div className="header-h1">
                    <h1 className='heading'>Featured Products</h1>
        </div>
        <div className='pro'>
              <img src={Pro1} alt='first' width="756px" className='left images' />          
              <div className='right pro-text'>
                <div className="buttons">
                  <Badge className="badges" variant="secondary">Flutter</Badge>
                  <Badge className="badges" variant="secondary">Location</Badge>
                  <Badge className="badges" variant="secondary">Audio Stream</Badge>
                  <Badge className="badges" variant="secondary">Android iOS</Badge>

                </div>
                          <h2 className='heading-h2'>Civic Media</h2> 
               <p  className='text-p'>
                Civic Media is leaning into local radio to keep Wisconsin communities informed, entertained and connected.</p>
             <p className='text-p'>    It has multiple stations with live audio streams and sends location aware notifications to let users know 
                about upcoming events in their area.
               </p>
                <div className="buttons">
                <Button className="butt-store" variant="outline">App Store</Button>
                <Button className="butt-store" variant="outline">Play Store</Button>

              </div>
              </div>
            
        </div>
         <div className='pro reverse'>

              <div className='left pro-text'>
                <div className="buttons">
                                    <Badge className="badges" variant="secondary">Flutter</Badge>
                                    <Badge className="badges" variant="secondary">Web Sockets</Badge>
                                    <Badge className="badges" variant="secondary">Android iOS</Badge>
                                    

                </div>
                          <h2 className='heading-h2'>iYYU</h2> 
               <p  className='text-p'>
               Connect and stay in contact on your own terms. Log on to iYYU, the privacy first communication platform.
                You give us your trust, because we are privacy first.                </p>
             <p className='text-p'>    Creating a modern communication platform with ambition! Your person data is your data.
                 At iYYU we put your privacy at the heart of our decision-making while developing our platform further.
               </p>
                <div className="buttons">
                <Button className="butt-store" variant="outline">App Store</Button>
                <Button className="butt-store" variant="outline">Play Store</Button>

              </div>
              </div>
                          <img src={Pro2} alt='first' width="756px" className='right images' />          

        </div>
        <div className='pro'>
        
              <img src={Pro3} alt='first' width="756px" className='left images' />          
              <div className='right pro-text'>
                <div className="buttons">
                                    <Badge className="badges" variant="secondary">FlutterFlow</Badge>
                                    <Badge className="badges" variant="secondary">News Events</Badge>
                                    <Badge className="badges" variant="secondary">Podcasts</Badge>
                                    <Badge className="badges" variant="secondary">Android iOS</Badge>
                                    

                </div>
                          <h2 className='heading-h2'>People &amp; Computers</h2> 
               <p  className='text-p'>
                People &amp; Computers is a veteran media outlet and the leading event and conference organizer in Israel&apos;s tech industry.                </p>
             <p className='text-p'>  
                In person, in print and online, People & Computers is the voice of Israeli tech,
                 and the leader of the thriving Israel tech community with 200 conferences, events, and forums organized and produced every year.
               </p>
                <div className="buttons">
                <Button className="butt-store" variant="outline">App Store</Button>
                <Button className="butt-store" variant="outline">Play Store</Button>

              </div>
              </div>
            
        </div>
    </div>
  )
}
