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

type FishBoxProps = {
  index: number;
};

const FishBox: React.FC<FishBoxProps> = ({ index }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/fishes/detail/${index + 1}`);
  };

  return (
    <Box 
      w="100%" 
      h="8rem" 
      bgColor="teal.600"
      p="10" 
      border="1px solid" 
      textAlign="center"
      onClick={handleClick}
    >
      <Text>魚情報 {index + 1}</Text>
    </Box>
  );
};

const FishContainer: React.FC = ({}) => {
  return (
    <Box>
        <Heading 
          border="1px solid"
          borderRadius="5" 
          textAlign="center"
          size="md"
        >
          魚情報一覧
        </Heading>
        <Grid 
          templateColumns="repeat(1, 1fr)" 
          gap={4}
        >
          {Array.from({ length: 3 }, (_, index) => (
            <FishBox
              key={index}
              index={index} 
            />
          ))}
        </Grid>
        <Box as="footer" w="full" boxShadow="sm" p={4}>
        <Text textAlign="center">
          <Link href="/fishes">
            さらに見る
          </Link>
        </Text>
      </Box>
    </Box>
    
  );
};

export default FishContainer;
