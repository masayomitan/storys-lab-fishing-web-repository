'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import {
    Box,
    Grid,
    GridItem,
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
  } from '@chakra-ui/react';

import "./style.css";

type FishesProps = {
    fishes: [{
      id: number,
      name: string,
      text: string,
    }]
  };


type Season = {
  name: string;
  bgColor: string;
  borderColor: string;
};

const seasons: Season[] = [
  { name: '春', bgColor: '#F0E68C', borderColor: "yellow.400" },
  { name: '夏', bgColor: '#ADD8E6', borderColor: "blue.400" },
  { name: '秋', bgColor: '#FFDAB9', borderColor: "orange.400" },
  { name: '冬', bgColor: '#E0FFFF', borderColor: "cyan.400" }
];

  
const SeasonFishesTab: React.FC<FishesProps> = ({fishes}) => {
  const router = useRouter();

  const getDefaultTabIndex = () => {
    const currentMonth = new Date().getMonth() + 1;
    if (currentMonth >= 3 && currentMonth <= 5) {
      return 0;
    } else if (currentMonth >= 6 && currentMonth <= 8) {
      return 1;
    } else if (currentMonth >= 9 && currentMonth <= 11) {
      return 2;
    }
    return 3;
  };
  
  const handleClick = (fish) => {
    router.push(`/fishes/detail/${fish.id}`);
  };
  
  return (
    <Grid>
      <GridItem colSpan={12}>
        <Tabs isFitted variant="enclosed" defaultIndex={getDefaultTabIndex()}>
        <TabList mb="1em" borderColor="gray.200" borderRadius="lg">
          {seasons.map((season) => (
            <Tab 
              key={season.name}
              width="25%"
              borderRadius="5px"
              m="0 3px"
              border="2px solid"
              borderColor="#ADD8E6"
              _selected={{ 
                bg: season.bgColor,
                borderColor: season.borderColor, 
                borderRadius: "5px" 
              }}
            >
              {season.name}
            </Tab>
          ))}
        </TabList>

          <TabPanels>

            <TabPanel>
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                {fishes.map((fish) => (
                  <GridItem 
                    key={fish.id} 
                  >
                    <Box
                      boxShadow="lg"
                      h="8rem"
                      mt={4}
                      mb={4}
                      position="relative"
                    >
                    <Image 
                      src=""
                      width={200}
                      height={100}
                      style={{ 
                        objectFit: 'cover',
                        width: '100%',
                        height: 'auto',
                      }}
                      onClick={() => handleClick(fish)}
                      alt={`魚画像`}
                    />
                    </Box>
                    <Text>春魚の{fish.name}</Text>
                    <Text fontSize="14px"
                      style={{
                        letterSpacing: '0.05em',
                        lineHeight: '1.6',
                      }}
                    >
                      春魚の{fish.text}
                    </Text>
                  </GridItem>
                ))}
              </Grid>
              <Box as="footer" w="full" boxShadow="sm" p={4}>
                <Text 
                  border="1px solid"
                  borderRadius="5" 
                  textAlign="center"
                  m="10px 0"
                  >
                    さらに見る
                </Text>
              </Box>
            </TabPanel>

            <TabPanel>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              {fishes.map((fish) => (
                <GridItem key={fish.id} colSpan={1}>
                  <Box 
                    boxShadow="sm" 
                    p={4} 
                    h="10rem"
                    border="1px solid" 
                    borderRadius="5" 
                    _hover={{ 
                      bg: "gray.100", 
                      cursor: "pointer" 
                    }}
                  >
                    <Text>夏魚の画像 {fish.id}</Text>
                  </Box>
                  <Text>夏魚の{fish.name}</Text>
                  <Text>夏魚の{fish.text}</Text>
                </GridItem>
              ))}
              </Grid>
              <Box as="footer" w="full" boxShadow="sm" p={4}>
                <Text 
                  border="1px solid"
                  borderRadius="5" 
                  textAlign="center"
                  m="10px 0"
                  >
                  さらに見る
                </Text>
              </Box>
            </TabPanel>

            <TabPanel>
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                {fishes.map((fish) => (
                  <GridItem key={fish.id} colSpan={1}>
                    <Box 
                      boxShadow="sm" 
                      p={4} 
                      h="10rem"
                      border="1px solid" 
                      borderRadius="5" 
                      _hover={{ 
                        bg: "gray.100", 
                        cursor: "pointer" 
                      }}
                    >
                      <Text>秋魚の画像 {fish.id}</Text>
                    </Box>
                    <Text>秋魚の{fish.name}</Text>
                    <Text>秋魚の{fish.text}</Text>
                  </GridItem>
                ))}
              </Grid>
              <Box as="footer" w="full" boxShadow="sm" p={4}>
                <Text 
                  border="1px solid"
                  borderRadius="5" 
                  textAlign="center"
                  m="10px 0"
                  >
                  さらに見る
                </Text>
              </Box>
            </TabPanel>

            <TabPanel>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              {fishes.map((fish) => (
                <GridItem key={fish.id} colSpan={1}>
                  <Box 
                    boxShadow="sm" 
                    p={4} 
                    h="10rem"
                    border="1px solid" 
                    borderRadius="5" 
                    _hover={{ 
                      bg: "gray.100", 
                      cursor: "pointer" 
                    }}
                  >
                    <Text>冬魚の画像 {fish.id}</Text>
                  </Box>
                  <Text>冬魚の{fish.name}</Text>
                  <Text>冬魚の{fish.text}</Text>
                </GridItem>
              ))}
              </Grid>
              <Box as="footer" w="full" boxShadow="sm" p={4}>
                <Text 
                  border="1px solid"
                  borderRadius="5" 
                  textAlign="center"
                  m="10px 0"
                  >
                  さらに見る
                </Text>
              </Box>
            </TabPanel>

          </TabPanels>
        </Tabs>
      </GridItem>
    </Grid>
  );
};
export default SeasonFishesTab;
