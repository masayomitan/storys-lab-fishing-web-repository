import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Grid,
  Image,
  Text
} from '@chakra-ui/react';

interface AreaBoxProps {
  areas?: any;
}

const AreaItem: React.FC<AreaBoxProps> = ({ areas }) => {
  const router = useRouter()

  const handleClick = (pref) => () => {
    router.push(`/areas/${pref.id}`)
  }

  if (!areas) return null

  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {areas.map((area, index) => (
          <Box
          key={index}
          onClick={handleClick(area)}
        >
          <Box
            boxShadow="lg"
            w="200px"
            h="170px"
            mt={4}
            mb={4}
            position="relative"
          >
            <Image
              src={area.image_url}
              alt={area.name}
              style={{ 
                objectFit: 'contain',
                width: '100%',
                height: '100%'
              }}
            />
          </Box>
          <Box>
            <Text fontWeight="bold">{area.name}</Text>
          </Box>
          <Box>
            <Text fontSize="12px">
              {area.description}
            </Text>
          </Box>
        </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default AreaItem;
