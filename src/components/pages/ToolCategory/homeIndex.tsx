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

// 実データもこんな感じになる
const toolCategories = [
  { id: 1, name: "種別1" },
  { id: 2, name: "種別2" },
  { id: 3, name: "種別3" },
  { id: 4, name: "種別4" },
  { id: 5, name: "種別5" },
  { id: 6, name: "種別6" },
];

type ToolCategoryBoxProps = {
  data: {
    id: number,
    name: string
  };
};

const ToolCategoryBox: React.FC<ToolCategoryBoxProps> = ({ data }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/tool-categories/detail/${data.id}`);
  };

  return (
    <Box
      boxShadow="sm"
      p={4}
      h="4rem"
      border="1px solid"
      borderRadius="5"
      _hover={{ bg: "gray.100", cursor: "pointer" }}
      onClick={handleClick}
    >
      <Text>{data.id}, {data.name}</Text>
    </Box>
  );
};

const ToolCategoryContainer = () => {
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
            道具種別情報一覧
          </Heading>
          <Grid 
            templateColumns="repeat(2, 1fr)" 
            gap={4}
          >
            {toolCategories.map((toolCategory: any, index: any) => (
              <ToolCategoryBox
                key={index}
                data={toolCategory}
              />
            ))}
          </Grid>
        </GridItem>
      </Grid>
      <Box as="footer" w="full" boxShadow="sm" p={4}>
        <Text textAlign="center">
          <Link href="/ToolCategorys">
            さらに見る
          </Link>
        </Text>
      </Box>
    </Box>   
  );
};

export default ToolCategoryContainer;
