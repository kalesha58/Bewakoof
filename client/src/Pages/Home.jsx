import React from 'react'
import SimpleSlider from '../Components/Home/SimpleSlider'

import {Box , Image, Stack} from "@chakra-ui/react"
import FlexImages from '../Components/Home/FlexImages'
import Layout from '../Components/Layout/Layout'


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
    </Box>
    </Layout>
  )
}

export default Home