import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';

import { getAreaById } from '../../../models/area/action';
import FishingSpotItemBox from '../FishingSpot/item/index'

const AreaDetailBox = ({ areaId }: any) => {

  const [area, setArea] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  console.log(areaId)
  useEffect(() => {
    if (areaId === null) return

    const fetchArea = async () => {
      setIsLoading(true)
      try {
        const data = await getAreaById(areaId)
        console.log(data)
        setArea(data)
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchArea();
  }, [areaId]);

  if (!area) {
    return <div></div>
  }

  return (
    <Box>
      <Grid>
        <GridItem colSpan={12} p={4}>
          <Heading 
            textAlign="center"
            size="md"
          >
            {area.name} の釣り場情報一覧
          </Heading>
          <FishingSpotItemBox 
            data={area.FishingSpots}
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
        <Link href="/areas">
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

export default AreaDetailBox;
