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


type ToolCategoryData = {
    id: number;
    name: string;
};

type ToolCategoryProps = {
  toolCategories: ToolCategoryData[];
};

// 実データもこんな感じになる
const toolCategories: ToolCategoryData[] = [
  { id: 1, name: "ロッド" },
  { id: 2, name: "リール" },
  { id: 3, name: "ルアー" },
  { id: 4, name: "フック" },
  { id: 5, name: "ライン" },
  { id: 6, name: "フロート" }
];


const ToolCategoryBox: React.FC<ToolCategoryProps> = ({ toolCategories }) => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/tool-categories/${id}`);
  };

  return (
    <Box>
      <Grid 
        templateColumns="repeat(2, 1fr)" 
        gap={4}
      >
        {toolCategories.map((toolCategory) => (
        <Box
          key={toolCategory.id}
          boxShadow="sm"
          p={3}
          border="1px solid"
          borderRadius="5"
          borderColor="lightblue"
          onClick={() => handleClick(toolCategory.id)}
        >
          <Text textAlign="center">{toolCategory.name}</Text>
        </Box>
      ))}
      </Grid>
    </Box>
  );
};

const ToolCategoryHomeBox = () => {
  return (
    <Box>
      <Grid>
        <GridItem colSpan={12} p={4}>
          <Heading 
            textAlign="center"
            size="lg"
            p={3}
          >
            道具種別情報一覧
          </Heading>  
          <ToolCategoryBox toolCategories={toolCategories} />
        </GridItem>
      </Grid>
    </Box>   
  );
};

export default ToolCategoryHomeBox;
