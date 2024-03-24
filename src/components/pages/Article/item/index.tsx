import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Grid,
  Text,
  Image,
  Flex,
  Avatar,
} from '@chakra-ui/react';

type ArticleData = {
  id: number;
  userName: string;
  userImage: string;
  title: string;
  description: string;
};

type ArticleItemProps = {
  articles: ArticleData[];
};

const ArticleItem: React.FC<ArticleItemProps> = ({ articles }) => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/articles/detail/${id}`);
  };

  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)">
        {articles.map((article) => (
          <Box
            key={article.id}
            m={2}
            borderRadius="5"
            onClick={() => handleClick(article.id)}
            shadow="md"
          >
            <Box
              w="100%"
              h="120px"
            >
              <Image
                borderRadius="full"
                src="/"
                alt="記事名"
              />
            </Box>
            <Flex alignItems="center" mt={2}>
              <Avatar name="" size="xs" src='/' mr={2} />
              <Text fontSize="sm">{article.userName}</Text>
            </Flex>
            <Text fontWeight="bold">{article.title}</Text>
            <Text fontSize={14}>{article.description}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default ArticleItem;
