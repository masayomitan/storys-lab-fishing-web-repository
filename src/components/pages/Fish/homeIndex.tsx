import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import Image from 'next/image';

import {
  Box,
  Flex,
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
import { relative } from 'path';

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
      m={3}
      p={3}
      boxShadow="md"
      textAlign="center"
      onClick={handleClick}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Box 
          border="0.2px solid" 
        >
          <Image
            src="/"
            width={200}
            height={100}
            style={{ 
              objectFit: 'contain',
            }}
            alt="Story's"
          />
        </Box>
        <Box>
          <Text textAlign="center" mb={2} >名称 {index + 1}</Text>
          <Text textAlign="center">主なエリア {index + 1}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

const FishHomeBox: React.FC = ({}) => {
  return (
    <Box mt={20} mb={10}>
      <Heading 
        borderRadius="5" 
        textAlign="center"
        size="lg"
        p={3}
      >
        魚一覧
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
      <Box 
        border="0.5px solid"
        boxShadow="md"
        m={2}
        p={2}
        borderRadius="lg"
        background="lightblue"
        borderColor="deepskyblue"
      >
        <Link href="/fishes">
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

export default FishHomeBox;
