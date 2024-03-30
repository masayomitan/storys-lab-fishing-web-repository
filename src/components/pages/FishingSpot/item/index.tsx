import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import {
  Box,
  Flex,
  Text,
  Grid,
  GridItem
} from '@chakra-ui/react';

type FishingSpotBoxProps = {
  id: number;
  name: string;
  text: string;
  tags: Array<{
    id: number;
    name: string;
  }>;
};

type FishingSpotBoxComponentProps = {
  fishingSpots: FishingSpotBoxProps[];
};

const FishingSpotItemBox: React.FC<FishingSpotBoxComponentProps> = ({ fishingSpots }) => {
  const router = useRouter();

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      {fishingSpots.map((fishingSpot) => (
        <Box
          key={fishingSpot.id}
          onClick={() => router.push(`/fishing-spots/detail/${fishingSpot.id}`)}
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
            <Text fontWeight="bold">{fishingSpot.name}</Text>
          </Box>
          <Box>
            <Flex wrap="wrap">
              {fishingSpot.tags.map((tag, index) => (
                <Text 
                  key={index}
                  fontSize="10px"
                  bg="white"
                  border="2px solid #ADD8E6"
                  borderRadius="5px"
                  m={1}
                  p={1}
                  
                >
                  {tag.name}
                </Text>
              ))}
            </Flex>
          </Box>
          <Box bg="#f5f5f5">
            <Text fontSize="12px">
              {fishingSpot.text}
            </Text>
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

export default FishingSpotItemBox;
