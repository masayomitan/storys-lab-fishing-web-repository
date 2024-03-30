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
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';


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
        borderRadius="5"
        textAlign="center"
        w="100%"
        h="35px"
        border="2px solid #ADD8E6"
        onClick={onToggle}
        rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      >
        <Box fontSize="md">
          その魚の代表的な釣り方
        </Box>
      </Button>
      <Box p={4}>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p={4}
            mt={4}
          >
            <Text
              fontSize="16px"
              style={{
                letterSpacing: '0.05em',
                lineHeight: '1.6',
              }}
            >
              代表的な釣り方テキスト代表的な釣り方テキスト代表的な釣り方テキスト
              代表的な釣り方テキスト代表的な釣り方テキスト代表的な釣り方テキスト
              代表的な釣り方テキスト代表的な釣り方テキスト代表的な釣り方テキスト
            </Text>
          </Box>
        </Collapse>
      </Box>
      <Box>
        <Box 
          textAlign="center"
          fontSize="md"
        >
          他の釣り方
        </Box>
        <Box>
          {blockTexts.map((text, index) => (
            <Box key={index} m={2}>
              <Button 
                textAlign="center"
                w="100%"
                h="30px"
                border="2px solid #ADD8E6"
                onClick={() => toggleText(index)}
                rightIcon={showText[index] ? <ChevronUpIcon /> : <ChevronDownIcon />}
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
                  他の釣り方テキスト他の釣り方テキスト他の釣り方テキスト
                  他の釣り方テキスト他の釣り方テキスト他の釣り方テキスト
                  他の釣り方テキスト他の釣り方テキスト他の釣り方テキスト
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
