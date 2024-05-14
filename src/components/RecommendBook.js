import { Heading } from '@chakra-ui/layout';
import { IoBookSharp } from "react-icons/io5";
import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Icon, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';

const RecommendBook = () => {

    const [RecommendList, setRecommendList] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('추천');
    const pageCount = useRef(1);

    const { colorMode, toggleColorMode } = useColorMode();
    const color = useColorModeValue('red.500', 'red.200');
    const buttonScheme = useColorModeValue("blackAlpha", "whiteAlpha");



    const fetchBooks = async () => {
        const response = await fetch(
            `https://dapi.kakao.com/v3/search/book?query=${search}&page=${page}`,
            {
                method: "GET",
                headers: {
                    Authorization: `KakaoAK ${process.env.REACT_APP_API_KEY}`,
                },
            }
        );
        const data = await response.json();
        console.log(data);

        pageCount.current = data.meta.pageable_count % 10 > 0
            ? data.meta.pageable_count / 10 + 1
            : data.meta.pageable_count / 10;
        pageCount.current = Math.floor(pageCount.current);
        pageCount.current = 15 ? 15 : pageCount.current;
        console.log(pageCount.current);

        setRecommendList(data.documents);
    }
    useEffect(() => {
        fetchBooks();
    }, [page])

    const changeSearch = e => {
        if (e.target.value !== '') {
            setPage(1);
        }
    }

    return (
        <>
            <Box>
                <Heading color={color}>
                    <Icon as={IoBookSharp} boxSize={"1.5em"} />추천 책 목록
                </Heading>
                {
                    colorMode === "light"?
                    <IconButton icon={<IoMoon />} onClick={toggleColorMode} />:
                    <IconButton icon={<MdSunny />} onClick={toggleColorMode} />
                }
                <TableContainer>
                    <Table variant={"striped"} colorScheme="black">
                        <Thead>
                            <Tr>
                                <Th>No</Th>
                                <Th>Title</Th>
                                <Th>Author</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {RecommendList.map((book, index) => (
                                <>
                                    <Tr>
                                        <Td>{(page - 1) * + index + 1}</Td>
                                        <Td>
                                            <a href={book.url}>{book.title}</a>
                                        </Td>
                                        <Td>{book.authors}</Td>
                                    </Tr>
                                </>
                            ))}
                        </Tbody>
                        <Tfoot>
                        </Tfoot>
                    </Table>
                </TableContainer>
                <div>
                </div>
                <HStack>
                    {Array.from({ length: pageCount.current }, (_, index) => (
                        <>
                            <Button colorScheme={page === index + 1 ? "cyan" : buttonScheme}
                                onClick={e => { setPage(index + 1) }}>{index + 1}
                            </Button>
                        </>
                    ))}
                </HStack>
            </Box>
        </>
    );
};

export default RecommendBook;