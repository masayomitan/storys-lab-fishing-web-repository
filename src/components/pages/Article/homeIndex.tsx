import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'

import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Stack,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  IconButton,
  Input,
  Button
} from '@chakra-ui/react';

import ArticleItem from '../Article/item/index'

type ArticleData = {
  id: number;
  userName: string;
  userImage: string;
  title: string;
  description: string;
};

const articles: ArticleData[] = [
  {
    id: 1,
    userName: "ユーザー名1",
    userImage: "/",
    title: "記事のタイトル1",
    description: "記事の説明1"
  },
  {
    id: 2,
    userName: "ユーザー名2",
    userImage: "/",
    title: "記事のタイトル2",
    description: "記事の説明2"
  },
  {
    id: 3,
    userName: "ユーザー名3",
    userImage: "/",
    title: "記事のタイトル3",
    description: "記事の説明3"
  },
  {
    id: 4,
    userName: "ユーザー名4",
    userImage: "/",
    title: "記事のタイトル4",
    description: "記事の説明4"
  },
];

const ArticleHomeBox = () => {

  return (
    <Box>
      <Grid>
        <GridItem colSpan={12} p={4}>
          <Heading 
            textAlign="center"
            size="lg"
          >
          記事情報一覧
          </Heading>
          <ArticleItem articles={articles} />
        </GridItem>
      </Grid>
      
      <Box 
        border="0.5px solid"
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
};

export default ArticleHomeBox;
