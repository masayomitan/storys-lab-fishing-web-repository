import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Grid,
  Image,
  VStack,
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

  if (!data) return null;

  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)">
        {data.map((pref, index) => (
          <VStack
            key={index}
            shadow="md"
            m={2}
            borderRadius="md"
            onClick={handleClick(pref)}
            borderColor="gray.500"
            borderWidth="1px"
          >
            <Box
              border="1px solid"
              w="100%"
              h="120px"
              borderColor="gray.500"
            >
              <Image
                borderRadius="full"
                src="/"
                alt={pref.label}
              />
            </Box>
            <Text fontWeight="bold">{pref.name}</Text>
            <Text fontWeight="bold">{pref.description}</Text>
          </VStack>
        ))}
      </Grid>
    </Box>
  );
};

export default AreaItem;
