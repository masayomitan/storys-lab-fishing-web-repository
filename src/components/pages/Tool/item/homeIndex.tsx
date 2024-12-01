import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getTools } from '../../../../models/tool/action';

import {
  Box,
  Text,
  Flex
} from '@chakra-ui/react'
import { truncateText } from '../../../../utils/util'
import MoreLink from '../../../parts/MoreLink'

const ToolHomeBox: React.FC<any> = () => {
  const router = useRouter()
  const [tools, setTools] = useState<any | null>()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleClick = (id) => {
    router.push(`/tools/${id}`)
  }
  useEffect(() => {
    const fetchFishes = async () => {
      setIsLoading(true);
      try {
        const tools = await getTools()
        for (const tool of tools) {
          if (tool.ToolImages.length > 0) {
            tool.image_url = process.env.NEXT_PUBLIC_API_ENDPOINT + tool.ToolImages[0].image_url
          } else {
            // tool.image_url = process.env.NEXT_PUBLIC_API_ENDPOINT + `/public/images/no_image.png`
          }
        }
        setTools(tools)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchFishes()
  }, [])

  if (!tools) return

  return (
    <Box>
      <Flex overflowX="auto" p={2}>
        {tools.map((tool, index) => (
          <Box
            key={index}
            boxShadow="lg"
            borderRadius="md"
            _hover={{ bg: "teal.100", cursor: "pointer" }}
            onClick={() => handleClick(tool.id)}
            m={2}
            flex="0 0 auto"
            minWidth="150px"
          >
            <Box
              h="5rem"
              mb={3}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={tool.image_url}
                width={16}
                height={12}
                layout="responsive"
                style={{
                  width: "100%",
                  height: 'auto',
                  objectFit: "contain",
                }}
                alt="道具画像"
              />
            </Box>
            <Box p={3}>
              <Text fontWeight="semibold">{tool.name}</Text>
              <Text fontSize="sm" color="blue.500">{tool.maker}</Text>
              <Text fontSize="sm" color="blue.400">{tool.recommend}</Text>
              <Text fontSize="sm" color="blue.300">{tool.easy_fishing}</Text>
              <Text mt={2} fontSize="xs" color="gray.600">{truncateText(tool.description, 10)}</Text>
            </Box>
          </Box>
        ))}
      </Flex>
      <MoreLink route="tool-categories"></MoreLink>
    </Box>   
  )
}

export default ToolHomeBox
