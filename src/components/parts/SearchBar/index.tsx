import React, { useState } from 'react';
import { 
  Box,
  Flex, 
  Icon, 
  Slide, 
  useDisclosure, 
  VStack, 
  Text,
  CloseButton,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box
        p={4}
      >
      <Flex
        align="center"
        justify="space-between"
        position="relative"
        bottom="-1rem"
        h="4rem"
        w="100%"
        px={4}
        bg="white"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="5"
        boxShadow="sm"
        cursor="pointer"
        onClick={onToggle}
      >
        <Text pl={4} fontSize="22" color="gray">
          エリア、道具、魚
        </Text>
        <Icon as={SearchIcon} w={25} h={25} mr={5} />
      </Flex>
      <Slide 
        direction="bottom" 
        in={isOpen} 
        style={{ 
          zIndex: 10, 
          height: '100vh' 
        }}
      >
        <VStack
          w="100vw"
          h="100vh"
          position="fixed"
          top="0"
          left="0"
          overflowY="auto"
          bg="white"
          p={4}
          shadow="md"
          rounded="none"
          spacing={4}
          align="stretch"
        >
          <Box
            borderBottom="1px solid"
          >
            <CloseButton 
              alignSelf="flex-end" 
              fontSize="30px"
              onClick={onClose} 
              w={50} 
              h={50}
            />
          </Box>
          <GridItem 
            colSpan={12} 
            p={1}
            mt={10}
            mb={10}
          >
            <Grid 
              templateColumns="repeat(2, 1fr)" 
              gap={4}
            >
              <Box
                mb={10}
                w="90%"
                m="auto"
              >
                <Box 
                  
                  borderRadius="10"
                  p={2}
                  h="100"
                  shadow="base" bg="#ADD8E6"
                >
                  画像
                </Box>
                <Text>釣り場を探す</Text>
              </Box>
              <Box
                mb={10}
                w="90%"
                m="auto"
              >
                <Box 
                  
                  borderRadius="10"
                  p={2}
                  h="100"
                  shadow="base" bg="#ADD8E6"
                >
                  画像
                </Box>
                <Text>イベントを探す</Text>
              </Box>
              <Box
                mb={10}
                w="90%"
                m="auto"
              >
                <Box 
                  
                  borderRadius="10"
                  p={2}
                  h="100"
                  shadow="base" bg="#ADD8E6"
                >
                  画像
                </Box>
                <Text>魚を探す</Text>
              </Box>
              <Box
                mb={10}
                w="90%"
                m="auto"
              >
                <Box 
                  
                  borderRadius="10"
                  p={2}
                  h="100"
                  shadow="base" bg="#ADD8E6"
                >
                  画像
                </Box>
                <Text>道具を探す</Text>
              </Box>
            </Grid>
          </GridItem>
        </VStack>
      </Slide>
    </Box>
  );
};

export default SearchBar;
