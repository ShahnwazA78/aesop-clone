import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Heading,
  LinkBox,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";

const Offers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <section className="Offers">
      <div className="container">
        <Box
          bg="#252525"
          w="100%"
          p={3}
          color="white"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <LinkBox
            className="link-box"
            ref={btnRef}
            onClick={onOpen}
            variant={"unstyled"}
            borderRadius={"0"}
            cursor={"pointer"}
            border={"1px solid #252525"}
            transition={"border-bottom 0.5s ease"}
            _hover={{
              borderBottom: "1px solid white",
              borderRadius: "0",
              transition: "border-bottom 0.5s ease",
            }}
          >
            <Text textAlign={["left", "center"]} as={""} fontSize="sm">
              Click and Collect is now available at Hong Kong stores. Enjoy
              complimentary shipping on orders over HK$400{" "}
              <span style={{ fontWeight: "500", marginLeft: "20px" }}>+</span>
            </Text>
          </LinkBox>
          <Drawer
            size={["md", "lg"]}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent bg={"#f1f0e8"} color={"black"}>
              <DrawerCloseButton />

              <DrawerBody>
                <Box w={"100%"} height={"100%"} padding={["0", "10"]}>
                  <Box
                    width={["100%", "80%"]}
                    height={"100%"}
                    margin={["0", "auto"]}
                    // border={"1px solid red"}
                  >
                    <Heading
                      fontWeight={500}
                      fontSize={"sm"}
                      paddingTop={10}
                      paddingBottom={10}
                      borderBottom={"1px solid #cbcac4"}
                    >
                      Shipping fees and delivery times
                    </Heading>
                    <Box padding={"50px 0"} borderBottom={"1px solid #cbcac4"}>
                      <Heading
                        fontWeight={500}
                        fontSize={"sm"}
                        paddingBottom={2}
                      >
                        SF Express (Hong Kong SAR, China)
                      </Heading>
                      <HStack
                        justifyContent={"space-between"}
                        margin={"15px 0"}
                        color={"#666666"}
                        fontWeight={"100"}
                      >
                        <Text>Orders belowe $400</Text>
                        <Text> $40</Text>
                      </HStack>
                      <HStack
                        justifyContent={"space-between"}
                        margin={"15px 0"}
                        color={"#666666"}
                        fontWeight={"100"}
                        paddingBottom={5}
                      >
                        <Text>Orders $400 and over</Text>
                        <Text> Complimentary</Text>
                      </HStack>
                      <HStack
                        justifyContent={"space-between"}
                        margin={"15px 0"}
                        color={"#666666"}
                        fontWeight={"100"}
                      >
                        <Text>Urban areas</Text>
                        <Text> 2-3 business days</Text>
                      </HStack>
                      <HStack
                        justifyContent={"space-between"}
                        margin={"15px 0"}
                        color={"#666666"}
                        fontWeight={"100"}
                      >
                        <Text>Outlying Islands</Text>
                        <Text> 3-5 business days</Text>
                      </HStack>
                    </Box>
                    <Box padding={"50px 0"} borderBottom={"1px solid #cbcac4"}>
                      <Heading
                        fontWeight={500}
                        fontSize={"sm"}
                        paddingBottom={2}
                      >
                        Morning Global (Macau SAR, China)
                      </Heading>
                      <HStack
                        justifyContent={"space-between"}
                        margin={"15px 0"}
                        color={"#666666"}
                        fontWeight={"100"}
                      >
                        <Text>Orders belowe $400</Text>
                        <Text> $60</Text>
                      </HStack>
                      <HStack
                        justifyContent={"space-between"}
                        margin={"15px 0"}
                        color={"#666666"}
                        fontWeight={"100"}
                        paddingBottom={5}
                      >
                        <Text>Orders $400 and over</Text>
                        <Text> Complimentary</Text>
                      </HStack>
                      <HStack
                        justifyContent={"space-between"}
                        margin={"15px 0"}
                        color={"#666666"}
                        fontWeight={"100"}
                      >
                        <Text>All areas</Text>
                        <Text> 5-7 business days</Text>
                      </HStack>
                      <HStack
                        justifyContent={"space-between"}
                        margin={"25px 0"}
                        color={"#666666"}
                        fontWeight={"100"}
                      >
                        <Text>
                          Regrettably we are unable to accept orders containing
                          Dangerous Goods to Macau SAR, China.
                        </Text>
                      </HStack>
                    </Box>
                    <Box padding={"50px 0"} borderBottom={"1px solid #cbcac4"}>
                      <Heading
                        fontWeight={500}
                        fontSize={"sm"}
                        paddingBottom={2}
                      >
                        Complimentary samples
                      </Heading>
                      <HStack
                        justifyContent={"space-between"}
                        margin={"25px 0"}
                        color={"#666666"}
                        fontWeight={"100"}
                      >
                        <Text>
                          All online orders include complimentary samples. At
                          checkout, select from the available bundles to add
                          them to your order.
                        </Text>
                      </HStack>
                    </Box>
                    <Box padding={"50px 0"} borderBottom={"1px solid #cbcac4"}>
                      <Heading
                        fontWeight={500}
                        fontSize={"sm"}
                        paddingBottom={2}
                      >
                        Click and Collect
                      </Heading>
                      <HStack
                        justifyContent={"space-between"}
                        margin={"25px 0"}
                        color={"#666666"}
                        fontWeight={"100"}
                      >
                        <Text>
                          Simply choose in-store collection at checkout, then
                          pick up your order at your preferred location.
                        </Text>
                      </HStack>
                      <HStack
                        justifyContent={"space-between"}
                        margin={"25px 0"}
                        color={"#666666"}
                        fontWeight={"100"}
                      >
                        <Text>
                          For general enquiries regarding Click and Collect, we
                          welcome you to phone us on +852 3001 6734 instead of
                          contacting your local store.
                        </Text>
                      </HStack>
                    </Box>
                    <Box padding={"50px 0"} borderBottom={"1px solid #cbcac4"}>
                      <Heading
                        fontWeight={500}
                        fontSize={"sm"}
                        paddingBottom={2}
                      >
                        Returns
                      </Heading>
                      <HStack
                        justifyContent={"space-between"}
                        margin={"25px 0"}
                        color={"#666666"}
                        fontWeight={"100"}
                      >
                        <Text>
                          Online purchases may be returned to us or any Aesop
                          Stores within 30 days.
                        </Text>
                      </HStack>
                    </Box>
                    <Box padding={"50px 0"} borderBottom={"1px solid #cbcac4"}>
                      <Heading
                        fontWeight={500}
                        fontSize={"sm"}
                        paddingBottom={2}
                      >
                        Carbon neutral shipping
                      </Heading>
                      <HStack
                        justifyContent={"space-between"}
                        margin={"25px 0"}
                        color={"#666666"}
                        fontWeight={"100"}
                      >
                        <Text>
                          We offset operational emissions to ensure the delivery
                          of every order is carbon neutral.
                        </Text>
                      </HStack>
                    </Box>
                  </Box>
                </Box>
                {/* <DrawerFooter>
                  <Button>Cancel</Button>
                  <Button>Save</Button>
                </DrawerFooter> */}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </div>
    </section>
  );
};

export default Offers;
