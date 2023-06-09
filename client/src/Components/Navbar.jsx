import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  HStack,
  Collapse,
  Icon,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../images/logos.png";


import { useAuth } from "../context/auth";
// import { MdDashboard } from "react-icons/md";
// import { BiLogOutCircle } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [auth, setAuth] = useAuth();
  // const navigate = useNavigate();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        width={"full"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        zIndex={999}
        pos={"fixed"}
        top={0}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            {/* <Image src={logo} alt="logo" w={"150px"} /> */}
            <Image src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo-bday-y23.svg" alt="logo" w={"150px"}  />
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        {!auth?.user ? (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Link to="/login">
              <Button
                as={"a"}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"pink.400"}
                href={"#"}
                _hover={{
                  bg: "pink.300",
                }}
              >
                login
              </Button>
            </Link>
            <Link to="/register">
              <Button
                as={"a"}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"pink.400"}
                href={"#"}
                _hover={{
                  bg: "pink.300",
                }}
              >
                Sign Up
              </Button>
            </Link>
          </Stack>
        ) : (
          <HStack>
            {/* <MdDashboard/> */}
            {/* <Link
              to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
              className="dropdown-item"
            > */}
            <DashboardNav />
            {/* <MdDashboard /> */}
            {/* </Link> */}
          </HStack>
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}

      <Box fontWeight={600} color="yellow.600">
        {" "}
        <Link to="/login">Login</Link>
      </Box>

      <Box fontWeight={600} color="yellow.600">
        <Link to="/register">Register</Link>
      </Box>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Men",
    // children: [
    //   {
    //     label: 'Explore Design Work',
    //     subLabel: 'Trending Design to inspire you',
    //     href: '#',
    //   },
    //   {
    //     label: 'New & Noteworthy',
    //     subLabel: 'Up-and-coming Designers',
    //     href: '#',
    //   },
    // ],
  },
  {
    label: "Women",
    //   children: [
    //     {
    //       label: 'Job Board',
    //       subLabel: 'Find your dream design job',
    //       href: '#',
    //     },
    //     {
    //       label: 'Freelance Projects',
    //       subLabel: 'An exclusive list for contract work',
    //       href: '#',
    //     },
    //   ],
  },
  {
    label: "Assessories",
    //   href: "#",
  },
];

const DashboardNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const DashboardHandlel = () => {
    console.log("1");
    if (auth?.user.role === 1) {
      navigate("/dashboard/admin");
    } else {
      navigate("/dashboard");
    }
  };
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };

  return (
    <Stack direction={"row"} spacing={4}>
      <Box>
        <Popover trigger={"hover"} placement={"bottom-start"}>
          <PopoverTrigger>
            
            <Link
              p={2}
              fontSize={"sm"}
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
              }}
            >
              {auth?.user ? (
                <Image
                  src={auth?.user.avatar}
                  w="50px"
                  borderRadius={"50%"}
                  onClick={DashboardHandlel}
                />
              ) : (
                ""
              )}
            </Link>
          </PopoverTrigger>

          <PopoverContent
            border={0}
            boxShadow={"xl"}
            bg={popoverContentBgColor}
            p={4}
            rounded={"xl"}
            minW={"sm"}
          >
            <Stack>
              <Link
                href={"/dashbord"}
                role={"group"}
                display={"block"}
                p={2}
                rounded={"md"}
                _hover={("pink.50", "gray.900")}
              >
                <Stack direction={"row"} align={"center"}>
                  <Box>
                    {auth?.user.role === 1 ? (
                      <Link to="/dashboard/admin">
                        <Text
                          transition={"all .3s ease"}
                          _groupHover={{ color: "pink.400" }}
                          fontWeight={500}
                        >
                          Dashboard
                        </Text>
                      </Link>
                    ) : (
                      <Link to="/dashboard">
                        <Text
                          transition={"all .3s ease"}
                          _groupHover={{ color: "pink.400" }}
                          fontWeight={500}
                        >
                          Dashboard
                        </Text>
                      </Link>
                    )}
                    <Text fontSize={"sm"}>Hello, {auth.user.name}</Text>
                    <HStack display="flex" fontSize={"sm"}>
                      {" "}
                      <Box>
                        <MdOutlineMailOutline />
                      </Box>{" "}
                      <Text>{auth.user.email}</Text>{" "}
                    </HStack>
                  </Box>
                  <Flex
                    transition={"all .3s ease"}
                    transform={"translateX(-10px)"}
                    opacity={0}
                    _groupHover={{
                      opacity: "100%",
                      transform: "translateX(0)",
                    }}
                    justify={"flex-end"}
                    align={"center"}
                    flex={1}
                  >
                    <Icon
                      color={"pink.400"}
                      w={5}
                      h={5}
                      as={ChevronRightIcon}
                    />
                  </Flex>
                </Stack>
              </Link>
            </Stack>
            <Stack>
              <Link
                href={"/dashbord"}
                role={"group"}
                display={"block"}
                p={2}
                rounded={"md"}
                _hover={("pink.50", "gray.900")}
              >
                <Stack direction={"row"} align={"center"}>
                  <Box>
                    <Link to="/login">
                      <Text
                        transition={"all .3s ease"}
                        _groupHover={{ color: "pink.400" }}
                        fontWeight={500}
                        onClick={handleLogout}
                      >
                        Logout
                      </Text>
                    </Link>
                  </Box>
                  <Flex
                    transition={"all .3s ease"}
                    transform={"translateX(-10px)"}
                    opacity={0}
                    _groupHover={{
                      opacity: "100%",
                      transform: "translateX(0)",
                    }}
                    justify={"flex-end"}
                    align={"center"}
                    flex={1}
                  >
                    <Icon
                      color={"pink.400"}
                      w={5}
                      h={5}
                      as={ChevronRightIcon}
                    />
                  </Flex>
                </Stack>
              </Link>
            </Stack>
          </PopoverContent>
        </Popover>
      </Box>
    </Stack>
  );
};


