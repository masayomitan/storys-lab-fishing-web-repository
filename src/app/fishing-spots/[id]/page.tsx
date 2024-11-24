'use client'

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import Layout from '../../../components/parts/Layout/layout';
import FishingSpotDetail from '../../../components/pages/FishingSpot/detail';

const FishingSpotPage = () => {
  const [fishingSpotId, setFishingSpotId] = useState<string | null>(null)
  const params = useParams()

  useEffect(() => {
    if (params && params.id) {
      const fishId = params.id
      setFishingSpotId(fishId as string)
    } 
  }, [params]);


  return (
    <Layout>
      <FishingSpotDetail
        fishingSpotId={fishingSpotId}
      />
    </Layout>
  );
}

export default FishingSpotPage;
