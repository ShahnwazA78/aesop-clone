import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  ChakraLink,
  flexbox,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import SkinCare from "../../Drawers/SkinCare";
import BodyAndHand from "../../Drawers/BodyAndHand";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [SkinCaretoggle, setSkinCare] = useState(false);
  const [BodyAndHandtoggle, setBodyAndHand] = useState(false);

  const SkinCaretoggleComponent = () => {
    if (BodyAndHandtoggle) {
      setBodyAndHand(false);
    }
    setSkinCare(!SkinCaretoggle);
  };
  const BodyAndHandtoggleComponent = () => {
    if (SkinCaretoggle) {
      setSkinCare(false);
    }
    setBodyAndHand(!BodyAndHandtoggle);
  };

  const skinCare = SkinCaretoggle ? "active" : "";
  const bodyAndHand = BodyAndHandtoggle ? "active" : "";
  const Hair = React.useRef();
  const Fragrance = React.useRef();
  return (
    <section className="navbar">
      <div className="container">
        <Box bg={"#fffef2"}>
          <HStack justifyContent={"space-between"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              width={"70%"}
              // border={"1px solid red"}
            >
              <Box
                className={skinCare}
                display={{ base: "none", md: "block" }}
                to={"/"}
                padding={"13px 0px"}
                margin={"0 10px 0 39px"}
                borderBottom={"1px solid #fffef2"}
                transition={"border-bottom 0.5s ease"}
                _hover={{
                  borderBottom: "1px solid black",
                  borderRadius: "0",
                  transition: "border-bottom 0.5s ease",
                }}
              >
                <Button
                  onClick={SkinCaretoggleComponent}
                  variant={"unstyled"}
                  fontSize={"sm"}
                >
                  Skin Care
                </Button>
              </Box>
              <Box
                display={{ base: "none", md: "block" }}
                className={bodyAndHand}
                to={"/"}
                padding={"13px 0px"}
                margin={"0 10px"}
                borderBottom={"1px solid #fffef2"}
                transition={"border-bottom 0.5s ease"}
                _hover={{
                  borderBottom: "1px solid black",
                  borderRadius: "0",
                  transition: "border-bottom 0.5s ease",
                }}
              >
                <Button
                  onClick={BodyAndHandtoggleComponent}
                  variant={"unstyled"}
                  fontSize={"sm"}
                >
                  Body & Hand
                </Button>
              </Box>
              <Box
                display={{ base: "none", md: "block" }}
                to={"/"}
                padding={"13px 0px"}
                margin={"0 10px"}
                borderBottom={"1px solid #fffef2"}
                transition={"border-bottom 0.5s ease"}
                _hover={{
                  borderBottom: "1px solid black",
                  borderRadius: "0",
                  transition: "border-bottom 0.5s ease",
                }}
              >
                <Link to="/hair">
                  <Button variant={"unstyled"} fontSize={"sm"}>
                    Hair
                  </Button>
                </Link>
              </Box>
              <Box
                display={{ base: "none", md: "block" }}
                to={"/"}
                padding={"13px 0px"}
                margin={"0 10px"}
                borderBottom={"1px solid #fffef2"}
                transition={"border-bottom 0.5s ease"}
                _hover={{
                  borderBottom: "1px solid black",
                  borderRadius: "0",
                  transition: "border-bottom 0.5s ease",
                }}
              >
                <Link to="/fragrance">
                  <Button variant={"unstyled"} fontSize={"sm"}>
                    Fragrance
                  </Button>
                </Link>
              </Box>
              <Box
                display={{ base: "none", md: "block" }}
                href={"/"}
                padding={"13px 0px"}
                margin={"0 10px"}
                borderBottom={"1px solid #fffef2"}
                transition={"border-bottom 0.5s ease"}
                _hover={{
                  borderBottom: "1px solid black",
                  borderRadius: "0",
                  transition: "border-bottom 0.5s ease",
                }}
              >
                <Link to="/">
                  <Button variant={"unstyled"} fontSize={"sm"}>
                    Home
                  </Button>
                </Link>
              </Box>
              <Box
                display={{ base: "none", md: "block" }}
                to={"/"}
                padding={"13px 0px"}
                margin={"0 10px"}
                borderBottom={"1px solid #fffef2"}
                transition={"border-bottom 0.5s ease"}
                _hover={{
                  borderBottom: "1px solid black",
                  borderRadius: "0",
                  transition: "border-bottom 0.5s ease",
                }}
              >
                <Link to="/gifts">
                  <Button variant={"unstyled"} fontSize={"sm"}>
                    Gifts
                  </Button>
                </Link>
              </Box>
              <Box
                display={{ md: "none", base: "block" }}
                padding={"13px 0px"}
                margin={"0 10px"}
                borderBottom={"1px solid #fffef2"}
                transition={"border-bottom 0.5s ease"}
                _hover={{
                  borderBottom: "1px solid black",
                  borderRadius: "0",
                  transition: "border-bottom 0.5s ease",
                }}
              >
                <Link to="read">
                  <Button
                    variant={"unstyled"}
                    fontSize={"sm"}
                    fontWeight={{ md: "medium", base: "300" }}
                  >
                    Shop
                  </Button>
                </Link>
              </Box>
              <Box
                padding={"13px 0px"}
                margin={"0 10px"}
                borderBottom={"1px solid #fffef2"}
                transition={"border-bottom 0.5s ease"}
                _hover={{
                  borderBottom: "1px solid black",
                  borderRadius: "0",
                  transition: "border-bottom 0.5s ease",
                }}
              >
                <Link to="read">
                  <Button
                    fontSize={"sm"}
                    variant={"unstyled"}
                    fontWeight={{ md: "medium", base: "300" }}
                  >
                    Read
                  </Button>
                </Link>
              </Box>
              <Box
                padding={"13px 0px"}
                margin={"0 10px"}
                borderBottom={"1px solid #fffef2"}
                transition={"border-bottom 0.5s ease"}
                _hover={{
                  borderBottom: "1px solid black",
                  borderRadius: "0",
                  transition: "border-bottom 0.5s ease",
                }}
              >
                <Link to="/stores">
                  <Button
                    fontSize={"sm"}
                    variant={"unstyled"}
                    fontWeight={{ md: "medium", base: "300" }}
                  >
                    Stores
                  </Button>
                </Link>
              </Box>
              <Box
                display={{ base: "none", md: "block" }}
                padding={"13px 0px"}
                margin={"0 10px"}
                borderBottom={"1px solid #fffef2"}
                // border={"1px solid black"}
                transition={"border-bottom 0.5s ease"}
                _hover={{
                  borderBottom: "1px solid black",
                  borderRadius: "0",
                  transition: "border-bottom 0.5s ease",
                }}
              >
                <Link to="/facial-appointment" target="_blank">
                  <Button variant={"unstyled"} fontSize={"sm"}>
                    Ficial Appointment
                  </Button>
                </Link>
              </Box>
              <Box
                to={"/"}
                padding={"13px 0px"}
                borderBottom={"1px solid #fffef2"}
                transition={"border-bottom 0.5s ease"}
                _hover={{
                  borderBottom: "1px solid black",
                  borderRadius: "0",
                  transition: "border-bottom 0.5s ease",
                }}
              >
                {" "}
                <Link to="/search" target="_blank">
                  <Button variant={"unstyled"} fontSize={"sm"}>
                    <SearchIcon />
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"center"}
              width={"30%"}
              // border={"1px solid red"}
            >
              <Box
                padding={"13px 0px"}
                margin={"0 10px"}
                borderBottom={"1px solid #fffef2"}
                transition={"border-bottom 0.5s ease"}
                _hover={{
                  borderBottom: "1px solid black",
                  borderRadius: "0",
                  transition: "border-bottom 0.5s ease",
                }}
              >
                <Link to="/login">
                  <Button
                    variant={"unstyled"}
                    fontSize={"sm"}
                    fontWeight={{ md: "medium", base: "300" }}
                  >
                    Log in
                  </Button>
                </Link>
              </Box>
              <Box
                padding={"13px 0px"}
                margin={"0 10px"}
                borderBottom={"1px solid #fffef2"}
                transition={"border-bottom 0.5s ease"}
                _hover={{
                  borderBottom: "1px solid black",
                  borderRadius: "0",
                  transition: "border-bottom 0.5s ease",
                }}
              >
                <Link to="/cabinet">
                  <Button
                    fontSize={"sm"}
                    variant={"unstyled"}
                    fontWeight={{ md: "medium", base: "300" }}
                  >
                    Cabinet
                  </Button>
                </Link>
              </Box>
              <Box
                padding={"13px 0px"}
                margin={"0 10px"}
                borderBottom={"1px solid #fffef2"}
                transition={"border-bottom 0.5s ease"}
                _hover={{
                  borderBottom: "1px solid black",
                  borderRadius: "0",
                  transition: "border-bottom 0.5s ease",
                }}
              >
                <Link to="/cart">
                  <Button
                    fontSize={"sm"}
                    variant={"unstyled"}
                    fontWeight={{ md: "medium", base: "300" }}
                  >
                    Cart
                  </Button>
                </Link>
              </Box>
            </Box>
          </HStack>
        </Box>
      </div>
      <Box
        className={`component-wrapper ${SkinCaretoggle ? "open" : ""}`}
        display={{ base: "none", md: "block" }}
      >
        {SkinCaretoggle && <SkinCare />}
      </Box>
      <Box
        className={`component-wrapper ${BodyAndHandtoggle ? "open" : ""}`}
        display={{ base: "none", md: "block" }}
      >
        {BodyAndHandtoggle && <BodyAndHand />}
      </Box>
    </section>
  );
};

export default Navbar;
