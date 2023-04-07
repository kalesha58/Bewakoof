import React from 'react'
import {Box, HStack, Stack , Image , Text , Flex} from "@chakra-ui/react"

const men=[
    {
     img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-Printed-Tshirt--1--1675842429.png",
     name:"Printed T-shirts"
    },
    {
        img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-ovrszd-1676537032.jpg",
        name:"Oversized T-shirts"
       },
       {
        img:"https://images.bewakoof.com/uploads/grid/app/category-box-ovrszd-tees-m-1677580843.jpg",
        name:"Combo T-shirts"
       },
       {
        img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668772677.jpg",
        name:"Joggers"
       },
       {
        img:"https://images.bewakoof.com/uploads/grid/app/vests-category-icon-1675844905.jpg",
        name:"Vests"
       },
       {
        img:"https://images.bewakoof.com/uploads/grid/app/category-box-Full-Sleeve-Tshirt-1673010261-1676129954.jpg",
        name:"Full Sleeve T-shirts"
       }
]

const women=[
    {
        img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-printed-tshirts-1668773246.jpg",
        name:"Printed T-shirts"
       },
       {
           img:"https://images.bewakoof.com/uploads/grid/app/category-box-overszd-w--1--1677658025.jpg",
           name:"Oversized T-shirts"
          },
          {
           img:"https://images.bewakoof.com/uploads/grid/app/category-box-ovrszd-tees-w-1677580843.jpg",
           name:"Combo T-shirts"
          },
          {
           img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668773245.jpg",
           name:"Joggers"
          },
          {
           img:"https://images.bewakoof.com/uploads/grid/app/category-box-w-dresses-1675144062.jpg",
           name:"Vests"
          },
          {
           img:"https://images.bewakoof.com/uploads/grid/app/category-box-boyfriend-tees-1675319582.jpg",
           name:"Full Sleeve T-shirts"
          }
]



const Trendings = () => {
  return (
   <Stack mt="20px" >
    <Text textAlign={"center"} fontWeight={550} fontSize={"2xl"} lineHeight={2}>TRENDING CATEGORIES</Text>
      <Flex justifyContent={"center"} alignItems={"center"} flexWrap={"wrap"} >
        {
            men?.map((el,i)=>(
                <Box key={i} >
                    <Image src={el.img} alt="men" cursor={"pointer"} />
                    
                </Box>
            ))
        }
      </Flex>
      <Flex justifyContent={"center"}  alignItems={"center"} flexWrap={"wrap"} >
      {
            women?.map((el,i)=>(
                <Box key={i} >
                    <Image src={el.img} alt="women" cursor={"pointer"}  />
                   
                </Box>
            ))
        }
      </Flex>
   </Stack>
  )
}

export default Trendings