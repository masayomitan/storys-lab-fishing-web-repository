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
    name: '名称4',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト4',
    tags: [
      { id: 1, name: '材料1 100ml' },
      { id: 2, name: '材料2 5cc' },
      { id: 3, name: '材料3 10個' },
    ],
  },
];

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
        <FishingMethodBox />

        <DishBox
          data={dishData}
        />
      </Box>
    </Box>
  );
}

export default FishDetail;
