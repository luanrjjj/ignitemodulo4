import { Stack } from "@chakra-ui/react";
import React from "react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavSection } from "./ NavSection";
import { NavLink } from "./NavLink";

export function SidebarNav () {
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title ="Geral">
                <NavLink icon = {RiDashboardLine} href="/dashboard">Dashboard</NavLink>
                <NavLink icon = {RiContactsLine} href="/users">Usuários</NavLink>
            </NavSection>

            <NavSection title ="Geral">
                <NavLink icon = {RiInputMethodLine} href="/forms">Dashboard</NavLink>
                <NavLink icon = {RiGitMergeLine} href="/automation">Usuários</NavLink>
            </NavSection>
        </Stack>
    )
}