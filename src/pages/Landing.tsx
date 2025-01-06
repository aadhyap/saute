import { Flex, Box, Stack, Heading, Text, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import Logo from "@/components/Logo";

const Landing: React.FC = () => {
    const [email, setEmail] = useState("");

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = () => {
        console.log("Email submitted:", email);
    };

    return (
        <Flex direction="column" px={{ base: "4", md: "8" }} height="100vh" width={"100vw"} backgroundColor={"black"}>
            {/* Video Background */}
            <Box
                as="video"
                src="/vids/testbk2.mp4" // Path to your video file
                autoPlay
                loop
                muted
                playsInline
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                objectFit="cover"
                zIndex={1}
            />

            {/* Overlay */}
            <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bg="rgba(0, 0, 0, 0.7)"
                blur={"40px"}
                zIndex={2}
            />

            <Flex align="center" justify="center" h="24" mt={3} ml={-2} zIndex={3}>
                <Logo width="200" height="45" isDark={true} />
            </Flex>

            {/* Centering Content */}
            <Flex flex="1" align="center" direction="column" justify="center" zIndex={3}>
                <Stack spacing="5" px={{ sm: 8, md: 0 }} width="100%" align="center">
                    <Text
                        fontSize={"lg"}
                        textStyle="md"
                        maxW="md"
                        fontWeight={600}
                        color={"white"}
                        textAlign="center"
                    >
                        Saute
                    </Text>

                    <Heading
                        size={"lg"}
                        color={"white"}
                        width={"80%"}
                        textAlign="center"
                    >
                        Feed the world.
                    </Heading>

                    {/* Email Input with Button inside */}
                    <InputGroup size="lg" width="auto" maxW="400px" height="50px"> 
                        <Input
                            placeholder="Email address"
                            value={email}
                            onChange={handleEmailChange}
                            borderRadius="full"
                            backgroundColor="white"
                            _focus={{ borderColor: "#cd4630" }}
                            _hover={{ borderColor: "#cd4630" }}
                            pr="120px" 
                            height="100%" 
                        />
                        <InputRightElement width="auto" display="flex" justifyContent="center" alignItems="center" height="100%">
                            <Button
                                variant="secondary"
                                color={"white"}
                                borderWidth={0}
                                borderRadius="full"
                                size="lg"
                                backgroundColor="#cd4630"
                                _hover={{ backgroundColor: "#a73d29" }}
                                _active={{ backgroundColor: "#8e2e24" }}
                                onClick={handleSubmit}
                            >
                                Order Now
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Stack>
            </Flex>

            <Flex align="center" justify="center" h="24" zIndex={3}>
                <Text color="white" textStyle="sm" textAlign="center">
                    © {new Date().getFullYear()} Saute. All rights reserved.
                </Text>
            </Flex>
        </Flex>
    );
};

export default Landing;
