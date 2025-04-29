import React, { useState, useEffect } from 'react'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getToolById } from '../../../models/tool/action'

// import { useRouter } from 'next/navigation';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';

const ToolDetailBox = ({ toolId }) => {
  const [tool, setTool] = useState<any | null>()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  useEffect(() => {
    if (toolId === null) return

    const fetchFish = async () => {
      setIsLoading(true)
      try {
        const tool = await getToolById(toolId)
        setTool(tool)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    };

    fetchFish()
  }, [toolId])
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!tool) {
    return <div>No tool found</div>
  }

  return (
    <Box>
      <Box gap={4} p={4}>
        <Box boxShadow="sm" p={4} position="relative">
          <Slider {...sliderSettings}>
            {tool.Images.map((toolImage, index) => (
              <Flex key={index}>
                <Box
                  key={index}
                  w="100%"
                  h="250px"
                  textAlign="center"
                >
                  <Image
                    src={toolImage}
                    width={16}
                    height={9}
                    layout="responsive"
                    style={{ 
                      objectFit: 'contain',
                      width: '100%',
                      height: '100%',
                    }}
                    alt="道具詳細画像"
                  />
                </Box>
              </Flex>
            ))}
          </Slider>  
        </Box>

        <Text
          fontSize="24px"
          fontWeight="bold"
        >
          {tool.name}
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
          {tool.price}円
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
            {tool.maker}
          </Text>
          <Text
            fontSize="12px"
          >
            {tool.weight}kg
          </Text>
          <Text
            fontSize="12px"
          >
            {tool.size}cm
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
            {tool.description}
          </Text>
        </Box>

        <Box>
          <Grid 
            templateColumns="repeat(2, 1fr)" 
            gap={4}
          >
            {/* {Array.from({ length: 3 }, (_, index) => (
              <FishBox
                key={index}
                index={index} 
              />
            ))} */}
          </Grid>

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
  )
}

export default ToolDetailBox
