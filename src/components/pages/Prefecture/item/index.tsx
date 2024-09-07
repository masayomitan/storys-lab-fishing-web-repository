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
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          {displayPrefectures.map((prefecture) => (
            <Box
              key={prefecture.value}
              onClick={() => router.push(`/fishing-spots/detail/${prefecture.value}`)}
            >
              <Box
                boxShadow="lg"
                h="8rem"
                mt={4}
                mb={4}
                position="relative"
              >
                <Image
                  src=""
                  style={{ 
                    objectFit: 'cover',
                    width: '100%',
                    height: 'auto',
                  }}
                  alt={`釣り場画像`}
                />
              </Box>
              <Box>
                <Text fontWeight="bold">{prefecture.label}</Text>
                <Text fontWeight="bold">{prefecture.label}</Text>
              </Box>
              <Box bg="#f5f5f5">
                <Text fontSize="12px">
                  {prefecture.label}
                </Text>
              </Box>
            </Box>
            // <VStack
            //   key={prefecture.value}
            //   shadow="md"
            //   m={2}
            //   borderRadius="md"
            //   onClick={handleClick(prefecture)}
            //   borderColor="gray.500"
            //   _hover={{ bg: hoverBgColor }}
            // >
            //   <Box
            //     border="1px solid"
            //     w="100%"
            //     h="120px"
            //     borderColor="gray.500"
            //   >
            //     <Image
            //       borderRadius="full"
            //       src="/"
            //       alt={prefecture.label}
            //     />
            //   </Box>
            //   <Text fontWeight="bold">{prefecture.label}</Text>
            // </VStack>
          ))}
        </Grid>
      }
    </Box>
  );
};

export default PrefectureItem;
