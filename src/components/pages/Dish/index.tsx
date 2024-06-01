import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react';

const DishBox = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedDish, setSelectedDish] = useState<any>(null);
  const router = useRouter();

  const handleClick = (dish) => {
    setSelectedDish(dish);
    onOpen();
  };

//   const handleClick = (id: number) => {
//     router.push(`/dish/detail/${id}`);
//   };


  return (
    <Box mt={10} mb={10}>
      <Heading
        textAlign="center" 
        size="md"
      >
        おすすめ料理
      </Heading>

      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {data.map((dish, index) => (
          <Box key={index}>
            <Box
              boxShadow="lg"
              p={4}
              h="10rem"
              onClick={() => handleClick(dish)}
            >
              <Image
                src="/"
                width={100}
                height={100}
                style={{ 
                  objectFit: 'cover',
                }}
                alt="料理画像"
              />
            </Box>
            <Box
              m={4}
            >
              <Text
                fontSize="16px"
                style={{
                  letterSpacing: '0.05em',
                  lineHeight: '1.6',
                }}
              >
                {dish.name}
              </Text>
              <Text
                fontSize="14px"
                style={{
                  letterSpacing: '0.05em',
                  lineHeight: '1.6',
                }}
              >
                {dish.description}
              </Text>
            </Box>
          </Box>
        ))}
      </Grid>

      {/* Modal */}
      {selectedDish && (
        <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={true}>
          <ModalOverlay
            bg="rgba(0, 0, 0, 0.6)"
            onClick={onClose}
          />
          <ModalContent
            margin="auto"
            mt="10%"
            w="90%"
            bg="white"
          >
            
            <ModalCloseButton />
            <ModalBody>
              <Flex direction="column">
                <Box 
                  w="100%" 
                  h="15rem" 
                  as="img" 
                  src={selectedDish.imageUrl} 
                  alt={selectedDish.name + " 画像のaltタグ名"}
                  borderRadius="md"
                />
                <Text
                  fontSize="20px"
                  mb={1} 
                >
                  {selectedDish.name}
                </Text>
                {selectedDish.ingredients.map((tag, index) => (
                  <Text 
                    key={index}
                    mb={1} 
                    color="rgb(108, 117, 125)"
                  >
                    {tag.name}
                  </Text>
                ))}
                <Text 
                  h="15rem"
                  mt={4}
                  fontSize="16px"
                  style={{
                    letterSpacing: '0.05em',
                    lineHeight: '1.6',
                  }}
                >
                  {selectedDish.text}
                </Text>
              </Flex>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default DishBox;
