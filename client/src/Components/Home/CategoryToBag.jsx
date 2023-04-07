import { Stack, Text, Flex, Box, Image } from "@chakra-ui/react";
import React from "react";
const bag = [
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-Jeans-men-1672915059.png",
    name: "Printed T-shirts",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-boxers-men-1672907482.png",
    name: "Oversized T-shirts",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-pyjamas-1668772679.jpg",
    name: "Combo T-shirts",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-2-1669360792.jpg",
    name: "Joggers",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-w-pyjamas-2-1675144063.jpg",
    name: "Vests",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-Shorts-Women-1678950685.png",
    name: "Full Sleeve T-shirts",
  },
];

const CategoryToBag = () => {
  return (
    <Stack mt="20px">
      <Text
        textAlign={"center"}
        fontWeight={550}
        fontSize={"2xl"}
        lineHeight={2}
      >
        CATEGORIES TO BAG
      </Text>
      <Flex justifyContent={"center"} alignItems={"center"} flexWrap={"wrap"}>
        {bag?.map((el, i) => (
          <Box key={i}>
            <Image src={el.img} alt="men" cursor={"pointer"} />
          </Box>
        ))}
      </Flex>
    </Stack>
  );
};

export default CategoryToBag;
