import React  from 'react';
import Card from "./card";

/* import Swiper from 'react-id-swiper'; 
import 'swiper/css/swiper.css';  */


import  card1 from "../../../assets/card1SVG.svg";
import  card2 from "../../../assets/card2SVG.svg";
import  card3 from "../../../assets/card3SVG.svg";
import  card4 from "../../../assets/card4SVG.svg";
import  card5 from "../../../assets/card5SVG.svg";
import  card6 from "../../../assets/card6SVG.svg";
import  card7 from "../../../assets/card7SVG.svg";
import  card8 from "../../../assets/card8SVG.svg";
import  card9 from "../../../assets/card9SVG.svg";

export default function Carousel() {


    let startX;
    let mouseDown;
    const slider = React.useRef();
    const carousel = React.useRef();
    




    //TODO: Handle Event for mouseDown
    const handleMouseDown = (e) => {
    
      e.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

        startX = e.nativeEvent.offsetX - carousel.current.getBoundingClientRect().left;
        /* setStartX(e.nativeEvent.offsetX - carousel.current.getBoundingClientRect().left); */
        console.log(e);
        console.log(e.nativeEvent.offsetX);
        console.log(carousel.current.getBoundingClientRect().left);
        console.log(`StartX: ${startX}`);
        

    }

    const handleMouseUp = () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    }


    //TODO: Handle Event for mouseMove
    const handleMouseMove = (e) => {
    
       let  x = e.offsetX;

       
        carousel.current.style.left = `${x - startX}px`;
      console.log(carousel.current.style.left);
        const end = slider.current.offsetWidth - slider.current.offsetWidth;
        const start = 0;
     
       /*  if (newX < start) {
          newX = 0;
        }
     
        if (newX > end) {
          newX = end;
        } */
  
    }

    const checkBoundary = () => {

    }

    return (    

     /*  <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Card picture={card1} color={"#baf290"} title={"Pick A Mood"} desc={"Select the mood your are feeling right now and record so that you can compare it later."}  /></SwiperSlide>
      <SwiperSlide>   <Card picture={card2} color={"#bff2ea"} title={"Write a Journal Entry"} desc={"Select the mood your are feeling right now and record so that you can compare it later."}  /></SwiperSlide>
      <SwiperSlide> <Card picture={card3} color={"#ffd089"} title={"View Dashboard"} desc={"Select the mood your are feeling right now and record so that you can compare it later."}  /></SwiperSlide>
      <SwiperSlide>  <Card picture={card4} color={"#ee968d"} title={"Monthly/Weekly Graph"} desc={"Select the mood your are feeling right now and record so that you can compare it later."}  /></SwiperSlide>
      <SwiperSlide><Card picture={card5} color={"#d3c0f3"} title={"Mood Percentages"} desc={"Select the mood your are feeling right now and record so that you can compare it later."}  /></SwiperSlide>
      <SwiperSlide><Card picture={card6} color={"#c8ecad"} title={"Write a Journal Entry"} desc={"Select the mood your are feeling right now and record so that you can compare it later."}  /></SwiperSlide>
      <SwiperSlide><Card picture={card7} color={"#d8ebe8"} title={"View Dashboard"} desc={"Select the mood your are feeling right now and record so that you can compare it later."}  /></SwiperSlide>
      <SwiperSlide><Card picture={card8} color={"#fee4bd"} title={"Monthly/Weekly Graph"} desc={"Select the mood your are feeling right now and record so that you can compare it later."}  /></SwiperSlide>
      <SwiperSlide><Card picture={card9} color={"#ffc3bd"} title={"Mood Percentages"} desc={"Select the mood your are feeling right now and record so that you can compare it later."}  /></SwiperSlide>

      ...
    </Swiper> */

       <div className="slider" ref={slider} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>

      
        <div className="cardCarousel" ref={carousel} >

            <Card picture={card1} color={"#baf290"} title={"Pick A Mood"} desc={"Select the mood your are feeling right now and record so that you can compare it later."}  />
            <Card picture={card2} color={"#bff2ea"} title={"Write a Journal Entry"} desc={"Select the mood your are feeling right now and record so that you can compare it later."}  />
            <Card picture={card3} color={"#ffd089"} title={"View Dashboard"} desc={"Select the mood your are feeling right now and record so that you can compare it later."}  />
            <Card picture={card4} color={"#ee968d"} title={"Monthly/Weekly Graph"} desc={"Select the mood your are feeling right now and record so that you can compare it later."}  />
            <Card picture={card5} color={"#d3c0f3"} title={"Mood Percentages"} desc={"Select the mood your are feeling right now and record so that you can compare it later."}  />
            <Card picture={card6} color={"#c8ecad"} title={"Write a Journal Entry"} desc={"Select the mood your are feeling right now and record so that you can compare it later."}  />
            <Card picture={card7} color={"#d8ebe8"} title={"View Dashboard"} desc={"Select the mood your are feeling right now and record so that you can compare it later."}  />
            <Card picture={card8} color={"#fee4bd"} title={"Monthly/Weekly Graph"} desc={"Select the mood your are feeling right now and record so that you can compare it later."}  />
            <Card picture={card9} color={"#ffc3bd"} title={"Mood Percentages"} desc={"Select the mood your are feeling right now and record so that you can compare it later."}  />
    </div>
          </div> 
    )
}

