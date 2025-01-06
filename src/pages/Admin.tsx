// pages/Admin.jsx 
import {
    Box, Button, Container, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormControl, FormLabel, Heading, Input, Select, Spinner, Stack, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, useDisclosure, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter,
    ModalCloseButton,
    Badge,
    Divider,
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
} from "@chakra-ui/react";
import Appbar from "@/components/Appbar";
import { useAuth } from "@/providers/AuthProvider";

import AdminLogin from "./AdminLogin";
import { useEffect, useState } from "react";
import { Order } from "@/utils/types";
import { createOrder, getAllOrders, deleteOrder, updateOrder } from "@/fire/queries/orders";
import DynamicTable from "@/components/DynamicTable";
import { FiPlus } from "react-icons/fi";

const Admin = () => {
    const { user, isUserLoading } = useAuth();
    const toast = useToast();

    // State for orders
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    // Handle create order form submission
    const [newOrder, setNewOrder] = useState<Omit<Order, 'id' | 'createdAt' | 'updatedAt'>>({
        orderId: crypto.randomUUID(),
        userId: '',
        address: '',
        flavors: [],
        quantity: 1,
        timeSlot: '',
        status: 'pending',
    });

    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    const [updatedStatus, setUpdatedStatus] = useState<string>('');

    // Drawer for creating a new order
    const {
        isOpen: isCreateDrawerOpen,
        onOpen: onCreateDrawerOpen,
        onClose: onCreateDrawerClose,
    } = useDisclosure();

    // Modal for viewing order details
    const {
        isOpen: isViewModalOpen,
        onOpen: onViewModalOpen,
        onClose: onViewModalClose,
    } = useDisclosure();


    useEffect(() => {
        if (selectedOrder) {
            setUpdatedStatus(selectedOrder.status);
        }
    }, [selectedOrder]);

    // Fetch orders in real-time
    useEffect(() => {
        if (user) {
            fetchAllOrders()

            setNewOrder((prev) => ({
                ...prev,
                ["userId"]: user.uid,
            }));
        }
    }, [user]);

    const fetchAllOrders = async () => {
        setIsLoading(true);
        const getOrders = await getAllOrders();
        setOrders(getOrders);
        setIsLoading(false);
        console.log("all orders", getOrders);
    };



    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setUpdatedStatus(e.target.value);
    };

    const handleUpdateStatus = async () => {
        if (selectedOrder) {
            try {
                // @ts-ignore
                await updateOrder(selectedOrder.id, { status: updatedStatus });
                toast({
                    title: "Status Updated",
                    description: `Order status updated to ${updatedStatus}.`,
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
                onViewModalClose();
            } catch (error: any) {
                toast({
                    title: "Error",
                    description: error.message || "Failed to update status.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            } finally {
                fetchAllOrders();

            }
        }
    };

    const handleDeleteOrder = async () => {
        if (selectedOrder) {
            const confirm = window.confirm("Are you sure you want to delete this order?");
            if (confirm) {
                try {
                    await deleteOrder(selectedOrder.id);
                    toast({
                        title: "Order Deleted",
                        description: "The order has been successfully deleted.",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                    });
                    onViewModalClose();
                } catch (error: any) {
                    toast({
                        title: "Error",
                        description: error.message || "Failed to delete order.",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                    });
                } finally {
                    fetchAllOrders();

                }
            }
        }
    };

    // Handle row click to view order details
    const handleRowClick = (order: Order) => {
        setSelectedOrder(order);
        onViewModalOpen();
    };

    const handleCreateOrderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewOrder((prev) => ({
            ...prev,
            [name]: name === "flavors" ? value.split(",").map(f => f.trim()) : value,
        }));
    };

    const handleCreateOrderSubmit = async () => {
        setIsSubmitting(true);

        try {
            await createOrder(newOrder);
            toast({
                title: "Order Created",
                description: "The new order has been successfully created.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            onCreateDrawerClose();
            setNewOrder({
                orderId: '',
                userId: '',
                address: '',
                flavors: [],
                quantity: 1,
                timeSlot: '',
                status: 'pending',
            });
        } catch (error: any) {
            toast({
                title: "Error",
                description: error.message || "Failed to create order.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsSubmitting(false);
            fetchAllOrders();
        }
    };

    // Columns for DynamicTable
    const orderColumns = [
        "orderId",
        "status",
        "address",
        "flavors",
        "quantity",
        "timeSlot",
        "userId",
    ];

    // Renderers for specific columns
    const renderers = {
        flavors: (value: string[], _: Order) => <Text>{value.join(", ")}</Text>,
        status: (value: string, _: Order) => <Badge borderRadius={"full"} colorScheme="whiteAlpha" textTransform="capitalize">{value.replace("-", " ")}</Badge>,
    };


    // Instead of returning an empty string, return null when loading
    if (isUserLoading) {
        return null; // or a loading spinner component
    }

    if (!user) {
        return <AdminLogin />;
    }

    return (
        <Flex
            position="relative"
            flexDirection={"column"}
            width={"100vw"}
            height={"100%"}
            minHeight={"100vh"}
            backgroundColor={"#121212"}

        >
            <Appbar />
            <Flex flexDirection={"column"} width={"100%"} overflowY={"auto"} backgroundColor={"#1c1c1c"} flex={1} borderTopRadius={"3em"} py={8}>
                <Container maxW="container.xl">
                    <Tabs variant='unstyled' colorScheme="whiteAlpha" >
                        <TabList>
                            <Tab color={"whiteAlpha.400"} _selected={{ color: 'white' }}>Orders</Tab>
                            <Tab isDisabled={true} color={"whiteAlpha.400"} _selected={{ color: 'white' }}>Summary</Tab>
                        </TabList>
                        <TabIndicator mt='-1.5px' height='2px' bg='red.500' borderRadius='1px' />

                        <TabPanels>
                            {/* Orders Tab */}
                            <TabPanel>
                                <Flex justifyContent="space-between" alignItems="center" mb={4}>
                                    <Heading size="md" color="white">Orders</Heading>
                                    <Button leftIcon={<FiPlus />} fontSize={"xs"} variant={"ghost"} backgroundColor={"whiteAlpha.50"} color={"white"} borderRadius={"full"} size={"sm"} colorScheme="whiteAlpha" onClick={() => onCreateDrawerOpen()}>
                                        Create Order
                                    </Button>
                                </Flex>

                                {isLoading ? (
                                    <Flex justifyContent="center" alignItems="center" height="200px">
                                        <Spinner size="xl" color="teal.500" />
                                    </Flex>
                                ) : user && user.roles?.includes("admin") ? (
                                    <Flex backgroundColor={"blackAlpha.50"} borderRadius={"lg"} shadow={"lg"}>
                                        <DynamicTable
                                            data={orders}
                                            pageSize={10}
                                            renderers={renderers}
                                            onRowClick={handleRowClick}
                                            columns={orderColumns}
                                        />
                                    </Flex>
                                ) : user && !user.roles?.includes("admin") ? (
                                    <Alert status='error' borderRadius={"md"} backgroundColor={"whiteAlpha.100"} color={"white"}>
                                        <AlertIcon />
                                        <AlertTitle>You don't have permission!</AlertTitle>
                                        <AlertDescription>Please contact an admin to update your permissions.</AlertDescription>
                                    </Alert>
                                ) : ""}
                            </TabPanel>

                            {/* Create Order Tab */}
                            <TabPanel>
                                <Button leftIcon={<FiPlus />} colorScheme="teal" onClick={() => onCreateDrawerOpen()}>
                                    Create New Order
                                </Button>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Container>
            </Flex>


            {/* Modal for Viewing and Managing Order Details */}
            <Modal isOpen={isViewModalOpen} onClose={onViewModalClose} size="lg">
                <ModalOverlay />
                <ModalContent backgroundColor={"#1a1a1a"}>
                    <ModalHeader fontSize={"3xl"} color={"white"}>Order Details</ModalHeader>
                    <ModalCloseButton style={{ color: "white", backgroundColor: "transparent" }} />
                    <ModalBody color={"white"} pb={10}>
                        {selectedOrder ? (
                            <Stack spacing={4}>
                                <Box>
                                    <Text fontWeight="bold">Order ID:</Text>
                                    <Text>{selectedOrder.orderId}</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight="bold">User ID:</Text>
                                    <Text>{selectedOrder.userId}</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight="bold">Address:</Text>
                                    <Text>{selectedOrder.address}</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight="bold">Flavors:</Text>
                                    <Text>{selectedOrder.flavors.join(", ")}</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight="bold">Quantity:</Text>
                                    <Text>{selectedOrder.quantity}</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight="bold">Time Slot:</Text>
                                    <Text>{selectedOrder.timeSlot}</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight="bold">Status:</Text>
                                    <Badge borderRadius={"full"} colorScheme="whiteAlpha" textTransform="capitalize">
                                        {selectedOrder.status.replace("-", " ")}
                                    </Badge>
                                </Box>
                                <Divider mt={5} borderColor={"whiteAlpha.200"} />

                                {/* Update Status */}
                                <FormControl id="updateStatus" mt={4}>
                                    <FormLabel color={"white"}>Update Status</FormLabel>
                                    <Select
                                        value={updatedStatus}
                                        onChange={handleStatusChange}
                                        backgroundColor={"whiteAlpha.50"}
                                        color={"white"}
                                        borderColor={"whiteAlpha.100"}
                                        _hover={{ borderColor: "whiteAlpha.300" }}
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="preparing">Preparing</option>
                                        <option value="out-for-delivery">Out for Delivery</option>
                                        <option value="delivered">Delivered</option>
                                        <option value="canceled">Canceled</option>
                                    </Select>
                                </FormControl>
                            </Stack>
                        ) : (
                            <Text>No order selected.</Text>
                        )}
                    </ModalBody>
                    <ModalFooter justifyContent="space-between">
                        <Button size={"sm"} colorScheme="red" variant={"outline"} onClick={handleDeleteOrder}>
                            Delete Order
                        </Button>
                        <Box>
                            <Button size={"sm"} variant="ghost" colorScheme="whiteAlpha" mr={3} onClick={onViewModalClose}>
                                Cancel
                            </Button>
                            <Button size={"sm"} colorScheme="blackAlpha" onClick={handleUpdateStatus}>
                                Update Status
                            </Button>
                        </Box>
                    </ModalFooter>
                </ModalContent>
            </Modal>



            {/* Drawer for Creating a New Order */}
            <Drawer isOpen={isCreateDrawerOpen} placement="right" onClose={onCreateDrawerClose} size="md">
                <DrawerOverlay />
                <DrawerContent backgroundColor={"#1a1a1a"}>
                    <DrawerHeader fontSize={"3xl"} color={"white"}>Create New Order</DrawerHeader>
                    <DrawerBody>
                        <Stack spacing={4}>
                            <FormControl id="orderId" isRequired>
                                <FormLabel color={"white"}>Order ID</FormLabel>
                                <Input
                                    name="orderId"
                                    value={newOrder.orderId}
                                    isDisabled={true}
                                    onChange={handleCreateOrderChange}
                                    placeholder="Enter Order ID"
                                    style={{
                                        opacity: 0.2,
                                    }}
                                    backgroundColor={"whiteAlpha.50"}
                                    color={"white"}
                                    borderColor={"whiteAlpha.100"}
                                    _hover={{
                                        borderColor: "whiteAlpha.300"
                                    }}
                                />
                            </FormControl>

                            <FormControl id="userId" isRequired>
                                <FormLabel color={"white"}>User ID</FormLabel>
                                <Input
                                    name="userId"
                                    value={user ? user.uid : ""}
                                    isDisabled={true}
                                    onChange={handleCreateOrderChange}
                                    placeholder="Enter User ID"
                                    style={{
                                        opacity: 0.2,
                                    }}
                                    backgroundColor={"whiteAlpha.50"}
                                    color={"white"}
                                    borderColor={"whiteAlpha.100"}
                                    _hover={{
                                        borderColor: "whiteAlpha.300"
                                    }}
                                />
                            </FormControl>

                            <FormControl id="address" isRequired>
                                <FormLabel color={"white"}>Address</FormLabel>
                                <Textarea
                                    name="address"
                                    value={newOrder.address}
                                    onChange={handleCreateOrderChange}
                                    placeholder="Enter Delivery Address"
                                    _placeholder={{
                                        color: "whiteAlpha.400"
                                    }}
                                    backgroundColor={"whiteAlpha.50"}
                                    color={"white"}
                                    borderColor={"whiteAlpha.100"}
                                    _hover={{
                                        borderColor: "whiteAlpha.300"
                                    }}
                                />
                            </FormControl>

                            <FormControl id="flavors" isRequired>
                                <FormLabel color={"white"}>Flavors</FormLabel>
                                <Input
                                    name="flavors"
                                    value={newOrder.flavors.join(", ")}
                                    onChange={handleCreateOrderChange}
                                    placeholder="Enter flavors separated by commas"
                                    _placeholder={{
                                        color: "whiteAlpha.400"
                                    }}
                                    backgroundColor={"whiteAlpha.50"}
                                    color={"white"}
                                    borderColor={"whiteAlpha.100"}
                                    _hover={{
                                        borderColor: "whiteAlpha.300"
                                    }}
                                />
                            </FormControl>

                            <FormControl id="quantity" isRequired>
                                <FormLabel color={"white"}>Quantity</FormLabel>
                                <Input
                                    type="number"
                                    name="quantity"
                                    value={newOrder.quantity}
                                    onChange={handleCreateOrderChange}
                                    placeholder="Enter Quantity"
                                    min={1}
                                    _placeholder={{
                                        color: "whiteAlpha.400"
                                    }}
                                    backgroundColor={"whiteAlpha.50"}
                                    color={"white"}
                                    borderColor={"whiteAlpha.100"}
                                    _hover={{
                                        borderColor: "whiteAlpha.300"
                                    }}
                                />
                            </FormControl>

                            <FormControl id="timeSlot" isRequired>
                                <FormLabel color={"white"}>Time Slot</FormLabel>
                                <Input
                                    name="timeSlot"
                                    value={newOrder.timeSlot}
                                    onChange={handleCreateOrderChange}
                                    placeholder="e.g., 10:00 AM - 11:00 AM"
                                    _placeholder={{
                                        color: "whiteAlpha.400"
                                    }}
                                    backgroundColor={"whiteAlpha.50"}
                                    color={"white"}
                                    borderColor={"whiteAlpha.100"}
                                    _hover={{
                                        borderColor: "whiteAlpha.300"
                                    }}
                                />
                            </FormControl>

                            <FormControl id="status" isRequired>
                                <FormLabel color={"white"}>Status</FormLabel>
                                <Select
                                    name="status"
                                    value={newOrder.status}
                                    onChange={handleCreateOrderChange}
                                    _placeholder={{
                                        color: "whiteAlpha.400"
                                    }}
                                    backgroundColor={"whiteAlpha.50"}
                                    color={"white"}
                                    borderColor={"whiteAlpha.100"}
                                    _hover={{
                                        borderColor: "whiteAlpha.300"
                                    }}
                                >
                                    <option value="pending">Pending</option>
                                    <option value="preparing">Preparing</option>
                                    <option value="out-for-delivery">Out for Delivery</option>
                                    <option value="delivered">Delivered</option>
                                    <option value="canceled">Canceled</option>
                                </Select>
                            </FormControl>
                        </Stack>
                    </DrawerBody>
                    <DrawerFooter justifyContent={"space-between"} display={"flex"} width={"100%"}>
                        <Button variant="ghost" colorScheme="whiteAlpha" mr={3} onClick={onCreateDrawerClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="blackAlpha" onClick={handleCreateOrderSubmit} isLoading={isSubmitting} loadingText="Submitting Order">
                            Create
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </Flex>
    );
};

export default Admin;
