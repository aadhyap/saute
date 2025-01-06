import { Flex, Box, Stack, Heading, Text, Button, Input, VStack, Select, CheckboxGroup, Checkbox } from "@chakra-ui/react";
import { useState } from "react";
import Logo from "@/components/Logo";

const Landing: React.FC = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [feedingPeople, setFeedingPeople] = useState("");
    const [activeCard, setActiveCard] = useState<"order" | "chef" | null>(null);
    const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
    const [otherCuisine, setOtherCuisine] = useState("");
    const [chefCuisine, setChefCuisine] = useState("");

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleFeedingPeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFeedingPeople(event.target.value);
    };

    const handleCuisineChange = (cuisines: string[]) => {
        setSelectedCuisines(cuisines);
    };

    const handleOtherCuisineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOtherCuisine(event.target.value);
    };

    const handleOrderNowSubmit = () => {
        console.log("Order Now submitted:", {
            name,
            email,
            selectedCuisines,
            otherCuisine: selectedCuisines.includes("Other") ? otherCuisine : null,
            feedingPeople,
        });
        setActiveCard(null);
    };

    const handleBecomeChefSubmit = () => {
        console.log("Become a Chef submitted:", { name, email, chefCuisine });
        setActiveCard(null);
    };

    return (
        <Flex direction="column" px={{ base: "4", md: "8" }} height="100vh" width={"100vw"} backgroundColor={"black"}>
            {/* Video Background */}
            <Box
                as="video"
                src="/vids/testbk2.mp4"
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
                zIndex={2}
            />

            <Flex align="center" justify="center" h="24" mt={3} ml={-2} zIndex={3}>
                <Logo width="200" height="45" isDark={true} />
            </Flex>

            {/* Hero Section */}
            <Flex flex="1" align="center" direction="column" justify="center" zIndex={3}>
                <Stack spacing="5" px={{ sm: 8, md: 0 }} width="100%" align="center">
                    <Text fontSize={"lg"} textStyle="md" maxW="md" fontWeight={600} color={"white"} textAlign="center">
                        Saute
                    </Text>

                    <Heading size={"lg"} color={"white"} width={"80%"} textAlign="center">
                        Feed the world.
                    </Heading>

                    {/* Email Input */}
                    <Input
                        placeholder="Email address"
                        value={email}
                        onChange={handleEmailChange}
                        borderRadius="full"
                        backgroundColor="white"
                        _focus={{ borderColor: "#cd4630" }}
                        _hover={{ borderColor: "#cd4630" }}
                        size="lg"
                        maxW="400px"
                    />

                    {/* Buttons */}
                    <Flex mt={4} gap={4} justify="center">
                        <Button
                            color={"white"}
                            borderRadius="full"
                            size="lg"
                            backgroundColor="#cd4630"
                            _hover={{ backgroundColor: "#a73d29" }}
                            _active={{ backgroundColor: "#8e2e24" }}
                            onClick={() => setActiveCard("order")}
                        >
                            Order Now
                        </Button>
                        <Button
                            color={"white"}
                            borderRadius="full"
                            size="lg"
                            backgroundColor="#2a9d8f"
                            _hover={{ backgroundColor: "#1e7b6b" }}
                            _active={{ backgroundColor: "#16624b" }}
                            onClick={() => setActiveCard("chef")}
                        >
                            Become a Chef
                        </Button>
                    </Flex>
                </Stack>
            </Flex>

            {/* Footer */}
            <Flex align="center" justify="center" h="24" zIndex={3}>
                <Text color="white" textStyle="sm" textAlign="center">
                    © {new Date().getFullYear()} Saute. All rights reserved.
                </Text>
            </Flex>

            {/* Overlay Card */}
            {activeCard && (
                <Flex
                    position="fixed"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    bg="rgba(0, 0, 0, 0.85)"
                    zIndex={4}
                    align="center"
                    justify="center"
                >
                    <Box
                        width="90%"
                        maxW="500px"
                        bg="white"
                        borderRadius="md"
                        p={6}
                        shadow="lg"
                        textAlign="center"
                    >
                        <Heading size="lg" mb={4}>
                            {activeCard === "order" ? "Order Now" : "Become a Chef"}
                        </Heading>

                        <Input
                            placeholder="Your Name"
                            value={name}
                            onChange={handleNameChange}
                            mb={4}
                            backgroundColor="gray.100"
                            _focus={{ borderColor: "#cd4630" }}
                        />

                        <Text mb={4}>
                            Your Email: <b>{email}</b>
                        </Text>

                        {activeCard === "order" ? (
                            <>
                                <Text mb={2} fontWeight="bold">
                                    Select Your Favorite Cuisines (Choose multiple):
                                </Text>
                                <CheckboxGroup
                                    value={selectedCuisines}
                                    onChange={(cuisines) => handleCuisineChange(cuisines as string[])}
                                >
                                    <VStack align="start" spacing={2} mb={4}>
                                        <Checkbox value="Italian">Italian</Checkbox>
                                        <Checkbox value="Mexican">Mexican</Checkbox>
                                        <Checkbox value="Indian">Indian</Checkbox>
                                        <Checkbox value="No Preference">No Preference</Checkbox>
                                        <Checkbox value="Health-Conscious">Health-Conscious</Checkbox>
                                        <Checkbox value="Other">Other</Checkbox>
                                    </VStack>
                                </CheckboxGroup>

                                {selectedCuisines.includes("Other") && (
                                    <Input
                                        placeholder="Please specify other cuisine"
                                        value={otherCuisine}
                                        onChange={handleOtherCuisineChange}
                                        mb={4}
                                        backgroundColor="gray.100"
                                        _focus={{ borderColor: "#cd4630" }}
                                    />
                                )}

                                <Input
                                    placeholder="How many people are you feeding?"
                                    value={feedingPeople}
                                    onChange={handleFeedingPeopleChange}
                                    mb={4}
                                    backgroundColor="gray.100"
                                    _focus={{ borderColor: "#cd4630" }}
                                />

                                <Button colorScheme="red" onClick={handleOrderNowSubmit}>
                                    Submit Order
                                </Button>
                            </>
                        ) : (
                            <>
                                
                                <Text mb={2} fontWeight="bold">
                                Cuisine You Cook (Choose multiple):
                                </Text>
                                <CheckboxGroup
                                    value={selectedCuisines}
                                    onChange={(cuisines) => handleCuisineChange(cuisines as string[])}
                                >
                                    <VStack align="start" spacing={2} mb={4}>
                                        <Checkbox value="Italian">Italian</Checkbox>
                                        <Checkbox value="Mexican">Mexican</Checkbox>
                                        <Checkbox value="Indian">Indian</Checkbox>
                                        <Checkbox value="No Preference">No Preference</Checkbox>
                                        <Checkbox value="Health-Conscious">Health-Conscious</Checkbox>
                                        <Checkbox value="Other">Other</Checkbox>
                                    </VStack>
                                </CheckboxGroup>

                                {selectedCuisines.includes("Other") && (
                                    <Input
                                        placeholder="Please specify other cuisine"
                                        value={otherCuisine}
                                        onChange={handleOtherCuisineChange}
                                        mb={4}
                                        backgroundColor="gray.100"
                                        _focus={{ borderColor: "#cd4630" }}
                                    />
                                )}

                                <Button colorScheme="teal" onClick={handleBecomeChefSubmit}>
                                    Submit
                                </Button>
                            </>
                        )}

                        <Button mt={4} variant="ghost" onClick={() => setActiveCard(null)}>
                            Cancel
                        </Button>
                    </Box>
                </Flex>
            )}
        </Flex>
    );
};

export default Landing;
