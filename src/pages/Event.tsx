import {
        Flex,
        Box,
        Stack,
        Heading,
        Text,
        chakra,
        Image,
        Container,
        Icon,
        SimpleGrid,
        Square,
        Grid,
        GridItem,
        Button,
        IconButton,
        Modal,
        ModalOverlay,
        ModalContent,
        ModalHeader,
        ModalCloseButton,
        ModalBody,
        FormControl,
        FormLabel,
        Input,
        ModalFooter,
        useDisclosure,
    } from "@chakra-ui/react";
    import Logo from "@/components/Logo";
    import Footer from "@/components/Footer";
    import EmailSubscribeForm from "@/components/EmailSubscribeForm";
    import SlickTestimonialSlideshow from "@/components/SlickTestimonialSlideshow";
    import { BsFillMoonFill, BsStars } from 'react-icons/bs'
    import {  FaEnvelope, FaInstagram, FaPaintBrush } from 'react-icons/fa'
    
    import FAQ from "@/components/FAQ";
import { useState } from "react";
  
    
    
    
    const Landing: React.FC = () => {
        const { isOpen, onOpen, onClose } = useDisclosure();
    const [name, setName] = useState("");
    const [order, setOrder] = useState("");

    const handleOrderSubmit = () => {
        // Handle the submission logic here (e.g., save to backend or display a confirmation message)
        console.log("Order Details:", { name, order });
        onClose(); // Close the modal after submission
    };
    
        return (
            <Flex
                minH={"100vh"}
                width={"100vw"}
                backgroundColor={"#121212"}
                position="relative"
                flexDirection={"column"}
            >
                
                {/* Content Sections Below Hero */}
    
                {/* About Section */}
                <Flex position={"relative"} direction="column" py={0} align="center" textAlign="center" color={"white"}>
                    {/* Event Details Section */}
<Box bg="#121212" py={16} color="white" textAlign="center">
    <Container maxWidth="container.md">
        <Heading lineHeight="1.3" fontSize="2em" fontWeight={600} textTransform="uppercase" letterSpacing={1.5} mb={4}>
            Join Us at the <chakra.span color="primary">Sauté Bowls Launch</chakra.span>
        </Heading>
        <Text fontSize="1.2em" mb={6}>
            Experience an afternoon of delicious flavors, fun activities, and community connections!
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
                <Heading size="md" mb={2}>📅 Event Date & Time</Heading>
                <Text fontSize="lg">Sunday, January 19th, 2025</Text>
                <Text fontSize="lg">12:00 PM - 2:30 PM</Text>
            </Box>
            <Box>
                <Heading size="md" mb={2}>📍 Location</Heading>
                <Text fontSize="lg">Cypress Village Community Center (Clubhouse) </Text>
                <Text fontSize="lg">Irvine, CA</Text>
            </Box>
            <Box>
                <Heading size="md" mb={2}>🎉 Activities</Heading>
                <Text fontSize="lg">- Authentic Ethnic Food !!  </Text>
                <Text fontSize="lg">- Live music and entertainment</Text>
                <Text fontSize="lg">- Meet the chefs</Text>
            </Box>
            <Box>
                <Heading size="md" mb={2}>👥 RSVP</Heading>
                <Text fontSize="lg">Order your Saute bowls before Friday 01/17</Text>
            </Box>
        </SimpleGrid>
    </Container>
</Box>

                </Flex>
    
    
    
                {/* 2x2 Food Grid Section with Overlays */}
                <Flex position={"relative"} direction="column" pb={14} px={8} align="center" textAlign="center" color={"white"}>
    
    
                    <Heading lineHeight={"1.3"} fontSize={"1.85em"} fontWeight={600} textTransform={"uppercase"} textAlign={"center"} letterSpacing={1.5} mb={6}>
                        Savor. Discover.  <chakra.span color="primary">Delight.</chakra.span>
                    </Heading>
    
    
                    <Grid
                        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // Single column on small screens, 2 columns on medium+
                        templateRows="auto"
                        gap={6}
                        width={{ base: "100%", md: "90vw", lg: "80vw", xl: "65vw" }}
                        height="150vh"
                    >
                        {[
                            { src: "/img/DesiProteinBowl.jpg", title: "Desi Protein Bowl", desc: "A protein-packed blend of spiced chickpeas, fresh cucumber-tomato salad, and a zesty coriander chutney for a light, satisfying meal." },
                            { src: "/img/IndoChineseBowl.jpg", title: "Indo Chinese Bowl", desc: "Tofu, spicy chili-garlic sauce, and vibrant stir-fried veggies make this bowl an irresistible fusion of bold flavors and smoky goodness." },
                        ].map((item, index) => (
                            <GridItem
                                key={index}
                                position="relative"
                                bgImage={`url(${item.src})`}
                                bgSize="cover"
                                bgPosition="center"
                                borderRadius="md"
                                overflow="hidden"
                                height="50%"
                            >
                                {/* Gray Overlay */}
                                <Box
                                    position="absolute"
                                    top={0}
                                    left={0}
                                    right={0}
                                    bottom={0}
                                    bgGradient="linear(to-t, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), transparent, transparent)" // Gradient background
                                />
                                {/* Overlay Content */}
                                <Box
                                    position="absolute"
                                    left={0}
                                    bottom={0} // Align content to the bottom
                                    p={6}
                                    color="white"
                                    borderTopLeftRadius="md"
                                    borderBottomRightRadius="md"
                                    textAlign={"left"}
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
                                        border={"1px solid"}
                                        borderColor={"whiteAlpha.300"}
                                        color="white"
                                        borderRadius="0" // Sharp edges
                                        paddingX={6} // Adjusts horizontal padding for a wider button
                                        paddingY={4} // Adjusts vertical padding for a taller button
                                        _hover={{ backgroundColor: "primary" }} // Changes the color when hovered over
                                        onClick={onOpen}
                                    >
                                        Order Now
                                    </Button>
                                    {/* Order Modal */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Place Your Order</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text mb={4}>
                            Venmo @mySaute with $15 for your selected bowl(s). Make sure you state the bowl name in the order!
                        </Text>
                        <FormControl mb={4}>
                            <FormLabel>Your Name</FormLabel>
                            <Input
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>Your Order</FormLabel>
                            <Input
                                placeholder="Enter your order details"
                                value={order}
                                onChange={(e) => setOrder(e.target.value)}
                            />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleOrderSubmit}>
                            Submit Order
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
                                </Box>
                            </GridItem>
                        ))}
    
                    </Grid>
                </Flex>
    
                {/* "How It Works" Section */}
    
                {/* Section 2: Text Right, Image Left */}
                <Box bg="#000000" width="100%" py={16} overflow={"hidden"} display="flex" alignItems="center" justifyContent="center" color={"white"}>
                    <Container maxWidth={"container.lg"}>
                        <Flex flexDirection={{ base: "column", md: "row" }} gap={16} width="100%" alignItems="center" justifyContent="space-between" px={{ base: 4, md: 8 }}>
                            <Box flex={{ base: 1, md: 0.5 }} order={2}>
                                <Heading lineHeight={"1.3"} fontSize={"1.85em"} fontWeight={600} textTransform={"uppercase"} letterSpacing={1.5} mb={6}>Join the Sauté <chakra.span color="primary">Journey</chakra.span></Heading>
                                <Text fontSize="md" mb={4}>
                                    At Sauté, we understand the struggle of balancing a busy life with the desire for nutritious, authentic meals. The dominance of unhealthy fast food and the hectic pace of modern life make it difficult to access meals that truly nourish the body and soul. We’re here to change that.
                                </Text>
    
                                <Button
                                    py={6}
                                    px={8}
                                    size="sm"
                                    fontWeight={600}
                                    colorScheme="blue"
                                    backgroundColor={"primary"}
                                    rounded="full"
    
                                >
                                    Join the Irvine Waitlist
                                </Button>
                            </Box>
                            <Box flex={{ base: 1, md: 0.5 }} order={1}>
                                <Image src="/img/main-dish.png" alt="Main Dish" width="100%" height="auto" />
                            </Box>
                        </Flex>
                    </Container>
                </Box>
    
               
    
    
                {/* Section 3: Text Left, Image Right */}
                <Box backgroundColor={"#000"} display={"none"} width="100%" py={16} alignItems="center" justifyContent="center">
                    <Container maxWidth={"container.lg"}>
    
                        <Flex flexDirection={{ base: "column", md: "row" }} gap={16} width="100%" alignItems="center" justifyContent="space-between" px={{ base: 4, md: 8 }} color={"white"}>
                            <Box flex={{ base: 1, md: 0.5 }} order={1}>
                                <Heading lineHeight={"1.3"} fontSize={"1.85em"} fontWeight={600} textTransform={"uppercase"} letterSpacing={1.5} mb={6}>Meet Your <chakra.span color="primary">Chef</chakra.span></Heading>
                                <Text fontSize="md" mb={4}>
                                    We match you with a local chef who brings your meals to life.
                                </Text>
                                <Text fontSize="md" mb={4}>
                                    They craft meals just for you, bringing gourmet tastes to your kitchen with fresh, locally sourced ingredients.
                                </Text>
                            </Box>
                            <Box flex={{ base: 1, md: 0.5 }} order={2}>
                                <Image src="/img/second-dish.png" alt="Chef image" width="100%" height="auto" />
                            </Box>
                        </Flex>
                    </Container>
                </Box>
    
                <Box backgroundColor={"#171717"} width="100%" py={16} display="flex" alignItems="center" justifyContent="center">
                    <Container maxWidth={"container.lg"}>
                        <Flex width={"100%"} justifyContent={"center"} alignItems={"center"}>
                            <Heading color={"white"} lineHeight={"1.3"} fontSize={"1.85em"} fontWeight={600} textTransform={"uppercase"} letterSpacing={1.5} mb={6}>FAQ </Heading>
                        </Flex>
                        <FAQ />
                    </Container>
                </Box>
    
                {/* Testimonial Section */}
                <Flex direction="column" py={24} align="center">
                    <Container display={"flex"} flexDirection={"column"} justifyContent={"center"} maxW={"container.lg"} color={"white"}>
                        <Heading lineHeight={"1.3"} fontSize={"1.85em"} fontWeight={600} textTransform={"uppercase"} textAlign={"center"} letterSpacing={1.5} mb={6}>What Our Customers Are <chakra.span color="primary">Saying</chakra.span></Heading>
                        <SlickTestimonialSlideshow />
    
                        <Button
                            py={6}
                            px={8}
                            size="sm"
                            fontWeight={600}
                            colorScheme="blue"
                            backgroundColor={"primary"}
                            rounded="full"
                            width={"max-content"}
                            mt={8}
                            mx={"auto"}
    
    
                        >
                            Join the Irvine Waitlist
                        </Button>
                    </Container>
                </Flex>
    
    
    
                {/* Footer */}
                <Footer />
            </Flex>
        );
    };
    
    export default Landing;
    