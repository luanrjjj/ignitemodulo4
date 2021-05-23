import { Flex, Icon, Input } from "@chakra-ui/react"
import React, { useRef } from "react"
import { RiSearchLine } from "react-icons/ri"



//Controlled Components - Cada vez que o Usuário digitar algo será armazenado no Estado
//Uncontrolled Components - Acessa o valor do Input quando precisar 


// O ref ajuda a criar o Uncontrolled Inputs de forma Imperativa



export function SearchBox() {

    const searchInputRef = useRef<HTMLInputElement>(null)  
    
    return(
    <Flex 
    as="label"
    flex="1"
    py="4"
    px="8"
        ml="6"
    maxWidth = {400}
    alignSelf="center"
    color="gray.200"
    position="relative"
    bg="gray.800"
    borderRadius="full"
    >
        <Input
        color="gray.50"
        variant="unstyled" //Sem borda e sem Background
        px="4"
        mr="4"
        placeholder ="Buscar na Plataforma" 
        _placeholder= {{color:'gray.400'}} //se aplicará somente ao placeholder
        ref={searchInputRef}
        /> 

<Icon as={RiSearchLine} font-size="20"/>
    </Flex>

    
    )
              
}