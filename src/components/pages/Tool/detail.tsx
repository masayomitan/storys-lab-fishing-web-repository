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
        boxShadow="lg"
        w="100%" 
        h="8rem"
        textAlign="center"
        onClick={handleClick}
      >
        <Image
          src=""
          style={{ 
            objectFit: 'cover',
            width: '100%',
            height: 'auto',
          }}
          alt={`魚画像`}
        />
      </Box>
      <Box>
        <Text>
          名称
        </Text>
        <Text>
          テキストテキストテキストテキストテキストテキスト
        </Text>
      </Box>
    </Box>
  );
};

const ToolDetailBox: React.FC<any> = () => {
  // const router = useRouter();

  return (
    <Box>
      <Box gap={4} p={4}>
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
        <Box
          borderColor="blue.300"
          bg="blue.50"
          borderRadius="lg"
          p={4}
          m="10px 0"
          boxShadow="lg"
          mx="auto"
          h="80px"
        >
          バナー商品情報
        </Box>
        <Box
          borderColor="blue.300"
          bg="blue.50"
          borderRadius="lg"
          p={4}
          m="10px 0"
          boxShadow="lg"
          mx="auto"
          h="80px"
        >
          バナー商品情報
        </Box>
        <Box 
          m="15px 0"
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
            テキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキスト
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

          <Box 
            border="0.5px solid"
            boxShadow="md"
            m="2px 10px"
            p={2}
            borderRadius="5"
            background="lightblue"
            borderColor="deepskyblue"
          >
            <Link href="/fishes">
              <Text
                fontSize={20}
                fontWeight="bold"
                textAlign="center"
                color="#fff"
              >
                さらに見る
              </Text>
            </Link>
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
        bg="blue.300"
        borderRadius="md"
        border="2px"
        borderColor="blue.300"
      >
        <Button
          color="#fff"
          w="100%"
          bg="blue.300"
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
