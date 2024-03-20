import React from 'react';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link'

// import { useRouter } from 'next/navigation';

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';

const FishBox: React.FC<any> = ({ index }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/fishes/detail/${index + 1}`);
  };

  return (
    <Box>
      <Box 
        w="100%" 
        h="8rem" 
        bgColor="teal.600"
        p="10" 
        border="1px solid" 
        textAlign="center"
        onClick={handleClick}
      >
        <Text>魚情報 {index + 1}</Text>
      </Box>
      <Box>
        <Text>
          名称
        </Text>
        <Text>
          テキスト
        </Text>
      </Box>
    </Box>
  );
};

const ToolDetailBox: React.FC<any> = () => {
  // const router = useRouter();

  return (
    <Box>
      <Box gap={4} m={10} p={4}>
        <Box boxShadow="sm" p={4} position="relative">
          <Box w="100%" h="250px" textAlign="center">
            <Image
              src=""
              layout="fill"
              style={{ 
                objectFit: 'cover',
                width: '100%',
                height: 'auto',
              }}
              alt="道具詳細画像"
            />
          </Box>          
        </Box>

        <Text
          fontSize="24px"
          fontWeight="bold"
        >
          道具名称
        </Text>
        <Text
          fontSize="12px"
        >
          最安値
        </Text>
        <Text
          fontSize="20px"
          fontWeight="bold"
        >
          10000円
        </Text>

        <Box>
          <Text
            fontSize="12px"
          >
            モデル
          </Text>
          <Text
            fontSize="12px"
          >
            メーカー
          </Text>
          <Text
            fontSize="12px"
          >
            重量
          </Text>
          <Text
            fontSize="12px"
          >
            全長
          </Text>
        </Box>
        <Box>

        <Grid 
          templateColumns="repeat(2, 1fr)" 
          gap={4}
        >
          {Array.from({ length: 3 }, (_, index) => (
            <FishBox
              key={index}
              index={index} 
            />
          ))}
        </Grid>
        <Box as="footer" w="full" boxShadow="sm" p={4}>
        <Text textAlign="center">
          <Link href="/fishes">
            さらに見る
          </Link>
        </Text>
      </Box>
        </Box>
      </Box>
       {/* 購入ボタン */}
       <Flex
        position="fixed"
        bottom="0"
        w="100%"
        h="50px"
        m="auto"
        mb="10px"
        justifyContent="center"
        alignItems="center"
        bg="#e5524e"
        boxShadow="sm"
        borderRadius="5" 
      >
        <Button
          color="#fff" 
          fontSize="20px" 
          shadow="md"
        >
          購入する
        </Button>
      </Flex>
    </Box>   
  );
}

export default ToolDetailBox;
