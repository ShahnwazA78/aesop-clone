import {
  Box,
  Button,
  HStack,
  Heading,
  Text,
  background,
  flexbox,
} from "@chakra-ui/react";
import React from "react";
import "./home.css";
import { ArrowForwardIcon, ArrowRightIcon } from "@chakra-ui/icons";
import Carousel from "./Carousel";
import Description from "./Description";
import Footer from "../Layout/Footer/Footer";
const Home = () => {
  const TheBodySection = {
    heading: "For the body",
    subheading: "An expression of care",
    description:
      "Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma.",
    button: "See all Body Care",
    carouselData: [
      {
        image:
          "https://www.aesop.com/u1nb1km7t5q7/2YWbdNlnJHD3t3zF4arNfK/4d9d61c34d4ef151f41defd952535345/Aesop_Body_Nurture_Bar_Soap_150g_Web_Front_Large_1800x1093px.png",
        mTop: "15rem",
        width: 350,
        heading: "Nurture Bar Soap",
        subH: "Offers a mild yet effective cleanse",
      },
      {
        image:
          "https://www.aesop.com/u1nb1km7t5q7/5NoA4d0c8KG7Hhz5y0kdfq/88bc42ee1a607d834f6f62c94373d2c1/Aesop_Body_Polish_Bar_Soap_150g_Web_Front_Large_1800x1093px.png",

        mTop: "15rem",
        width: 350,
        heading: "Polish Bar Soap",
        subH: "Thoroughly cleanses and exfoliates skin",
      },
      {
        image:
          "https://www.aesop.com/u1nb1km7t5q7/1jDpJFSo3ih2QozJeNoNEJ/5f9d6b5863522f92eee44e0f1100608e/Aesop_Body_Refresh_Bar_Soap_150g_Web_Front_Large_1800x1093px.png",

        mTop: "15rem",
        width: 350,
        heading: "Refresh Bar Soap",
        subH: "Offers a thorough and enlivening cleanse",
      },
    ],
  };
  const BodyDescription = {
    heading: "The Athenaeum",
    subheading: "The warm-up ",
    description:
      "In The Athenaeum, our digital reading room: a guide to ensuring a healthy complexion through the warmer months.",
    button: "Read more",

    image:
      "https://www.aesop.com/u1nb1km7t5q7/3GSzEbfK3uJnoXUkae2D9G/37d1916a82b754c70870cab8f85f34b0/Aesop_Article_Summer_Skin_Care_2020_Mid_1_Desktop_2560x1440px.jpg",
    displayAs: "row",
    displayAsbase: "column",

    mLeft: "10rem",
    mRight: "0",
  };
  const TheSkinSection = {
    heading: "For the skin",
    subheading: "Attention for all types",
    description:
      "The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types.",
    button: "See all Skin Care",
    carouselData: [
      {
        image:
          "https://images.ctfassets.net/u1nb1km7t5q7/dOnBqAYKjyXt8FPq50qg7/8ebfb48f20f70b61782149da3d26266d/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Medium_535x522px.png",
        mTop: "10rem",
        width: 350,
        heading: "Lucent Facial Concentrate",
        subH: "A Vitamin C-rich layering serum",
      },
      {
        image:
          "https://www.aesop.com/u1nb1km7t5q7/3hbEDQfTSFg3CMuB1lthQ0/4abe4f2870f1b2869f3f191c219ec534/Aesop_Skin_Purifying_Facial_Cream_Cleanser_100mL_Web_Medium_659x782px.png",
        mTop: "12rem",
        width: 250,
        heading: "Purifying Facial Cream Cleanser",
        subH: "A daily cream cleanser for dry skin",
      },
      {
        image:
          "https://www.aesop.com/u1nb1km7t5q7/3bzrMPype61GB4NTtuE3UN/045b424903d4995b565a6d285c48ee82/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-medium.png",

        mTop: "19.5rem",
        width: 350,
        heading: "Camellia Nut Facial Hydrating Cream",
        subH: "For normal, dry or sensitive skin",
      },
    ],
  };
  const SkinDescription = {
    heading: "",
    subheading: "Post-Poo Drops has returned",
    description:
      "Here to make the malodorous melodious once again. Dispense this favoured formulation into the toilet bowl after flushing to effectively mask disagreeable odours.",
    button: "Discover Post-Poo Drops",

    image:
      "https://www.aesop.com/u1nb1km7t5q7/6m4yuIyUcyfXMyKT17ZYsr/9bc9ba78322632d97323d73f364113f0/Aesop_Home_2023_Post-Poo_Drops_Web_Homepage_Secondary_Mid_Desktop_2560x1540px.png",
    displayAs: "row-reverse",
    displayAsbase: "column-reverse",
    mLeft: "",
    mRight: "10rem",
  };
  return (
    <section
      className="home"
      style={{ height: "100vh", backgroundColor: "#fffef2" }}
    >
      <div className="hero">
        <Box display={"flex"} flexDirection={["column", "row"]}>
          <Box alignSelf={"flex-start"}>
            <a
              class="Hyperlink_base__H3jim Hyperlink_left__UZaMy Hyperlink_dark__ROIlG Logo_base__azFYe Logo_light__KiBxr"
              data-test-ref="NAV_LOGO"
              href="/hk/en/"
              target="_self"
              title="Back to homepage"
            >
              <svg
                aria-labelledby="aesop-2128"
                class="Icon_base__GKZ58 Icon_light__1TZsq Logo_icon__NDEf8"
                data-testid="data-testid-Icon"
                focusable="false"
                height="40"
                role="img"
                tabindex="-1"
                viewBox="0 0 489.7 154.3"
                width="120"
                style={{ height: "40px", width: "120px", color: "white" }}
              >
                <title aria-label="Aesop logo" id="aesop-2128">
                  Aesop
                </title>
                <g style={{ fill: "#fffef0" }}>
                  <path d="M48.6,22.5L31.8,62.2h34.2L48.6,22.5z M28.6,70.3c-3.2,7.4-9.6,21.7-14.9,42c-1.9-0.3-3.5-0.9-6.6-0.9c-3.1,0-5,0.6-7.1,0.9C14.3,81.2,38,28.9,49.4,0c1.3,0.2,2.3,0.5,4,0.5c1.4,0,2.3-0.2,3.5-0.5c12.3,33.7,47.8,111.7,48.1,112.3c-2.7-0.5-5.5-0.9-9.5-0.9c-4.2,0-7.2,0.5-10.3,0.9c-5.6-19.2-12.2-33.2-16.2-42H28.6z"></path>
                  <path d="M172.4,66.6c0-5.3,0-26.6-19.2-26.6c-14,0-20.7,10.6-22.2,26.6H172.4z M130.9,73.3c0,4.5,0,13.6,4.3,21c7.4,12.1,17.8,12.5,22.5,12.5c15.7,0,23.1-9.6,25.5-13l1.9,0.4c-1,4.5-1,7.1-1.1,9.6c-7.1,6.7-16.8,10.5-29.8,10.5c-24.4,0-39.3-15.4-39.3-40.1c0-22.1,12.2-40.7,38.5-40.7c35.8,0,35.3,31.1,35.1,39.8H130.9z"></path>
                  <path d="M249.6,52.1c-0.6-2.4-1.6-6.4-6.2-9.6c-3.4-2.4-7.8-2.7-10.4-2.7c-9.8,0-14.9,5.1-14.9,12c0,9.3,9.5,12.7,15.1,14.1c14.3,3.7,25.8,6.7,25.8,22.8c0,12.2-8.5,25.8-30.8,25.8c-13,0-22-5.5-23.7-6.7c2.1-3.9,3.4-10.7,3.7-12.8l1.9-0.5c1.1,2.7,2.7,7.1,8.7,10.6c4,2.4,8.2,3,11.7,3c8.4,0,16.2-4,16.2-13.2c0-9.1-5.5-10.9-22.3-16.4c-6.9-2.3-18.3-7.2-18.3-21.3c0-9.1,5.6-23.9,27.8-23.9c11.1,0,17.5,3.4,21.2,5.3c-1.6,4.2-2.7,8-3.2,13.5H249.6z"></path>
                  <path d="M291.5,73.5c0,22.3,9.8,34.6,24.5,34.6c15.4,0,25.5-13.3,25.5-34.5c0-12.5-3.9-33.8-24.7-33.8C291.5,39.8,291.5,68.6,291.5,73.5 M357.9,73c0,25.5-17.6,41.5-42,41.5c-17,0-40.8-7.7-40.8-40.6c0-25,16.7-40.6,40.8-40.6 C346.3,33.4,357.9,53.4,357.9,73"></path>
                  <path d="M399.4,49.6c-3.2,4-6.6,9.8-6.6,25.7c0,14.1,3.2,19.4,6.6,23.4c4.1,5,9.6,7.9,17,7.9 c22.9,0,22.9-27.1,22.9-32.3c0-24.2-11.6-33-22-33C408.7,41.2,403.1,44.9,399.4,49.6 M419.3,114.7c-15.1,0-23.6-8.3-26.2-14.9 c0,25.2-0.2,39.8,0.8,54.5c-2.4-0.6-4.5-0.9-8.4-0.9c-4,0-6.1,0.3-8.6,0.9c1.3-20.8,1.8-41.9,1.8-62.7c0-14.6-0.3-34.3-0.8-57.6 c2.2,0.5,4.8,0.9,7.9,0.9c2.9,0,5.6-0.5,7.9-0.9c-0.6,8.8-0.6,11.2-0.6,14.6c2.6-4.2,9.5-15.4,27.3-15.4c16,0,35.6,11.7,35.6,40.3 C455.9,98.8,440.3,114.7,419.3,114.7"></path>
                  <rect x="131.8" y="13.5" width="44.3" height="5"></rect>
                  <path d="M477.2,98.1c0,1.6,0,3,0,4.4c1.3,0,4.3,0,4.3-2.3C481.5,98.1,479.2,98.1,477.2,98.1 M484.9,109.1 c-0.4,0-0.7-0.1-1.2-0.1c-0.4,0-0.8,0.1-1.5,0.1c-2-2.9-3.6-4.5-4.7-5.8h-0.4c0,1.8,0,3.2,0.2,5.8c-0.5,0-0.7-0.1-1.3-0.1 c-0.6,0-0.8,0.1-1.1,0.1c0.1-1.3,0.2-2.7,0.2-6.2c0-3-0.1-4.4-0.1-5.7c0.9,0,1.5,0,2.9,0c2.9,0,5.9,0,5.9,2.8c0,2.5-2.7,2.9-3.9,3 c0.8,1.1,4.4,5.1,5.1,5.9L484.9,109.1z M479.2,94.8c-4.8,0-8.5,3.8-8.5,8.6c0,4.9,3.6,8.6,8.5,8.6c4.9,0,8.5-3.7,8.5-8.6 C487.8,98.7,484.3,94.8,479.2,94.8 M479.2,92.9c5.9,0,10.5,4.7,10.5,10.5c0,5.9-4.7,10.5-10.5,10.5c-5.8,0-10.5-4.6-10.5-10.5 C468.8,97.5,473.5,92.9,479.2,92.9"></path>
                </g>
              </svg>
            </a>
          </Box>
          <Box color={"white"} marginLeft={["0", "5rem"]}>
            <Heading fontWeight={500} fontSize={"sm"} marginBottom={5}>
              Bar Soaps
            </Heading>
            <Heading
              fontWeight={400}
              fontSize={"3xl"}
              width={"20rem"}
              marginBottom={5}
            >
              {" "}
              A body care classic, reimagined
            </Heading>
            <Text maxW={"25rem"} marginBottom={8}>
              Breathing new life into the humble bar soap are Nurture, Polish
              and Refresh—three additions to the range, each imparting a unique
              constellation of benefits. 
            </Text>
            <Button
              bg={"transparent"}
              variant={"outline"}
              borderRadius={"0"}
              padding={6}
              width={"70%"}
              color={"white"}
              display={"flex"}
              justifyContent={"space-between"}
              _hover={{
                color: "#333333",
                background: "white",
              }}
            >
              <Text>Discover Bar Soaps</Text> <ArrowForwardIcon />
            </Button>
          </Box>
        </Box>
      </div>
      <Box>
        <Carousel CarouselData={TheBodySection} />
        <Description data={BodyDescription} />
      </Box>
      <Box>
        <Box display={{ md: "block", base: "none" }}>
          <Carousel CarouselData={TheSkinSection} />
        </Box>
        <Description data={SkinDescription} />
      </Box>
      <section className="footer">
        <Footer />
      </section>
    </section>
  );
};

export default Home;
