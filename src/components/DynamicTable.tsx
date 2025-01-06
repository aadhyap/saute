// src/components/DynamicTable.tsx

import { useState, useEffect, useMemo } from "react";
import {
    Box,
    Button,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    TableContainer,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Text,
    Flex,
    HStack,
    ButtonGroup,
    useBreakpointValue,
} from "@chakra-ui/react";
import { FiSearch, FiArrowUp, FiArrowDown } from "react-icons/fi";
import { compareValues, SortDirection } from '@/utils/compareValues'; // Import the comparator

interface TableProps<T> {
    data: T[];
    pageSize: number;
    renderers?: { [key: string]: (value: any, item: T) => JSX.Element };
    onRowClick?: (item: T) => void;
    columns?: string[]; // New prop for specific columns
    initialSort?: { column: string; direction: SortDirection }; // Added initialSort prop
    activeItemId?: string;
}

interface SortState {
    column: string;
    direction: SortDirection;
}

function DynamicTable<T extends { [key: string]: any }>({
    data,
    pageSize,
    renderers = {},
    onRowClick,
    columns, // Destructure the columns prop
    initialSort, // Destructure the initialSort prop
    activeItemId,
}: TableProps<T>) {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [sort, setSort] = useState<SortState | null>(initialSort || null); // Initialize sort state with initialSort

    // Debounce the search query to improve performance
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
            setCurrentPage(0);
        }, 300); // 300ms debounce delay

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    if (!data || data.length === 0)
        return (
            <Flex
                flexDirection={"column"}
                shadow={"sm"}
                height={"max-content"}
                overflow={"hidden"}
                width={"100%"}
                border={0}
            >
                <Stack spacing={4}>
                    <InputGroup mx={3} mt={4}>
                        <InputLeftElement pointerEvents="none" mt={"-0.15em"}>
                            <Icon as={FiSearch} color="whiteAlpha.300" />
                        </InputLeftElement>
                        <Input
                            placeholder="Search..."
                            size={"sm"}
                            borderRadius={"full"}
                            mr={6}
                            color={"white"}
                            backgroundColor={"transparent"}
                            borderColor={"whiteAlpha.200"}
                            _placeholder={{
                                color: "whiteAlpha.400"
                            }}
                        />
                    </InputGroup>
                    <Flex flexDirection={"column"} width={"100%"}>
                        <TableContainer overflowX={"hidden"} _hover={{ overflowX: "auto" }}>
                            <Table variant="simple" colorScheme={"whiteAlpha"} borderRadius={"lg"} backgroundColor={"transparent"}>
                                <Flex
                                    flexDirection={"column"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    px={5}
                                    pt={5}
                                    pb={5}
                                    mx={5}
                                    mb={10}
                                    backgroundColor={"whiteAlpha.50"} borderRadius={"lg"}
                                >
                                    <Text fontSize={"sm"} color={"whiteAlpha.600"}>
                                        There are no records to display. No data was found.
                                    </Text>
                                </Flex>
                            </Table>
                        </TableContainer>
                    </Flex>
                </Stack>
            </Flex>
        );

    // Use specified columns or fallback to all keys in the first data item
    const keys = columns || Object.keys(data[0]);

    // Memoize the filtered and sorted data
    const filteredData = useMemo(() => {
        return [...data]
            .filter((item) =>
                keys.some((key) =>
                    (item[key] ?? "NULL")
                        .toString()
                        .toLowerCase()
                        .includes(debouncedQuery.toLowerCase())
                )
            )
            .sort((a, b) => {
                if (!sort) return 0;
                const aValue = a[sort.column];
                const bValue = b[sort.column];
                return compareValues(aValue, bValue, sort.direction);
            });
    }, [data, keys, debouncedQuery, sort]);

    const pageCount = Math.ceil(filteredData.length / pageSize);
    const currentData = filteredData.slice(
        currentPage * pageSize,
        (currentPage + 1) * pageSize
    );

    const startIndex = currentPage * pageSize + 1;
    const endIndex = Math.min(startIndex + pageSize - 1, filteredData.length);

    const toggleSort = (column: string) => {
        if (sort && sort.column === column) {
            setSort({
                column,
                direction: sort.direction === "asc" ? "desc" : "asc",
            });
        } else {
            setSort({ column, direction: "asc" });
        }
    };

    return (
        <Flex
            flexDirection={"column"}
            height={"max-content"}
            borderRadius={"lg"}
            overflow={"hidden"}
            border={0}
            backgroundColor={"transparent"} // Make the table container background transparent
            width={"100%"}
        >
            <Stack spacing={4}>
                <InputGroup mx={3} mt={4}>
                    <InputLeftElement pointerEvents="none" mt={"-0.07em"}>
                        <Icon as={FiSearch} color="#718096" />
                    </InputLeftElement>
                    <Input
                        placeholder="Search..."
                        size={"sm"}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        borderRadius={"full"}
                        mr={6}
                        borderColor={"whiteAlpha.100"}
                        backgroundColor={"transparent"} // Make the search bar background transparent
                        color={"white"} // Search bar text color
                    />
                </InputGroup>
                <Flex flexDirection={"column"} width={"100%"}>
                    <TableContainer overflowX={"hidden"} _hover={{ overflowX: "auto" }}>
                        <Table variant="simple" colorScheme={"whiteAlpha"} backgroundColor={"rgba(255, 255, 255, 0.01)"}>
                            {/* Header */}
                            <Thead backgroundColor={"transparent"}> {/* Make header background transparent */}
                                <Tr>
                                    {keys.map((key) => (
                                        <Th
                                            key={key}
                                            fontSize={"xs"}
                                            textTransform={"capitalize"}
                                            color={"white"}
                                            backgroundColor={sort && sort.column === key ? "rgba(255, 255, 255, 0.1)" : "transparent"} // Highlight sorted column
                                            fontWeight={500}
                                            cursor="pointer"
                                            onClick={() => toggleSort(key)}
                                        >
                                            {key}{" "}
                                            {sort && sort.column === key ? (
                                                sort.direction === "asc" ? (
                                                    <Icon as={FiArrowUp} ml={1} />
                                                ) : (
                                                    <Icon as={FiArrowDown} ml={1} />
                                                )
                                            ) : null}
                                        </Th>
                                    ))}
                                </Tr>
                            </Thead>
                            {/* Rows */}
                            <Tbody backgroundColor={"transparent"}> {/* Row background transparent */}
                                {currentData.map((item, _) => (
                                    <Tr
                                        key={item.id} // Use a unique identifier here
                                        onClick={() => onRowClick && onRowClick(item)}
                                        cursor={onRowClick ? "pointer" : "initial"}
                                        _hover={{
                                            backgroundColor: "rgba(255, 255, 255, 0.1)", // Slight hover effect
                                        }}
                                        backgroundColor={
                                            activeItemId && item.id === activeItemId
                                                ? "rgba(255, 255, 255, 0.15)" // Highlight active player row
                                                : "transparent"
                                        }
                                    >
                                        {keys.map((key) => (
                                            <Td
                                                key={key}
                                                py={2.5}
                                                backgroundColor={"transparent"} // Cell background transparent
                                                color={"white"} // Cell text color
                                            >
                                                {renderers[key] ? (
                                                    renderers[key](item[key], item)
                                                ) : (
                                                    item[key]
                                                )}
                                            </Td>
                                        ))}
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Flex>
                <Box px={{ base: "4", md: "6" }} pb="2">
                    <HStack spacing="3" justify="space-between">
                        {!isMobile && (
                            <Text fontSize={"sm"} color="gray.400" textStyle="sm">
                                Showing {startIndex} to {endIndex} of {filteredData.length}{" "}
                                results
                            </Text>
                        )}
                        <ButtonGroup
                            spacing="3"
                            justifyContent="space-between"
                            width={{ base: "full", md: "auto" }}
                            variant="secondary"
                        >
                            <Button
                                onClick={() => setCurrentPage(currentPage - 1)}
                                isDisabled={currentPage === 0}
                                size="sm"
                                backgroundColor={"transparent"} // Make button background transparent
                                _hover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                color={"white"}
                                _disabled={{
                                    opacity: 0.4,
                                    cursor: "not-allowed",
                                }}
                            >
                                Previous
                            </Button>
                            <Button
                                onClick={() => setCurrentPage(currentPage + 1)}
                                isDisabled={currentPage === pageCount - 1 || pageCount === 0}
                                size="sm"
                                backgroundColor={"transparent"} // Make button background transparent
                                _hover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                color={"white"}
                                _disabled={{
                                    opacity: 0.4,
                                    cursor: "not-allowed",
                                }}
                            >
                                Next
                            </Button>
                        </ButtonGroup>
                    </HStack>
                </Box>
            </Stack>
        </Flex>
    )
}

export default DynamicTable;
