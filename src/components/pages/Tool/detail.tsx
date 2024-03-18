import React from 'react';
import Image from 'next/image';

// import { useRouter } from 'next/navigation';

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';


const ToolDetailBox: React.FC<any> = () => {
  // const router = useRouter();

  return (
    <Box>
      <Box gap={4} m={10} p={4}>
        <Box boxShadow="sm" p={4} position="relative">
          <Box w="100%" h="250px" textAlign="center">
            <Image
              src=""
              layout="fill"
              style={{ 
                objectFit: 'cover',
                width: '100%',
                height: 'auto',
              }}
              alt="道具詳細画像"
            />
          </Box>          
        </Box>
        <Text
          fontSize="24px"
          fontWeight="bold"
        >
          道具名称
        </Text>
        <Text
          fontSize="12px"
        >
          最安値
        </Text>
        <Text
          fontSize="20px"
          fontWeight="bold"
        >
          10000円
        </Text>
      </Box>
    </Box>   
  );
}

export default ToolDetailBox;
