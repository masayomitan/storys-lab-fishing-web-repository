import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'

import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';

import EventItem from '../Event/item/index'

type EventData = {
  id: number;
  eventImage: string;
  title: string;
  description: string;
};

const events: EventData[] = [
  {
    id: 1,
    eventImage: "/",
    title: "イベントのタイトル1",
    description: "イベントの説明1"
  },
  {
    id: 2,
    eventImage: "/",
    title: "イベントのタイトル2",
    description: "イベントの説明2"
  },
  {
    id: 3,
    eventImage: "/",
    title: "イベントのタイトル3",
    description: "イベントの説明3"
  },
  {
    id: 4,
    eventImage: "/",
    title: "イベントのタイトル4",
    description: "イベントの説明4"
  },
  {
    id: 5,
    eventImage: "/",
    title: "イベントのタイトル5",
    description: "イベントの説明5"
  },
  {
    id: 6,
    eventImage: "/",
    title: "イベントのタイトル6",
    description: "イベントの説明6"
  },
];

const EventHomeBox = () => {
  return (
    <Box>
      <Grid>
        <GridItem colSpan={12} p={4}>
          <Heading 
            textAlign="center"
            size="lg"
          >
            イベント情報一覧
          </Heading>
          <EventItem events={events} />
        </GridItem>
      </Grid>
      <Box 
        border="0.5px solid"
        boxShadow="md"
        m="2px 10px"
        p={2}
        borderRadius="5"
        background="lightblue"
        borderColor="deepskyblue"
      >
        <Link href="/events">
          <Text
            fontSize={20}
            fontWeight="bold"
            textAlign="center"
            color="#fff"
          >
            さらに見る
          </Text>
        </Link>
      </Box>
    </Box>   
  );
};

export default EventHomeBox;
