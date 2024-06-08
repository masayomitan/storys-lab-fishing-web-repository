import React, { useState, useEffect } from 'react';
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
import { FishingMethod } from '../../../types/fishingMethod';

interface FishingMethodBoxProps {
  data?: FishingMethod[];
}

const FishingMethodBox: React.FC<FishingMethodBoxProps> = ({ data }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [showText, setShowText] = useState<boolean[]>([]);
  
  // データの変化を監視し、初期化する
  useEffect(() => {
    if (data) {
      setShowText(data.map(() => false));
    }
  }, [data]);

  // data が undefined の場合は何も表示しない
  if (!data) return null;

  const representativeMethod = data.find(method => method.is_traditional);
  const otherMethods = data.filter(method => !method.is_traditional);

  const toggleText = (index: number) => {
    setShowText(showText.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <Box>
      {representativeMethod && (
        <>
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
                  {representativeMethod.description}
                </Text>
              </Box>
            </Collapse>
          </Box>
        </>
      )}
      <Box>
        <Box 
          textAlign="center"
          fontSize="md"
        >
          他の釣り方
        </Box>
        <Box>
          {otherMethods.map((method, index) => (
            <Box 
              key={index} 
              m={2}
            >
              <Button 
                textAlign="center"
                w="100%"
                h="30px"
                border="2px solid #ADD8E6"
                onClick={() => toggleText(index)}
                rightIcon={showText[index] ? <ChevronUpIcon /> : <ChevronDownIcon />}
              >
                <Text fontSize="md">
                  {method.name}
                </Text>
              </Button>
            
              <Collapse in={showText[index]} animateOpacity>
                <Box
                  p={4}
                  mt={4}
                  rounded="md"
                  shadow="md"
                >
                  {method.description}
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
