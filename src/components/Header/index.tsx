import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { RiSearchLine, RiNotificationLine, RiUserAddLine, RiMenuLine } from 'react-icons/ri'
import { Profile } from './Profile'
import { NotificationsNav } from './NotificationsNav'
import { Logo } from './Logo'
import { SearchBox } from './SearchBox'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

export function Header() {

    const {onOpen} = useSidebarDrawer()


    const isWideVersion = useBreakpointValue({
        base:false,
        lg:true,
    })
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto" //margin-horizontal
            mt="4"
            px="6"
            align="center"

        >

            {!isWideVersion && (
                <IconButton 
                aria-label="Open navigation"
                icon={<Icon as={RiMenuLine}/>} 
                fontSize="24"
                variante="unstyled"
                onClick={onOpen}
                mr="2"
                bg="inherit">
                    
                </IconButton>
            )}
            <Logo/>

            {isWideVersion && (<SearchBox/>)}
            
            <Flex
                align="center"
                ml="auto">

                <NotificationsNav />
                <Profile showProfileData={isWideVersion}/>


            </Flex>
        </Flex>
    )}
