import React from 'react'
import { Stack, Text, Flex, Box, Image } from "@chakra-ui/react";

const acc=[
    {
        img: "https://images.bewakoof.com/uploads/grid/app/category-box-Mobile-covers-1672907490.png",
        
      },
      {
        img: "https://images.bewakoof.com/uploads/grid/app/category-box-sliders-men-1672907494.png",
        
      },
      {
        img: "https://images.bewakoof.com/uploads/grid/app/category-box-backpacks-1672907481.png",
        
      },
      {
        img: "https://images.bewakoof.com/uploads/grid/app/category-box-Phone-gripper-1678944026.png",
       
      },
      {
        img: "https://images.bewakoof.com/uploads/grid/app/mugs-category-box-1678791481.jpg",
        
      },
      {
        img: "https://images.bewakoof.com/uploads/grid/app/category-box-caps-1672907483.png",
       
      },
]

const TopAccessories = () => {
  return (
    <Stack mt="20px" >
      <Text
        textAlign={"center"}
        fontWeight={550}
        fontSize={"2xl"}
        lineHeight={2}
      >
        TOP ACCESSORIES
      </Text>
      <Flex justifyContent={"center"} alignItems={"center"} flexWrap={"wrap"}>
        {acc?.map((el, i) => (
          <Box key={i}>
            <Image src={el.img} alt="men" cursor={"pointer"} />
          </Box>
        ))}
      </Flex>
    </Stack>
  )
}

export default TopAccessories