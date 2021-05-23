import { Button } from "@chakra-ui/react";
import React from "react";

interface PaginationItemProps {
    number: number;
    isCurrent?:boolean;
    onPageChange: (page:number) => void

}

export function PaginationItem({isCurrent=false,onPageChange,number}:PaginationItemProps) {
    
        if (isCurrent) {
            return (
        <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
            bgColor: 'pink.500',
            cuirsor: 'default',

        }}
        
    >
        {number}
</Button>
    

    )
        }
        return (
            <Button
            size="sm"
            fontSize="xs"
            width="4"
            bg="gray.700"
           
            _hover={{
                bgColor: 'gray.700',
               
    
            }}
            onClick = {() => onPageChange(number)}
        >
            {number}
    </Button>

        )

}