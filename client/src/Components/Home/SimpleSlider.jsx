import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box , Image } from "@chakra-ui/react";

const data=[
  "https://images.bewakoof.com/uploads/grid/app/1x1-fresh-summer-arrivals-common.jpg",
  "https://images.bewakoof.com/uploads/grid/app/1x1-joggers-common-w-bdayunit-1680263895.jpg",
  "https://images.bewakoof.com/uploads/grid/app/1x1-Birthday-Launch-Banner-02-1680270524.jpg",
  "https://images.bewakoof.com/uploads/grid/app/1x1-tshirt-dresses-1677000030.jpg",
  "https://images.bewakoof.com/uploads/grid/app/1x1-jumbo-prints-common-02-1677000028.jpg",
  "https://images.bewakoof.com/uploads/grid/app/static-1x1-Polo-01-1677000030.jpg" 
]

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      

      {
        data?.map((el,i)=>(
          <Box key={i} >
            <Image src={el} w="500px" />
          </Box>
        ))
      }
      
    </Slider>
  );
}