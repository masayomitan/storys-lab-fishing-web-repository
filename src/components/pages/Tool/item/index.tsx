import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Box, Flex, Text } from '@chakra-ui/react'

const ToolItemBox = ({ toolCategories }) => {
  console.log(toolCategories)
  const router = useRouter()
  const handleClick = (tool) => {
    router.push(`/tools/${tool.id}`)
  }

  return (
    <Box px={5} py={3}>
      {toolCategories.map((toolCategory, index) => (
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
            <Text color="blue.500" fontWeight="bold" fontSize="lg">
              {toolCategory.name}
            </Text>
          </Box>

          {toolCategory.Tools && 
            <Flex overflowX="auto" p={2}>
              {toolCategory.Tools.map((tool, index) => (
                <Box
                  key={index}
                  boxShadow="lg"
                  borderRadius="md"
                  _hover={{ bg: "teal.100", cursor: "pointer" }}
                  onClick={() => handleClick(tool)}
                  m={2}
                  flex="0 0 auto"
                  width="180px"
                  height="300px"
                >
                  <Box
                    h="5rem"
                    mb={3}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Image
                      src={tool.image_url}
                      width={16}
                      height={12}
                      layout="responsive"
                      style={{
                        width: "100%",
                        height: 'auto',
                        objectFit: "contain",
                      }}
                      alt="道具画像"
                    />
                  </Box>
                  <Box p={3}>
                    <Text fontWeight="semibold">{tool.name}</Text>
                    <Text fontSize="sm" color="blue.500">{tool.maker}</Text>
                    <Text fontSize="sm" color="blue.400">{tool.recommend}</Text>
                    <Text fontSize="sm" color="blue.300">{tool.easy_fishing}</Text>
                    <Text mt={2} fontSize="xs" color="gray.600">{tool.description}</Text>
                  </Box>
                </Box>
              ))}
            </Flex>
          }
        </Box>
      ))}
    </Box>
  );
};

export default ToolItemBox;
