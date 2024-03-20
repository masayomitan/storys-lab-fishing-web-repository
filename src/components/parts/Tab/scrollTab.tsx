import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';

const ScrollTab = () => {
  const slideContents = ["ルアー", "リール", "ハリス", "タックル", "まき餌", "その他", "ルアー", "リール", "ハリス", "タックル", "まき餌", "その他"];
  const colorCodes = ["#008080", "#FFA500", "#00B7C3", "#FFC0CB", "#008000", "#800080"];

  return (
    <Box overflowX="auto" w="full" py={2} px={1}>
      <Flex minWidth="max-content">
        {slideContents.map((content, index) => (
          <Button
            key={index}
            m={1}
            p="4px 17px"
            fontSize="14px"
            color="white"
            bg={colorCodes[index % colorCodes.length]}
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
