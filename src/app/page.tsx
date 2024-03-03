'use client'

import React from 'react';
import Image from 'next/image';
import ScrollTab from '../components/parts/Tab/scrollTab';

import {
  Box,
  Container,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';

import Layout from '../components/parts/Layout/layout';
import SearchBar from '../components/parts/SearchBar/index';
import AreaContainer from '../components/pages/Area/homeIndex';
import FishContainer from '../components/pages/Fish/homeIndex';
import ArticleContainer from '../components/pages/Article/homeIndex';
import ToolCategoryContainer from '../components/pages/ToolCategory/homeIndex';
import EventContainer from '../components/pages/Event/homeIndex';
import "./style.css";

const  Home: React.FC = () => {

  return (
    <Layout>
      <Container maxW="container.xl" p={0}>

        {/* 横スクロールバー */}
        <ScrollTab/>

        <Grid templateColumns="repeat(12, 1fr)" gap={4} p={4}>
          <GridItem colSpan={12} boxShadow="sm" p={4} position="relative">
            <Box w="100%" h="15rem" textAlign="center">
              <Image
                src="/images/homepage-banner-mobile.png"
                layout="fill"
                objectFit="cover"
                alt="Story's"
              />
            </Box>
            
            <SearchBar />
          </GridItem>

          <GridItem boxShadow="sm" p={4}>
            <Text>日付選定</Text>
          </GridItem>
        </Grid>

        {/* エリア一覧 */}
        <AreaContainer />

        {/* 魚一覧 */}
        <FishContainer />
        
        {/* 記事一覧 */}
        <ArticleContainer />

        {/* 道具種別一覧 */}
        <ToolCategoryContainer />

        {/* イベント一覧 */}
        <EventContainer />

      </Container>

    </Layout>
  );
}

export default Home;