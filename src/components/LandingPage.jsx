import React, { useState, useEffect } from "react";
import Video from "../video/video.mp4";
import {
  MdArrowForward as ArrowForward,
  MdKeyboardArrowRight as ArrowRight,
} from "react-icons/md";
import Img1 from "../img/svg-1.svg";
import Logo from "../img/logo.png";
import WordCloud from "../img/wordCloud.png";
import DailyAverage from "../img/dailyAverage.png";
import SlingshotLogo from "../img/Slingshotlogo.png";
import CountDownTimer from './CountDownTimer';
import Collapsible from 'react-collapsible';
import '../index.css';







import Img2 from "../img/svg-2.svg";
import Resume from "../img/book.png";
import Computer from "../img/computer.png";


import Img3 from "../img/svg-3.svg";
import Img4 from "../img/svg-4.svg";
import Img5 from "../img/svg-5.svg";
import { Link } from "react-scroll";
import axios from "axios";
import Navbar from "./Navbar";
import { animateScroll as scroll } from "react-scroll";

const LandingPage = () => {
  const [hover, setHover] = useState(false);
  const hoursMinSecs = {hours:24, minutes: 0, seconds: 0}
  const hoursMinSecs2 = {hours:72, minutes: 0, seconds: 0}
  const hoursMinSecs3 = {hours:72, minutes: 0, seconds: 0}

  

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };



  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <Navbar scrollNav={scrollNav} toggleHome={toggleHome} />
      <br/>
      

    

      <div class="bg-white dark:bg-gray-800 ">
    <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-2xl font-extrabold text-black dark:text-white sm:text-4xl">
            <h1 className="page-heading">Slingshot Open-Source-Sunday Challenges</h1>

          
        </h2>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
            <a target = "_blank" href = "https://discord.gg/g5zC7xeJ"><button type="button" class="focus:outline-none text-2xl transition duration-150 ease-in-out hover:bg-yellow-400 rounded text-white w-96 py-6 text-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                    Get started
                </button> </a>
            </div>
        </div>
    </div>
</div>
      
      <div class="w-full md:w-3/5 mx-auto p-8">
         <p>Current Slingshot <strong>OSS</strong>: Create a website for OSS challenge</p>
         <div class="shadow-md">
            <div class="tab w-full overflow-hidden border-t">
               <input class="absolute opacity-0" id="tab-single-one" type="radio" name="tabs2"/>
               <label class="block p-5 leading-normal cursor-pointer" for="tab-single-one">Beginner</label>
               <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p class="p-5">Build a static frontend website for Slingshot's Open Source Sunday with appropriate features such as the current challenge, levels, time, as all details regarding what OSS is about, how to submit ,what all to submit etc.</p>
               </div>
            </div>
            <div class="tab w-full overflow-hidden border-t">
               <input class="absolute opacity-0" id="tab-single-two" type="radio" name="tabs2"/>
               <label class="block p-5 leading-normal cursor-pointer" for="tab-single-two">Intermediate</label>
               <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p class="p-5">Do the beginner challenge and add backend to your website by adding features where users can:

</p>
                <ul>
                            <li class="p-5">Add previewable Github and YT Links</li>
                            <li class="p-5">The projects will show under different headers for each  open source Sunday </li>
                            <li class="p-5">A column where people can add their names if they are participating</li>
                            <li class="p-5">A real-time timer where users can see the time left for submission</li>
                          </ul>
               </div>
            </div>
            <div class="tab w-full overflow-hidden border-t">
               <input class="absolute opacity-0" id="tab-single-three" type="radio" name="tabs2"/>
               <label class="block p-5 leading-normal cursor-pointer" for="tab-single-three">Advanced</label>
               <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p class="p-5">Advanced: Do the intermediate challenge and add the following features:</p>
                  <ul style = {{textAlign: "left"}}>
                    <li class="p-5">Add a markdown description of their project (like Devpost)</li>
                    <li class="p-5">Sign In to their respective accounts</li>
                    <li class="p-5">Edit their OSS submissions </li>
                    <li class="p-5">An interactive dashboard where people can see their past submissions and participation</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>

     

     

      <div className="info-container dark">
        <div className="info-section">
          <div className="info-row imgStart">
            <div className="col1">
              <div className="text-wrap">
                <h1 className="top-line2">What is OSS?</h1>
                <h2 className="heading2">
                  Resume-worthy projects!
                </h2>
                <p className="subtitle2">
                  Open-Source Sunday challenges are weekly Coding competitions where members can improve their skills through creating projects that use cutting-edge technologies in many fields (ML, CyberSecurity, Web Dev, Game Dev). There are 3 tracks: Beginner + Intermediate + Advanced, so everyone can join no matter their skill level! There is a new prompt every week and you have 24-72 hours to complete it! 
                </p>
              </div>
            </div>
            <div className="col2">
              <div className="img-wrapper">
                <img src={Resume} alt="Img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="bg-yellow-500">
    <div class="container mx-auto grid grid-cols-2 gap-8 md:grid-cols-4 py-8 text-center">
        <div>
            <h5 class="text-5xl font-bold text-white">
                <span class="inline text-white">
                    Win
                </span>
               
            </h5>
            <p class="text-indigo-100 tracking-wide text-xs font-medium uppercase">
                $20 Amazon Gift Card
            </p>
        </div>
        <div>
            <h5 class="text-5xl font-bold text-white">
                <span class="inline text-white">
                    Become
                </span>
                <span class="text-indigo-200">
                    
                </span>
            </h5>
            <p class="text-indigo-100 tracking-wide text-xs font-medium uppercase">
                Slingshot Verified
            </p>
        </div>
        <div>
            <h5 class="text-5xl font-bold text-white">
                <span class="inline text-white">
                   Gain
                </span>
                <span class="text-indigo-200">
                    
                </span>
            </h5>
            <p class="text-indigo-100 tracking-wide text-xs font-medium uppercase">
                Respect from Peers
            </p>
        </div>
        <div>
            <h5 class="text-5xl font-bold text-white">
                <span class="inline text-white">
                    Acquire
                </span>
                
            </h5>
            <p class="text-indigo-100 tracking-wide text-xs font-medium uppercase">
                Publicity from Slingshot
            </p>
        </div>
    </div>
    <div class="w-62 mx-auto mt-4 p-4 flex">
        <button type="button" class="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-yellow-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            WINNERS BENEFITS 🚀👆
        </button>
    </div>
</section>

      <div className="info-container">
        <div className="info-section">
          <div className="info-row">
            <div className="col1">
              <div className="text-wrap">
                <h1 className="top-line">How to Submit</h1>
                <h2 className="heading">Join the Brilliant Community on Discord!</h2>
                <p className="subtitle">
                  Head on to <a href = "https://discord.gg/g5zC7xeJ">Slingshot's Discord</a> and send in your submission to the OpenSource-challenge channel.
                </p>
                <a href = "https://discord.gg/g5zC7xeJ"><button class="btn">Join Now!</button></a>

              </div>
            </div>
            <div className="col2">
              <div className="img-wrapper">
                <img src={Img3} alt="Img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="info-container dark">
        <div className="info-section">
          <div className="info-row imgStart">
            <div className="col1">
              <div className="text-wrap">
                <h1 className="top-line2">What to Submit?</h1>
                <h2 className="heading2">
                  Make it Open-Source.
                </h2>
                <p className="subtitle2">
                  To make Open-Source Sundays live up to its name, we ask for you to submit a Github repo with a ReadME and a Website link if possible.
                </p>
              </div>
            </div>
            <div className="col2">
              <div className="img-wrapper">
                <img src={Img4} alt="Img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="info-container">
        <div className="info-section">
          <div className="info-row">
            <div className="col1">
              <div className="text-wrap">
                <h1 className="top-line">JOIN NOW</h1>
                <h2 className="heading">Are you ready to improve your skills?</h2>
                <p className="subtitle">
                <center>
              <div style = {{display: "flex"}}>
                <p>Beginner Track Countdown: &nbsp; </p>
                <p> </p>
                <CountDownTimer hoursMinSecs={hoursMinSecs}/>
              </div>
              <div style = {{display: "flex"}}>
                <p>Intermediate Track Countdown: &nbsp; </p>
                <CountDownTimer hoursMinSecs={hoursMinSecs2}/>
              </div>
              <div style = {{display: "flex"}}>
                <p>Advanced Track Countdown: &nbsp; </p>
                <CountDownTimer hoursMinSecs={hoursMinSecs3}/>
              </div>
            </center>                </p>
              </div>
            </div>
            <div className="col2">
              <div className="img-wrapper">
                <img src={Computer} alt="Img" />
              </div>
            </div>
          </div>
        </div>
      </div>

     

    
    </>
  );
};

export default LandingPage;
