import React from 'react';
import Link from 'next/link'

import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';

import AreaItem from '../Area/item/index'


const AreaHomeBox = () => {
  return (
    <Box mt={10} mb={10}>
      <Grid>
        <GridItem colSpan={12} p={4}>
          <Heading 
            borderRadius="5" 
            textAlign="center"
            size="lg"
            p={3}
          >
            都道府県から釣り場を検索
          </Heading>
          <AreaItem />
        </GridItem>
      </Grid>
      <Box 
        border="0.5px solid"
        boxShadow="md"
        m={2}
        p={2}
        borderRadius="lg"
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
};

export default AreaHomeBox;
