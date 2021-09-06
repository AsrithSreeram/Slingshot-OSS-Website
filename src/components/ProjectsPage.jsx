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
import Sidebar from './Sidebar'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"






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

const ProjectsPage = () => {
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
    <div>
      <Navbar scrollNav={scrollNav} toggleHome={toggleHome} />
      <div className="video-bg">
        <img style = {{opacity: "1"}} src={SlingshotLogo} alt="Img" />
        </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/><br/>
      <br/><br/>
      <div style = {{display: "flex"}}>
      <Sidebar style = {{flex: "0.2"}}/>
      <div style = {{color: "white"}}>
        <div>
      <TextField style = {{color: "white"}} id="standard-basic" label="Enter Name" />
      </div>
      <div>
      <TextField id="standard-basic" label="Enter Github link" />
      </div>
      <div>
      <TextField id="standard-basic" label="Enter Hosting link" />
      </div>
    <center><Button>Submit</Button></center>


      </div>
      </div>
    </div>
    
    </>
  );
};

export default ProjectsPage;
