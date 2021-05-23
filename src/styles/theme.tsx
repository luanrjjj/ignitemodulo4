import { extendTheme } from '@chakra-ui/react' 


export const theme = extendTheme ({
    colors: {
        gray: {
            "900":"#181B23",
            "800":"#1f2029",
            "700": "#353646",
            "600": "4B4D63",
            "500": "#616480",
            "400":"#7974d9A",
            "300": "#9699b0",
            "200" : "#b3b5c6",
            "100" : "#D1D2DC",
            "50": "#EEEEF2",
        }
    },
    fonts: {
        heading:'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50',
            }
        }
    }
})