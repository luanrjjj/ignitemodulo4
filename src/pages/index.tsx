import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Header } from '../components/Header'
import { Input } from '../components/Form/input'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';





type SignInFormData = {
     email:string;
     password:string;
   
}

const signInFormSchema = yup.object ().shape({
     email:yup.string().required('E-mail Obrigatório').email('E-mail inválido'),
     password:yup.string().required('Senha Obrigatória'),
})


export default function signIn() {
     const { register, handleSubmit,formState } = useForm({
          resolver:yupResolver(signInFormSchema)
     });

    const {errors} = formState

     const handleSignIn: SubmitHandler<SignInFormData> = async(values,event) => { // Transformo em Assincriono pra demorar pra acontecer e o loading do Chakra aparecer na UI
          await new Promise (resolve => setTimeout(resolve,2000));
           
          console.log(values);
     }

     return (
          <>
               <Header />
               <Flex
                    w="100vw"
                    h="100vh"
                    alignItems="center"
                    justifyContent="center">

                    <Flex
                         as="form"
                         width="100%"
                         maxWidth={360}
                         bg="gray.800"
                         p="8" //Medida Própria do Chakra 
                         borderRadius={8}
                         flexDir="column"
                         onSubmit={handleSubmit(handleSignIn)}
                    >

                         <Stack spacing="4">

                              <Input name="email" type="email" label="E-mail" error = {errors.email}  {...register('email')} />
                              <Input name="password" type="password" label="Senha" error= {errors.password} {...register('password')} />

                         </Stack>

                         <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading = {formState.isSubmitting}> Entrar </Button>
                    </Flex>
               </Flex>

          </>

     )


}