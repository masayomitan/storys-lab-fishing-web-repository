import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getFishingSpotById, getFishingSpotByAreaId } from '../../../models/fishingSpot/action';

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';

import SeasonFishesTab from '../../parts/Tab/seasonTab';
import TideTable from '../../parts/Table/tideTable';
import FishingSpotItemBox from '../../pages/FishingSpot/item/index';

const FishingSpotDetailBox = ({ fishingSpotId }) => {
  const [fishingSpot, setFishingSpot] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchFishingSpot = async () => {
      setIsLoading(true)
      try {
        const fetchedFishingSpot = await getFishingSpotById(fishingSpotId)
        if (fetchedFishingSpot) {
          if (fetchedFishingSpot && fetchedFishingSpot.image_url !== '') {
            fetchedFishingSpot.image_url = process.env.NEXT_PUBLIC_API_ENDPOINT + fetchedFishingSpot.image_url    
          } else {
            fetchedFishingSpot.image_url = process.env.NEXT_PUBLIC_API_ENDPOINT + `/public/images/no_image.png`
          }
  
          const nearbyFishingSpots = await getFishingSpotByAreaId(fetchedFishingSpot.area_id)
          const filteredNearbySpots = nearbyFishingSpots.filter((spot: any) => {
            return Number(spot.id) !== Number(fishingSpotId)
          })
          fetchedFishingSpot.NearbyFishingSpot = filteredNearbySpots
        }
        setFishingSpot(fetchedFishingSpot);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFishingSpot();
  }, [fishingSpotId]);

  if (!fishingSpot) {
    return false;
  }

  return (
    <Box>
      <Heading 
        textAlign="center"
        size="lg"
        m={2}
      >
        エリア{fishingSpotId}の釣り場情報詳細
      </Heading>
      <Box 
        boxShadow="md"
        p={4} 
        position="relative"
      >
        <Box 
          w="100%"
          h="15rem" 
          textAlign="center"
        >
          <Image
            src={fishingSpot.image_url}
            layout="fill"
            objectFit="cover"
            alt="釣り場詳細画像"
          />
        </Box>
      </Box>

      <Grid>
        <GridItem colSpan={12} p={4}>          
          <Box>
            <Text fontSize="24px">
              {fishingSpot.name}
            </Text>
            <Text fontSize="20px" m={2}>
              {fishingSpot.description}
            </Text>
          </Box>
          
          <SeasonFishesTab
            fishes={fishingSpot.Fishes}
          />

          <Box>
            <Flex wrap="wrap">
              {fishingSpot.Tags.map((tag, index) => (
                <Text 
                  key={index}
                  fontSize="16px"
                  border="2px solid"
                  borderRadius="lg"
                  borderColor="#ADD8E6"
                  m={2}
                  p="3px 5px"
                  >
                    {tag.name}
                  </Text>
              ))}
            </Flex>
          </Box>
          
           {/* 潮時表 */}
          {fishingSpot.Area.Tides &&
            <TideTable 
              data={fishingSpot.Area.Tides}
            />
          }

          <Box
            m="20px 0"
          >
            <Box>
              <Text 
                fontSize="24px" 
                textAlign="center"
              >
                運営・インストラクターの記事
              </Text>
            </Box>
            <Box 
              m="10px 0"
              bg="gray.100"
              borderRadius="10"
            >
              <Text
                fontSize="16px"
                p={4}
                style={{
                  letterSpacing: '0.05em',
                  lineHeight: '1.6',
                }}
              >
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </Text>
            </Box>
          </Box>

          <Heading 
            textAlign="center"
            size="lg"
            mt="10px"
          >
            近くの釣り場情報一覧
          </Heading>

          {fishingSpot.NearbyFishingSpot &&
            <FishingSpotItemBox 
              data={fishingSpot.NearbyFishingSpot}
            />
          }
        </GridItem>
      </Grid>
    </Box>   
  );
}

export default FishingSpotDetailBox;
