import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Grid,
  Text,
  Image,
  Flex,
  Avatar,
} from '@chakra-ui/react';

type EventData = {
  id: number;
  eventImage: string;
  title: string;
  description: string;
};  

type EventItemProps = {
  events: EventData[];
};

const ArticleItem: React.FC<EventItemProps> = ({ events }) => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/events/${id}`);
  };

  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)">
        {events.map((article) => (
          <Box
            key={article.id}
            m={2}
            borderRadius="5"
            onClick={() => handleClick(article.id)}
            shadow="md"
          >
            <Box
              w="100%"
              h="120px"
            >
              <Image
                borderRadius="full"
                src="/"
                alt="イベント名"
              />
            </Box>
            <Text fontWeight="bold">{article.title}</Text>
            <Text fontSize={14}>{article.description}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default ArticleItem;
