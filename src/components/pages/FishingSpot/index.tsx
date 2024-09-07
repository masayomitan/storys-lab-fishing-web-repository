import React from 'react';
import Link from 'next/link'

import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Text,
  } from '@chakra-ui/react';

import FishingSpotItemBox from './item/index'

// TODO 型は実データ次第で変更でてくる
type FishingSpotBoxProps = {
  id: number;
  name: string;
  text: string;
  tags: Array<{
    id: number;
    name: string;
  }>;
};

type FishingSpotBoxComponentProps = {
  fishingSpots: FishingSpotBoxProps[];
};

const FishingSpotBox: React.FC<FishingSpotBoxComponentProps> = ({ fishingSpots }) => {

  if (!fishingSpots) {
    return null;
  }

  return (
    <Box>
      <Grid>
        <GridItem colSpan={12} p={4}>
          <Heading 
            textAlign="center"
            size="md"
          >
            エリア情報の釣り場情報一覧
          </Heading>
          <FishingSpotItemBox 
            data={fishingSpots}
          />
        </GridItem>
      </Grid>
      <Box 
        boxShadow="md"
        m="2px 10px"
        p={2}
        borderRadius="5"
        background="lightblue"
        borderColor="deepskyblue"
      >
        <Link href="/areas">
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

export default FishingSpotBox;
