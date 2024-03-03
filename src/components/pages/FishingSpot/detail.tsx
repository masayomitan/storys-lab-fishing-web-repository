import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

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
        <Flex wrap="wrap">
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

const FishingSpotDetail = ({
  data,
  fishes,
  pathId
}: any) => {

  if (!data) {
    return false;
  }
  // 消す
  if (!data[4]) {
    return false;
  }

  return (
    <Box>
      <Heading 
        border="1px solid"
        borderRadius="5" 
        textAlign="center"
        size="md"
      >
        エリア情報{pathId}の釣り場情報詳細
      </Heading>
      <Box boxShadow="sm" p={4} position="relative">
        <Box w="100%" h="15rem" textAlign="center">
          <Image
            src="/"
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
              釣り場名称
            </Text>
          </Box>
          <Box 
            border="1px solid"
            borderRadius="5" 
            textAlign="center"
            fontSize="md"
          >
            魚情報一覧
          </Box>
          <Box p={4}>
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
              <GridItem colSpan={12}>
                <SeasonFishesTab
                  fishes={fishes}
                />
              </GridItem>
            </Grid>
          </Box>
          <Box>
            <Text 
              border="1px solid" 
              fontSize="24px" 
              textAlign="center"
            >
              詳細情報
            </Text>
          </Box>
          <Box>
            <Flex wrap="wrap">
              {data[4].tags.map((tag, index) => (
                <Text 
                  key={index}
                  fontSize="20px"
                  border="1px solid"
                  borderRadius="5"
                  m={5}
                  p={2}
                  >
                    {tag.name}
                  </Text>
              ))}
            </Flex>
          </Box>

          <TideTable />

          <Box>
            <Box>
              <Text 
                border="1px solid" 
                fontSize="24px" 
                textAlign="center"
              >
                運営・インストラクターの記事
              </Text>
            </Box>
            <Box style={{ margin: '10px 0' }}>
              <Text
                fontSize="18px"
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

          <Box 
            border="1px solid"
            borderRadius="5" 
            textAlign="center"
            fontSize="md"
          >
            近くの釣り場情報一覧
          </Box>
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
    </Box>   
  );
}

export default FishingSpotDetail;
