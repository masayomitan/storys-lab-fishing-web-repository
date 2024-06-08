import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import FishingMethodBox from '../FishingMethod'
import DishBox from '../Dish'
import { getFishById } from '../../../models/fish/action';
import { Fish } from '../../../types/fish';

import { 
  Flex,
  Box, 
  Text 
} from '@chakra-ui/react';

const FishDetailBox = ({ fishId }) => {
  const [fish, setFish] = useState<Fish | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (fishId === null) return

    const fetchFish = async () => {
      setIsLoading(true)
      try {
        const data = await getFishById(fishId)
        if (data && data.FishImages && data.FishImages.length > 0) {
          const apiUrl = process.env.NEXT_PUBLIC_API_ENDPOINT
          data.image_url = `${apiUrl}${data.FishImages[0].image_url}`
        }
        setFish(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFish();
  }, [fishId]);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!fish) {
    return <div>No fish found</div>
  }

  return (
    <Box p={4}>
      <Box boxShadow="sm" p={4} position="relative">
        <Box w="100%" h="15rem" textAlign="center" position="relative">
          <Image
            src={fish.image_url}
            layout="fill"
            style={{ objectFit: 'cover' }}
            alt="魚画像"
          />
        </Box>
      </Box>

      <Box>
        <Box mt={5}>
          <Text mb={2} color="rgb(108, 117, 125)">名称: {fish.name} </Text>
          <Text mb={2} color="rgb(108, 117, 125)">魚種: {fish.FishCategory.name}</Text>
          <Text mb={2} color="rgb(108, 117, 125)">サイズ: {fish.length} cm</Text>
          <Text mb={2} color="rgb(108, 117, 125)">重量: {fish.weight} kg</Text>
          <Text color="rgb(108, 117, 125)">主な生息地</Text>
        </Box>
        <Box>
          <Flex wrap="wrap">
            <Text 
              m={1}
              p="4px 17px"
              fontSize="14px"
              bg="white"
              border="2px solid #ADD8E6"
              borderRadius="5px"
            >
              堤防
            </Text>
            <Text 
              m={1}
              p="4px 17px"
              fontSize="14px"
              bg="white"
              border="2px solid #ADD8E6"
              borderRadius="5px"
            >
              磯
            </Text>
            <Text 
              m={1}
              p="4px 17px"
              fontSize="14px"
              bg="white"
              border="2px solid #ADD8E6"
              borderRadius="5px"
            >
              砂浜
            </Text>
          </Flex>
          <Box style={{ margin: '10px 0' }}>
            <Text
              fontSize="16px"
              style={{
                letterSpacing: '0.05em',
                lineHeight: '1.6',
              }}
            >
              {fish.description}
            </Text>
          </Box>
        </Box>
        <FishingMethodBox 
          data={fish.FishingMethods}
        />

        <DishBox
          data={fish.Dishes}
        />
      </Box>
    </Box>
  );
}

export default FishDetailBox;
