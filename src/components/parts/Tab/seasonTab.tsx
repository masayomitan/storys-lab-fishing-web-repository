'use client'

import React from 'react';
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

const SeasonFishesTab: React.FC<FishesProps> = ({fishes}) => {
    const currentMonth = new Date().getMonth() + 1;
    let defaultTabIndex = 0;
    if (currentMonth >= 3 && currentMonth <= 5) {
      defaultTabIndex = 0;
    } else if (currentMonth >= 6 && currentMonth <= 8) {
      defaultTabIndex = 1;
    } else if (currentMonth >= 9 && currentMonth <= 11) {
      defaultTabIndex = 2;
    } else {
      defaultTabIndex = 3;
    }
  
    return (
      <Tabs isFitted variant="enclosed" defaultIndex={defaultTabIndex}>
        <TabList mb="1em" borderColor="gray.200" borderRadius="lg">
          <Tab width="25%" borderRadius="3px" m="0 1px" border= "1px solid" _selected={{ bg: "#ffff00", borderColor: "blue.500", borderRadius: "lg" }}>春</Tab>
          <Tab width="25%" borderRadius="3px" m="0 1px" border= "1px solid" _selected={{ bg: "#ffff00", borderColor: "blue.500", borderRadius: "lg" }}>夏</Tab>
          <Tab width="25%" borderRadius="3px" m="0 1px" border= "1px solid" _selected={{ bg: "#ffff00", borderColor: "blue.500", borderRadius: "lg" }}>秋</Tab>
          <Tab width="25%" borderRadius="3px" m="0 1px" border= "1px solid" _selected={{ bg: "#ffff00", borderColor: "blue.500", borderRadius: "lg" }}>冬</Tab>
        </TabList>
  
        <TabPanels>

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
                    <Text>春魚の画像 {fish.id}</Text>
                  </Box>
                  <Text>春魚の{fish.name}</Text>
                  <Text>春魚の{fish.text}</Text>
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
    );
  };
export default SeasonFishesTab;
