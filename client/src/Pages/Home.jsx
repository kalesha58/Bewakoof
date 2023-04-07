import React from 'react'
import SimpleSlider from '../Components/Home/SimpleSlider'

import {Box , HStack,Text, Image, Stack, Flex, VStack} from "@chakra-ui/react"
import FlexImages from '../Components/Home/FlexImages'
import Layout from '../Components/Layout/Layout'
import Trendings from '../Components/Home/Trendings'


const Home = () => {
  return (
    <Layout>

    <Box mt="70px" fontFamily={"sans-serif"}  >
     <SimpleSlider/>
      <Box mt={6} >
        <Image src="https://images.bewakoof.com/uploads/grid/app/thun-strip-desktop-2ndweekcoming-soon-1680765714.jpg" w="100%" />
      </Box>
      <Stack justifyContent={"center"} alignItems={"center"} mt={3} >
        <FlexImages/>
      </Stack>
      <Box mt={10} >
        <Text textAlign={"center"} fontWeight={550} fontSize={"2xl"}lineHeight={2}>DESIGNS OF THE WEEK</Text>
        <div  style={{display:"flex" }} >
          <Image src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1680587717.jpg" alt="men" w="50%"  />
          <Image src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1680587718.jpg" alt="women" w="50%" />
        </div>
      </Box>
      <Box>
        <Trendings/>
      </Box>
      <VStack>
      <Text textAlign={"center"} fontWeight={550} fontSize={"2xl"}lineHeight={2}>TOO HOT TO BE MISSED</Text>
      <div style={{display:"flex", gap:"20px" }}>
          <Box>
            <Image src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-B3AT999-1679317081-1680264517.jpg"  />
          </Box>
          <Box>
            <Image src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-airy-sleeveless-tshirts-withbdayunit-1680673288.jpg"   />
          </Box>
          
      </div>
      <div style={{display:"flex" ,gap:"20px" , marginTop:"20px" }}>
      <Box>
            <Image src="https://images.bewakoof.com/uploads/grid/app/MIDSIZE-bdaylogo-bftees-women-1680268877.jpg"  />
          </Box>
          <Box>
            <Image src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-shorts-withbdayunit-1680267707.jpg"  />
          </Box>
      </div>
      </VStack>
    </Box>
    </Layout>
  )
}

export default Home