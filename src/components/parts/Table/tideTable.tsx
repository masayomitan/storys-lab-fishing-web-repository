import React from 'react';
import { Box, Flex, Text, Divider } from '@chakra-ui/react';

const TideTable = () => {
  return (
    
    <Box
      borderColor="blue.300"
      bg="blue.50"
      borderRadius="lg"
      p={4}
      m="10px 0"
      width="full"
      maxWidth="md"
      boxShadow="lg"
      mx="auto"
    >
      <Box>
        <Text fontSize="2xl" fontWeight="bold" color="blue.700">
          潮時表
        </Text>
      </Box>

      <Flex justifyContent="space-between" mb={3}>
        <Text fontWeight="semibold" color="blue.600">河口堤防 3月01日（金） 大潮</Text>
      </Flex>

      <Flex justifyContent="space-between" mb={3}>
        <Text color="green.600">日出：06:00</Text>
        <Text color="orange.500">日入：18:00</Text>
      </Flex>

      <Flex justifyContent="space-between" mb={3}>
        <Text color="cyan.600">月出：06:00</Text>
        <Text color="purple.500">月入：06:00</Text>
      </Flex>

      <Divider my={3} borderColor="blue.300" />

      <Flex justifyContent="space-between" mb={3}>
        <Text fontWeight="medium" color="blue.600">潮位・潮時</Text>
      </Flex>

      <Flex justifyContent="space-between" mb={3}>
        <Text color="blue.700">満潮</Text>
        <Text color="blue.700">干潮</Text>
        <Text color="blue.700">満潮</Text>
      </Flex>

      <Flex justifyContent="space-between" mb={3}>
        <Text color="teal.800">180cm</Text>
        <Text color="teal.800">50cm</Text>
        <Text color="teal.800">170cm</Text>
      </Flex>

      <Flex justifyContent="space-between">
        <Text color="gray.700">06:00</Text>
        <Text color="gray.700">12:00</Text>
        <Text color="gray.700">18:00</Text>
      </Flex>

      <Flex justifyContent="space-between" mt={3}>
        <Text fontWeight="medium" color="teal.700">月齢 15.10</Text>
      </Flex>
    </Box>
  );
};

export default TideTable;
