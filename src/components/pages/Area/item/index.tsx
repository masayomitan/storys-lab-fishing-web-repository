import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Grid,
  Image,
  Text
} from '@chakra-ui/react';

interface AreaBoxProps {
  data?: any;
}

const AreaItem: React.FC<AreaBoxProps> = ({data}) => {
  const router = useRouter();

  const handleClick = (pref) => () => {
    router.push(`/areas/${pref.id}`);
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
              alt={`エリア画像`}
            />
          </Box>
          <Box>
            <Text fontWeight="bold">{pref.name}</Text>
          </Box>
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

export default AreaItem;
