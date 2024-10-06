import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/react';

const ToolItemBox = ({ data }) => {
  const router = useRouter();
  const handleClick = (tool) => {
    router.push(`/tools/${tool.tool_id}`);
  };

  return (
    <Box px={5} py={3}>
      {data.map((toolCategory, index) => (
        <Box key={index} mb={10}>
          <Box
            boxShadow="lg"
            textAlign="center"
            p="5px"
            my={3}
            w="60%"
            borderRadius="md"
            border="2px"
            borderColor="blue.300"
          >
            <Text color="blue.500" fontWeight="bold" fontSize="lg">{toolCategory.tool_category_name}</Text>
          </Box>

          <Flex overflowX="auto" p={2}>
            {toolCategory.tools.map((tool, index) => (
              <Box
                key={index}
                boxShadow="lg"
                borderRadius="md"
                _hover={{ bg: "teal.100", cursor: "pointer" }}
                onClick={() => handleClick(tool)}
                m={2}
                flex="0 0 auto"
                minWidth="150px"
              >
                <Box
                  h="5rem"
                  mb={3}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text>道具画像 {tool.id}</Text>
                </Box>
                <Box p={3}>
                  <Text fontWeight="semibold">{tool.tool_name}</Text>
                  <Text fontSize="sm" color="blue.500">{tool.maker}</Text>
                  <Text fontSize="sm" color="blue.400">{tool.recommend}</Text>
                  <Text fontSize="sm" color="blue.300">{tool.easy_fishing}</Text>
                  <Text mt={2} fontSize="xs" color="gray.600">{tool.description}</Text>
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default ToolItemBox;
