import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
  Box,
  Grid,
  Text,
  Flex,
  Avatar,
} from '@chakra-ui/react'
import Image from 'next/image'
import { truncateText } from '../../../../utils/util'

const ArticleItemBox: React.FC<any> = ({ articles }) => {
  const router = useRouter()
  for (const article of articles) {
    for (const ArticleImage of article.ArticleImages) {
      if (article && ArticleImage.image_url !== '') {
        article.image_url = process.env.NEXT_PUBLIC_API_ENDPOINT + ArticleImage.image_url
      } else {
        article.image_url = process.env.NEXT_PUBLIC_API_ENDPOINT + `/public/images/no_image.png`
      }
    }
  }
  

  const handleClick = (id) => {
    router.push(`/articles/${id}`)
  }

  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)">
        {articles.map((article) => (
          <Box
            key={article.id}
            m={2}
            borderRadius="5"
            onClick={() => handleClick(article.id)}
          >
            <Box w="100%" textAlign="center" position="relative">
              <Image
                src={article.image_url}
                width={16}
                height={9}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                }}
                alt="記事画像"
              />
            </Box>
            <Flex alignItems="center" mt={2}>
              <Avatar name="" size="xs" src='/' mr={2} />
              <Text fontSize="sm">{article.admin_id}</Text>
            </Flex>
            <Text fontWeight="bold">{article.title}</Text>
            <Text >{article.sub_title}</Text>
            <Text fontSize={14}>{truncateText(article.description, 20)}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default ArticleItemBox
