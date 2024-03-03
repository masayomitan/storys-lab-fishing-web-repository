import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'

import { Box, Flex, Text, Divider } from '@chakra-ui/react';

// type PrefecturesBoxProps = {
//   key: number;
//   value: number;
//   label: string;
// };

const TideTable = () => {
  return (
    <Box borderColor="gray.300" borderRadius="md" p={4} width="full" maxWidth="md">
      <Flex justifyContent="space-between" mb={3}>
        <Text fontWeight="bold">河口堤防 3月01日（金） 大潮</Text>
        <Box> {/* This box could be used for the Google Translate icon */}</Box>
      </Flex>

      <Flex justifyContent="space-between" mb={3}>
        <Text>日出：06:00</Text>
        <Text>日入：18:00</Text>
      </Flex>

      <Flex justifyContent="space-between" mb={3}>
        <Text>月出：06:00</Text>
        <Text>月入：06:00</Text>
      </Flex>

      <Divider my={3} />

      <Flex justifyContent="space-between" mb={3}>
        <Text>潮位・潮時</Text>
      </Flex>

      <Flex justifyContent="space-between" mb={3}>
        <Text>満潮</Text>
        <Text>干潮</Text>
        <Text>満潮</Text>
      </Flex>

      <Flex justifyContent="space-between" mb={3}>
        <Text>180cm</Text>
        <Text>50cm</Text>
        <Text>170cm</Text>
      </Flex>

      <Flex justifyContent="space-between">
        <Text>06:00.</Text>
        <Text>12:00.</Text>
        <Text>18:00</Text>
      </Flex>

      <Flex justifyContent="space-between" mt={3}>
        <Text>日照 15.10</Text>
      </Flex>
    </Box>
  );
};

export default TideTable;
