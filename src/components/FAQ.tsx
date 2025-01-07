import React from "react";
import {
    Box,
    VStack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";

const faqs = [
    {
        question: "What is Sauté?",
        answer:
            "Sauté is a premium food delivery service that brings freshly prepared, restaurant-quality meals straight to your doorstep. We focus on healthy, delicious, and sustainable options.",
    },
    {
        question: "How does Sauté work?",
        answer:
            "Browse our menu online or through our app, select your favorite dishes, and choose your delivery time. Our chefs prepare your meals fresh, and they are delivered to your door, ready to enjoy!",
    },
    {
        question: "What areas does Sauté deliver to?",
        answer:
            "We currently deliver to major metropolitan areas. Enter your zip code on our website to check if we deliver to your location.",
    },
    {
        question: "Are your meals customizable?",
        answer:
            "Yes! We offer customizable options for many dishes, including vegetarian, vegan, gluten-free, and low-carb preferences.",
    },
    {
        question: "Is there a delivery fee?",
        answer:
            "Delivery fees vary depending on your location and order size. Orders over $50 qualify for free delivery in most areas.",
    },
    {
        question: "How do I contact customer support?",
        answer:
            "You can reach our customer support team via email at support@saute.com or call us at (555) 123-4567. We’re happy to assist you!",
    },
];

const FAQ: React.FC = () => {
    return (
        <Box p={8} borderRadius="md" color={"white"}>

            <VStack spacing={4} align="stretch">
                <Accordion allowMultiple>
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} border="none">
                            <h2>
                                <AccordionButton
                                    _expanded={{ bg: "blackAlpha.400", color: "white" }}
                                    borderRadius="md"
                                    p={4}
                                >
                                    <Box flex="1" textAlign="left" fontWeight="bold">
                                        {faq.question}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={8} pt={4} pl={8} color="white">
                                {faq.answer}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </VStack>
        </Box>
    );
};

export default FAQ;
