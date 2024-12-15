'use client'

import React, { useState, useEffect } from 'react';

import Layout from '../../../components/parts/Layout/layout';
import EventDetailBox from '../../../components/pages/Event/detail'
import { useParams } from "next/navigation";


const EventDetailPage = () => {
  const [eventId, setEventId] = useState<string | null>(null)

  const params = useParams();

  useEffect(() => {
    if (params && params.id) {
      const eventId = params.id
      setEventId(eventId as string)
    }
  }, [params])

  return (
    <Layout>
      <EventDetailBox 
        eventId={eventId}
      />
    </Layout>
  )
}

export default EventDetailPage
