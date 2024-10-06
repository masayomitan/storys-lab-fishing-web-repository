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
import { Pref } from '../../../../types/prefecture';

const PrefectureItem: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()

  const hoverBgColor = useColorModeValue('gray.200', 'gray.600')
  const [displayPrefectures, setDisplayPrefectures] = useState<Pref[]>([])

  useEffect(() => {
    if (pathname === '/prefectures/') {
      setDisplayPrefectures(prefectures)
    } else {
      const shuffled = [...prefectures].sort(() => 0.5 - Math.random())
      setDisplayPrefectures(shuffled.slice(0, 6))
    }
  }, [pathname])

  const handleClick = (prefecture) => () => {
    router.push(`/prefectures/${prefecture.id}`)
  }
  
  return (
    <Box>
      {displayPrefectures &&
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          {displayPrefectures.map((prefecture, index) => (
            <VStack
              key={index}
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
                  src={prefecture.image_url}
                  alt={prefecture.name}
                  style={{ 
                    objectFit: 'contain',
                    width: '100%',
                    height: '100%'
                  }}
                />
              </Box>
              <Text fontWeight="bold">{prefecture.name}</Text>
            </VStack>
          ))}
        </Grid>
      }
    </Box>
  );
};

export default PrefectureItem;
