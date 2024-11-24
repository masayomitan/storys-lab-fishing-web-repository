import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ArticleItemBox from './item/index'
import { formatDateTime } from '../../../utils/util'

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react'

import { getArticleById, getArticleByArticleCategoryId } from '../../../models/article/action'
import FishingSpotItemBox from '../FishingSpot/item/index'

const ArticleDetailBox = ({ articleId }: any) => {
  const [article, setArticle] = useState<any | null>(null)
  const [articles, setArticles] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (articleId === null) return

    const fetchArticle = async () => {
      setIsLoading(true)
      try {
        const fetchedArticle = await getArticleById(articleId)
        let fetchedArticles = []
        if (fetchedArticle.article_category_id) {
          fetchedArticles = await getArticleByArticleCategoryId(fetchedArticle.article_category_id)
        }
        for (const ArticleImage of fetchedArticle.ArticleImages) {
          if (fetchedArticle && ArticleImage.image_url !== '') {
            fetchedArticle.image_url = process.env.NEXT_PUBLIC_API_ENDPOINT + ArticleImage.image_url
          } else {
            fetchedArticle.image_url = process.env.NEXT_PUBLIC_API_ENDPOINT + `/public/images/no_image.png`
          }
        }
        setArticle(fetchedArticle)
        setArticles(fetchedArticles)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchArticle()
  }, [articleId])

  if (!article) {
    return <div></div>
  }

  return (
    <Box>
      <Box boxShadow="sm" pt={4} position="relative">
        <Box w="100%" h="15rem" textAlign="center" position="relative">
          <Image
            src={article.image_url}
            layout="fill"
            style={{ objectFit: 'cover' }}
            alt="記事画像"
          />
        </Box>
      </Box>
      <Box p={4}>
        <Text>{formatDateTime(article.published_datetime)}</Text>
        <Heading textAlign="center" size="lg">
          {article.title}
        </Heading>
        <Box>
          <Text fontSize="xl" fontWeight="bold">{article.sub_title}</Text>
        </Box>
        <Box>{article.description}</Box>
      </Box>
      <ArticleItemBox articles={articles} />
    </Box>
  );
};

export default ArticleDetailBox;
