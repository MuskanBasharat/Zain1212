import {Header} from "@/app/component/Header";
import { Intro } from "./component/Intro";
import { Work } from "./component/Work";
import {Products} from "./component/Products";
import { Contact } from "./component/Contact";
import './main.css';
import { Footer } from "./component/Footer";
import { Scroll } from "./component/Scroll";

export default function Home() {
  return (
    <div className="home" id='home'>
      <Header/>
      <div className="body">
        <Intro/>
       
    <Work/>
    <Products/>
     <Scroll/>
    <Contact/>
    <Footer/>
      </div>
    
    </div>
    
  );
}
