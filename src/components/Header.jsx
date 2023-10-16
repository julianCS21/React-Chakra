import {
    Flex,
    Text,Button
  } from '@chakra-ui/react';


export const Header = () =>{
    return <>
    <Flex
      as="header"
      align="center"
      direction="column" 
      padding="4"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Text>
        Domina el Mundo
      </Text>
      <Flex>
      <Button
      _hover={{ bg: 'white', color: 'black' }}
      bg="gray.400" 
      color="white" 
    >
      VER DETALLES
    </Button>
    <Button
      _hover={{ bg: 'white', color: 'black' }}
      bg="gray.400" 
      color="white" 
    >
      VER VIDEO
    </Button>
      </Flex>
    </Flex>
    </>;
}