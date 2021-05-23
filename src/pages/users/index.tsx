import { Button, Heading, Icon, Box, Flex, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue, Spinner } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/SIdebar';
import {useQuery} from 'react-query';
import { api } from '../../services/api';
import { useUsers } from '../../services/hooks/useUsers';



export default function UserList() {

    const [page,setPage] = useState(1);
    
    
    const { data, isLoading, isFetching, error} = useUsers(page)

    const isWideVersion = useBreakpointValue({
        base:false,
        lg:true,
    })

console.log(10,page)
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading 
                        size="lg" 
                        fontWeight="normal">
                            Usuários
                            {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4"/>}
                            </Heading>
                     <Link href="/users/create" passHref>
                        <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} />}>
                            Criar novo
                        </Button>
                        </Link>

                    </Flex>

                    {isLoading ?
                    (<Flex justify="center">
                        <Spinner/>
                    </Flex>): error ? (
                        <Flex justify="center">
                        <Text>Falha ao obter dados dos Usuários</Text>
                        </Flex>
                    ):(
                        <>
                   <Table colorScheme="whiteAlpha">
                    <Thead>
                        <Tr>
                            <Th px={["4","4","6"]} color="gray.800" width="8">
                                <Checkbox colorScheme="pink" />
                            </Th>
                            <Th>Usuários</Th>
                            
                            {isWideVersion && <Th>Data de Cadastro</Th>}
                            <Th width="8"></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                      {data.users.map(user=> {
                          
                         return(
                            <Tr key={user.id}>
                            <Td px={["4","4","6"]}>
                                <Checkbox colorScheme="pink" />

                            </Td>
                           
                            <Td>
                                <Box>
                                    <Text fontWeight="bold">{user.name}</Text>
                                    <Text fontSize="sm" color="gray.300">{user.email}</Text>
                                </Box>
                            </Td>

                            {isWideVersion && 

                            <Td>
                                <Text color="gray.100">{user.createdAt}</Text>
                            </Td>}
                            {isWideVersion &&
                            <Td>
                                <Button
                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="purple"
                                    leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}>
                                        Editar
                                 </Button>
                            </Td>
                            }


                        </Tr>
                          
                      )})}
                    </Tbody>

                </Table>
                    
                    
                    
                    <Pagination
                    totalCountOfRegisters = {data.totalCount}
                    currentPage = {page}
                    onPageChange ={setPage}

                    />
                    </>
                    )}
                    
                    
                </Box>

            </Flex>
        </Box>
    
    )
             
                        }