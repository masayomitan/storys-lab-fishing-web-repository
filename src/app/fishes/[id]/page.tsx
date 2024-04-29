'use client'

import React, { useState, useEffect } from 'react';

import Layout from '../../../components/parts/Layout/layout';
import FishDetail from '../../../components/pages/Fish/detail'
import { useParams } from "next/navigation";


const FishDetailPage = () => {
  const [fishId, setFishId] = useState<string | null>(null);

  const params = useParams();

  useEffect(() => {
    if (params && params.id) {
      const fishId = params.id
      setFishId(fishId as string);
    } 
  }, [params]);

  return (
    <Layout>
      <FishDetail />
    </Layout>
  );
}

export default FishDetailPage;
