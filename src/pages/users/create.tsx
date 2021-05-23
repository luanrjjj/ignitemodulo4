import { Button, Heading, Divider, Icon, Box, Flex, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, SimpleGrid, VStack, HStack, FormLabel } from '@chakra-ui/react';
import { Input } from "../../components/Form/input"
import React from 'react';
import { RiAddLine, RiContactsBookLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/SIdebar';
import Link from 'next/link';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { appendErrors, SubmitHandler, useForm } from 'react-hook-form'


type CreateUserFormData = {
    name:string;
    email:string;
    password:string;
    password_confirmation:string;

}

const createUserFormSchema = yup.object().shape({
    name:yup.string().required('Nome Obrigatório'),
    email:yup.string().required('E-mail Obrigatório').email('E-mail inválido'),
    password:yup.string().required('Senha Obrigatória').min(6,'No mínimo 6 caracteres'),
    password_confirmation:yup.string().oneOf([
        null,yup.ref('password')
    ]),
    

})


export default function CreateUser() {
    const {register,handleSubmit,formState} = useForm({
        resolver:yupResolver(createUserFormSchema)
    })


    const {errors} = formState
    const handleCreateUser:SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise(resolve=>setTimeout(resolve,200));
        console.log(values)
    }

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
                <Sidebar />
                <Box 
                as="form"
                flex="1"
                borderRadius={8} 
                bg="gray.800" p="8"
                onSubmit={handleSubmit(handleCreateUser)}>

                    <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">

                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="name" label="Nome Completo" error={errors.name} {...register('name')}/>
                            <Input name="email" type="email" label="E-mail" error ={errors.email} {...register('email')} />

                        </SimpleGrid>


                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">

                            <Input
                             name="password"
                             type="password" 
                             label="Senha" 

                             error = {errors.password} {...register('password')}/>

                            <Input 
                            name="password_confirmation" 
                            type="password" 
                            error = {errors.password_confirmation} label="Confirmação da Senha" />

                        </SimpleGrid>

                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button type="submit" isLoading ={formState.isSubmitting} colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>


                </Box>

            </Flex>
        </Box>
    )
}