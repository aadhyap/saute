import { Flex, Box, Stack, Heading, Text, Button, Input, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons"; // Importing a better arrow icon
import Logo from "@/components/Logo";

const Landing: React.FC = () => {
    const [cravingFood, setCravingFood] = useState("");
    const [foodSuggestions] = useState(["Pad Thai", "Biryani", "Pizza", "Sushi", "Tacos", "Pasta", "Burger", "Ramen"]);
    const [currentFoodIndex, setCurrentFoodIndex] = useState(0);
    const { isOpen, onToggle } = useDisclosure();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentFoodIndex((prevIndex) => (prevIndex + 1) % foodSuggestions.length);
        }, 2000); // Change food suggestion every 2 seconds

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, []);

    const handleCravingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCravingFood(event.target.value);
    };

    const handleFoodSubmit = () => {
        console.log("Craving submitted:", cravingFood);
        // Add any further logic here, e.g., proceed to next step
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

            <Flex position="absolute" top="10px" left="10px" zIndex={3}>
                <Logo width="200" height="45" isDark={true} />
            </Flex>

            {/* Hero Section */}
            <Flex flex="1" align="center" direction="column" justify="center" zIndex={3}>
                <Stack spacing="5" px={{ sm: 8, md: 0 }} width="100%" align="center">
                    <Heading size={"lg"} color={"white"} width={"80%"} textAlign="center">
                        Feed your soul with food you love
                    </Heading>
                    <Text fontSize={"lg"} textStyle="md" maxW="md" fontWeight={600} color={"white"} textAlign="center">
                        What home-cooked meal are you craving right now?
                    </Text>

                   {/* Input Field with Arrow Button */}
<Box width="100%" maxW="200px">
    <Flex position="relative" align="center">
        <Input
            placeholder="Type your craving..."
            value={cravingFood}
            onChange={handleCravingChange}
            borderRadius="full"
            backgroundColor="white"
            _focus={{ borderColor: "#cd4630" }}
            _hover={{ borderColor: "#cd4630" }}
            size="lg"
            maxW="400px"
            mt={4}
            onFocus={onToggle} // Show arrow when user clicks on input
        />
        {/* Arrow Icon */}
        {cravingFood && (
            <Button
                size="lg"
                color={"white"}
                backgroundColor="#cd4630"
                _hover={{ backgroundColor: "#a73d29" }}
                _active={{ backgroundColor: "#8e2e24" }}
                position="absolute"
                right="0"
                top="27%" // Vertically center the button
                borderRadius="full"
                zIndex={1}
                onClick={handleFoodSubmit}
                aria-label="Submit craving"
            >
                <ArrowForwardIcon />
            </Button>
        )}
    </Flex>
</Box>



                    {/* Food Suggestions */}
                    <Box textAlign="center" color="white" fontSize="lg" fontWeight="bold">
                        <Text transition="opacity 0.5s ease-in-out">
                            {foodSuggestions[currentFoodIndex]}
                        </Text>
                    </Box>
                </Stack>
            </Flex>

            {/* Footer */}
            <Flex align="center" justify="center" h="24" zIndex={3}>
                <Text color="white" textStyle="sm" textAlign="center">
                    © {new Date().getFullYear()} Saute. All rights reserved.
                </Text>
            </Flex>
        </Flex>
    );
};

export default Landing;
