import React from 'react';

// import "./style.css";
import Image from 'next/image';
import FishingMethodBox from '../FishingMethod'
import DishBox from '../Dish'

import { 
  Flex,
  Box, 
  Grid, 
  GridItem, 
  Input, 
  Heading, 
  Text 
} from '@chakra-ui/react';


// 実データできたら削除
const dishData: any = [
  {
    id: 1,
    name: '名称1',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト1',
    tags: [
      { id: 1, name: '材料1 100ml' },
      { id: 2, name: '材料2 5cc' },
      { id: 3, name: '材料3 10個' },
    ],
  },
  {
    id: 2,
    name: '名称2',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト2',
    tags: [
      { id: 1, name: '材料1 100ml' },
      { id: 2, name: '材料2 5cc' },
      { id: 3, name: '材料3 10個' },
    ],
  },
  {
    id: 3,
    name: '名称3',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト3',
    tags: [
      { id: 1, name: '材料1 100ml' },
      { id: 2, name: '材料2 5cc' },
      { id: 3, name: '材料3 10個' },
    ],
  },
  {
    id: 4,
    name: '名称4',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト4',
    tags: [
      { id: 1, name: '材料1 100ml' },
      { id: 2, name: '材料2 5cc' },
      { id: 3, name: '材料3 10個' },
    ],
  },
  {
    id: 5,
    name: '名称5',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト4',
    tags: [
      { id: 1, name: '材料1 100ml' },
      { id: 2, name: '材料2 5cc' },
      { id: 3, name: '材料3 10個' },
    ],
  },
  {
    id: 6,
    name: '名称6',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト4',
    tags: [
      { id: 1, name: '材料1 100ml' },
      { id: 2, name: '材料2 5cc' },
      { id: 3, name: '材料3 10個' },
    ],
  },
];

const FishDetailBox = () => {
  return (
    <Box p={4}>
      <Box boxShadow="sm" p={4} position="relative">
        <Box w="100%" h="15rem" textAlign="center">
          <Image
            src="/"
            layout="fill"
            objectFit="cover"
            alt="魚画像"
          />
        </Box>
      </Box>

      <Box>
        <Box mt={5}>
          <Text mb={2} color="rgb(108, 117, 125)">名称: </Text>
          <Text mb={2} color="rgb(108, 117, 125)">魚種</Text>
          <Text mb={2} color="rgb(108, 117, 125)">サイズ</Text>
          <Text mb={2} color="rgb(108, 117, 125)">重量</Text>
          <Text color="rgb(108, 117, 125)">主な生息地</Text>
        </Box>
        <Box>
          <Flex wrap="wrap">
            <Text 
              m={1}
              p="4px 17px"
              fontSize="14px"
              bg="white"
              border="2px solid #ADD8E6"
              borderRadius="5px"
            >
              堤防
            </Text>
            <Text 
              m={1}
              p="4px 17px"
              fontSize="14px"
              bg="white"
              border="2px solid #ADD8E6"
              borderRadius="5px"
            >
              磯
            </Text>
            <Text 
              m={1}
              p="4px 17px"
              fontSize="14px"
              bg="white"
              border="2px solid #ADD8E6"
              borderRadius="5px"
            >
              砂浜
            </Text>
          </Flex>
          <Box style={{ margin: '10px 0' }}>
            <Text
              fontSize="16px"
              style={{
                letterSpacing: '0.05em',
                lineHeight: '1.6',
              }}
            >
              魚詳細テキスト魚詳細テキスト魚詳細テキスト魚詳細テキスト魚詳細テキスト
              魚詳細テキスト魚詳細テキスト魚詳細テキスト魚詳細テキスト魚詳細テキスト
              魚詳細テキスト魚詳細テキスト魚詳細テキスト魚詳細テキスト魚詳細テキスト
            </Text>
          </Box>
        </Box>
        <FishingMethodBox />

        <DishBox
          data={dishData}
        />
      </Box>
    </Box>
  );
}

export default FishDetailBox;
