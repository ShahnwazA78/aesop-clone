import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Carousel = ({ CarouselData }) => {
  const { heading, subheading, description, button, carouselData } =
    CarouselData;
  const settings = {
    dots: true, // Show navigation dots
    infinite: false, // Set to false to disable infinite loop
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    accessibility: true, // Enable keyboard navigation
    centerPadding: "0", // Set center padding to 0 for minimal gap
    // variableWidth: true, // Enable variable width to allow for 80% width
  };
  console.log(carouselData);
  return (
    <section
      className="the-body"
      style={{ height: "100vh", backgroundColor: "#fffef2" }}
    >
      <Box
        width={"100%"}
        height={"100%"}
        margin={"auto"}
        padding={10}
        // border={"1px solid"}
        overflow={"hidden"}
      >
        <Box
          margin={"2rem 0"}
          //  border={"1px solid"}
          height={"100%"}
        >
          <Slider {...settings}>
            <Box height={"100%"}>
              <Box
                color={"#333333"}
                marginLeft={["0", "2rem"]}
                height={"100%"}
                marginBottom={"12rem"}
              >
                <Heading
                  fontWeight={500}
                  fontSize={"sm"}
                  marginBottom={5}
                  paddingTop={"1rem"}
                >
                  {heading}
                </Heading>
                <Heading
                  fontWeight={400}
                  fontSize={"3xl"}
                  width={"20rem"}
                  marginBottom={5}
                  fontFamily={"Aref Ruqaa"}
                >
                  {" "}
                  {subheading}
                </Heading>
                <Text maxW={"25rem"} marginBottom={8} fontSize={"sm"}>
                  {description}
                </Text>
                <Button
                  bg={"transparent"}
                  variant={"unstyled"}
                  borderRadius={"0"}
                  display={"flex"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                >
                  <Text marginRight={2} fontWeight={400} fontSize={"sm"}>
                    {button}
                  </Text>{" "}
                  <ArrowForwardIcon />
                </Button>
              </Box>
            </Box>
            {carouselData.map((ele) => (
              <Box height={"100%"}>
                <Box
                  key={ele.image}
                  color={"#333333"}
                  marginLeft={["0", "2rem"]}
                  height={"100%"}
                  marginTop={ele.mTop}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  className="carousel-item-container"
                >
                  <img
                    className="carousel-img"
                    width={ele.width}
                    alt="Nurture Bar Soap in a recyclable FSC-certified, light green carton."
                    loading="lazy"
                    src={ele.image}
                  ></img>

                  <Heading
                    className="carousel-heading"
                    textAlign={"center"}
                    size={"xs"}
                    paddingBottom={1}
                  >
                    <Link>{ele.heading}</Link>
                  </Heading>
                  <Text textAlign={"center"} fontSize={"small"}>
                    {ele.subH}
                  </Text>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </section>
  );
};

export default Carousel;
