import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Flex, Button } from '@chakra-ui/react'
import { getToolCategories } from '../../../models/toolCategory/action'
import { ToolCategory } from '../../../types/tool'

const ScrollTab = () => {
  const [toolCategories, setToolCategories] = useState<ToolCategory[]>([])
  const router = useRouter()

  useEffect(() => {
    const fetchFishes = async () => {
      try {
        const toolCategories = await getToolCategories()
        setToolCategories(toolCategories)
      } catch (error) {
        console.log(error)
      } finally {
      }
    }

    fetchFishes()
  }, [])

  const handleButtonClick = (id) => {
    router.push(`/tool-categories/${id}`)
  }

  return (
    <Box overflowX="auto" w="full" py={2} px={1}>
      <Flex minWidth="max-content">
        {toolCategories.map((toolCategory) => (
          <Button
            key={toolCategory.id}
            onClick={() => handleButtonClick(toolCategory.id)} 
            m={1}
            p="4px 17px"
            fontSize="14px"
            bg="white"
            border="2px solid #ADD8E6"
            borderRadius="5px"
          >
            {toolCategory.name}
          </Button>
        ))}
      </Flex>
    </Box>
  );
}

export default ScrollTab;
