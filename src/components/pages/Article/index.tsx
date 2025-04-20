import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import { getArticles } from '../../../models/article/action'
import ArticleItemBox from './item/index'

const ArticleBox = () => {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchArticle = async () => {
      setIsLoading(true)
      try {
        const articles = await getArticles()
        setArticles(articles)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchArticle()
  }, [])

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
          <ArticleItemBox articles={articles} />
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
        <Link href="/articles">
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

export default ArticleBox;
