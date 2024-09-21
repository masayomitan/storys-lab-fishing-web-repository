import React from 'react';
import { Box, Flex, Text, Divider } from '@chakra-ui/react';

import { Tide } from '../../../types/tide'; 

interface TideTableProps {
  data: Tide
}

const TideTable: React.FC<TideTableProps> = ({ data }) => {
  console.log(data)
  const tide = data[0]
  if (!data) return null

  const formatNullString = (nullStringObj: { String: string, Valid: boolean }) => {
    if (!nullStringObj) return null
    return nullStringObj.Valid ? nullStringObj.String : 'N/A'
  }
  
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

      {/* 場所と日付 */}
      <Flex justifyContent="space-between" mb={3}>
        <Text fontWeight="semibold" color="blue.600">
          {tide.format_date}        
        </Text>
      </Flex>

      {/* 日出・日入 */}
      <Flex justifyContent="space-between" mb={3}>
        <Text color="green.600">日出：{formatNullString(tide.sunrise_time) || 'N/A'}</Text>
        <Text color="orange.500">日入：{formatNullString(tide.sunset_time) || 'N/A'}</Text>
      </Flex>

      {/* 月出・月入 */}
      <Flex justifyContent="space-between" mb={3}>
        <Text color="cyan.600">月出：{formatNullString(tide.moonrise_time) || 'N/A'}</Text>
        <Text color="purple.500">月入：{formatNullString(tide.moonset_time) || 'N/A'}</Text>
      </Flex>

      <Divider my={3} borderColor="blue.300" />

      {/* 潮位・潮時 */}
      <Flex justifyContent="space-between" mb={3}>
        <Text fontWeight="medium" color="blue.600">潮位・潮時</Text>
      </Flex>

      {/* 満潮・干潮の表示 */}
      <Flex justifyContent="space-between" mb={3}>
        <Text color="blue.700">満潮</Text>
        <Text color="blue.700">干潮</Text>
        <Text color="blue.700">満潮</Text>
      </Flex>

      {/* 潮位の表示 */}
      <Flex justifyContent="space-between" mb={3}>
        <Text color="teal.800">{tide.tide_height_1 || 'N/A'}cm</Text>
        <Text color="teal.800">{tide.tide_height_2 || 'N/A'}cm</Text>
        <Text color="teal.800">{tide.tide_height_3 || 'N/A'}cm</Text>
      </Flex>

      {/* 潮時の表示 */}
      <Flex justifyContent="space-between">
        <Text color="gray.700">{formatNullString(tide.high_tide_time_1) || 'N/A'}</Text>
        <Text color="gray.700">{formatNullString(tide.high_tide_time_2) || 'N/A'}</Text>
        <Text color="gray.700">{formatNullString(tide.high_tide_time_3) || 'N/A'}</Text>
      </Flex>

      <Flex justifyContent="space-between" mt={3}>
        <Text fontWeight="medium" color="teal.700">月齢 {tide.moon_age || 'N/A'}</Text>
      </Flex>
    </Box>
  );
};

export default TideTable;
