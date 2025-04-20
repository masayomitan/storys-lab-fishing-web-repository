import { useState, useEffect } from 'react'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'
import Image from 'next/image'
import { Dish } from '../../../types/dish'

import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter
} from '@chakra-ui/react'

// データを整形する関数
const transformdish = (dishes: any[]): Dish[] => {
  return dishes.map(dish => {
    let image_url = ''
    if (dish.DishImages) {
      const mainImage = dish.DishImages.find(image => image.is_main) || dish.DishImages[0]
      image_url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}${mainImage.image_url}`
    } else {
      image_url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/public/images/no_image.png`
    }
    return {
      ...dish,
      ingredients: dish.ingredients,
      image_url
    }
  })
}

const DishBox = ({ dishes }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedDishes, setSelectedDishes] = useState<Dish | null>(null)
  const [transformeddish, setTransformeddish] = useState<Dish[]>([])

  useEffect(() => {
    if (dishes) {
      setTransformeddish(transformdish(dishes))
    }
  }, [dishes])

  const handleClick = (dishes: Dish) => {
    setSelectedDishes(dishes)
    onOpen()
  }

  return (
    <Box>
    {dishes && (
      <Box mt={10} mb={10}>
        <Heading textAlign="center" size="md">
          おすすめ料理
        </Heading>

        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          {transformeddish.map((dish, index) => (
            <Box key={index}>
              <Box
                boxShadow="lg"
                p={4}
                h="150px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                onClick={() => handleClick(dish)}
              >
                <Image
                  src={dish.image_url}
                  width={130}
                  height={100}
                  style={{ objectFit: 'contain' }}
                  alt="料理画像"
                />
              </Box>
              <Box m={4}>
                <Text
                  fontSize="16px"
                  style={{
                    letterSpacing: '0.05em',
                    lineHeight: '1.6'
                  }}
                >
                  {dish.name}
                </Text>
                <Text
                  fontSize="14px"
                  style={{
                    letterSpacing: '0.05em',
                    lineHeight: '1.6'
                  }}
                >
                  {dish.description}
                </Text>
              </Box>
            </Box>
          ))}
        </Grid>

        {/* Modal */}
        {selectedDishes && (
          <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={true}>
            <ModalOverlay bg="rgba(0, 0, 0, 0.6)" onClick={onClose} />
            <ModalContent margin="auto" mt="10%" w="90%" bg="white">
              <ModalCloseButton />
              <ModalBody>
                <Flex direction="column">
                  <Box
                    w="100%"
                    h="15rem"
                    position="relative"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      src={selectedDishes.image_url}
                      layout="fill"
                      style={{ objectFit: 'contain' }}
                      alt="料理画像"
                    />
                  </Box>
                  <Text fontSize="20px" mb={1}>
                    {selectedDishes.name}
                  </Text>
                  {selectedDishes.ingredients.map((ingredient, index) => (
                    <Text key={index} mb={1} color="rgb(108, 117, 125)">
                      {ingredient.name} : {ingredient.amount}
                    </Text>
                  ))}
                  <Text
                    h="15rem"
                    mt={4}
                    fontSize="16px"
                    style={{
                      letterSpacing: '0.05em',
                      lineHeight: '1.6'
                    }}
                  >
                    {selectedDishes.description}
                  </Text>
                </Flex>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Box>
      )}
    </Box>
  )
}

export default DishBox
