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

type ArticleBoxProps = {
  index: number;
};

const ArticleBox: React.FC<ArticleBoxProps> = ({ index }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/articles/detail/${index + 1}`);
  };

  return (
    <Box
      boxShadow="sm"
      p={4}
      h="10rem"
      border="1px solid"
      borderRadius="5"
      _hover={{ bg: "gray.100", cursor: "pointer" }}
      onClick={handleClick}
    >
      <Text>記事情報 {index + 1}</Text>
    </Box>
  );
};

const ArticleHomeBox = () => {
  return (
    <Box>
      <Grid>
        <GridItem colSpan={12} p={4}>
          <Heading 
            border="1px solid"
            borderRadius="5" 
            textAlign="center"
            size="md"
          >
          記事情報一覧
          </Heading>
          <Grid 
          templateColumns="repeat(2, 1fr)" 
          gap={4}
          >
          {Array.from({ length: 6 }, (_, index) => (
            <ArticleBox
              key={index}
              index={index}
            />
          ))}
        </Grid>
      </GridItem>
    </Grid>
    <Box as="footer" w="full" boxShadow="sm" p={4}>
      <Text textAlign="center">
        <Link href="/Articles">
            さらに見る
        </Link>
      </Text>
    </Box>
  </Box>   
  );
};

export default ArticleHomeBox;
