import { Flex, Box, Stack, Heading, Text, Button, Input, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons"; // Importing a better arrow icon
import Logo from "@/components/Logo";

const Landing: React.FC = () => {
    const [cravingFood, setCravingFood] = useState("");
    const [foodSuggestions] = useState(["Pad Thai", "Biryani", "Pizza", "Sushi", "Tacos", "Pasta", "Burger", "Ramen"]);
    const [currentFoodIndex, setCurrentFoodIndex] = useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure(); // Disclosure hook for modal

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
        // Open modal to ask for name, email, and message
        onOpen();
    };

    // State to handle user input for modal
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleFormSubmit = () => {
        console.log("User Info:", { name, email, message });
        onClose(); // Close modal after submission
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
                                mt={4}
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
                                    onClick={handleFoodSubmit} // On arrow click, show modal
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
            {/* Content Sections Below Hero */}
            <Flex direction="column" pt="70vh"> {/* Add padding top to move sections down */}
                {/* About Section */}
                <Flex direction="column" py={16} align="center" textAlign="center" bg="gray.100">
    <Heading size="lg" mb={4} fontFamily="'Playfair Display', serif" fontWeight="700" color="gray.800">
    Savor. Discover. Delight.
    </Heading>
    <Text fontSize="lg" fontWeight="bold" maxW="2xl" color="gray.700" mb={4} fontFamily="'Lora', serif">
    At Sauté, we’re not just about food; we’re about experience. Our mission is to bring the adventure of a private chef directly to your door
    </Text>
    <Text fontSize="lg" color="gray.500" maxW="2xl" mb={4} fontFamily="'Lora', serif">
    Every week, you’ll indulge in curated meals from passionate chefs, tailored to your tastes and cravings. For just $50 a month, you’ll get access to a personal culinary artist who serves you exclusive dishes from cuisines like Asian fusion, vegan comfort food, and more.
    </Text>
    <Text fontSize="lg" color="gray.500" maxW="2xl" fontFamily="'Lora', serif">
    Get ready to discover bold flavors and unexpected twists—because Sauté is where food is more than just a meal; it’s an experience. No more settling for fast food or takeout—it's time to savor meals crafted with care, fresh ingredients, and the artistry of passionate chefs.
    </Text>
</Flex>

                {/* Featured Meals Section */}
                <Flex direction="column" py={16} align="center">
                    <Heading size="xl" mb={4}>Featured Meals</Heading>
                    <Stack direction={{ base: "column", md: "row" }} spacing={8} justify="center">
                        <Box boxSize="sm" bg="gray.200" borderRadius="md" overflow="hidden">
                            <img src="/images/pad-thai.jpg" alt="Pad Thai" />
                            <Text fontWeight="bold" p={4}>Pad Thai</Text>
                        </Box>
                        <Box boxSize="sm" bg="gray.200" borderRadius="md" overflow="hidden">
                            <img src="/images/biryani.jpg" alt="Biryani" />
                            <Text fontWeight="bold" p={4}>Biryani</Text>
                        </Box>
                        <Box boxSize="sm" bg="gray.200" borderRadius="md" overflow="hidden">
                            <img src="/images/sushi.jpg" alt="Sushi" />
                            <Text fontWeight="bold" p={4}>Sushi</Text>
                        </Box>
                    </Stack>
                </Flex>

                {/* Testimonial Section */}
                <Flex direction="column" py={16} bg="gray.100" align="center">
                    <Heading size="xl" mb={4}>What Our Customers Are Saying</Heading>
                    <Stack spacing={8} maxW="xl" align="center">
                        <Box textAlign="center" maxW="sm">
                            <Text fontSize="lg" fontWeight="bold" color="gray.700">"The food was amazing, and I got exactly what I was craving!"</Text>
                            <Text color="gray.500">– Jane D.</Text>
                        </Box>
                        <Box textAlign="center" maxW="sm">
                            <Text fontSize="lg" fontWeight="bold" color="gray.700">"A delicious meal delivered straight to my door. Will order again!"</Text>
                            <Text color="gray.500">– John S.</Text>
                        </Box>
                    </Stack>
                </Flex>
                </Flex>

            

            {/* Footer */}
            <Flex align="center" justify="center" h="24" zIndex={3}>
                <Text color="white" textStyle="sm" textAlign="center">
                    © {new Date().getFullYear()} Saute. All rights reserved.
                </Text>
            </Flex>

            {/* Modal Popup */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Almost There! Just a Few More Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing="4">
                            <Input
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                borderRadius="full"
                                size="lg"
                            />
                            <Input
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                borderRadius="full"
                                size="lg"
                                type="email"
                            />
                            <Input
                                placeholder="City/Town"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                borderRadius="full"
                                size="lg"
                            />
                            <Input
                                placeholder="Anything you'd liked us to know?"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                borderRadius="md"
                                size="lg"
                                as="textarea"
                            />
                        </Stack>
                    </ModalBody>   
                    
                    <ModalFooter>
                        <Button colorScheme="blue" onClick={handleFormSubmit}>
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            
            
            
        </Flex>
        
        
    );
};

export default Landing;
