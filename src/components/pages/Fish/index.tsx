import React from 'react';
import Link from 'next/link'

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text
} from '@chakra-ui/react';

import FishItemBox from './item/index';

const fishes: any = [
  {
    id: 1,
    name: "魚1",
    image: "/",
    area: "主なエリア1",
  },
  {
    id: 2,
    name: "魚2",
    image: "/",
    area: "主なエリア2",
  },
  {
    id: 3,
    name: "魚3",
    image: "/",
    area: "主なエリア3",
  },
  {
    id: 4,
    name: "魚4",
    image: "/",
    area: "主なエリア4",
  },
];


const FishBox = () => {
  return (
    <Box mt={10} mb={10}>
      <Heading 
        borderRadius="5" 
        textAlign="center"
        size="lg"
        p={3}
      >
        魚一覧
      </Heading>

      <FishItemBox 
        // fishes={fishes}
      />

      <Box 
        border="0.5px solid"
        boxShadow="md"
        m="2px 10px"
        p={2}
        borderRadius="5"
        background="lightblue"
        borderColor="deepskyblue"
      >
        <Link href="/fishes">
          <Text
            fontSize={20}
            fontWeight="bold"
            textAlign="center"
            color="#fff"
          >
            さらに見る
          </Text>
        </Link>
      </Box>
    </Box>
  );
}

export default FishBox;
