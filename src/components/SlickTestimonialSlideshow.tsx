import React from "react";
import Slider from "react-slick";
import { Box, Text, Flex } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from "./Rating";

const testimonials = [
    {
        content:
            "Sauté is exactly what I needed. I can finally enjoy meals that remind me of my grandmother's cooking without spending hours in the kitchen. It’s a game-changer for my busy schedule.",
        name: "Priya",
        source: "Review",
    },
    {
        content:
            "I was tired of fast food but didn’t have the time to cook every day. Sauté delivers fresh, delicious meals that feel like a warm hug from home. Highly recommend!",
        name: "Neil",
        source: "Review",
    },
    {
        content:
            "With Sauté, I never have to sacrifice nutrition or flavor. It’s perfect for someone like me who wants healthy, convenient meals that still feel special.",
        name: "Anika",
        source: "Review",
    }
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
