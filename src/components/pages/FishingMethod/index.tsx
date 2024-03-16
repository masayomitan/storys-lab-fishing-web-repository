import React, { useState } from 'react';
import {
  Grid,
  GridItem, 
  Box, 
  Button, 
  Collapse, 
  Text, 
  useDisclosure 
} from '@chakra-ui/react';

const FishingMethodBox = () => {
  const { isOpen, onToggle } = useDisclosure();

  const [showText, setShowText] = useState([false, false, false, false]);

  const blockTexts = [
    'テキスト1',
    'テキスト2',
    'テキスト3',
    'テキスト4'
  ];
  const toggleText = (index) => {
    setShowText(showText.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <Box>
      <Button 
        border="1px solid"
        borderRadius="5" 
        textAlign="center"
        w="100%"
        h="35px"
        onClick={() => onToggle()}
      >
          <Box 
            fontSize="md"
          >
            その魚の代表的な釣り方
          </Box>
      </Button>
      <Box p={4}>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p={4}
            mt={4}
            bg="blue.500"
            rounded="md"
            shadow="md"
          >
            ここに表示されるテキスト！
          </Box>
        </Collapse>
      </Box>
      <Box>
        <Box 
          border="1px solid"
          borderRadius="5" 
          textAlign="center"
          fontSize="md"
        >
          他の釣り方
        </Box>
        <Box>
          {blockTexts.map((text, index) => (
            <Box 
              key={index}
              m={2}
            >
              <Button 
                border="1px solid"
                borderRadius="5" 
                textAlign="center"
                w="100%"
                h="30px"
                onClick={() => toggleText(index)}
              >
                <Text fontSize="md">
                  釣り方 {index + 1}
                </Text>
              </Button>
            
              <Collapse in={showText[index]} animateOpacity>
                <Box
                  p={4}
                  mt={4}
                  rounded="md"
                  shadow="md"
                >
                  ここに表示されるテキスト！ {index + 1}
                </Box>
              </Collapse>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default FishingMethodBox;
