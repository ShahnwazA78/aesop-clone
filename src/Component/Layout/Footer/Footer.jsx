import { ArrowForwardIcon, ExternalLinkIcon, LinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Heading,
  StatUpArrow,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const services = [
    {
      label: "Live assistance",
      url: "/live-assistance",
    },
    {
      label: "Corporate gifts",
      url: "/corporate-gifts",
    },
    {
      label: "Facial Appointments",
      url: "/facial-appointments",
    },
    {
      label: "Click and Collect",
      url: "/click-and-collect",
    },
    {
      label: "Video consultation",
      url: "/video-consultation",
    },
  ];

  const about = [
    {
      label: "Foundation",
      url: "/foundation",
    },
    {
      label: "Careers",
      url: "/careers",
    },
    {
      label: "Privacy policy",
      url: "/privacy-policy",
    },
    {
      label: "Accessibility",
      url: "/accessibility",
    },
    {
      label: "Cookie Policy",
      url: "/cookie-policy",
    },
  ];

  return (
    <section
      className="footer"
      style={{  backgroundColor: "#252525" }}
    >
      <Box
        display={"flex"}
        color={"white"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        backgroundColor={"#252525"}
        padding={6}
        paddingTop={10}
      >
        <Box
          display={"flex"}
          width={{ md: "40%", base: "100%" }}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Box borderBottom={"1px solid"} width={"100%"} paddingBottom={5}>
            <Heading size={"xs"} fontWeight={500}>
              {" "}
              Subscribe to Aesop communications
            </Heading>
          </Box>
          <Box marginTop={5}>
            <Button
              _hover={{
                background: "white",
                color: "#333333",
              }}
              variant={"outline"}
              color={"white"}
              width={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
              borderRadius={0}
            >
              <Text>Email address</Text>
              <ArrowForwardIcon />
            </Button>
          </Box>
          <Box marginTop={5}>
            <Checkbox>
              <Text fontSize={"sm"}>
                {" "}
                Subscribe to receive communications from Aesop. By subscribing,
                you confirm you have read and understood our &nbsp;
                <Link borderBottom={"1px solid"}>privacy policy.</Link>
              </Text>
            </Checkbox>
          </Box>
          <Box marginTop={"13rem"} display={{ md: "block", base: "none" }}>
            <Box borderBottom={"1px solid"} width={"100%"} paddingBottom={5}>
              <Heading size={"xs"} fontWeight={500}>
                {" "}
                Sustainability
              </Heading>
            </Box>
            <Box marginTop={2}>
              <Text fontSize={"sm"}>
                {" "}
                All Aesop products are vegan, and we do not test our
                formulations or ingredients on animals. We are Leaping Bunny
                approved and a Certified B Corporation. &nbsp;
                <Link borderBottom={"1px solid"}>Learn more.</Link>
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          width={{ md: "60%", base: "100%" }}
          //   border={"1px solid"}
          height={"100%"}
          marginTop={{ md: -6, base: 5 }}
          marginLeft={{ md: 5, base: 0 }}
        >
          <Box width={"28%"} margin={4}>
            <Box borderBottom={"1px solid"} width={"100%"}>
              <Box paddingBottom={5}>
                <Heading size={"xs"} fontWeight={500}>
                  {" "}
                  Order and support
                </Heading>
              </Box>
            </Box>
            <Link to={"/contact-us"}>
              <Text fontSize={"sm"} marginTop={3}>
                Contact us <ExternalLinkIcon />
              </Text>
            </Link>
            <Link to={"/faqs"}>
              <Text fontSize={"sm"} marginTop={1}>
                FAQs <ExternalLinkIcon />
              </Text>
            </Link>
            <Link to={"/shipping"}>
              <Text fontSize={"sm"} marginTop={1}>
                Shipping <ExternalLinkIcon />
              </Text>
            </Link>
            <Link to={"/returns"}>
              <Text fontSize={"sm"} marginTop={1}>
                Returns <ExternalLinkIcon />
              </Text>
            </Link>
            <Link to={"/order-history"}>
              <Text fontSize={"sm"} marginTop={1}>
                Order history
              </Text>
            </Link>
            <Link to={"/terms-and-condition"}>
              <Text fontSize={"sm"} marginTop={1}>
                Terms and conditions
              </Text>
            </Link>
          </Box>
          <Box width={"28%"} margin={4}>
            <Box borderBottom={"1px solid"} width={"100%"}>
              <Box paddingBottom={5}>
                <Heading size={"xs"} fontWeight={500}>
                  {" "}
                  Services
                </Heading>
              </Box>
            </Box>
            <Link to={"/our-story"}>
              <Text fontSize={"sm"} marginTop={3}>
                Our story
              </Text>
            </Link>
            {services.map((ele) => (
              <Link to={ele.url}>
                <Text fontSize={"sm"} marginTop={1}>
                  {ele.label}
                </Text>
              </Link>
            ))}
          </Box>
          <Box width={"28%"} margin={4}>
            <Box borderBottom={"1px solid"} width={"100%"}>
              <Box paddingBottom={5}>
                <Heading size={"xs"} fontWeight={500}>
                  {" "}
                  Location preferences
                </Heading>
              </Box>
            </Box>
            <Box marginTop={3}>
              <Heading size={"xs"} fontWeight={500}>
                {" "}
                Shipping:
              </Heading>
              <Box>
                <Link to="/china">
                  <Text
                    textDecoration={"underline"}
                    fontSize={"xs"}
                    marginTop={3}
                  >
                    Hong Kong SAR, China
                  </Text>
                </Link>
              </Box>
            </Box>
            <Box marginTop={10}>
              <Heading size={"xs"} fontWeight={500}>
                {" "}
                Language:
              </Heading>
              <Box>
                <Link to="/china">
                  <Text
                    textDecoration={"underline"}
                    fontSize={"xs"}
                    marginTop={3}
                  >
                    English
                  </Text>
                </Link>
              </Box>
              <Box>
                <Link to="/china">
                  <Text fontSize={"xs"} marginTop={1}>
                    繁體中文
                  </Text>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box width={"28%"} margin={4}>
            <Box borderBottom={"1px solid"} width={"100%"}>
              <Box paddingBottom={5}>
                <Heading size={"xs"} fontWeight={500}>
                  {" "}
                  About
                </Heading>
              </Box>
            </Box>
            <Link to={"/our-story"}>
              <Text fontSize={"sm"} marginTop={3}>
                Our story
              </Text>
            </Link>
            {about.map((ele) => (
              <Link to={ele.url}>
                <Text fontSize={"sm"} marginTop={1}>
                  {ele.label}
                </Text>
              </Link>
            ))}
          </Box>
          <Box width={"28%"} margin={4}>
            <Box borderBottom={"1px solid"} width={"100%"}>
              <Box paddingBottom={5}>
                <Heading size={"xs"} fontWeight={500}>
                  {" "}
                  Social media
                </Heading>
              </Box>
            </Box>
            <Link to={"/Instagram"}>
              <Text fontSize={"sm"} marginTop={3}>
                Instagram <ExternalLinkIcon />
              </Text>
            </Link>
            <Link to={"/Twitter"}>
              <Text fontSize={"sm"} marginTop={1}>
                Twitter <ExternalLinkIcon />
              </Text>
            </Link>
            <Link to={"/LinkedIn"}>
              <Text fontSize={"sm"} marginTop={1}>
                LinkedIn <ExternalLinkIcon />
              </Text>
            </Link>
            <Link to={"/WeChat"}>
              <Text fontSize={"sm"} marginTop={1}>
                WeChat
              </Text>
            </Link>
            <Link to={"/weibo"}>
              <Text fontSize={"sm"} marginTop={1}>
                Weibo <ExternalLinkIcon />
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box borderTop={"2px solid white"} color={"white"} marginTop={10} marginBottom={10}>
        <Text fontSize={"ms"}padding={8}>
          © Aesop
        </Text>
      </Box>
    </section>
  );
};

export default Footer;
