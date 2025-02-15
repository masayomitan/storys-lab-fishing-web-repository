import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getFishes } from '../../../models/fish/action'
import { 
  Box,
  Heading,
  Text
} from '@chakra-ui/react'
import FishItemBox from './item/index'

const FishBox = () => {
  const [fishes, setFishes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFishes = async () => {
      setIsLoading(true);
      try {
        const fishes = await getFishes()
        for (const fish of fishes) {
          if (fish.Images) {
            fish.image_url = fish.Images[0].image_url
          } else {
            fish.image_url = process.env.NEXT_PUBLIC_API_ENDPOINT + `/public/images/no_image.png`
          }
        }
        setFishes(fishes)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchFishes()
  }, [])

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
