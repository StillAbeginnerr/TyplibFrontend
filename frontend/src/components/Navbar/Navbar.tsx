import { Box, Button, Collapse, Flex, IconButton, Stack, useDisclosure} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import './button.css'

function Navbar() {

    const { isOpen, onToggle } = useDisclosure();

  return (
  <>

<Box>
    {/* Desktop Nav Starts*/}

    <Flex>
    <Stack style={{position:'relative', left:'14.5rem',top:'2rem'}} gap="8" direction='row' display={{base: 'none', md: 'flex'}}>
<Button  as='a' href='/' colorScheme='gray'>Home</Button>
<Button colorScheme='gray'>How it works</Button>
<Button colorScheme='gray'>Support</Button>
<Button as='a' href='/authentication' colorScheme='blue' variant='solid'  >Join the Community</Button>
<Button colorScheme='gray' variant='outline'>X Credits Free</Button>
    </Stack>
    </Flex>

    {/* Desktop Nav Ends*/}

{/* MobileHamburger Starts*/}
<Flex>
<IconButton
style={{position:'relative', left:'.75rem',top:'1rem'}}
          w={12}
          h={12}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={onToggle}
        />
        <Collapse in={isOpen} animateOpacity>
        <Stack  style={{position:'relative',top:'2rem',lineHeight:'2rem'}} align='center' direction='column' p={12} display={{ md: 'none', base:'flex' }}>
        <Button as='a' href='/' colorScheme='gray'>Home</Button>
<Button colorScheme='gray'>How it works</Button>
<Button colorScheme='gray'>Support</Button>
<Button  as='a' href='/authentication' colorScheme='blue' variant='solid'>Join the Community</Button>
<Button colorScheme='gray' variant='outline'>X Credits Free</Button>
        </Stack>
      </Collapse>
</Flex>
{/* MobileHamburger Ends*/}
  </Box>


  </>
  )
}

export default Navbar