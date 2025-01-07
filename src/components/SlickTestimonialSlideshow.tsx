import React from "react";
import Slider from "react-slick";
import { Box, Text, Flex } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from "./Rating";

const testimonials = [
    {
        content:
            "This was my first time trying these cookies and OMG. Honestly I have always been a fan of the pink box, but I am pretty sure I’m making the switch to the black box. Do not hesitate to try these!",
        name: "Misty A.",
        source: "Google Review",
    },
    {
        content:
            "Utah is seemingly saturated with cookie and soda places but this one stands out from the crowd. I’ve never seen more creative flavors and have ALL been good ones that I’ve tried. I’m impressed every time so this place is a must try!! The chocolate cream pie is a 10/10.",
        name: "Jacob N.",
        source: "Google Review",
    },
    {
        content:
            "So good. Reminded me of the cookies from Levain Bakery in NYC. Definitely better than the competition around here. Hope to see more pop up outside of Utah. Really enjoyed the soda too!",
        name: "Heath B.",
        source: "Google Review",
    },
    {
        content:
            "Amazing cookies with a rich flavor. Definitely my new favorite spot for dessert in Utah!",
        name: "Laura C.",
        source: "Google Review",
    },
];

const SlickTestimonialSlideshow: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3, // Show 3 testimonials at a time
        slidesToScroll: 1,
        arrows: false, // Hide the arrows
        customPaging: (_: number) => (
            <Box
                w="8px"
                h="8px"
                bg="whiteAlpha.200"
                borderRadius="50%"
                mx="4px"
                cursor="pointer"
                _hover={{ bg: "gray.400" }}
                className="custom-dot" // Add a custom class for styling
            />
        ),
        appendDots: (dots: React.ReactNode) => (
            <Box>
                <Flex justify="center" mt={4}>
                    {dots}
                </Flex>
            </Box>
        ),
        responsive: [
            {
                breakpoint: 1024, // For medium-sized screens
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, // For smaller screens
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Box color="white" p={8} textAlign="center">
            <Slider {...settings} >
                {testimonials.map((testimonial, index) => (
                    <Flex
                        key={index}
                        direction="column"
                        align="center"
                        justify="center"
                        p={4}
                        px={6}
                        borderRadius="md"
                        mx={2}
                    >
                        <Flex width={"100%"} justifyContent={"center"} alignItems={"center"} mb={3}>
                            <Rating />
                        </Flex>

                        <Text fontSize="md" mb={4}>
                            {testimonial.content}
                        </Text>
                        <Text fontWeight="bold">{testimonial.name}</Text>
                        <Text fontSize="sm" color="whiteAlpha.700">
                            {testimonial.source}
                        </Text>
                    </Flex>
                ))}
            </Slider>
        </Box>
    );
};

export default SlickTestimonialSlideshow;
