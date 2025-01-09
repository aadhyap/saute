import { useState } from "react";
import { Input, Button, useToast, InputGroup, InputRightElement } from "@chakra-ui/react";
import createEmail from "@/fire/queries/email";


const EmailSubscribeForm = () => {
    const toast = useToast();
    const [userEmail, setUserEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [_, setHasSubmitted] = useState(false);
    const emailValidation = userEmail.includes("@");

    const handleUserEmailChange = (e: any) => setUserEmail(e.target.value);

    const submitEmail = async () => {
        if (!emailValidation) {
            toast({
                title: "Something Went Wrong",
                description: "Please enter a valid email",
                status: "error",
                duration: 4000,
                isClosable: true,
            });
        }

        if (emailValidation && userEmail.length) {
            setIsLoading(true);
            // Add Subscriber
            const { result, error } = await createEmail(userEmail);

            if (error) {
                toast({
                    title: "Something Went Wrong",
                    description: "Try again soon.",
                    status: "error",
                    duration: 4000,
                    isClosable: true,
                });

                return console.log(error);
            }

            // Clear UI
            setUserEmail("");
            setHasSubmitted(true);

            if (result) {
                toast({
                    title: "Stay Tuned",
                    description: "Thanks for joining the family!",
                    status: "success",
                    duration: 4000,
                    isClosable: true,
                });
            }
        } else {
            setHasSubmitted(true);
        }

        setIsLoading(false);
    };

    return (
        <InputGroup size="lg" maxWidth={"2xl"}>
            <Input
                pr="4.5rem"
                py={8}
                pl={"1.5rem"}
                type="email"
                fontSize={"md"}
                placeholder="Enter your email address"
                backgroundColor={"#f5f5f5"}
                color={"black"}
                variant="filled"
                borderWidth="1px"
                borderColor="gray.200"
                value={userEmail}
                onChange={handleUserEmailChange}
                _placeholder={{
                    color: "blackAlpha.600"
                }}
                _hover={{ borderColor: "gray.300" }}
                _focus={{ outline: "none", borderColor: "blue.500", backgroundColor: "#f5f5f5" }}
                rounded="full"
            />

            <InputRightElement
                width="max-content"
                mr={3}
                display="flex"
                alignItems="center" // Ensure vertical centering
                height={"100%"}
                py={2}
            >
                <Button
                    h="100%"
                    px={8}
                    size="sm"
                    fontWeight={600}
                    colorScheme="blue"
                    backgroundColor={"primary"}
                    rounded="full"
                    isLoading={isLoading} // To show loading state when the email is being submitted
                    //isDisabled={hasSubmitted} // Optionally disable the button after submission
                    onClick={submitEmail}
                >
                    Join the Irvine Waitlist
                </Button>
            </InputRightElement>
        </InputGroup>
    );
};

export default EmailSubscribeForm;
