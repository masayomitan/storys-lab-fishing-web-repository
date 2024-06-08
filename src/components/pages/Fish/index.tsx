import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axiosInstance from '../../../libs/api_clients/base';
import { FISH, FISHES } from '../../../constants/url';
import { 
  Box,
  Heading,
  Text
} from '@chakra-ui/react';
import FishItemBox from './item/index';

const getFishes = async () => {
  try {
    const res = await axiosInstance.get(FISHES);
    return res.data;
  } catch (error) {
    console.error('Error fetching fishes:', error);
    throw error;
  }
}

const FishBox = () => {
  const [fishes, setFishes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFishes = async () => {
      setIsLoading(true);
      try {
        const data = await getFishes();
        setFishes(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFishes();
  }, []);

  return (
    <Box mt={10} mb={10}>
      <Heading textAlign="center" size="lg" p={3}>
        魚一覧
      </Heading>

      {isLoading ? (
        <Text textAlign="center">読み込み中...</Text>
      ) : (
        <FishItemBox 
          fishes={fishes}
        />
      )}

      <Box
        border="0.5px solid"
        boxShadow="md"
        m="2px 10px"
        p={2}
        borderRadius="5"
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
}

export default FishBox;
