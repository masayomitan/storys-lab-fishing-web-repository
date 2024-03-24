import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';

const ScrollTab = () => {
  const slideContents = ["ルアー", "リール", "ハリス", "タックル", "まき餌", "その他", "ルアー", "リール", "ハリス", "タックル", "まき餌", "その他"];

  return (
    <Box overflowX="auto" w="full" py={2} px={1}>
      <Flex minWidth="max-content">
        {slideContents.map((content, index) => (
          <Button
            key={index}
            m={1}
            p="4px 17px"
            fontSize="14px"
            color="black"
            bg="white"
            border="2px solid #ADD8E6"
            borderRadius="5px"
          >
            {content}
          </Button>
        ))}
      </Flex>
    </Box>
  );
}

export default ScrollTab;
