import { Flex, Box, Stack, Heading, Text, Button, Input, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, GridItem, Grid, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons"; // Importing a better arrow icon
import Logo from "@/components/Logo";
import { FaEnvelope, FaInstagram } from "react-icons/fa";

const Landing: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure(); // Disclosure hook for modal

  

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleEmailSubmit = () => {
        console.log("Email submitted:", email);
        onOpen();
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleFormSubmit = () => {
        console.log("User Info:", { name, email });
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
            
            {/* Fixed Black Header */}
            <Box
                position="fixed"
                top="0"
                left="0"
                width="100%"
                backgroundColor="black"
                zIndex={1000} // Ensure it stays on top of other content
                py={4} // Padding for height
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
            >
                <Flex justify="center" align="center">
                    <Logo width="200" height="85" isDark={true} />
                </Flex>
            </Box>
            

            {/* Hero Section */}
            <Flex flex="1" align="center" direction="column" justifyContent="center" alignItems="center" minHeight="100vh" zIndex={3}>
                <Stack spacing="2" px={{ sm: 8, md: 0 }} width="100%" align="center">
                    <Heading size={"lg"} color={"white"} width={"80%"} textAlign="center">
                        Feed your soul with food you love
                    </Heading>
                    <Text fontSize={"lg"} textStyle="md" maxW="md" fontWeight={600} color={"white"} textAlign="center">
                        Be our first customers to our limited edition recipes!
                    </Text>

                    {/* Input Field with Arrow Button */}
                    <Box width="100%" maxW="300px">
                        <Flex position="relative" align="center">
                            <Input
                                placeholder="Type your email..."
                                value={email}
                                onChange={handleEmailChange}
                                borderRadius="full"
                                backgroundColor="white"
                                _focus={{ borderColor: "#cd4630" }}
                                _hover={{ borderColor: "#cd4630" }}
                                size="lg"
                                mt={4}
                            />
                            {/* Arrow Icon */}
                            {email && (
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
                                    onClick={handleEmailSubmit} // On arrow click, show modal
                                    aria-label="Submit craving"
                                >
                                    <ArrowForwardIcon />
                                </Button>
                            )}
                        </Flex>
                    </Box>


                    {/* Social Media Icons */}
                    <Flex mt={4}>
                        {/* Instagram Icon */}
                        <IconButton
                            as="a"
                            href="https://www.instagram.com/mysaute" // Replace with your Instagram link
                            target="_blank"
                            aria-label="Instagram"
                            icon={<FaInstagram />}
                            colorScheme="whiteAlpha"
                            variant="outline"
                            size="lg"
                            mr={4}
                        />
                        
                        {/* Email Icon */}
                        <IconButton
                            as="a"
                            href="mailto:admin@mysaute.com" // Replace with your email
                            target="_blank"
                            aria-label="Email"
                            icon={<FaEnvelope />}
                            colorScheme="whiteAlpha"
                            variant="outline"
                            size="lg"
                        />
                    </Flex>
                </Stack>
                
            </Flex>
            {/* Content Sections Below Hero */}
            <Flex direction="column" pt="0vh"> {/* Add padding top to move sections down */}
                {/* About Section */}
                <Flex direction="column" py={16} align="center" textAlign="center" bg="black">
    <Heading size="lg" mb={4} fontFamily="'Playfair Display', serif" fontWeight="700" color="white">
    Savor. Discover. Delight.
    </Heading>
    <Text fontSize="md" fontWeight="bold" maxWidth="900px" color="white" mb={4} fontFamily="'Lora', serif">
    At Sauté, we’re not just about food; we’re about experience. Our mission is to bring the adventure of a private chef directly to your door
    </Text>
    <Text fontSize="md" color="white" maxWidth="900px" mb={4} fontFamily="'Lora', serif">
    Every week, you’ll indulge in curated meals from passionate chefs, tailored to your tastes and cravings. For just $50 a month, you’ll get access to a personal culinary artist who serves you exclusive dishes from cuisines like Asian fusion, vegan comfort food, and more.
    </Text>
    <Text fontSize="md" color="white" maxWidth="900px"fontFamily="'Lora', serif">
    Get ready to discover bold flavors and unexpected twists—because Sauté is where food is more than just a meal; it’s an experience. No more settling for fast food or takeout—it's time to savor meals crafted with care, fresh ingredients, and the artistry of passionate chefs.
    </Text>
</Flex>

                {/* 2x2 Food Grid Section with Overlays */}
<Flex direction="column"  bg="black" align="center">
  <Grid
    templateColumns="repeat(2, 1fr)"
    templateRows="repeat(2, 1fr)"
    gap={4}
    width="90vw"
    height="150vh"
  >
    {[
   { src: "/src/assets/BombayChaat.jpg", title: "Bombay Chaat Bowl", desc: "Roasted sweet potatoes, spiced chickpeas, and tamarind chutney come together in a healthy twist on your favorite chaat—tangy, savory, and vibrant." },
   { src: "/src/assets/DesiProteinBowl.jpg", title: "Desi Protein Bowl", desc: "A protein-packed blend of spiced chickpeas, fresh cucumber-tomato salad, and a zesty coriander chutney for a light, satisfying meal." },
   { src: "/src/assets/eggpuffbowl.jpg", title: "Eggstasy Bowl", desc: "Soft-boiled eggs, roasted cauliflower, and sautéed onions on farro, topped with tangy tamarind chutney—comforting and packed with flavor." },
   { src: "/src/assets/IndoChineseBowl.jpg", title: "Indo Chinese Bowl", desc: "Grilled chicken or paneer, spicy chili-garlic sauce, and vibrant stir-fried veggies make this bowl an irresistible fusion of bold flavors and smoky goodness." },
].map((item, index) => (
   <GridItem
     key={index}
     position="relative"
     bgImage={`url(${item.src})`}
     bgSize="cover"
     bgPosition="center"
     borderRadius="md"
     overflow="hidden"
     height="100%"
   >
    {/* Gray Overlay */}
    <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.2)" // semi-transparent black overlay
        />
     {/* Overlay Content */}
     <Box
       position="absolute"
       left={0}
       bottom={0} // Align content to the bottom
       p={4}
       color="white"
       borderTopLeftRadius="md"
       borderBottomRightRadius="md"
     >
       <Heading size="sm" fontWeight="bold" mb={2}>
         {item.title}
       </Heading>
       <Text fontSize="sm" mb={2}>
         {item.desc}
       </Text>
       <Button 
       size="lg" // Makes the button larger
       colorScheme="blackAlpha"
       backgroundColor="black"
       color="white"
       borderRadius="0" // Sharp edges
       paddingX={6} // Adjusts horizontal padding for a wider button
       paddingY={4} // Adjusts vertical padding for a taller button
       _hover={{ backgroundColor: "gray.800" }} // Changes the color when hovered over
       >
         Order Now
       </Button>
     </Box>
   </GridItem>
 ))}

  </Grid>
</Flex>


                {/* Section 2: Text Right, Image Left */}
            <Box bg="#ffbc99" width="100%" height="65vh" display="flex" alignItems="center" justifyContent="center">
                <Flex width="100%" alignItems="center" justifyContent="space-between" px={{ base: 4, md: 8 }}>
                    <Box width="45%" order={2}>
                        <Heading size="lg" mb={4}>Join the Sauté Journey</Heading>
                        <Text fontSize="lg" mb={4}>
                            Sign up, choose your cuisine, and let us know your dietary needs.
                        </Text>
                        <Text fontSize="lg" mb={4}>
                            We will match you with the perfect chef and meal options for your lifestyle.
                        </Text>
                    </Box>
                    <Box width="45%" order={1}>
                        <img src="/path-to-your-image.jpg" alt="Journey image" width="100%" height="auto" />
                    </Box>
                </Flex>
            </Box>

           {/* Section 3: Text Left, Image Right */}
            <Box bg="#ff9966" width="100%" height="65vh" display="flex" alignItems="center" justifyContent="center">
                <Flex width="100%" alignItems="center" justifyContent="space-between" px={{ base: 4, md: 8 }}>
                    <Box width="45%" order={1}>
                        <Heading size="lg" mb={4}>Meet Your Chef</Heading>
                        <Text fontSize="lg" mb={4}>
                            We match you with a local chef who brings your meals to life.
                        </Text>
                        <Text fontSize="lg" mb={4}>
                            They craft meals just for you, bringing gourmet tastes to your kitchen with fresh, locally sourced ingredients.
                        </Text>
                    </Box>
                    <Box width="45%" order={2}>
                        <img src="/path-to-your-image.jpg" alt="Chef image" width="100%" height="auto" />
                    </Box>
                </Flex>
            </Box>

            {/* Section 4: Text Right, Image Left */}
            <Box bg="#ff7f33" width="100%" height="65vh" display="flex" alignItems="center" justifyContent="center">
                <Flex width="100%" alignItems="center" justifyContent="space-between" px={{ base: 4, md: 8 }}>
                    <Box width="45%" order={2}>
                        <Heading size="lg" mb={4}>Pay & Taste</Heading>
                        <Text fontSize="lg" mb={4}>
                            Lock in your spot, and get ready for a week full of flavor. We take care of the rest.
                        </Text>
                        <Text fontSize="lg" mb={4}>
                            You pay for your meals and enjoy hand-crafted dishes delivered directly to your door.
                        </Text>
                    </Box>
                    <Box width="45%" order={1}>
                        <img src="/path-to-your-image.jpg" alt="Payment image" width="100%" height="auto" />
                    </Box>
                </Flex>
            </Box>

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
