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
        name: '210+ Components',
        description: 'Chakra UI Pro has 210+ componentsto help you develop your project faster.',
        icon: BsStars,
    },
    {
        name: 'Production Ready',
        description:
            'Effortlessly create your next production-ready experience with Chakra UI Pro components.',
        icon: IoRocketSharp,
    },
    {
        name: 'Light & Dark',
        description: 'All components support a light and a dark color mode out of the box.',
        icon: BsFillMoonFill,
    },
    {
        name: 'Themeable',
        description:
            "Your style. Your blue. Customize the components as you need them. It's that simple.",
        icon: FaPaintBrush,
    },
    {
        name: 'Fully Responsive',
        description: 'Responsive components that look great on mobile, tablet and desktop.',
        icon: FaExpandAlt,
    },
    {
        name: 'Accessible',
        description:
            "Accessibility first. That's why we pay attention to accessibility right from the start.",
        icon: FaAccessibleIcon,
    },
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
                            Feed your soul with food you love
                        </Heading>
                        <Text fontSize={"1.4em"} mb={10} textStyle="md" color={"white"} textAlign="center" >
                            What home-cooked meal are you craving right now?
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


                    </Container>
                </Stack>
            </Flex>
            {/* Content Sections Below Hero */}

            {/* About Section */}
            <Flex position={"relative"} direction="column" py={24} align="center" textAlign="center" color={"white"}>
                <Container maxWidth={"container.lg"} px={10}>
                    <Heading lineHeight={"1.3"} fontSize={"1.85em"} fontWeight={600} textTransform={"uppercase"} textAlign={"center"} letterSpacing={1.5} mb={6}>
                        Savor. Discover.  <chakra.span color="primary">Delight.</chakra.span>
                    </Heading>
                    <Text fontSize="md" fontWeight="bold" mb={4}>
                        At Sauté, we’re not just about food; we’re about experience. Our mission is to bring the adventure of a private chef directly to your door
                    </Text>
                    <Text fontSize="md" mb={4}>
                        Every week, you’ll indulge in curated meals from passionate chefs, tailored to your tastes and cravings. For just $50 a month, you’ll get access to a personal culinary artist who serves you exclusive dishes from cuisines like Asian fusion, vegan comfort food, and more.
                    </Text>
                    <Text fontSize="md" >
                        Get ready to discover bold flavors and unexpected twists—because Sauté is where food is more than just a meal; it’s an experience. No more settling for fast food or takeout—it's time to savor meals crafted with care, fresh ingredients, and the artistry of passionate chefs.
                    </Text>
                </Container>
            </Flex>



            {/* 2x2 Food Grid Section with Overlays */}
            <Flex position={"relative"} direction="column" pb={14} px={8} align="center" textAlign="center" color={"white"}>
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
                                    Subscribe Now
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
                                Sign up, choose your cuisine, and let us know your dietary needs.
                            </Text>
                            <Text fontSize="md" mb={4}>
                                We will match you with the perfect chef and meal options for your lifestyle.
                            </Text>
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
                                    <Stack spacing="3">
                                        <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="semibold" color="primary">
                                            Features
                                        </Text>
                                        <Heading lineHeight={"1.3"} fontSize={"1.85em"} fontWeight={600} textTransform={"uppercase"} letterSpacing={1.5} mt={-2} mb={6}>How it & <chakra.span color="primary">Works</chakra.span></Heading>
                                    </Stack>
                                    <Text mt={-8} color="white" fontSize={{ base: 'md', md: 'lg' }}>
                                        A bundle of 210+ ready-to-use, responsive and accessible components with clever
                                        structured sourcode files.
                                    </Text>
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
            <Box backgroundColor={"#000"} width="100%" py={16} display="flex" alignItems="center" justifyContent="center">
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
                <Container maxW={"container.lg"} color={"white"}>
                    <Heading lineHeight={"1.3"} fontSize={"1.85em"} fontWeight={600} textTransform={"uppercase"} textAlign={"center"} letterSpacing={1.5} mb={6}>What Our Customers Are <chakra.span color="primary">Saying</chakra.span></Heading>
                    <SlickTestimonialSlideshow />
                </Container>
            </Flex>



            {/* Footer */}
            <Footer />
        </Flex>
    );
};

export default Landing;
