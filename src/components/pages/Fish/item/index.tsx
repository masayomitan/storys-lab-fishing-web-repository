import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import {
  Box,
  Flex,
  Grid,
  Text
} from '@chakra-ui/react';


const FishHomeBox: React.FC = ({}) => {
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/fishes/detail/${id}`);
  };
  return (
    <Box>
      <Grid 
        templateColumns="repeat(1, 1fr)" 
        gap={4}
      >
        {Array.from({ length: 6 }, (_, index) => (
          <Box 
            key={index}
            m={3}
            p={3}
            boxShadow="md"
            textAlign="center"
            onClick={handleClick}
          >
            <Flex justifyContent="space-between" alignItems="center">
              <Box
                border="0.2px solid" 
              >
                <Image
                  src="/"
                  width={200}
                  height={100}
                  style={{ 
                    objectFit: 'contain',
                  }}
                  alt="Story's"
                />
              </Box>
              <Box>
                <Text textAlign="center" mb={2} >名称 {index + 1}</Text>
                <Text textAlign="center">主なエリア {index + 1}</Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default FishHomeBox;
