import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Grid,
  Flex,
  Image,
  Text
} from '@chakra-ui/react';

interface AreaBoxProps {
  data?: any;
}

const FishingSpotItemBox: React.FC<AreaBoxProps> = ({data}) => {
  const router = useRouter();

  const handleClick = (pref) => () => {
    router.push(`/fishing-spots/${pref.id}`);
  };
  console.log(data)
  if (!data) return null;

  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {data.map((pref, index) => (
          <Box
          key={index}
          onClick={handleClick(pref)}
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
            <Text fontWeight="bold">{pref.name}</Text>
          </Box>
          {data.tags && 
            <Box>
              <Flex wrap="wrap">
                {data.tags.map((tag, index) => (
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
          }
          <Box>
            <Text fontSize="12px">
              {pref.description}
            </Text>
          </Box>
        </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default FishingSpotItemBox;
