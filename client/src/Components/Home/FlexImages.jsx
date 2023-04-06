import { Box, Flex , Image ,Text} from '@chakra-ui/react'
import React from 'react'

const image=[
    {
        name:"New Arrivals",
        img:"https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-common-bestseller-1679567164.jpg"
    },
    {
        name:"Bestsellers",
        img:"https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-newarrivals-1679566144.jpg"
    },
    {
        name:"Official",
        img:"https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-common-official-collabb-1679567240.jpg"
    },
    {
        name:"Last size left",
        img:"https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg"
    },
    {
        name:"Plus Size",
        img:"https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-common-plus-size-1679567275.jpg"
    },
    {
        name:"Hot deals",
        img:"https://images.bewakoof.com/uploads/grid/app/hotdeals-2-1668491210.jpg"
    },
    {
        name:"Customization",
        img:"https://images.bewakoof.com/uploads/grid/app/me-shirt-thumbnail-1668508337.jpg"
    },

   
]

const FlexImages = () => {
  return (
    <Flex gap={4} flexWrap={'wrap'} justifyContent={"center"} alignItems={"center"} >
        {
            image?.map((el,i)=>(
                <Box key={i} >
                    <Image src={el.img} w={"120px"} />
                    <Text fontSize={"14px"} >{el.name}</Text>
                </Box>
            ))
        }
    </Flex>
  )
}

export default FlexImages