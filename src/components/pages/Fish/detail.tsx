import React from 'react';

// import "./style.css";
import Image from 'next/image';
import FishingMethod from '../FishingMethod'

import { 
  Flex,
  Box, 
  Grid, 
  GridItem, 
  Input, 
  Heading, 
  Text 
} from '@chakra-ui/react';


const FishDetail = () => {
  return (
    <Box p={4}>
      <Heading 
        border="1px solid"
        borderRadius="5" 
        textAlign="center"
        size="md"
      >
        魚詳細情報
      </Heading>
      <Box boxShadow="sm" p={4} position="relative">
        <Box w="100%" h="15rem" textAlign="center">
          <Image
            src="/"
            layout="fill"
            objectFit="cover"
            alt="釣り場詳細画像"
          />
        </Box>
      </Box>

      <Box>
        <Box>
          <Text>名称</Text>
          <Text>魚種</Text>
          <Text>サイズ</Text>
          <Text>重量</Text>
          <Text>主な生息地</Text>
        </Box>
        <Box>
          <Flex wrap="wrap">
            <Text 
              border="1px solid"
              borderRadius="5"
              m={1}
              p={2}
            >
              堤防
            </Text>
            <Text 
              border="1px solid"
              borderRadius="5"
              m={1}
              p={2}
            >
              磯
            </Text>
            <Text 
              border="1px solid"
              borderRadius="5"
              m={1}
              p={2}
            >
              砂浜
            </Text>
          </Flex>
          <Box style={{ margin: '10px 0' }}>
              <Text
                fontSize="18px"
                style={{
                  letterSpacing: '0.05em',
                  lineHeight: '1.6',
                }}
              >
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </Text>
            </Box>
        </Box>
        <FishingMethod />

        <Heading 
          border="1px solid"
          borderRadius="5" 
          textAlign="center"
          size="md"
        >
          おすすめ料理
        </Heading>
      </Box>
    </Box>
  );
}

export default FishDetail;
