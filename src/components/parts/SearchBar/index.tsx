'use client'

import React from 'react';
import { 
  Box,
  Stack,
  Input,
  Button
 } from '@chakra-ui/react';

const SearchBar = () => {
  return (
    <Box>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        position="absolute"
        bottom="-2rem"
        h="4rem"
        w="98%" 
        px={4}
        spacing={0}
      >
        <Input w="100%" p="5" fontSize="22" placeholder="東京都..." />
        <Button
          colorScheme="teal"
          // bg="green"
          color="black"
          border="1px solid"
          borderRadius="md"
          fontSize="lg"
          w="5rem" 
          >
          検索
          </Button>
      </Stack>
    </Box>
  );
}

export default SearchBar;
