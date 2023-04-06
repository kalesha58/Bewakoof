import React from 'react'
import SimpleSlider from '../Components/Home/SimpleSlider'

import {Box , Image, Stack} from "@chakra-ui/react"
import FlexImages from '../Components/Home/FlexImages'


const Home = () => {
  return (
    <Box mt="70px" fontFamily={"sans-serif"}  >
     <SimpleSlider/>
      <Box mt={6} >
        <Image src="https://images.bewakoof.com/uploads/grid/app/thun-strip-desktop-2ndweekcoming-soon-1680765714.jpg" w="100%" />
      </Box>
      <Stack justifyContent={"center"} alignItems={"center"} mt={3} >
        <FlexImages/>
      </Stack>
    </Box>
  )
}

export default Home