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
import FishingSpotItemBox from '../../pages/FishingSpot/item/index';

const FishingSpotDetailBox = ({
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
        textAlign="center"
        size="lg"
        m={2}
      >
        エリア{pathId}の釣り場情報詳細
      </Heading>
      <Box 
        boxShadow="md"
        p={4} 
        position="relative"
      >
        <Box 
          w="100%"
          h="15rem" 
          textAlign="center"
        >
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
          
          <SeasonFishesTab
            fishes={fishes}
          />

          <Box>
            <Text 
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
                  fontSize="16px"
                  border="2px solid"
                  borderRadius="lg"
                  borderColor="#ADD8E6"
                  m={2}
                  p="3px 5px"
                  >
                    {tag.name}
                  </Text>
              ))}
            </Flex>
          </Box>
          
           {/* 潮時表 */}
          <TideTable />

          <Box
            m="20px 0"
          >
            <Box>
              <Text 
                fontSize="24px" 
                textAlign="center"
              >
                運営・インストラクターの記事
              </Text>
            </Box>
            <Box 
              m="10px 0"
              bg="gray.100"
              borderRadius="10"
            >
              <Text
                fontSize="16px"
                p={4}
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

          <Heading 
            textAlign="center"
            size="lg"
            mt="10px"
          >
            近くの釣り場情報一覧
          </Heading>
          <FishingSpotItemBox 
            data={data}
          />
            </GridItem>
      </Grid>
    </Box>   
  );
}

export default FishingSpotDetailBox;
