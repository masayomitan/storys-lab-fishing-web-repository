import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'

import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';

import { regions } from '../../../constants/prefectures';

type PrefecturesBoxProps = {
  key: number;
  value: number;
  label: string;
};

const PrefectureBox: React.FC<PrefecturesBoxProps> = ({ value, label }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/prefectures/${value + 1}`);
  };

  return (
    <Box
      boxShadow="sm"
      p={4}
      h="2rem"
      borderRadius="5"
      _hover={{ bg: "gray.100", cursor: "pointer" }}
      onClick={handleClick}
    >
      <Text>{label}</Text>
    </Box>
  );
};

const PrefecturesContainer = () => {
  return (
    <Box>
      <Heading 
        border="1px solid"
        borderRadius="5" 
        textAlign="center"
      >
        都道府県別(イベント、釣り場、魚)
      </Heading>

      {regions.map((region, index) => (
        <Box key={index}>
          <Heading mt={4} mb={2}>
            {region.label}
          </Heading>
          <GridItem colSpan={12} p={4}>
            <Grid 
              templateColumns="repeat(4, 1fr)" 
              gap={4}
            >
              {region.prefectures.map(prefecture => (
                <PrefectureBox 
                  key={prefecture.value} 
                  {...prefecture} 
                />
              ))}
            </Grid>
          </GridItem>
        </Box>
      ))}
  </Box>   
  );
};

export default PrefecturesContainer;
