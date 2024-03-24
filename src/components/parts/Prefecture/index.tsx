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
  value: number;
  label: string;
  region?: string;
};

type Region = {
  label: string;
  prefectures: PrefecturesBoxProps[];
};

const PrefectureBox: React.FC<Region> = ({ label, prefectures }) => {
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/prefectures/${id}`);
  };

  return (
    <Box>
      <Heading m="5px" size="xs">
        {label}
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={2} m="5px">
        {prefectures.map(prefecture => (
          <Box
            key={prefecture.value}
            boxShadow="sm"
            p={2}
            h="2rem"
            borderRadius="5"
            _hover={{ bg: "gray.100", cursor: "pointer" }}
            onClick={() => handleClick(prefecture.value)}
          >
            <Text>{prefecture.label}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

const RegionBox = () => {
  return (
    <Box mt="6">
      <Heading textAlign="center" size="sm">
        都道府県別 イベント、釣り場、魚情報
      </Heading>

      {regions.map((region, index) => (
        <PrefectureBox key={index} {...region} />
      ))}
    </Box>   
  );
};

export default RegionBox;
