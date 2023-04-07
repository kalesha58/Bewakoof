import {
  Box,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  List,
  ListItem,
  Text,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import { BsPinterest, BsSnapchat, BsApple } from "react-icons/bs";

const footItem1 = [
  {
    company: "Boogy®",
    title: "CUSTOMER SERVICE",
    links: ["Contact Us", "Track Order", "Return Order", "Cancel Order"],
  },
];

const footItem2 = [
  {
    title: "COMPANY",
    links: [
      "About Us",
      "We're Hiring",
      "Terms & Conditions",
      "Privacy Policy",
      "Blog",
    ],
  },
];

const Footer = () => {
  return (
    <Box
      px={"2rem"}
      mt={"1rem"}
      overflowY="hidden"
      bg={"#181818"}
    
      
    >
      <Heading color={"#fdd835"} mb={7}>
        Boogy®
      </Heading>
      <Flex
        p={"2rem"}
        mt={"2rem"}
        zIndex={1000}
        bg={"blackAlpha.800"}
        flexWrap={"wrap"}
        w="100%"
        justifyContent={"space-between"}
        overflowY="hidden"
      >
        <Stack gap={"5rem"}>
          {footItem1?.map((el) => {
            return (
              <>
                <Box pt={"1.5rem"} key={Math.random() * 100 + 9}>
                  <Heading fontSize={"1.1rem"} color={"#fdd835"}>
                    {el.title}
                  </Heading>
                  <List pt={"1rem"} spacing={1} color={"white"}>
                    {el?.links.map((e) => {
                      return (
                        <ListItem key={Math.random() * 100 + 10}>
                          <Text fontSize={"0.9rem"}>{e}</Text>
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>
              </>
            );
          })}
        </Stack>
        <Flex gap={"5rem"}>
          {footItem2?.map((el) => {
            return (
              <Box pt={"1.5rem"} key={Math.random() * 100 + 9}>
                <Heading fontSize={"1.1rem"} color={"#fdd835"}>
                  {el.title}
                </Heading>
                <List pt={"1rem"} spacing={1} color={"white"}>
                  {el?.links.map((e) => {
                    return (
                      <ListItem key={Math.random() * 100 + 10}>
                        <Text fontSize={"0.9rem"}>{e}</Text>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            );
          })}
        </Flex>

        <Flex>
          <Box pt={"1.5rem"}>
            <Heading fontSize={"1.1rem"} color={"#fdd835"}>
              CONNECT WITH US
            </Heading>
            <List pt={"1rem"} spacing={2} color={"white"}>
              <ListItem>
                <Flex alignItems={"center"} gap={"0.3rem"}>
                  <Icon fontSize={"1.2rem"} as={AiFillFacebook} />
                  <Text fontSize={"0.9rem"}>4.7M People Like this</Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex alignItems={"center"} gap={"0.3rem"}>
                  <Icon fontSize={"1.2rem"} as={AiFillInstagram} />
                  <Text fontSize={"0.9rem"}>1M Follwers</Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gap={"0.3rem"}
                >
                  <Icon fontSize={"1.2rem"} as={SiTwitter} />
                  <Icon fontSize={"1.2rem"} as={BsPinterest} />
                  <Icon fontSize={"1.2rem"} as={BsSnapchat} />
                  <Icon fontSize={"1.2rem"} as={BsApple} />
                </Flex>
              </ListItem>
            </List>
          </Box>
        </Flex>

        <Flex>
          <Box pt={"1.5rem"}>
            <Heading fontSize={"1.1rem"} color={"#fdd835"}>
              CONNECT WITH US
            </Heading>
            <List pt={"1rem"} spacing={2} color={"white"}>
              <ListItem>
                <Flex alignItems={"center"} gap={"0.3rem"}>
                  <InputGroup>
                    <Input
                      type="email"
                      border={"none"}
                      borderBottom={"2px solid #fdd835"}
                      placeholder="Enter email id"
                    />
                    <InputRightAddon
                      bg={"#fdd835"}
                      borderColor={"#fdd835"}
                      children="Subscribe"
                    />
                  </InputGroup>
                </Flex>
              </ListItem>
            </List>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
