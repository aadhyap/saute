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
} from "@chakra-ui/react";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import EmailSubscribeForm from "@/components/EmailSubscribeForm";
import SlickTestimonialSlideshow from "@/components/SlickTestimonialSlideshow";
import { BsFillMoonFill, BsStars } from 'react-icons/bs'
import { FaAccessibleIcon, FaEnvelope, FaExpandAlt, FaInstagram, FaPaintBrush } from 'react-icons/fa'
import { IoRocketSharp } from 'react-icons/io5'
import FAQ from "@/components/FAQ";

export const features = [
    {
        name: 'Choose Your Subscription',
        description: 'Select a weekly or monthly plan that fits your lifestyle.',
        icon: BsStars,
    },
    {
        name: 'Customize Your Menu',
        description:
            'Pick your favorite culturally inspired bowls from our rotating menu.',
        icon: IoRocketSharp,
    },
    {
        name: 'Relax and Enjoy',
        description: 'Your meals arrive fresh and ready to heat—no prep, no stress.',
        icon: BsFillMoonFill,
    },
    {
        name: 'Easily Manage Your Plan',
        description:
            "Pause, skip, or adjust your subscription anytime with our flexible scheduling.",
        icon: FaPaintBrush,
    }
]




const Landing: React.FC = () => {

    return (
        <Flex
            minH={"100vh"}
            width={"100vw"}
            backgroundColor={"#121212"}
            position="relative"
            flexDirection={"column"}
        >
            <Flex position={"relative"} justifyContent={"center"} alignItems={"center"} height={"80vh"} width={"100%"} >
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
                />

                {/* Overlay */}
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    bottom="0"
                    width="100%"
                    height="100%"
                    bg="rgba(0, 0, 0, 0.6)"
                    zIndex={1}
                />
                <Flex position="absolute" top="18px" left="auto" right="auto" zIndex={2}>
                    <Logo width="200" height="45" isDark={true} />
                </Flex>

                {/* Hero Section */}
                <Stack
                    top="0"
                    bottom="0"
                    left="0"
                    zIndex={2}
                    spacing="5"
                    align="center"
                >
                    <Container display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} maxWidth={"container.lg"}>
                        <Heading maxWidth={"800px"} lineHeight={"1.2"} fontSize={"3em"} fontWeight={600} textTransform={"uppercase"} textAlign={"center"} letterSpacing={1.5} mb={6} color={"white"} >
                            Healthy, Authentic Meals Delivered for Your Busy Life
                        </Heading>
                        <Text fontSize={"1.4em"} mb={10} textStyle="md" color={"white"} textAlign="center" >
                            More nutritious than fast food. More convenient than cooking. Experience the flavors of home, delivered fresh to your door.
                        </Text>

                        <EmailSubscribeForm />

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
                        {/* Event Button */}
                        <Button
                            as="a"
                            href="/events" // Link to event details
                            mt={50}
                            colorScheme="orange"
                            size="md"
                            borderRadius="full"
                            px={6}
                            textAlign="center"
                            _hover={{
                                backgroundColor: "orange",
                            }}
                        >
                            Cypress Village 01/19 Event - Click Here
                        </Button>


                    </Container>
                </Stack>
            </Flex>
            {/* Content Sections Below Hero */}

            {/* About Section */}
            <Flex position={"relative"} direction="column" py={24} align="center" textAlign="center" color={"white"}>
                <Container maxWidth={"container.lg"} px={10}>
                    <Heading lineHeight={"1.3"} fontSize={"1.85em"} fontWeight={600} textTransform={"uppercase"} textAlign={"center"} letterSpacing={1.5} mb={6}>
                        Why Choose  <chakra.span color="primary">Sauté?</chakra.span>
                    </Heading>

                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                        <Stack>
                            <Heading size={"xs"}>Cultural Authenticity</Heading>
                            <Text fontSize="md" fontWeight="bold" mb={4}>
                                Reconnect with dishes inspired by diverse traditions, crafted to bring the comfort of home to your table."
                            </Text>
                        </Stack>
                        <Stack>
                            <Heading size={"xs"}>Convenience</Heading>
                            <Text fontSize="md" mb={4}>
                                Skip the prep and cooking—just heat, eat, and enjoy meals made for your busy life.
                            </Text>
                        </Stack>

                        <Stack>
                            <Heading size={"xs"}>A Nutritious Alternative </Heading>

                            <Text fontSize="md" >
                                Healthier meals that nourish your body, without sacrificing convenience or cultural authenticity.                        </Text>
                        </Stack>
                    </SimpleGrid>


                </Container>
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
                        { src: "/img/BombayChaat.jpg", title: "Bombay Chaat Bowl", desc: "Roasted sweet potatoes, spiced chickpeas, and tamarind chutney come together in a healthy twist on your favorite chaat—tangy, savory, and vibrant." },
                        { src: "/img/DesiProteinBowl.jpg", title: "Desi Protein Bowl", desc: "A protein-packed blend of spiced chickpeas, fresh cucumber-tomato salad, and a zesty coriander chutney for a light, satisfying meal." },
                        { src: "/img/eggpuffbowl.jpg", title: "Eggstasy Bowl", desc: "Soft-boiled eggs, roasted cauliflower, and sautéed onions on farro, topped with tangy tamarind chutney—comforting and packed with flavor." },
                        { src: "/img/IndoChineseBowl.jpg", title: "Indo Chinese Bowl", desc: "Grilled chicken or paneer, spicy chili-garlic sauce, and vibrant stir-fried veggies make this bowl an irresistible fusion of bold flavors and smoky goodness." },
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
                                >
                                    Order Now
                                </Button>
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

            {/* Section 4: Text Right, Image Left */}
            <Box backgroundColor={"#171717"} width="100%" py={24} display="flex" alignItems="center" justifyContent="center">
                <Container maxWidth={"container.lg"}>

                    <Flex width="100%" alignItems="center" justifyContent="space-between" px={{ base: 4, md: 8 }} color={"white"}>
                        <Box order={2}>

                            <Stack spacing={{ base: '12', md: '16' }}>
                                <Stack spacing={{ base: '4', md: '5' }} maxW="3xl">
                                    <Stack spacing="3" mb={-10} >
                                        <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="semibold" color="primary">
                                            Features
                                        </Text>
                                        <Heading lineHeight={"1.3"} fontSize={"1.85em"} fontWeight={600} textTransform={"uppercase"} letterSpacing={1.5} mt={-2} mb={6}>How Sauté <chakra.span color="primary">Works</chakra.span></Heading>
                                    </Stack>

                                </Stack>
                                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} columnGap={8} rowGap={{ base: 10, md: 16 }}>
                                    {features.map((feature) => (
                                        <Stack key={feature.name} spacing={{ base: '4', md: '5' }}>
                                            <Square
                                                size={{ base: '10', md: '12' }}
                                                bg="primary"
                                                color="fg.inverted"
                                                borderRadius="lg"
                                            >
                                                <Icon as={feature.icon} boxSize={{ base: '5', md: '6' }} />
                                            </Square>
                                            <Stack spacing={{ base: '1', md: '2' }} flex="1">
                                                <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="medium">
                                                    {feature.name}
                                                </Text>
                                                <Text color="whiteAlpha.700">{feature.description}</Text>
                                            </Stack>

                                        </Stack>
                                    ))}
                                </SimpleGrid>
                            </Stack>



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
