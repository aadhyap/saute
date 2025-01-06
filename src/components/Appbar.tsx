import { Flex, Menu, MenuButton, Avatar, MenuList, MenuItem } from "@chakra-ui/react";

import { useAuth } from "@/providers/AuthProvider";
import { FiLogOut } from "react-icons/fi";

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
            <Flex></Flex>
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
                        <MenuList display={"flex"} flexDirection={"column"} gap={2} py={3}>

                            <MenuItem
                                fontSize={"sm"}
                                onClick={() => handleSignOut()}
                                fontWeight={500}
                                color={"teal.800"}
                                px={5}
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
