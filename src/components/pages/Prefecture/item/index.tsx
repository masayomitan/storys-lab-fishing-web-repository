import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
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

const PrefectureItem: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const hoverBgColor = useColorModeValue('gray.200', 'gray.600');
  const [displayPrefectures, setDisplayPrefectures] = useState<Prefecture[]>([]);

  useEffect(() => {
    if (pathname === '/prefectures/') {
      setDisplayPrefectures(prefectures);
    } else {
      const shuffled = [...prefectures].sort(() => 0.5 - Math.random());
      setDisplayPrefectures(shuffled.slice(0, 6));
    }
  }, [pathname]);

  const handleClick = (prefecture) => () => {
    router.push(`/prefectures/${prefecture.value}`);
  };

  return (
    <Box>
      {displayPrefectures &&
        <Grid templateColumns="repeat(2, 1fr)">
          {displayPrefectures.map((prefecture) => (
            <VStack
              key={prefecture.value}
              shadow="md"
              m={2}
              borderRadius="md"
              onClick={handleClick(prefecture)}
              borderColor="gray.500"
              _hover={{ bg: hoverBgColor }}
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

export default PrefectureItem;
