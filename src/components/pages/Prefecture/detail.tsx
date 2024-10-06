import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import AreaItem from '../Area/item/index';
import { getPrefectureById } from '../../../models/prefecture/action';
import { Pref } from '../../../types/prefecture';

interface PrefectureDetailBoxProps {
  prefectureId: number | null;
}

const PrefectureDetailBox: React.FC<PrefectureDetailBoxProps> = ({ prefectureId }) => {
  const [prefecture, setPrefecture] = useState<Pref | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (prefectureId === null) return

    const fetchPrefecture = async () => {
      setIsLoading(true)
      try {
        const fetchedPrefecture = await getPrefectureById(prefectureId)
        for (const area of fetchedPrefecture.Areas) {
          if (area && area.image_url !== '') {
            area.image_url = process.env.NEXT_PUBLIC_API_ENDPOINT + area.image_url    
          } else {
            area.image_url = process.env.NEXT_PUBLIC_API_ENDPOINT + `/public/images/no_image.png`
          }
        }

        setPrefecture(fetchedPrefecture)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPrefecture()
  }, [prefectureId])

  if (!prefecture) {
    return <Text>No data available</Text>
  }

  return (
    <Box mt={10} mb={10}>
      <Grid>
        <GridItem colSpan={12} p={4}>
          <Heading textAlign="center" size="lg" p={3}>
            {prefecture.name}からエリアを検索
          </Heading>
          <AreaItem 
            areas={prefecture.Areas} 
          />
        </GridItem>
      </Grid>

      <Box
        boxShadow="md"
        m="2px 10px"
        p={2}
        borderRadius="5"
        background="lightblue"
        borderColor="deepskyblue"
      >
        <Link href="/prefectures">
          <Text fontSize={20} fontWeight="bold" textAlign="center" color="#fff">
            さらに見る
          </Text>
        </Link>
      </Box>
    </Box>
  );
};

export default PrefectureDetailBox;
