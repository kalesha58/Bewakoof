import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import profile from "../images/avatar.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../Redux/Actions/userAction";
const avatars = [
  {
    name: "Ryan Florence",
    url: "https://bit.ly/ryan-florence",
  },
  {
    name: "Segun Adebayo",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Kent Dodds",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "Christian Nwamba",
    url: "https://bit.ly/code-beast",
  },
];

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState(profile);
  const { loading, error, isAuthenticated, token } = useSelector(
    (state) => state.user
  );

  //{=============================REGISTER--FORM===========================}
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
    answer: "",
    number: "",
  });

  const { name, email, password, answer, number } = users;
  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("answer", answer);
    myForm.set("number", number);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
  };
  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUsers({ ...users, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (error) {
      console.log("error");
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate("/");
    }
  }, [error, isAuthenticated, dispatch, token]);

  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Senior web designers{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              &
            </Text>{" "}
            Full-Stack Developers
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  size={{ base: "md", md: "lg" }}
                  position={"relative"}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, red.400,pink.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
              +
            </Text>
            <Flex
              align={"center"}
              justify={"center"}
              fontFamily={"heading"}
              fontSize={{ base: "sm", md: "lg" }}
              bg={"gray.800"}
              color={"white"}
              rounded={"full"}
              minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
              minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
              position={"relative"}
              _before={{
                content: '""',
                width: "full",
                height: "full",
                rounded: "full",
                transform: "scale(1.125)",
                bgGradient: "linear(to-bl, orange.400,yellow.400)",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Join our team
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            {/* <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                We’re looking for amazing engineers just like you! Become a part
                of our rockstar engineering team and skyrocket your career!
              </Text> */}
          </Stack>
          <Box as={"form"} mt={10} onSubmit={registerSubmit}>
            <Stack spacing={4}>
              <Input
                placeholder="Name"
                name="name"
                value={name}
                bg={"gray.100"}
                border={0}
                type="text"
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                onChange={registerDataChange}
              />
              <Input
                placeholder="Email"
                name="email"
                value={email}
                bg={"gray.100"}
                border={0}
                type="email"
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                onChange={registerDataChange}
              />
              <Input
                placeholder="Password"
                name="password"
                value={password}
                bg={"gray.100"}
                border={0}
                type="password"
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                onChange={registerDataChange}
              />
              <Input
                placeholder="+91 (_) _-_-__"
                name="number"
                value={number}
                bg={"gray.100"}
                border={0}
                type="number"
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                onChange={registerDataChange}
              />
              <Input
                placeholder="Answer"
                name="answer"
                value={answer}
                bg={"gray.100"}
                border={0}
                type="text"
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                onChange={registerDataChange}
              />
              <img
                style={{ borderRadius: "50px" }}
                width="50px"
                height="50px"
                src={avatarPreview}
                alt="Avatar Preview"
              />
              <Input
                placeholder="Avatar"
                bg={"gray.100"}
                border={0}
                type="file"
                name="avatar"
                accept="image/*"
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                onChange={registerDataChange}
              />

              {/* <Button fontFamily={'heading'} bg={'gray.200'} color={'gray.800'}>
                  Upload CV
                </Button> */}
            </Stack>
            <Input
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, red.400,pink.400)",
                boxShadow: "xl",
              }}
              type="submit"
              value="Signup"
            />
          </Box>
          form
        </Stack>
      </Container>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </Box>
  );
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};