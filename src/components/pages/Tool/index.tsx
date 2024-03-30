import { useState } from 'react';
import Image from 'next/image';

import {
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

import ToolItemBox from '../../pages/Tool/item/index';

const ToolBox = ({ data }) => {

  return (
    <Box mt={10} mb={10}>
      <Heading 
        textAlign="center" 
        size="md"
      >
        道具種別一覧
      </Heading>

      <Box m="10px 0">
        <Box m="10px 0" boxShadow="sm" position="relative">
          <Box w="100%" h="180px" textAlign="center" boxShadow="lg" >
            <Image
              src=""
              style={{ 
                objectFit: 'cover',
                width: '100%',
                height: 'auto',
              }}
              alt="おすすめ道具画像トップ"
            />
          </Box>
        </Box>
        <Box m="10px 0" boxShadow="sm" position="relative">
          <Box w="100%" h="180px" textAlign="center" boxShadow="lg">
            <Image
              src=""
              alt="おすすめ道具画像トップ"
              style={{ 
                objectFit: 'cover',
                width: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </Box>
      </Box>
          
      <ToolItemBox 
        data={data}
      />

    </Box>
  );
};

export default ToolBox;
