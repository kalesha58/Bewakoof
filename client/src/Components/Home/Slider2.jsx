import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";

const data = [
  "https://images.bewakoof.com/uploads/grid/app/static-1x1-NoFade-new--1--1680669546.jpg",
  "https://images.bewakoof.com/uploads/grid/app/1x1-cotm-common-version02--1--1680677351.jpg",
  "https://images.bewakoof.com/uploads/grid/app/graphic-tee-bday-1680263072.jpg",
  "https://images.bewakoof.com/uploads/grid/app/1x1-bdaylogo-bags-common-1680268706.jpg",
  "https://images.bewakoof.com/uploads/grid/app/1x1-pyjamas-common-1680268331.jpg",
];

export default function Slider2() {
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
      {data?.map((el, i) => (
        <Box key={i}>
          <Image src={el} w="500px" />
        </Box>
      ))}
    </Slider>
  );
}
