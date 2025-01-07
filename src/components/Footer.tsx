import { Flex, Box, Container, Stack, ButtonGroup, IconButton, Text } from "@chakra-ui/react";
import { FaInstagram, FaYoutube, FaGoogle } from "react-icons/fa";

import Logo from "./Logo";

const Footer = () => {

    return (
        <Box color={"white"} borderTop={"1px solid"} borderColor={"whiteAlpha.100"} >
            <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
                <Stack spacing={{ base: '4', md: '5' }}>
                    <Stack justify="space-between" direction="row" align="center">
                        <Flex alignItems={"center"} justifyContent={"center"} ml={-4}>
                            <Logo width="130" height="35" isDark={true} />
                        </Flex>
                        <ButtonGroup variant="ghost" colorScheme="whiteAlpha">
                            <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} color={"white"} />
                            <IconButton as="a" href="#" aria-label="Youtube" icon={<FaYoutube />} color={"white"} />
                            <IconButton as="a" href="#" aria-label="Google" icon={<FaGoogle />} color={"white"} />
                        </ButtonGroup>
                    </Stack>
                    <Text fontSize="xs" color="whiteAlpha.800">
                        &copy; {new Date().getFullYear()} Sauté. All rights reserved.
                    </Text>
                </Stack>
            </Container>
        </Box >
    );
};

export default Footer;
