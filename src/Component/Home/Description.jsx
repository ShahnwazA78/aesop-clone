import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Description = ({ data }) => {
  return (
    <section
      className="description"
      style={{ backgroundColor: "#fffef2",paddingBottom:"4rem" }}
    >
      <Box
        width={"100%"}
        bg={"#fffef2"}
        // justifyContent={"center"}
        // alignItems={{md:"center",base:"flex-start"}}
        display={"flex"}
        flexDirection={{ md: data.displayAs, base: data.displayAsbase }}
        padding={"5rem 0rem .5rem 5rem"}
        // border={"1px solid red"}
      >
        <Box width={{ md: "28%", base: "63%" }} padding={5} marginRight={"2rem"}>
          <Heading
            fontWeight={500}
            fontSize={"sm"}
            marginBottom={5}
            paddingTop={"1rem"}
          >
            {data.heading}
          </Heading>
          <Heading
            fontWeight={400}
            fontSize={"3xl"}
            width={"20rem"}
            marginBottom={5}
            fontFamily={"Aref Ruqaa"}
          >
            {" "}
            {data.subheading}
          </Heading>
          <Text
            maxW={"25rem"}
            marginBottom={8}
            fontWeight={500}
            fontSize={"sm"}
          >
            {data.description}
          </Text>
          <Button
            bg={"transparent"}
            variant={"outline"}
            borderRadius={"0"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            padding={"1.8rem"}
            width={"100%"}
            transition={"all 0.3s ease"}
            _hover={{
              backgroundColor: "#333333",
              color: "white",
            }}
          >
            <Text marginRight={2} fontWeight={500} fontSize={"sm"}>
              {data.button}
            </Text>{" "}
            <ArrowForwardIcon />
          </Button>
        </Box>
        <Box
          marginLeft={{ md: data.mLeft }}
          marginRight={data.mRight}
          justifySelf={{ md: "flex-end", base: "center" }}
          alignSelf={{ md: "flex-end", base: "center" }}
          width={{ md: "60%", base: "100%" }}
        >
          <Box width={"100%"}>
            <img
              width={"100%"}
              alt="Shelves of Aesop products in-store with a leafy green plant visible in foreground. "
              loading="lazy"
              src={data.image}
            ></img>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Description;
