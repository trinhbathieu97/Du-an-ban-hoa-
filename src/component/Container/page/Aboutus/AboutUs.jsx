import React from 'react'
import "./About.modules.scss"
import about_1 from "../../../ImgApp/about-1.jpg"
import about_2 from "../../../ImgApp/abuot-2.jpg"
import about_3 from "../../../ImgApp/about-3.jpg"
import about_4 from "../../../ImgApp/about-4.jpg"
import about_5 from "../../../ImgApp/about-5.jpg"
import { Link } from 'react-router-dom'
import Nabar_page from '../../../UI/organisms/Navbar_page/Nabar_page'
const AboutUs = () => {
    const type = "About"
  return (
    <div className='about'>

        <Nabar_page type ={type}/>
        
        <div className='about_contenr'>
            <div className='about_contenr-text'>
                <p>
                The best way to brighten the special day of a friend or loved one is with flowers. But what happens when that special someone is far away? With Cassiopeia it is possible to surprise someone with a lovely bouquet no matter where he or she is in the world.
                </p>
                <p>
                With over 15 years of experience, we have covered many requests and are always receptive to all of your ideas, greeted with enthusiasm and our can-do attitude - if we aim to achieve something then we will!
                </p>
                <p>
                Over the course of the last 15 years we have grown steadily thanks to the trust placed in us by our customers. Today, We are a leading company in the world for sending flowers. We are also able to speedily ship fresh flowers to more than 20 countries around the world.
                </p>
            </div>
            <div className="about_contenr-img">
                <div className='contenr_img-1'>
                    <div className='img-1_top'>
                        <img src={about_1} alt="" />
                    </div>
                    <div className='img-1_boottom'>
                        <img src={about_2} alt="" />
                        <img src={about_3} alt="" />
                    </div>
                </div>
                <div className='contenr_img-2'>
                    <img src={about_4} alt="" />
                    <img src={about_5} alt="" />
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs