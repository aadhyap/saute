import { Flex, Menu, MenuButton, Avatar, MenuList, MenuItem } from "@chakra-ui/react";

import { useAuth } from "@/providers/AuthProvider";
import { FiLogOut } from "react-icons/fi";
import Logo from "./Logo";

const Appbar = () => {
    const { user, logOut } = useAuth();


    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <Flex
            position="sticky"
            flexDirection="row"
            justifyContent={"space-between"}
            top={0}
            zIndex={10}
            w="100%"
            px={5}
            py={3.5}
            mt={1}
            alignItems="center"
        >
            <Flex alignItems={"center"} justifyContent={"center"}>
                <Logo width="130" height="35" isDark={true} />
            </Flex>
            <Flex gap={4}>
                {user ? (
                    <Menu>
                        <MenuButton cursor={"pointer"}>
                            <Avatar
                                size="sm"
                                boxSize={"9"}
                                src={user.photoURL || ""} // Use photoURL from Firebase Auth
                                name={user.displayName || ""} // Optional: Display user's name as alt text
                                referrerPolicy="no-referrer"
                            />
                        </MenuButton>
                        <MenuList borderColor={"whiteAlpha.300"} borderRadius={"lg"} backgroundColor={"blackAlpha.300"} display={"flex"} flexDirection={"column"} gap={2} py={3}>

                            <MenuItem
                                fontSize={"sm"}
                                onClick={() => handleSignOut()}
                                fontWeight={500}
                                color={"white"}
                                px={5}
                                backgroundColor={"transparent"}
                            >
                                <FiLogOut style={{ fontSize: "1.1em", marginRight: "0.8em" }} />
                                Logout
                            </MenuItem>
                        </MenuList>
                    </Menu>
                ) : (
                    ""
                )}
            </Flex>
        </Flex>
    );
};

export default Appbar;
