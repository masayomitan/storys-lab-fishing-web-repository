import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import {
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

const ToolBox = ({ data }) => {

  const router = useRouter();
  const handleClick = (tool) => {
    router.push(`/tools/detail/${tool.tool_id}`);
  };

  return (
    <Box mt={10} mb={10}>
      <Heading border="1px solid" borderRadius="5" textAlign="center" size="md">
        道具種別一覧
      </Heading>

      <Box>
        <Box boxShadow="sm" p={4} position="relative">
          <Box w="100%" h="150px" textAlign="center" m={10}>
            <Image
              src=""
              layout="fill"
              objectFit="cover"
              alt="おすすめ道具画像トップ"
            />
          </Box>
        </Box>
        <Box boxShadow="sm" p={4} position="relative">
          <Box w="100%" h="150px" textAlign="center" m={10}>
            <Image
              src=""
              layout="fill"
              objectFit="cover"
              alt="おすすめ道具画像トップ"
            />
          </Box>
        </Box>
      </Box>
          
      {data.map((toolCategory, index) => (
        <Box key={index}>
          <Box
            boxShadow="sm"
            textAlign="center"
            p={4}
            mt={10}
            w="50%"
            border="1px solid"
            _hover={{ bg: "gray.100", cursor: "pointer" }}
          >
            <Text>{toolCategory.tool_category_name}</Text>
          </Box>

          <Flex overflowX="auto" mt={10} mb={20}>
            {toolCategory.tools.map((tool, index) => (
              <Box
                key={index}
                m={2}
                flex="0 0 auto"
                w="100px"
              >
                <Box
                  boxShadow="sm"
                  border="1px solid"
                  borderRadius="5"
                  _hover={{ bg: "gray.100", cursor: "pointer" }}
                  onClick={() => handleClick(tool)}
                >
                  <Box
                    border="1px solid"
                    w="100%"
                    h="5rem"
                  >
                    <Box>
                      道具画像 {tool.id}
                    </Box>
                  </Box>
                  <Text>{tool.tool_name}</Text>
                  <Text>{tool.maker}</Text>
                  <Text>{tool.recommend}</Text>
                  <Text>{tool.easy_fishing}</Text>
                  <Text>{tool.description}</Text>
                </Box>
              </Box>
            ))}
          </Flex>
        
        </Box>
      ))}

    </Box>
  );
};

export default ToolBox;
