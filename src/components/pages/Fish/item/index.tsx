import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Box, Flex, Grid, Text } from '@chakra-ui/react'

const FishItemBox: React.FC<any> = ({ fishes }) => {
  const router = useRouter()

  const handleClick = (id) => {
    router.push(`/fishes/${id}`)
  }

  return (
    <Box>
      <Grid 
        templateColumns="repeat(1, 1fr)" 
        gap={4}
      >
        {fishes.map((fish, index) => {

          return (
            <Box
              key={index}
              m={3}
              p={3}
              boxShadow="md"
              textAlign="center"
              onClick={() => handleClick(fish.id)}
            >
              <Flex 
                justifyContent="space-evenly" 
                alignItems="center"
              >
                <Box
                  border="0.2px solid"
                  w="200px"
                  h="130px"
                  overflow="hidden"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    src={fish.image_url}
                    width={200}
                    height={100}
                    style={{ 
                      objectFit: 'contain'
                    }}
                    alt="Story's"
                  />
                </Box>
                <Box>
                  <Text textAlign="center" mb={2}>
                    {fish.name}
                  </Text>
                  <Text textAlign="center">
                    {fish.scientific_name}
                  </Text>
                </Box>
              </Flex>
            </Box>
          )
        })}
      </Grid>
    </Box>
  )
}

export default FishItemBox
