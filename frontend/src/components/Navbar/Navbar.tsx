import { Box, Button, Flex, Stack} from '@chakra-ui/react'
import React from 'react'
import './button.css'

function Navbar() {
  return (
  <>
  <Box>
    <Flex>
    <Stack style={{position:'relative', left:'14.5rem',top:'2rem'}} gap="8" direction='row' display={{base: 'none', md: 'flex'}}>
<Button colorScheme='gray'>Home</Button>
<Button colorScheme='gray'>How it works</Button>
<Button colorScheme='gray'>Support</Button>
<Button colorScheme='blue' variant='solid'>Join the Community</Button>
<Button colorScheme='gray' variant='outline'>X Credits Free</Button>
    </Stack>
    </Flex>
    
  </Box>
  </>
  )
}

export default Navbar