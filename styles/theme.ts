import { theme as proTheme } from '@chakra-ui/pro-theme'
import { extendTheme, theme as baseTheme } from '@chakra-ui/react'

//@ts-ignore
import '@fontsource-variable/montserrat';


//import '@fontsource/poiret-one';

//   font-family: 'Poiret One', system-ui;


export const theme = extendTheme(
    proTheme,
    {
        colors: {
            ...baseTheme.colors,
            brand: baseTheme.colors.blue,
            primary: "#E45728",
            secondary: "#121212",
        },
        fonts: {
            heading: `'Montserrat Variable', sans-serif`,
        },
    },
)