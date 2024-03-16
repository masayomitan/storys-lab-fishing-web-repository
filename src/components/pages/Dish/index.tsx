import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
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
      <Heading border="1px solid" borderRadius="5" textAlign="center" size="md">
        おすすめ料理
      </Heading>

      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {data.map((dish, index) => (
          <Box key={index}>
            <Box
              boxShadow="sm"
              p={4}
              h="10rem"
              border="1px solid"
              borderRadius="5"
              _hover={{ bg: "gray.100", cursor: "pointer" }}
              onClick={() => handleClick(dish)}
            >
              <Text>料理情報画像 {dish.id}</Text>
            </Box>
            <Text>{dish.name}</Text>
            <Text>{dish.text}</Text>
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
                <Text>{selectedDish.name}</Text>
                {selectedDish.tags.map((tag, index) => (
                  <Text key={index}>{tag.name}</Text>
                ))}
                <Text 
                  h="15rem"
                  mt={4}>{selectedDish.text}
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
