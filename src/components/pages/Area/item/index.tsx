import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Grid,
  Text,
  Image,
  VStack,
  useColorModeValue
} from '@chakra-ui/react';

import { prefectures } from '../../../../constants/prefectures';

type Prefecture = {
  value: number;
  label: string;
  region?: string;
};

const AreaItem: React.FC = () => {
  const router = useRouter();
  const hoverBgColor = useColorModeValue('gray.200', 'gray.600');
  const [shuffledPrefectures, setShuffledPrefectures] = useState<Prefecture[]>([]);

  useEffect(() => {
    const shuffled = [...prefectures].sort(() => 0.5 - Math.random());
    setShuffledPrefectures(shuffled.slice(0, 6));
  }, []);

  const handleClick = (prefecture) => () => {
    router.push(`/areas/${prefecture.value}`);
  };

  return (
    <Box>
      {shuffledPrefectures &&
        <Grid templateColumns="repeat(2, 1fr)">
          {shuffledPrefectures.map((prefecture) => (
            <VStack
              key={prefecture.value}
              shadow="md"
              m={2}
              borderRadius="md"
              onClick={handleClick(prefecture)}
              borderColor="gray.500"
            >
              <Box
                border="1px solid"
                w="100%"
                h="120px"
                borderColor="gray.500"
              >
                <Image
                  borderRadius="full"
                  src="/"
                  alt={prefecture.label}
                />
              </Box>
              <Text fontWeight="bold">{prefecture.label}</Text>
            </VStack>
          ))}
        </Grid>
      }
    </Box>
  );
};

export default AreaItem;
