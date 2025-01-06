// pages/Admin.jsx 
import { useState } from "react";
import { Button, Container, createIcon, Flex, Text, Heading, HStack, Stack, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useAuth } from "@/providers/AuthProvider";

import Logo from "@/components/Logo";

export const GoogleIcon = createIcon({
    displayName: 'GoogleIcon',
    path: (
        <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
            <path
                fill="#4285F4"
                d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
            />
            <path
                fill="#34A853"
                d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
            />
            <path
                fill="#FBBC05"
                d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
            />
            <path
                fill="#EA4335"
                d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
            />
        </g>
    ),
})


const AdminLogin = () => {
    const { isUserLoading } = useAuth();

    const { googleSignIn } = useAuth();
    const [_, setIsLoading] = useState(false);

    const toast = useToast();

    const handleSignIn = async () => {
        try {
            setIsLoading(true); // Start loading state
            await googleSignIn();
        } catch (error: any) {
            console.error("Sign-in error:", error);
            toast({
                title: "Sign In Failed",
                description: error.message || "An error occurred. Please try again.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false); // Reset loading state
        }
    };



    // Instead of returning an empty string, return null when loading
    if (isUserLoading) {
        return null; // or a loading spinner component
    }

    return (<Flex backgroundColor={"#121212"} justifyContent={"center"} alignItems={"center"} width={"100vw"} height={"100vh"}>
        <Container maxW="lg" py={{ base: '12', md: '24' }}>
            <Stack spacing="8">
                <Stack spacing="6">
                    <Flex width={"100%"} alignItems={"center"} justifyContent={"center"}>
                        <Logo width="200" height="45" isDark={true} />
                    </Flex>
                    <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                        <Heading color={"white"} size={{ base: 'xs', md: 'sm' }}>Log in to your admin account</Heading>
                        <Text color="whiteAlpha.500">Feeding the world one meal at a time.</Text>
                    </Stack>
                </Stack>
                <Stack display={"flex"} spacing="6" width={"100%"} alignItems={"center"}>

                    <Stack spacing="3">
                        <Button variant="secondary" color={"white"} backgroundColor={"whiteAlpha.100"} borderWidth={0} borderRadius={"full"} px={16} py={6} leftIcon={<GoogleIcon />} onClick={() => handleSignIn()}>
                            Continue with Google
                        </Button>



                    </Stack>
                </Stack>
                <HStack spacing="1" justify="center" >
                    <Text textStyle="sm" color="whiteAlpha.500">
                        Having issues? <Link to="#">Contact us</Link>
                    </Text>
                </HStack>
            </Stack>
        </Container>
    </Flex>);
};

export default AdminLogin;
