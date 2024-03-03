import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';

const ScrollTab = () => {
  const slideContents = ["ルアー", "リール", "ハリス", "タックル", "まき餌", "その他","ルアー", "リール", "ハリス", "タックル", "まき餌", "その他"];

  return (
    <Box overflowX="auto" w="full" py={2} px={1}>
      <Flex minWidth="max-content">
        {slideContents.map((content, index) => (
          <Box
            key={index}
            m={1}
          >
            <Button 
              key={index}
              m={1}
              p='2px 5px'
              fontSize="14"
              border="1px solid" 
              borderRadius="5"
            >
              {content}
            </Button>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default ScrollTab;
