import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";

const Advice = () => {
  return (
    <section className="Advice">
      <div className="container">
        <Box
          bg="#c2c2af"
          w="100%"
          p={2}
          color="black"
          textAlign={["left", "center"]}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text as={""} fontSize="sm">
            Trained Aesop consultations are available to provide bespoke skin
            care advise.
          </Text>
          <Link to="/live-video-consultations">
            <Text
              fontWeight={"medium"}
              fontSize={"sm"}
              marginLeft={"2"}
              borderBottom={"1px solid #c2c2af"}
              transition={"border-bottom 0.5s ease"}
              _hover={{
                borderBottom: "1px solid black",
                borderRadius: "0",
                transition: "border-bottom 0.5s ease",
              }}
            >
              Book a video consulation
            </Text>
          </Link>
        </Box>
      </div>
    </section>
  );
};

export default Advice;
