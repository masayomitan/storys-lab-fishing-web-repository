import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'

import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import { getEvents } from '../../../models/event/action'
import EventItem from '../Event/item/index'

const EventBox = () => {
	const [events, setEvents] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchArticle = async () => {
			setIsLoading(true)
			try {
				const events = await getEvents()
				// for (const ArticleImage of fetchedArticle.ArticleImages) {
				//   if (fetchedArticle && ArticleImage.image_url !== '') {
				//     fetchedArticle.image_url = process.env.NEXT_PUBLIC_API_ENDPOINT + ArticleImage.image_url
				//   } else {
				//     fetchedArticle.image_url = process.env.NEXT_PUBLIC_API_ENDPOINT + `/public/images/no_image.png`
				//   }
				// }
				setEvents(events)
			} catch (error) {
				setError(error)
			} finally {
				setIsLoading(false)
			}
		}
		fetchArticle()
	}, [])

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

export default EventBox
