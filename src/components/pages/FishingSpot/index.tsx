import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'

// import "./style.css";
import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Text,
  } from '@chakra-ui/react';

// TODO 型は実データ次第で変更でてくる
type FishingSpotBoxProps = {
  id: number;
  name: string;
  text: string;
  tags: [{
    id: number,
    name: string,
  }];
};

const FishingSpotBox: React.FC<FishingSpotBoxProps> = (data) => {
  const router = useRouter();
  const handleClick = () => {
      router.push(`/fishing-spots/detail/${data.id}`);
  };

  return (
    <Box
      mt={10}
      mb={10}
    >
      <Box
        boxShadow="sm"
        p={4}
        h="10rem"
        border="1px solid"
        borderRadius="5"
        _hover={{ bg: "gray.100", cursor: "pointer" }}
        onClick={handleClick}
      >
        <Text>釣り場情報画像 {data.id}</Text>
      </Box>
      <Box>
        <Text>{data.name}</Text>
      </Box>
      <Box>
        <Flex>
          {data.tags.map((tag, index) => (
            <Text 
              key={index}
              fontSize="10px"
              border="1px solid"
              borderRadius="5"
              m={1}
              p={2}
              >
                {tag.name}
              </Text>
          ))}
        </Flex>
      </Box>
      <Box>
        <Text
          fontSize="12px"
        >
          {data.text}
        </Text>
      </Box>
    </Box>
  );
};

const FishingSpot = ({
  data,
  pathId
}: any) => {
  if (!data) {
    return false;
  }
  return (
    <Box>
      <Grid>
        <GridItem colSpan={12} p={4}>
          <Heading 
            border="1px solid"
            borderRadius="5" 
            textAlign="center"
            size="md"
          >
            エリア情報{pathId}の釣り場情報一覧
          </Heading>
          <Grid 
            templateColumns="repeat(2, 1fr)" 
            gap={4}
          >
            {data.map((spot, index) => (
              <FishingSpotBox
                  key={spot.id}
                  id={spot.id}
                  name={spot.name}
                  text={spot.text}
                  tags={spot.tags}
              />
            ))}
          </Grid>
        </GridItem>
      </Grid>
      <Box as="footer" w="full" boxShadow="sm" p={4}>
        <Text textAlign="center">
            さらに見る
        </Text>
      </Box>
    </Box>   
  );
}

export default FishingSpot;
