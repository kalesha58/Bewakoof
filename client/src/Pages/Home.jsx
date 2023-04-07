import React from "react";
import SimpleSlider from "../Components/Home/SimpleSlider";

import {
  Box,
  Text,
  Image,
  Stack,
  VStack,
} from "@chakra-ui/react";
import FlexImages from "../Components/Home/FlexImages";
import Layout from "../Components/Layout/Layout";
import Trendings from "../Components/Home/Trendings";
import CategoryToBag from "../Components/Home/CategoryToBag";
import Slider2 from "../Components/Home/Slider2";
import TopAccessories from "../Components/Home/TopAccessories";
import Footer from "../Components/Home/Footer";

const Home = () => {
  return (
    <Layout>
      <Box mt="70px" fontFamily={"sans-serif"}>
        <SimpleSlider />
        
        <Box mt={6}>
          <Image
            src="https://images.bewakoof.com/uploads/grid/app/thun-strip-desktop-2ndweekcoming-soon-1680765714.jpg"
            w="100%"
          />
        </Box>
        
        <Stack justifyContent={"center"} alignItems={"center"} mt={3}>
          <FlexImages />
        </Stack>
        
        <Box mt={10}>
          <Text
            textAlign={"center"}
            fontWeight={550}
            fontSize={"2xl"}
            lineHeight={2}
          >
            DESIGNS OF THE WEEK
          </Text>
          <div style={{ display: "flex" }}>
            <Image
              src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1680587717.jpg"
              alt="men"
              w="50%"
            />
            <Image
              src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1680587718.jpg"
              alt="women"
              w="50%"
            />
          </div>
        </Box>
        
        <Box>
          <Trendings />
        </Box>
        
        <VStack>
          <Text
            textAlign={"center"}
            fontWeight={550}
            fontSize={"2xl"}
            lineHeight={2}
          >
            TOO HOT TO BE MISSED
          </Text>
          <div style={{ display: "flex", gap: "20px" }}>
            <Box>
              <Image src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-B3AT999-1679317081-1680264517.jpg" />
            </Box>
            <Box>
              <Image src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-airy-sleeveless-tshirts-withbdayunit-1680673288.jpg" />
            </Box>
          </div>
          <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
            <Box>
              <Image src="https://images.bewakoof.com/uploads/grid/app/MIDSIZE-bdaylogo-bftees-women-1680268877.jpg" />
            </Box>
            <Box>
              <Image src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-shorts-withbdayunit-1680267707.jpg" />
            </Box>
          </div>
        </VStack>
        
        <Box>
          <CategoryToBag />
        </Box>
        
        <Box>
          <Slider2/>
        </Box>
        
        <Box>
          <TopAccessories/>
        </Box>
        
        <VStack>
          <Text
            textAlign={"center"}
            fontWeight={550}
            fontSize={"2xl"}
            lineHeight={2}
          >
            OUR BEST PICKS
          </Text>
          <div style={{ display: "flex", gap: "20px" }}>
            <Box>
              <Image src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-APR2023-DENIM-stciker-common-sticker-01-1680600198.jpg" />
            </Box>
            <Box>
              <Image src="https://images.bewakoof.com/uploads/grid/app/MIDSIZE-bdaylogo-bts-women-1680268878.jpg" />
            </Box>
          </div>
          <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
            <Box>
              <Image src="https://images.bewakoof.com/uploads/grid/app/plus-size-bday-1680263074.jpg" />
            </Box>
            <Box>
              <Image src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-cotton-comfort-combos-with-unit-1680263897.gif" />
            </Box>
          </div>
        </VStack>   

        <Box mt="13px" >
          <Image src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg" w="100%" />
        </Box>

        <Box mt="13px" >
          <Image src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg"  w="100%" />
        </Box>
        <Box>
          <Footer/>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
