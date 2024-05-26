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
import AreaHomeBox from '../components/pages/Area/homeIndex';
import FishBox from '../components/pages/Fish/index';
import ArticleHomeIndex from '../components/pages/Article/homeIndex';
import ToolCategoryHomeIndex from '../components/pages/ToolCategory/homeIndex';
import EventHomeIndex from '../components/pages/Event/homeIndex';
import "./style.css";

const  Home: React.FC = () => {

  return (
    <Layout>
      <Box>
        {/* 横スクロールバー */}
        <ScrollTab/>

        <Box gap={4}>
          <Box boxShadow="sm" position="relative">
            <Box w="100%" h="250px" textAlign="center">
              <Image
                src="/images/homepage-banner-mobile.png"
                width={120}
                height={120}
                style={{ 
                  objectFit: 'cover',
                  width: '120%',
                  height: '120%'
                }}
                alt="Story's"
              />
            </Box>            
            <SearchBar />
          </Box>
        </Box>

        {/* エリア一覧 */}
        <AreaHomeBox />

        {/* 魚一覧 */}
        <FishBox />
        
        {/* 記事一覧 */}
        <ArticleHomeIndex />

        {/* 道具種別一覧 */}
        <ToolCategoryHomeIndex />

        {/* イベント一覧 */}
        <EventHomeIndex />

      </Box>
    </Layout>
  );
}

export default Home;
