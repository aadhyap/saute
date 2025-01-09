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
        question: "What makes Sauté different?",
        answer:
            "We provide nutritious, culturally inspired meals that are more authentic and healthier than fast food, with the convenience you need for a busy life.",
    },
    {
        question: "How does the subscription work?",
        answer:
            "Choose a plan, customize your meals, and let us handle the rest. You can pause, skip, or cancel anytime.",
    },
    {
        question: "Are the meals fresh or frozen?",
        answer:
            "Our meals are delivered fresh, ready to heat and enjoy.",
    },
    {
        question: "How do I manage my subscription?",
        answer:
            "Log in to your account to adjust your plan anytime.",
    },
    {
        question: "Is Saute available outside of Irvine?",
        answer:
            "Currently, Saute is serving Irvine, CA only—but not for long! We plan to expand to other areas soon.",
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
