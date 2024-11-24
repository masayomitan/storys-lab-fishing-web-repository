import { useState, useEffect } from 'react'
import Image from 'next/image'
import { getToolCategories } from '../../../models/toolCategory/action'

import {
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react'

import ToolItemBox from '../../pages/Tool/item/index';

const ToolCategoryBox = () => {

  const [toolCategories, setToolCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFishes = async () => {
      setIsLoading(true)
      try {
        const toolCategories = await getToolCategories()
        console.log(toolCategories)
        for (const toolCategory of toolCategories) {
          if (toolCategory.Tools) {
            for (const tool of toolCategory.Tools) {
              if (tool.ToolImages.length > 0) {
                tool.image_url = process.env.NEXT_PUBLIC_API_ENDPOINT + tool.ToolImages[0].image_url
              } else {
                tool.image_url = process.env.NEXT_PUBLIC_API_ENDPOINT + `/public/images/no_image.png`
              }
            }
          }
          
        }
        console.log(toolCategories)
        setToolCategories(toolCategories)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchFishes()
  }, [])
  return (
    <Box mt={10} mb={10}>
      <Heading 
        textAlign="center" 
        size="md"
      >
        道具種別一覧
      </Heading>

      <Box m="10px 0">
        <Box m="10px 0" boxShadow="sm" position="relative">
          <Box w="100%" h="180px" textAlign="center" boxShadow="lg" >
            <Image
              src=""
              style={{ 
                objectFit: 'cover',
                width: '100%',
                height: 'auto',
              }}
              alt="おすすめ道具画像トップ"
            />
          </Box>
        </Box>
        <Box m="10px 0" boxShadow="sm" position="relative">
          <Box w="100%" h="180px" textAlign="center" boxShadow="lg">
            <Image
              src=""
              alt="おすすめ道具画像トップ"
              style={{ 
                objectFit: 'cover',
                width: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </Box>
      </Box>
          
      <ToolItemBox 
        toolCategories={toolCategories}
      />

    </Box>
  );
};

export default ToolCategoryBox;
