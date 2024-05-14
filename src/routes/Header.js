import { Button, Heading, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { BiSolidDirections } from 'react-icons/bi';
import { Link } from 'react-router-dom';
/*
<Breadcrumb>
<BreadcrumbItem>
    <BreadcrumbLink href="/demo">Home</BreadcrumbLink>
</BreadcrumbItem>

<BreadcrumbItem>
    <BreadcrumbLink href="/demo/video">Video</BreadcrumbLink>
</BreadcrumbItem>

<BreadcrumbItem>
    <BreadcrumbLink href="/demo/book">Book</BreadcrumbLink>
</BreadcrumbItem>
</Breadcrumb>
*/
const Header = () => {
    return (
        <>
            <Heading>검색 서비스</Heading>
            <Menu>
                <MenuButton
                    as={Button}
                    rightIcon={<BiSolidDirections />}
                    px={4}
                    py={2}
                    transition={'all 0.2s'}
                    borderRadius={'md'}
                    borderWidth={'1px'}
                    _hover={{ bg: 'blue.400' }}
                    _expanded={{ bg: 'red.400' }}
                    _focus={{ boxShadow: 'outline' }}
                >Home</MenuButton>
                <MenuList>
                    <MenuItem><Link to={"/"}>Home</Link></MenuItem>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton
                    as={Button}
                    rightIcon={<BiSolidDirections />}
                    px={4}
                    py={2}
                    transition={'all 0.2s'}
                    borderRadius={'md'}
                    borderWidth={'1px'}
                    _hover={{ bg: 'blue.400' }}
                    _expanded={{ bg: 'red.400' }}
                    _focus={{ boxShadow: 'outline' }}
                >VIDEO</MenuButton>
                <MenuList>
                    <MenuItem><Link to={"/video/recommend"}>추천 비디오</Link></MenuItem>
                    <MenuItem><Link to={"/video/search"}>비디오 검색</Link></MenuItem>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton
                    as={Button}
                    rightIcon={<BiSolidDirections />}
                    px={4}
                    py={2}
                    transition={'all 0.2s'}
                    borderRadius={'md'}
                    borderWidth={'1px'}
                    _hover={{ bg: 'blue.400' }}
                    _expanded={{ bg: 'red.400' }}
                    _focus={{ boxShadow: 'outline' }}
                >BOOK</MenuButton>
                <MenuList>
                    <MenuItem><Link to={"/book/recommend"}>추천 책</Link></MenuItem>
                    <MenuItem><Link to={"/book/search"}> 책 검색</Link></MenuItem>
                </MenuList>
            </Menu>
        </>
    );
};

export default Header;