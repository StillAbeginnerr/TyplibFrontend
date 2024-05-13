import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    components: {
        Button: {
            defaultProps : {
                variant : 'ghost',
                colorScheme:'teal',
            }
            
        }
    }
});

export default theme;