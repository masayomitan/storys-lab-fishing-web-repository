'use client'

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import Layout from '../../../components/parts/Layout/layout';
import AreaDetail from '../../../components/pages/Area/detail';
// import { getDataById } from '../../utils/api'


// 実データできたら削除
const fishingSpots: any[] = [
  {
    id: 1,
    name: '名称1',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト1',
    tags: [
      { id: 1, name: 'トイレ' },
      { id: 2, name: '駐車場' },
      { id: 3, name: 'コンビニ' },
    ],
  },
];



const fetchFishingSpotData = async (
  id: any
) => {
  return fishingSpots;
    // props: await getDataById(id),

};

const FishingSpotPage = () => {
  const [areaId, setAreaId] = useState<string | null>(null);
  const params = useParams()

  useEffect(() => {
    if (params && params.id) {
      const fishingSpotId = params.id
      setAreaId(fishingSpotId as string);
    } 
  }, [params]);

  return (
    <Layout>
      <AreaDetail
        areaId={areaId}
      />
    </Layout>
  );
}

export default FishingSpotPage;
